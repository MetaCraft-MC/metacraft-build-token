Get started
```
yarn install
npx hardhat compile
npx hardhat --network rinkeby run scripts/deploy.js
npx hardhat verify --network rinkeby DEPLOYED_CONTRACT_ADDRESS
```
If not verify doesn't work:
```
npx hardhat clean
```