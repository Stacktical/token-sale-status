<template src='@/components/home/home.html'></template>

<style lang='scss' src='@/components/home/home.scss'></style>

<script>
import Web3 from 'web3'
import DSLATokenABI from '@/ABI/DSLATokenABI.json'
import DSLACrowdSaleABI from '@/ABI/DSLACrowdSaleABI.json'

import ProgressBar from '@/components/progress-bar/Progress-bar'
import Spinner from '@/components/common/spinner/Spinner'
import Footer from '@/components/common/footer/Footer'

export default {
  name: 'Home',
  props: [
    '_tokenAddress',
    '_icoAddress'
  ],
  data () {
    return {
      icoAddress: undefined,
      tokenAddress: undefined,
      priCap: 1200,
      preCap: 6000,
      softCap: 7000,
      hardCap: 17200,
      currentRound: 0,
      totalRaised: 0,
      totalSupply: 0,
      distributedTokens: 0,
      vestedTokens: 0,
      loading: false
    }
  },
  computed: {
    raised () {
      return Math.round(Number(this.totalRaised))
    },
    sold () {
      return Math.round(Number(this.distributedTokens) + Number(this.vestedTokens))
    }
  },
  created () {
    this.loading = true

    this.tokenAddress = this._tokenAddress || '0x446e5681cb934f5ca9f40262e337e77d16134e66'
    this.icoAddress = this._icoAddress || '0x029c467d43497e8caf2a7f386c7a62db20dc5091'

    const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io:443'))
    const utils = web3.utils

    const tokenInstance = new web3.eth.Contract(DSLATokenABI, '0x446e5681cb934f5ca9f40262e337e77d16134e66')
    const crowdSaleInstance = new web3.eth.Contract(DSLACrowdSaleABI, '0x029c467d43497e8caf2a7f386c7a62db20dc5091')

    const currentIcoRound = crowdSaleInstance.methods.currentIcoRound().call().then(response => {
      console.log(response, 'currentRound')
      this.currentRound = response
    })

    const totalRaised = crowdSaleInstance.methods.raisedFunds().call().then(response => {
      console.log(response, 'totalRaised')
      this.totalRaised = utils.fromWei(response, 'ether')
    })

    const distributedTokens = crowdSaleInstance.methods.distributedTokens().call().then(response => {
      console.log(response, 'distributed')
      this.distributedTokens = utils.fromWei(response, 'ether')
    })

    const vestedTokens = crowdSaleInstance.methods.vestedTokens().call().then(response => {
      console.log(response, 'vested')
      this.vestedTokens = utils.fromWei(response, 'ether')
    })

    const totalSupply = tokenInstance.methods.totalSupply().call().then(response => {
      console.log(response, 'totalSupply')
      this.totalSupply = utils.fromWei(response, 'ether')
    })

    Promise.all([currentIcoRound, distributedTokens, vestedTokens, totalRaised, totalSupply]).then(() => {
      console.log('Success')
    }).catch(() => {
      console.log('Failed')
    }).finally(() => {
      this.loading = false
    })
  },
  components: {
    ProgressBar,
    Spinner,
    Footer
  }
}
</script>
