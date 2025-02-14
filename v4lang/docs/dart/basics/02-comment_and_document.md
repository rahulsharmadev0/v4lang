---
sidebar_position: 2
title: Comment and Document
---

# How to Comment and Document Code in JavaScript?

Commenting is essential in JavaScript for better readability, debugging, and documentation. JavaScript supports **single-line, multi-line, and JSDoc comments**.

---

### 1️⃣ Single-Line Comments

Use `//` for short explanations or to disable code on a **single line**.
`Ctrl + /`

```js
// This is a single-line comment
let x = 10; // Variable storing a number
```

✅ **Best for:** Quick notes and debugging.

---

### 2️⃣ Multi-Line Comments

Use `/* ... */` for **multi-line explanations**. `Shift + Alt + A`

```js
/*
This function calculates the sum of two numbers
and returns the result.
*/
function add(a, b) {
  return a + b;
}
```

✅ **Best for:** Describing functions, logic, or sections of code.

---

### 3️⃣ Inline Documentation / JSDoc Comments

JSDoc is used for **documenting functions, parameters, and return types**. `Shift + Alt + A`

```js
/**
 * Adds two numbers and returns the sum.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}
```

✅ **Best for:** Professional documentation, IDE tooltips, and API references.

---

:::tip

## **💡 Best Practices for Commenting**

✔ **Write meaningful comments**, not obvious ones.  
✔ **Use JSDoc for functions, classes, and APIs**.  
✔ **Avoid over-commenting**; code should be self-explanatory.

:::
