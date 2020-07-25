console.log('hello world')

console.log(typeof undefined);

// difference between undefined and null

console.log(x) //undefined - it has no value assigned

function x() {
    return null // defined explicitly, represents empty value
}

// primitive data types- int null undefined string bool
// object type - represents more complex data structures -
//    arrays, objects, functions, class instances - can be mutated after being assigned a variable

console.log(true) //true
console.log(!! {})  // double !! is opposite of ! (logical "not" operator) - true
console.log(!! []) // coerced type into bool -true
console.log(!! '') // false
console.log(!! 'hi') // true

// && - logical "and" operator
// || - logical "or" operator