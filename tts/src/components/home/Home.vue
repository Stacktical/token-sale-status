<template src='@/components/home/home.html'></template>

<style lang="scss" src='@/components/home/home.scss'></style>

<script>

import ProgressBar from '@/components/progress-bar/Progress-bar'
import EtherService from '@/components/home/home.service.js'

export default {
  name: 'Home',
  props: [
    'address'
  ],
  data () {
    return {
      icoAddress: undefined,
      softCap: 7000,
      midCap: 12000,
      max: 30000,
      ethBalance: 0,
      ethRaised: 0,
      totalSupply: 0
    }
  },
  created () {
    if (this.address === undefined) {
      this.icoAddress = '0x9df3a24d738ae98dea766cd89c3aef16583a4daf'
    } else {
      this.icoAddress = this.address
    }

    EtherService.getTotalEthBalance(this, this.icoAddress).then((response) => {
      this.ethBalance = response.body.result / 1e18
    })

    EtherService.getTotalTxs(this, this.icoAddress).then((response) => {
      var total = 0
      var totalWOGas = 0
      var result = response.body.result
      for (var i = 0; i < result.length; i++) {
        if (result[i].from !== '0x9df3a24d738ae98dea766cd89c3aef16583a4daf') {
          totalWOGas += (result[i].value - result[i].cumulativeGasUsed) / 1e18
          total += (result[i].value) / 1e18
        }
      }
      console.log(total)
      console.log(totalWOGas)
      this.ethRaised = total
    })

    EtherService.getTotalTokenSupply(this, this.icoAddress).then((response) => {
      this.totalSupply = response.body.result
    })
  },
  components: {
    ProgressBar
  }
}
</script>
