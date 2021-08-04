const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3=require('web3');
const {interface, bytecode} = require('./compile');
const provider = new HDWalletProvider(
   'butter forward save obtain doctor split spend grid expand flee soda path',
   'https://rinkeby.infura.io/v3/8c0db3bc80914db4a37aa04e2ddb0188'
);
const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    
    console.log('Attempting to deploy from acount ',accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi there!']})
        .send({gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);

};
deploy();

//contract 0x8b4dfeCc13668dAabC71bD86eeB3fAA572abeb4D