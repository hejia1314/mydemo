pragma solidity ^0.4.17;
//定义智能合约
contract Inbox{
    string public message;

    function Inbox(string _message)public{
        message = _message;
    }
    function setMessage(string _message)public{
        message = _message;
    }
    function getMessage()public view returns(string){
        return message;
    }
}