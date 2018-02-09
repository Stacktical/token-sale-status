<template src='@/components/progress-bar/progress-bar.html'></template>

<style lang="scss" src='@/components/progress-bar/progress-bar.scss'></style>

<script>

import EtherService from '@/components/progress-bar/progress-bar.service.js'

export default {
  name: 'Prgress-Bar',
  data () {
    return {
      icoAddress: '0x9df3a24d738ae98dea766cd89c3aef16583a4daf',
      ethRaised: 0,
      ethBalance: 0,
      icoAddress: '0x9df3a24d738ae98dea766cd89c3aef16583a4daf'
    }
  },
  created () {
    EtherService.getTotalEthBalance(this, this.icoAddress).then((response) => {
      this.ethBalance = response.body.result / 1e18;
    })

    EtherService.getTotalTxs(this, this.icoAddress).then((response) => {
      var total = 0
      for (var i = 0; i < response.body.result.length; i++) {
        if (response.body.result[i].from !== '0x9df3a24d738ae98dea766cd89c3aef16583a4daf') {
          total += response.body.result[i].value / 1e18
        }
      }
      this.ethRaised = total;
    })
  },
  methods: {

  }
}
</script>
