# Higher-Order Functions ⚡

Higher-order functions are functions that take other functions as arguments or return functions as their result.

> Higher-order functions leverage closures to "remember" information even after the outer function has finished executing.

**Example:**
```js
function higherOrderFunction(callback) {
    return callback();
}

function sayHello() {
    return "Hello!";
}

higherOrderFunction(sayHello); // returns "Hello!"
```

## Difference Between Callback Function and Higher-Order Function (HOF)
> No, a **callback function** is **not** a higher-order function (HOF), but it is used **inside** a higher-order function.  

| Feature | Callback Function | Higher-Order Function (HOF) |
|---------|------------------|---------------------------|
| **Definition** | A function passed as an argument to another function | A function that takes a function as an argument or returns a function |
| **Purpose** | To be executed later, usually after an event or operation | To manipulate functions by taking or returning them |
| **Example** | `setTimeout(() => console.log("Hello"), 1000);` | `arr.map(num => num * 2);` |
| **Who Uses It?** | Used inside a higher-order function | Uses callbacks to process logic |
