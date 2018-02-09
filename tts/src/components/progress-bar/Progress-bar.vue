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
    }
  },
  created () {
    console.log('Created progres bar')
    EtherService.getTotalEthBalance(this).then((response) => {
      this.ethRaised = (Number(response.body.result) / 1e18);
    })
  },
  methods: {

  }
}
</script>
