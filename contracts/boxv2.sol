// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.10;

/**
 * @title BoxV2
 * @dev Implements voting process along with vote delegation
 */
contract BoxV2 {
    uint public val;

    // function initialize(uint _val) external {
    //     val = _val;
    // }

     function inc() external {
        val += 1;
    }
}
