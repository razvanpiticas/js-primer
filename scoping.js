const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

const message = "JS uses lexical scoping";

const hashMessage = function(msg){

    if(msg.length < 30)
    {
        const message = " shadowing: defining a variable with the same name but in a different scope";
        msg += message;
    }

    const bytes = utf8ToBytes(msg);
    const hash = keccak256(bytes);

    return hash;
}

let result = hashMessage(message);
console.log(result);

// Global Scope (message, hashMessage, result)
    // Local Scope (msg, bytes, hash)
        // Local Scope (message)
