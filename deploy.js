//部署智能合约到真实的rankeby网络
const Web3 = require('web3');
const {interface,bytecode} =require('./compile');
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "penalty brain nose you soccer frequent submit journey tackle volume symptom call"; // 12 word mnemonic
const provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/34e580c954b646aab017f08a7de04129");
const web3 = new Web3(provider);

deploy = async ()=>{
   const accounts =  await web3.eth.getAccounts();
   //0x444a061fda65aff8c5a2adbf2a05f571d2284aa8
    console.log(accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data:bytecode,
            arguments:['开始部署合约']
        }).send({
            from:accounts[0],
            gas:'1000000'

        });

    console.log('address : =' + result.options.address);

};
     deploy();
