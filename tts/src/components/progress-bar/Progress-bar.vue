<template src='@/components/progress-bar/progress-bar.html'></template>

<style lang="scss" src='@/components/progress-bar/progress-bar.scss'></style>

<script>

export default {
  name: 'Progress-Bar',
  props: [
    'icoAddress',
    'softCap',
    'midCap',
    'max'
  ],
  data () {
    return {
      ethRaised: 0,
      ethBalance: 0,
      totalSupply: 0,
      striped: true
    }
  },
  computed: {
    ethRaisedWoMid () {
      var value = this.ethRaised - this.midCap
      return Math.round(value)
    }
  },
  methods: {

  }
}
</script>
