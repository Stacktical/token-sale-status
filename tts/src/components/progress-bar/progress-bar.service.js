// var SOFT_CAP = 4350
// var MAX_CAP = (10 - 1.5) * 1000000 / 1150
var icoAddress = '0x9df3a24d738ae98dea766cd89c3aef16583a4daf'
var tokenAddress = "0xeb9951021698b42e4399f9cbb6267aa35f82d59d"
var apiKey = '3X39K1K7RZZN5HW37TUYH56GFVEZZWV45K'
// var contributorAddress = userAddress;
// var maxUnverifiedContribution = 15

export default {
  getTotalEthBalance (context) {
    var params = {
      module: 'proxy',
      action: 'eth_call',
      tag: 'latest',
      to: icoAddress,
      data: '0x4042b66f',
      apikey: apiKey,
    }
    return context.$http.get('https://api.etherscan.io/api', {params: params})
  }
}

//
//
//
// // Get total ETH raised in wei unit, returns promise
// function getEthSent(contributor) {
//   var params = $.param({
//       module: 'proxy',
//       action: 'eth_call',
//       tag: 'latest',
//       to: icoAddress,
//       data: '0x842a77d3000000000000000000000000'+contributor.substring(2),
//       apikey: '5FUHMWGH51JT3G9EARU4K4QH3SVWYIMFIB',
//   });
//   return $.get('https://api.etherscan.io/api?' + params);
// }
//
//
//
// // Get total ETH raised in wei unit, returns promise
// function getWeiRaised() {
//   var params = $.param({
//       module: 'proxy',
//       action: 'eth_call',
//       tag: 'latest',
//       to: icoAddress,
//       data: '0x4042b66f',
//       apikey: '5FUHMWGH51JT3G9EARU4K4QH3SVWYIMFIB',
//   });
//   return $.get('https://api.etherscan.io/api?' + params);
// }
//
// // Get total supply of Lif, returns promise
// function getTotalLif() {
//   var params = $.param({
//       module: 'proxy',
//       action: 'eth_call',
//       tag: 'latest',
//       to: tokenAddress,
//       data: '0x18160ddd',
//       apikey: '5FUHMWGH51JT3G9EARU4K4QH3SVWYIMFIB',
//   });
//   return $.get('https://api.etherscan.io/api?' + params);
// }
//
// // Refresh TGE values
// function refreshUserContribution() {
//     if (icoAddress != "0x0000000000000000000000000000000000000000")
//       getEthSent(contributorAddress).then(function(weiSent) {
//         var ETHSent = (Number(weiSent.result) / 1e18);
//         console.log('ETH Sent:', ETHSent);
//
//         // Show only profile verification if contribution more than maxUnverifiedContribution
//         if (ETHSent >= maxUnverifiedContribution && verifiedUser) {
//           $('#verification-status').show();
//           $('#proof-of-address-input').show();
//           $('#verify-profile').show();
//           $('#verify-alert').show();
//         }
//         $('#totalETHSent').text(parseFloat(ETHSent).toLocaleString('en') + ' ETH');
//       });
//     else
//       $('#totalETHSent').text('0 ETH')
//
//     if (tokenAddress != "0x0000000000000000000000000000000000000000")
//       getLifBalance(contributorAddress).then(function(balance) {
//         var libBalance = (Number(balance.result) / 1e18);
//         console.log('Lif Balance:', balance);
//         $('#totalLifBalance').text(parseFloat(libBalance).toLocaleString('en') + ' LIFs');
//       });
//     else
//       $$('#totalLifBalance').text('0 LIFs');
// }
//
// // Check everything every 10 seconds
// refreshUserContribution();
//
// function setEthRaised(eth_raised) {
//   var bar_end = eth_raised * 1.25;
//   var soft_cap_percent = Math.round(SOFT_CAP / bar_end * 100);
//   var max_cap_percent = Math.round((MAX_CAP - SOFT_CAP) / bar_end * 100);
//   var mvmEth = eth_raised - MAX_CAP;
//   var mvm_percent = Math.round(mvmEth / bar_end * 100);
//
//   $('#softCapBar').css({ width: soft_cap_percent + '%', opacity: 1 });
//   $('#maxCapBar').css({ width: max_cap_percent + '%', opacity: 1 });
//   $('#mvmBar').css({ width: mvm_percent + '%', opacity: 1 });
//   $('#barRest').css({ width: 100 - max_cap_percent - soft_cap_percent - mvm_percent + '%', opacity: 1 });
//
//   $('#barRaised').text(eth_raised.toLocaleString('en'));
//   $('#softCapBar').text(SOFT_CAP.toLocaleString('en') + ' ETH');
//   $('#maxCapBar').text((MAX_CAP - SOFT_CAP).toLocaleString('en') + ' ETH');
//   $('#mvmBar, #mvmEth').text(mvmEth.toLocaleString('en') + ' ETH');
//
//   $('#ethRaised').text(parseFloat(eth_raised).toLocaleString('en'));
//   $('#progressBar').text(parseFloat(eth_raised).toLocaleString('en') +' ETH');
// }
//
// // Refresh TGE values
// function refreshTGEValues() {
//     if (icoAddress != "0x0000000000000000000000000000000000000000")
//       getWeiRaised().then(function(weiRaised) {
//         var icoETHRaised = (Number(weiRaised.result) / 1e18);
//         console.log('ETH TGE raised:', icoETHRaised)
//         setEthRaised(icoETHRaised);
//       });
//
//     if (tokenAddress != "0x0000000000000000000000000000000000000000") {
//       getTotalLif().then(function(totalSupply) {
//         var lifTotalSupply = (Number(totalSupply.result) / 1e18) * 4/3;
//         $('#totalLif').text(parseFloat(lifTotalSupply).toLocaleString('en'))
//       });
//     } else {
//       $('#totalLif').text(parseFloat(lifTotalSupply).toLocaleString('en'))
//     }
// }
//
// // Check everything every 10 seconds
// refreshTGEValues();
// setInterval(refreshTGEValues, 1000*10);
