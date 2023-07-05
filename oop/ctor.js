// a regular js function can act as a constructor, without being declared inside a class. WHAT?
const Wallet = function(address, balance){
    this.address = address;
    this.balance = balance;
}

// same as c#. "new" creates and initializes and returns a reference to the newly created object 
const wallet1 = new Wallet("0x123", 101010);
console.log(wallet1);

const wallet2 = new Wallet("0x456", 100100);
console.log(wallet2);
wallet2.balance += 100;        // set prop
console.log(wallet2.balance);  // get prop

// What if we want to add a method to our objects? Since we don't have a class to add the method to we will 
// use JavaScript's prototypal Inheritance
// the prototype property is an object where we add methods on the fly (even after instances are created) that we want to be shared across all Wallet instances.

Wallet.prototype.getOwner = function () {  // a pequliar quirk is that, If i had used an arrow function here, I wouldn't have access to "this" because arrow functions don't bind "this"
    return this.address; 
}

console.log(wallet1.getOwner());    // John Smith
console.log(wallet2.getOwner());    // Jane Smith

Wallet.prototype.setBalance = function (balance) { 
    this.balance = balance;
}
wallet1.setBalance(200000);
console.log(wallet1.balance);        // 200000


// insert class diagram here
const wallet3 = new Wallet("0x789", 303030);
// wallet3.[[prototype]] = Wallet.prototype        // wallet3.[[prototype]] gets a reference to Wallet.prototype
console.log(wallet3.balance);                      // goes to the address where wallet3 lives and searches for the property balance. It finds it and gets it.
console.log(wallet3.getOwner());                   // again goes to the address where wallet3 lives and searches for the method getOwner. It does not find it so it uses wallet3.[[prototype]] reference to go up the prototype chain and find the method. 

// Another notable thing is that we can override "shadowing" a property/method directly on an instance:
wallet2.getOwner = function() {return "The owner is secret"; }
console.log(wallet1.getOwner());      // John Smith 
console.log(wallet2.getOwner());      // The owner is secret
console.log(wallet3.getOwner());      // Jane Doe

// npm install -g live-server
//live-server --version
// create index.htmll and app.js and link app.js in the html
// then fire up the browser



//objects automatically inherit from: Object.prototype which is linked to null (it's the root parent in the inheritance chain)
//wallet2 --> Object.prototype --> null

// Last time I looked into js ~7 years ago it was said that everything is a function now it is said that everything is an object
// Js has 5 primitive values (like in Java. C# does not have primitives but it does have has value types like struct)
// string, number, boolean, null, undefined - everything else is an object.

// prototype chain for:
// an object: myObject --> Object.prototype --> null
// an array: myArray --> Array.prototype --> Object.prototype --> null
const myArray = [1,2];
console.log(myArray);

// a function: myFunction --> Function.prototype --> Object.prototype --> null
const myFunction = () => 0;
console.log(myFunction)

// going back to our 5 primitives, actually only null and undefined will stay primitives. String, number and boolean get initialized as primitives but if we try and access a property/method on them js uses object wrappers to wrap them into objects
const book = "The Art of War";
console.log(book); // show console - primitive
// now if I do
console.log(book.split(''));

const book2 = new String("Tai Pan");
console.log(book2); // show chain
// a string: myString -->  String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBool --> Boolean.prototype --> Object.prototype --> null

