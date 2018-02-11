<template src='@/components/home/home.html'></template>

<style lang="scss" src='@/style/main.scss'></style>
<style lang="scss" src='@/components/home/home.scss'></style>

<script>

import ProgressBar from '@/components/progress-bar/Progress-bar'

export default {
  name: 'Home',
  props: [
    'address'
  ],
  data () {
    return {
      icoAddress: undefined
    }
  },
  created () {
    if (this.address === undefined) {
      this.icoAddress = '0x9df3a24d738ae98dea766cd89c3aef16583a4daf'
    } else {
      this.icoAddress = this.address
    }
  },

  components: {
    ProgressBar
  }
}
</script>
