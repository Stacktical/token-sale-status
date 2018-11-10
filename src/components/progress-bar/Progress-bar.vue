<template src='@/components/progress-bar/progress-bar.html'></template>

<style lang="scss" src='@/components/progress-bar/progress-bar.scss'></style>

<script>

export default {
  name: 'Progress-Bar',
  props: [
    'currentRound',
    'priCap',
    'preCap',
    'softCap',
    'hardCap',
    'totalRaised'
  ],
  data () {
    return {
      striped: true
    }
  },
  computed: {
    raised () {
      if (this.currentRound === 1) {
        return Math.round(this.totalRaised)
      } else if (this.currentRound === 2) {
        return Math.round(Number(this.totalRaised) - Number(this.priCap))
      } else if (this.currentRound === 3) {
        return Math.round(Number(this.totalRaised) - Number(this.priCap) - Number(this.preCap))
      } else {
        return 0
      }
    }
  },
  methods: {

  }
}
</script>
