<template src='@/components/home/home.html'></template>

<style lang="scss" src='@/components/home/home.scss'></style>

<script>
import ProgressBar from '@/components/progress-bar/Progress-bar'
import EtherService from '@/components/home/home.service.js'
import Spinner from '@/components/common/spinner/Spinner'

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
      totalSupply: 0,
      loading: false
    }
  },
  computed: {
    raised () {
      return Math.round(this.ethRaised)
    },
    balance () {
      return Math.round(this.ethBalance)
    }
  },
  created () {
    if (this.address === undefined) {
      this.icoAddress = '0x9df3a24d738ae98dea766cd89c3aef16583a4daf'
    } else {
      this.icoAddress = this.address
    }

    this.loading = true

    const totalEth = EtherService.getTotalEthBalance(this, this.icoAddress).then((response) => {
      this.ethBalance = response.body.result / 1e18
    })

    const totalTxs = EtherService.getTotalTxs(this, this.icoAddress).then((response) => {
      let total = 0
      const result = response.body.result
      for (var i = 0; i < result.length; i++) {
        if (result[i].from !== '0x9df3a24d738ae98dea766cd89c3aef16583a4daf') {
          total += (result[i].value) / 1e18
        }
      }
      this.ethRaised = total
    })

    const totalToken = EtherService.getTotalTokenSupply(this, this.icoAddress).then((response) => {
      this.totalSupply = response.body.result
    })

    Promise.all([totalEth, totalTxs, totalToken]).then(() => {
      console.log('Success')
    }).catch(() => {
      console.log('Failed')
    }).finally(() => {
      this.loading = false
    })
  },
  components: {
    ProgressBar,
    Spinner
  }
}
</script>
