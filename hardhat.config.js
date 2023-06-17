require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');

module.exports = {
  defaultNetwork: "avalancheTest",
  networks: {
    hardhat: {},
    avalancheTest: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: ['88e6ca62d9f22883f8538ec166899e85f29f86ee338db3e8a15433cff12b25de']
  },
  },
  watcher: {
    compilation: {
      tasks: ["compile"],
      files: ["./contracts"],
      verbose: true,
    },
    ci: {
      tasks: ["clean", {command: "compile", params: {quiet: true}}, {
        command: "test",
        params: {noCompile: true, testFiles: ["testfile.ts"]}
      }],
    }
  },
  etherscan: {
    // apiKey: "FD7JEQ4V4JB763575Y2K2YU37BNNTHHN94", //testnet
    apiKey: "P69KHY349RFJFUX7NEAYQ6WREVR7VU5KMB"                //alvanche
  },
  solidity: {
    compilers: [
      {
        version: "0.5.8",
        settings: {
          optimizer: {
            enabled: true,
            runs: 20,
          }
        }
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 20,
          }
        }
      },
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 20,
          }
        }
      },
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 20,
          }
        }
      }
    ]
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
}