const edubuk = artifacts.require('edubuk');
// Deploys the smart contract "edubuk"
module.exports = async function (deployer) {
  await deployer.deploy(Edubuk);
  const edubuk = await Edubuk.deployed()
};


