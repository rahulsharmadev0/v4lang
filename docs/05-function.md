# **Functions**

Functions are reusable blocks of code that perform a specific task.
- **Purpose:**  
  The `function` keyword is used to define functions in JavaScript. Functions are fundamental building blocks that encapsulate code for reuse and modularity.

- **Functions Are First-Class Objects:**  
  Functions can be assigned to variables, passed as arguments, and returned from other functions. This makes them very flexible in JavaScript.

### **Function Declarations**
> **Note**: Function declarations are hoisted to the top of their scope. This means you can call the function before its declaration in the code.

**Syntax:**  
```js
function functionName(parameters) {}
```

### **Function Expressions**
> Unlike function declarations, function expressions are not hoisted. The function is only available after its definition.

### **Syntax:**  
```js
    // Anonymous function expression (no internal name)
    const anonymousFunc = function(params) {};

    // Named function expression (internal name useful for recursion & debugging)
    const recursiveFunc = function innerRecursive(params) {};

    // Arrow function expression (concise syntax from ES6)
    const arrowFunc = (params) => {};

    // Oneline Arrow function expression (concise syntax from ES6)
    const arrowFunc = (params) => line-code;
```
---

### **Safe Approach (Using Named Function Expression)**
```javascript
let fact = function _fact(n) {
    if (n == 0) return 1;
    return n * _fact(n - 1); // Always refers to the internal function
};

const newfact = fact;
fact = null;
console.log(newfact(5)); //Ouptput: 120
```

### **Risky Approach (Using `fact` for Recursion)**
```javascript
let fact = function _fact(n) {
    if (n == 0) return 1;
    return n * fact(n - 1); // Uses fact instead of _fact
};

const newfact = fact;
fact = null;
console.log(newfact(5)); // ❌ TypeError: fact is not a function
```
---
# **Arguments & Parameters**

**Arguments:**
Arguments are values passed to a function when it is called.\
**Parameters:** 
Parameters allow you to initialize function parameters

- **Default Parameters:**
  - Allow parameters to have fallback values if no argument (or `undefined`) is provided.
  - **Syntax Example:**
    ```js
    function multiply(a = 1, b = 1) {
      return a * b;
    }
    console.log(multiply(5)); // 5, because b defaults to 1
    ```
  - Evaluated at call time in a left-to-right order. Earlier parameters can be used in later default expressions.

- **Rest Parameters:**
  - Gather all remaining arguments (beyond the named parameters) into a real Array.
  - **Syntax Example:**
    ```js
    function sum(a, b, ...others) {
      return a + b + others.reduce((acc, x) => acc + x, 0);
    }
    console.log(sum(1, 2, 3, 4)); // 10
    ```
  - **Restrictions:**
    1. Only one rest parameter is allowed per function.
    2. It must be the last parameter.
    3. Trailing commas after it are not allowed.
    4. It cannot have a default value.

---

# Higher-Order Functions

Higher-order functions are functions that take other functions as arguments or return functions as their result.

> Higher-order functions leverage closures to "remember" information even after the outer function has finished executing.
> 
### **Example:**
```js
function higherOrderFunction(callback) {
    return callback();
}

function sayHello() {
    return "Hello!";
}

higherOrderFunction(sayHello); // returns "Hello!"
```
### **Difference Between Callback Function and Higher-Order Function (HOF)**  
> No, a **callback function** is **not** a higher-order function (HOF), but it is used **inside** a higher-order function.  

| Feature | Callback Function | Higher-Order Function (HOF) |
|---------|------------------|---------------------------|
| **Definition** | A function passed as an argument to another function | A function that takes a function as an argument or returns a function |
| **Purpose** | To be executed later, usually after an event or operation | To manipulate functions by taking or returning them |
| **Example** | `setTimeout(() => console.log("Hello"), 1000);` | `arr.map(num => num * 2);` |
| **Who Uses It?** | Used inside a higher-order function | Uses callbacks to process logic |

---

# **Scoping hierarchy**


## **1. Global Scope**
- Variables declared **outside** any function are in the **global scope**.
- These variables can be accessed **inside any function**.
- They remain in memory as long as the program runs.

### **Example:**
```javascript
let globalVar = "I am global"; // Global scope

function showGlobal() {
  console.log(globalVar); // ✅ Accessible inside function
}

showGlobal(); // Output: I am global
console.log(globalVar); // ✅ Accessible outside function
```
> 🔹 **Risk:** Overusing global variables can lead to **naming conflicts** and **hard-to-debug code**.

---

## **2. Local (Function) Scope**
- Variables declared **inside** a function are **only accessible within that function**.
- They are **created** when the function is called and **destroyed** when it ends.

### **Example:**
```javascript
function showLocal() {
  let localVar = "I am local"; // Function (Local) scope
  console.log(localVar); // ✅ Accessible inside function
}

showLocal();
console.log(localVar); // ❌ Error: localVar is not defined
```
> 🔹 **Key Point:** `localVar` **cannot** be accessed outside `showLocal()`.

---

## **3. Lexical Scope**
- **Functions in JavaScript remember the scope in which they were defined.**
- **An inner function** can access variables from its outer function **even after the outer function has finished executing**.

### **Example:**
```javascript
function outerFunction() {
  let outerVar = "I am from outer scope";

  function innerFunction() {
    console.log(outerVar); // ✅ Accessible due to lexical scope
  }

  return innerFunction;
}

const myFunction = outerFunction(); // `outerFunction` runs and returns `innerFunction`
myFunction(); // Output: I am from outer scope
```
> 🔹 **Key Point:** Even after `outerFunction()` is done executing, `innerFunction()` **remembers `outerVar`** due to **lexical scope**.

---

## **Comparison Table**
| Feature          | Global Scope | Local (Function) Scope | Lexical Scope |
|-----------------|--------------|----------------------|--------------|
| **Definition**   | Variables accessible everywhere. | Variables restricted to their function. | Inner functions remember outer variables. |
| **Access**       | Inside and outside functions. | Only within the function they are declared in. | Inner function can access outer function variables. |
| **Lifespan**     | Exists throughout program execution. | Created when function runs, deleted when function ends. | Preserved in closures. |
| **Example**      | `let x = 10;` (outside functions) | `let y = 20;` (inside a function) | Nested functions using outer variables. |

> 🚀 **Tip:** Always **prefer local scope** over global scope to avoid variable conflicts!