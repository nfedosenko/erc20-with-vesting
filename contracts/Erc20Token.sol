// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";

import "./TokenERC2771Context.sol";

contract Erc20Token is ERC20Pausable, AccessControl, TokenERC2771Context {

    constructor(address _admin, address _trustedForwarder)
    ERC20("ERC20 Token", "TOKEN")
    TokenERC2771Context(_trustedForwarder)
    {
        _mint(_admin, 100000000 * (10 ** uint(decimals())));
        _setupRole(DEFAULT_ADMIN_ROLE, _admin);
    }

    modifier onlyAdmin() {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "Caller is not the Admin");
        _;
    }

    //admin functions
    function pause() onlyAdmin public {
        super._pause();
    }

    function unpause() onlyAdmin public {
        super._unpause();
    }

    function addForwarder(address trustedForwarder) onlyAdmin public {
        super._addForwarder(trustedForwarder);
    }

    function removeForwarder(address trustedForwarder) onlyAdmin public {
        super._removeForwarder(trustedForwarder);
    }

    //internal functions
    function _transfer(address sender, address recipient, uint256 amount) internal override botProtected(sender, recipient) {
        super._transfer(sender, recipient, amount);
    }

    function _msgSender() internal override(Context, TokenERC2771Context) view returns (address) {
        return TokenERC2771Context._msgSender();
    }

    function _msgData() internal override(Context, TokenERC2771Context) view returns (bytes calldata) {
        return TokenERC2771Context._msgData();
    }
}