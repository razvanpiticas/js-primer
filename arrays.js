
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

const emptyArray = []                      // Empty array
const expenses = [100.10, 45, -20]         // Array of numbers
const data = [true, 12, 'Andrew']          // Array of mixed types

console.log(expenses[0])                   // get first
console.log(expenses[expenses.length - 1]) // get last

expenses.push(12)                          // add items
expenses.unshift(3)                        // add items before
console.log(expenses)                      // Will print [ 3, 100.1, 45, -20, 12 ]

// Splice adds, removes, edits items anywhere
const nums = [99, 199, 299]
nums.splice(1, 0, 399)                      // Add item - p1: position, p2: items to delete, p3: item to add
console.log(nums)                           // Will print [99, 399, 199, 299]

nums.pop()                                  // remove from end
nums.shift()                                // remove from begining
console.log(nums)                           // Will print [399, 199]

nums.splice(0, 1)                           // p1: index, p2: how many elements to delete
console.log(nums)                           // Will print [399]

const nums2 = [10, 20, 30, 40]
nums2[2] = 3000;
nums2.splice(1, 1, 2000);                   // p1: at index 1, p2: delete 1 item, p3: add item 2000
console.log(nums2);                         // [10, 2000, 3000, 40]

                                            // for is the same as in C#
const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']
todos.forEach(function (todo, index) {      // forEach is similar to linq's, takes a delegate as a param
 const num = index + 1
 console.log(`${num}. ${todo}`)           
})

const index = todos.indexOf('Clean kitchen');    // indexOf gets the index searching by the content
console.log(index)                               // Will print 1

// but indexOf uses ""==="" to search for the index, which doesn't work on ref types": {} === {} does not return true
// for getting the index in an array of objects we use findIndex to search into the objects properties
const notes = [{title: 'title 1', body: 'body 1'}, {
    title: 'title 2',
    body: 'body 2'
   }];
const objIndex = notes.findIndex(function (note, index) {
    return note.title === 'title 2'
})
console.log(index)                              // Will print 1

// for getting the whole object, just use find instead of findIndex:
const obj = notes.find(function (note, index) {
    return note.title === 'title 2'
})
console.log(obj)                                // Will print { title: 'title 2', body: 'body 2' }


const todoItems = [{text: 't1', completed: false}, {text: 't2', completed: true}, {text: 't3', completed: false}]

/*
* Filter returns a NEW array with the filtered elements
* Takes as param a callback function 
*                         - which gets called for each element with the collection and the index
*                         - returns true for including an element
*                         - returns false for excluding an element
*/
const thingsToDo = todoItems.filter(function (todo) {
    return !todo.completed
});
   
console.log(thingsToDo)                         // Wil print t1 & t3 objects

/**
 * Sort takes a delegate with two items of the array "a" & "b"
 * Implement the delegate's callback function so that it:
 *                         - returns -1 if "a" should come first
 *                         - returns 1 if "b" should come first
 *                         - returns 0 is "a" & "b" are equal
 * * does NOT return a NEW collection!
 */
todoItems.sort(function (a, b) {
    if (!a.completed && b.completed) {
        return -1
    } else if (!b.completed && a.completed) {
        return 1
    } else {
        return 0
    }
})
console.log(todoItems)                          // Wil print t1, t3, t2 objects (sorted by completed prop)