const hre = require("hardhat");

async function main() {
  await hre.run('compile');

  const Build = await hre.ethers.getContractFactory("Build");
  console.log("deploying BUILD token...");
  const token = await Build.deploy();
  await token.deployed();

  console.log("BUILD token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });