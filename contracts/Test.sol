// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.5.11;

contract Test {

    string public constant test = "test";

    function shutdown() external {
        selfdestruct(msg.sender);
    }
}
