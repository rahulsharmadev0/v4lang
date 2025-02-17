---
title: Scoping Hierarchy in JavaScript
slug: ../scoping_hierarchy
---

# Scoping hierarchy 👀

## 1. Global Scope

- Variables declared **outside** any function are in the **global scope**.
- These variables can be accessed **inside any function**.
- They remain in memory as long as the program runs.

**Example:**

```javascript
let globalVar = "I am global"; // Global scope

function showGlobal() {
  console.log(globalVar); // ✅ Accessible inside function
}

showGlobal(); // Output: I am global
console.log(globalVar); // ✅ Accessible outside function
```

:::warning Overusing global variables can lead to **naming conflicts** and **hard-to-debug code**.
:::

---

## 2. Local (Function) Scope

- Variables declared **inside** a function are **only accessible within that function**.
- They are **created** when the function is called and **destroyed** when it ends.

**Example:**

```javascript
function showLocal() {
  let localVar = "I am local"; // Function (Local) scope
  console.log(localVar); // ✅ Accessible inside function
}

showLocal();
console.log(localVar); // ❌ Error: localVar is not defined
```

:::info `localVar` **cannot** be accessed outside `showLocal()`.
:::

## 3. Lexical Scope

- **Functions in JavaScript remember the scope in which they were defined.**
- **An inner function** can access variables from its outer function **even after the outer function has finished executing**.

**Example:**

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

:::info Even after `outerFunction()` is done executing, `innerFunction()` **remembers `outerVar`** due to **lexical scope**.
:::

## Comparison Table

| Feature        | Global Scope                         | Local (Function) Scope                                  | Lexical Scope                                       |
| -------------- | ------------------------------------ | ------------------------------------------------------- | --------------------------------------------------- |
| **Definition** | Variables accessible everywhere.     | Variables restricted to their function.                 | Inner functions remember outer variables.           |
| **Access**     | Inside and outside functions.        | Only within the function they are declared in.          | Inner function can access outer function variables. |
| **Lifespan**   | Exists throughout program execution. | Created when function runs, deleted when function ends. | Preserved in closures.                              |
| **Example**    | `let x = 10;` (outside functions)    | `let y = 20;` (inside a function)                       | Nested functions using outer variables.             |

:::tip

Always **prefer local scope** over global scope to avoid variable conflicts!

:::
