<template src='@/components/progress-bar/progress-bar.html'></template>

<style lang="scss" src='@/components/progress-bar/progress-bar.scss'></style>

<script>

import EtherService from '@/components/progress-bar/progress-bar.service.js'

export default {
  name: 'Progress-Bar',
  props: [
    'icoAddress'
  ],
  data () {
    return {
      ethRaised: 0,
      ethBalance: 0,
      totalSupply: 0
    }
  },
  created () {
    EtherService.getTotalEthBalance(this, this.icoAddress).then((response) => {
      this.ethBalance = response.body.result / 1e18
    })

    EtherService.getTotalTxs(this, this.icoAddress).then((response) => {
      var total = 0
      for (var i = 0; i < response.body.result.length; i++) {
        if (response.body.result[i].from !== '0x9df3a24d738ae98dea766cd89c3aef16583a4daf') {
          total += response.body.result[i].value / 1e18
        }
      }
      this.ethRaised = total
    })

    EtherService.getTotalTokenSupply(this, this.icoAddress).then((response) => {
      this.totalSupply = response.body.result
    })
  },
  methods: {

  }
}
</script>
