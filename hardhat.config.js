require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
const { NEXT_PUBLIC_PRIVATE_KEY, NEXT_PUBLIC_INFURA_API_KEY } = process.env;

module.exports = {
  defaultNetwork: 'linea_sepolia',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },

    linea_sepolia: {
      url: `https://linea-sepolia.infura.io/v3/${NEXT_PUBLIC_INFURA_API_KEY}`,
      accounts: [NEXT_PUBLIC_PRIVATE_KEY],
    },
    linea_mainnet: {
      url: `https://linea-mainnet.infura.io/v3/${NEXT_PUBLIC_INFURA_API_KEY}`,
      accounts: [NEXT_PUBLIC_PRIVATE_KEY],
    },
  },
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
