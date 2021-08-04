const path=require('path');
const fs=require('fs');
const solc=require('solc');

const inboxPath=path.resolve(__dirname,'contracts','Inbox.sol');
const source=fs.readFileSync(inboxPath,"utf8");

//2 properties assigned in particular: interface and bytecode.
module.exports=solc.compile(source,1).contracts[':Inbox'];