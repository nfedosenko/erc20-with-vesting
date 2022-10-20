const Erc20Token = artifacts.require('Erc20Token');

module.exports = async function (deployer, network, accounts) {

    let admin = accounts[0];
    let trustedForwarder = process.env.trustedForwarder;

    console.log("Deploy: Admin: " + admin);
    console.log("Deploy: forwarder: " + trustedForwarder);


    let erc20Token;
    await deployer.deploy(Erc20Token, admin, trustedForwarder)
        .then(function () {
            console.log("Erc20 Token address: ", Erc20Token.address);
            return Erc20Token.at(Erc20Token.address);
        }).then(function (instance) {
            erc20Token = instance;
        });

};