const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3=require('web3');
const {interface, bytecode} = require('./compile');
const provider = new HDWalletProvider(
   'butter forward save obtain doctor split spend grid expand flee soda path',
   'https://rinkeby.infura.io/v3/8c0db3bc80914db4a37aa04e2ddb0188' 
);
const web3 = new Web3(provider);