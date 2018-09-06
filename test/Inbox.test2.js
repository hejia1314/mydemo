const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 =new Web3(ganache.provider());//把ganache测试网络的卡，插入Web3里面

describe('测试智能合约',()=>{
    it('测试web3的api ',  () => {
       web3.eth.getAccounts().then(
           (accounts) =>{
              // console.log(accounts);
           }
       )
    });
    it('测试web3的api',  ()=> {
        web3.eth.getBalance('0x444a061fda65aff8c5a2adbf2a05f571d2284aa8').then(
            (balance)=>{
                console.log(balance);
            }
        )
    });
})