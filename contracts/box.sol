

// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.10;

/** 
 * @title Box
 * @dev Implements voting process along with vote delegation
 */
contract Box {
    uint public val;

    function initialize(uint _val) external {
        val = _val;
    }
    
}