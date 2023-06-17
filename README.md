# Hardhat Project Template

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
    Command need to run this Upgradable  Contract
    npm install @openzeppelin/contracts
    npm install --save-dev hardhat	
    npx hardhat
    npx hardhat compile
    npx hardhat clean
    npm install --save-dev @nomiclabs/hardhat-waffle 'ethereum-waffle@^3.0.0' @nomiclabs/hardhat-ethers 'ethers@^5.0.0'
    npm install @openzeppelin/contracts-upgradeable
    npm install @nomiclabs/hardhat-etherscan
    npm install @openzeppelin/hardhat-upgrades
```
```shell
console.log('ALORA TOKEN CONTRACT: ',alora.address);
console.log('IMPLEMENTATION: ',aloraImplementation)
console.log('PROXY ADMIN: ',aloraProxyAdmin)
```
Three Contracts Deployed
First One is Proxy Contract and Deploy one time.
Second implemention contract  this deploy as per our need and all state changes in this 
contract.
 - Verify implemention contract
 - Run the initiziler function of this contract
Three contract Admin Proxy Contract. In this contract we are used upgrad function.this function take 
two paremeter porxy contract and second implemention contract address
 - GO to first proxy contract and code tab in rigth side dropdown click set is proxy contract buuton

