//编译智能合约的脚本
const path = require('path');
const fs = require('fs');
const solc = require('solc');

//拿到智能合约源代码路径
const srcpath = path.resolve(__dirname,'contracts','Inbox.sol');
//读取合约文件，（拿到合约源代码内容）
const source = fs.readFileSync(srcpath, 'utf-8');

//console.log(source);
//编译智能合约
const result = solc.compile(source,1);

//console.log(result);
module.exports = result.contracts[':Inbox'];
