"use strict";
const { infuraApiKey, mnemonic } = process.env;
const HDWalletProvider = require("@truffle/hdwallet-provider");

const Infura = {
  Mainnet: "https://mainnet.infura.io/v3/" + infuraApiKey,
  Ropsten: "https://ropsten.infura.io/v3/" + infuraApiKey,
  Rinkeby: "https://rinkeby.infura.io/v3/" + infuraApiKey,
  Kovan: "https://kovan.infura.io/v3/" + infuraApiKey,
  BSC: "https://bsc-dataseed1.binance.org "
};

module.exports = {
  networks: {
    test: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 5777, //Match Ganache(Truffle) network id
      gas: 40000000,
    },
    rinkeby: {
      network_id: 4,
      provider: () => new HDWalletProvider(mnemonic, Infura.Rinkeby),
      gas: 10000000,
      gasPrice: '10000000000'
    },
    mainnet: {
      network_id: 1,
      provider: () => new HDWalletProvider(mnemonic, Infura.Mainnet),
      gas: 10000000,
      gasPrice: '8000000000'
    },
    ropsten: {
      network_id: 3,
      provider: () => new HDWalletProvider(mnemonic, Infura.Ropsten),
      gas: 5000000,
      gasPrice: '6000000000'
    },
    kovan: {
      network_id: 1,
      provider: () => new HDWalletProvider(mnemonic, Infura.Kovan),
      gas: 10000000,
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, 'https://bsc-dataseed1.binance.org'),
      network_id: 56,
      // confirmations: 10,
      timeoutBlocks: 200,
      gas: 10000000,
      gasPrice: 10000000000
      // skipDryRun: false
    },
  },

  compilers: {
    solc: {
      version: "^0.8.6",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
      //  evmVersion: "byzantium"
      }
    },
  },
};
