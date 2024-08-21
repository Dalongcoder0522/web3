// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Primitive {
    bool boo = true;

    /*
    uint stands for unsigned integer, meaning non negative integers
    different sizes are available
        uint8   ranges from 0 to 2 ** 8 - 1
        uint16  ranges from 0 to 2 ** 16 - 1
        ...
        uint256 ranges from 0 to 2 ** 256 - 1
    */
    uint8 public  u8 = 1;
    uint256 public u256 = 33;
    uint256 public u = 123; // uint is an alias for uint256

    /*
    Negative numbers are allowed for int types.
    Like uint, different ranges are available from int8 to int256
    
    int256 ranges from -2 ** 255 to 2 ** 255 - 1
    int128 ranges from -2 ** 127 to 2 ** 127 - 1
    */
    int8 public i8 = 2**7 -1;
    int256 public i256 = 456;
    int256 public i = -123; // int is same as int256

    // minimum and maximum of int
    int256 public  minInt = type(int256).min;
    int256 public maxInt = type(int256).max;
    bool b1 = minInt == 2**255 -1;
    function getB1() public pure returns(bool){
        return type(int256).max == 2**255 -1;
    }
    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;
    //default value of address 0x0000000000000000000000000000000000000000
    function getAddr() public view returns(address) {
        return addr;
    }
/*
    In Solidity, the data type byte represent a sequence of bytes. 
    Solidity presents two type of bytes types :

     - fixed-sized byte arrays
     - dynamically-sized byte arrays.
     
     The term bytes in Solidity represents a dynamic array of bytes. 
     It’s a shorthand for byte[] .
    */
    bytes1 a = 0xb5; //  [10110101]
    bytes1 b = 0x56; //  [01010110]
    bytes1 c = 'a';
    bytes d = 'abc';
function getC() public view returns(bytes1){
    return c;
}
  

    // Default values
    // Unassigned variables have a default value
    bool public defaultBoo; // false
    uint256 public defaultUint; // 0
    int256 public defaultInt; // 0
    address public defaultAddr; // 0x0000000000000000000000000000000000000000

}