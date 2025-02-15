# Functions 🔥

Functions are reusable blocks of code that perform a specific task.
- **Purpose:**  
  The `function` keyword is used to define functions in JavaScript. Functions are fundamental building blocks that encapsulate code for reuse and modularity.

- **Functions Are First-Class Objects:**  
  Functions can be assigned to variables, passed as arguments, and returned from other functions. This makes them very flexible in JavaScript.

## Function Declarations

:::info Note
Function declarations are hoisted to the top of their scope. This means you can call the function before its declaration in the code.
:::
 
```js
function functionName(parameters) {}
```

## Function Expressions
:::info Note
Unlike function declarations, function expressions are not hoisted. The function is only available after its definition.
:::

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

### 1. Safe Approach (Using Named Function Expression)
```javascript
let fact = function _fact(n) {
    if (n == 0) return 1;
    return n * _fact(n - 1); // Always refers to the internal function
};

const newfact = fact;
fact = null;
console.log(newfact(5)); //Ouptput: 120
```

### 2. Risky Approach (Using `fact` for Recursion)
```javascript
let fact = function _fact(n) {
    if (n == 0) return 1;
    return n * fact(n - 1); // Uses fact instead of _fact
};

const newfact = fact;
fact = null;
console.log(newfact(5)); // ❌ TypeError: fact is not a function
```

## Arguments & Parameters

:::info
- **Arguments:** Arguments are values passed to a function when it is called.
- **Parameters:**  Parameters allow you to initialize function parameters
:::
<br> </br>

- ### Default Parameters
  - Allow parameters to have fallback values if no argument (or `undefined`) is provided.
  - **Syntax Example:**
    ```js
    function multiply(a = 1, b = 1) {
      return a * b;
    }
    console.log(multiply(5)); // 5, because b defaults to 1
    ```
  - Evaluated at call time in a left-to-right order. Earlier parameters can be used in later default expressions.

<br> </br>

- ### Rest Parameters
  - Gather all remaining arguments (beyond the named parameters) into a real Array.
  - **Syntax Example:**
    ```js
    function sum(a, b, ...others) {
      return a + b + others.reduce((acc, x) => acc + x, 0);
    }
    console.log(sum(1, 2, 3, 4)); // 10
    ```
  -  **Restrictions**
      - Only one rest parameter is allowed per function.
      - It must be the last parameter.
      - Trailing commas after it are not allowed.
      - It cannot have a default value.