// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract IDOToken is ERC20, Ownable {
    uint256 public idoPrice = 0.1 * 10 ** 18;
    uint256 public maxBuyAmount = 100 * 10 ** 18;
    address public usdtAddress = 0x606D35e5962EC494EAaf8FE3028ce722523486D2;
    mapping(address => bool) private isBuy;

    constructor() ERC20(address(this)) {}

    function buyToken(uint256 amount) public {
        require(!isBuy[msg.sender], "You have already bought!");
        require(amount <= maxBuyAmount, "Invalid amount");

        IERC20(usdtAddress).transferFrom(msg.sender, address(this), amount);
        uint256 buyNum = amount / idoPrice * 10 ** 18;
        isBuy[msg.sender] = true;

        _mint(msg.sender, buyNum);
    }

    function withdraw() public onlyOwner {
        uint256 bal = IERC20(usdtAddress).balanceOf(address(this));
        IERC20(usdtAddress).transfer(msg.sender, bal);
    }
}