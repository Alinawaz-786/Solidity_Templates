const { ethers, upgrades } = require('hardhat')
const hre = require('hardhat')
const { constants } = require('@openzeppelin/test-helpers');

async function main() {

    const [deployer,] = await ethers.getSigners();
    console.log('DEPLOYER: ',deployer.address);

   
    /*ALORA TOKEN CONTRACT*/
    
    console.log('-- ALORA TOKEN CONTRACT --');
    const Alora = await ethers.getContractFactory("Alora");
    const alora = await upgrades.deployProxy(Alora);
    await alora.deployed();
    let aloraImplementation = await upgrades.erc1967.getImplementationAddress(alora.address);
    let aloraProxyAdmin = await upgrades.erc1967.getAdminAddress(alora.address);
    console.log('ALORA TOKEN CONTRACT: ',alora.address);
    console.log('IMPLEMENTATION: ',aloraImplementation)
    console.log('PROXY ADMIN: ',aloraProxyAdmin)

    // npx hardhat verify --network avalancheTest  0x7e5D3A38433765Fa154b6541c9a97730fE40b0FC
    
    console.log('-------------------------------------------------------')
    console.log('-------------------------------------------------------')
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });