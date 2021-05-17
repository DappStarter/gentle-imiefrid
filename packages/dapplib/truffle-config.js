require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan regret remember coach grid nation flip gasp'; 
let testAccounts = [
"0x20a3a2913d0c7a17973c61170d60d1197b11263307dff3b3104c6fecd1b537f4",
"0xa84e25836cda60b27ce715f7bb42d633b7a859e54c226a7d4957a31a960e65e6",
"0x103f6e73f84ebfb7a8a9084e2ead44e0117c10795d36016b49c2f9c27f42b122",
"0xa4b8087ff9e64e791def4e19aaa2577a6f57a0522b4ae6100e1c2d172115452d",
"0x85fee223b8bd41ab4f1a8b22f238ac548e4da4d06544336995e2ff204288fd6d",
"0xbcd2b02223fd66df126b678b1be7cbdcede556f8a29ece73c0e402fbe5895e6f",
"0xe7b3dcc8f1f963abf6aa354ac22e87f66e43b0ce0e84026c2cfc6ed892c4e3a8",
"0x73ef59f9a344e643cc7294d744306edcb6f2cb360f8211e56086cdaf564b202e",
"0x2bdfcee8a52feb44727fb010492548491d214a7b8e763e81cd6ee357d10e2c2f",
"0x78c54292979f60290779bad831609bf8116e43ad63346cebfe57f97260bd6011"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
