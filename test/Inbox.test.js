const assert=require('assert');
const ganache=require('ganache-cli');
//Library
const Web3=require('web3');
//Test network-web3 instance of Web3
const web3=new Web3(ganache.provider());
const {interface,bytecode} = require('../compile');

let accounts;
let inbox;
const initialString='Hi there!';
const secondMessage='bye';

beforeEach(async ()=>{
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    //Use one of those accounts to deploy the contract
    //1 Teaches web3 about what methods an Inbox contract has
    //2 Tells web3 that we want to deploy a new contract
    //3 Instructs web3 to send out a transaction that creates his contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments:[initialString] })
        .send({from: accounts[0], gas: '1000000'});
});

describe('Inbox',()=>{
    it('deploys a contact',()=>{
        assert.ok(inbox.options.address);
    });

    it('has a default message',async ()=>{
        //Call a method of our inbox contract
        const message = await inbox.methods.message().call();
        assert.equal(message,initialString);
    });

    it('can change the message', async ()=>{
        await inbox.methods.setMessage(secondMessage).send({from: accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message,secondMessage);
    });
});

/*
test example

class Car{
    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }
}

let car;

beforeEach(() => {
    car=new Car();
});

describe('Car',()=>{
    it('can park', ()=>{
        assert.equal(car.park(),'stopped');
    });

    it('can drive',()=>{
        assert.equal(car.drive(),'vroom');
    });
});
*/

//https://rinkeby.infura.io/v3/8c0db3bc80914db4a37aa04e2ddb0188
