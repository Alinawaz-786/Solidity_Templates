//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

pragma solidity ^0.8.0;

contract Alora is ERC20Upgradeable {
    function initialize() public initializer {
        owner = msg.sender;
        minted = 50;
    }

    receive() external payable {}

    address public owner;
    uint private minted;

    function getter() external view returns (uint) {
        return minted;
    }

    function setter(uint _val) external {
        minted = _val;
    }
}
