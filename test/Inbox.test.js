const assert = require('assert');
const ganache = require('ganache-cli');
const {interface,bytecode} =require('../compile');
const Web3 = require('web3');
const web3 =new Web3(ganache.provider());//把ganache测试网络的卡，插入Web3里面

describe('测试智能合约',()=>{
 /*  it('测试web3的api ',  async() => {
  const accounts =  await  web3.eth.getAccounts();
       // console.log(accounts);
    });*/
    it('测试智能合约的部署', async()=> {
        const accounts =  await  web3.eth.getAccounts();
       const money = await  web3.eth.getBalance(accounts[0]);
        console.log(money);
        //1.new出来一个合约对象，参数是（ABI）
       const result = await new web3.eth.Contract(JSON.parse(interface))
       //2.部署合约到区块链网络，需要填入bytecode,二进制0011
           .deploy(
            {
                data:bytecode,
                arguments:['部署合约']
            } ).send({
            from:accounts[0],
            gas:1000000
        });
        console.log('address :' +result.options.address);
       // console.log('address' + result.options.address);
/*

       let  message = await result.methods.getMessage().call();
        console.log(message);
*/

        await result.methods.setMessage('itheima').send({
            from:accounts[0],
            gas:1000000
        });
        message = await result.methods.getMessage().call();
        console.log(message);
        assert.equal(message,'itheima')
    });


})