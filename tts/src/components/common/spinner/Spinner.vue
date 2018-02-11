<template src='@/components/common/spinner/spinner.html'></template>

<style lang="scss" src='@/components/common/spinner/spinner.scss'></style>

<script>

export default {
  name: 'Spinner',
  props: [],
  data () {
    return {}
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
