---
sidebar_position: 6
title: Types of Variable
slug: variables
---

# Types of Variable

| Variable Type | Scope    | Reassignment | Redeclaration |
| ------------- | -------- | ------------ | ------------- |
| `var`         | Function | ✅ Yes       | ✅ Yes        |
| `let`         | Block    | ✅ Yes       | ❌ No         |
| `const`       | Block    | ❌ No        | ❌ No         |

## 1. `var` (Introduced in ES3 - 1999)

✅ **Strengths**:

- Can be redeclared and reassigned.
- Function-scoped (accessible within the function where it's declared).
- Hoisted (moved to the top of the scope).

❌ **Limitations**:

- Not block-scoped, meaning it can be accessed outside `{}` blocks.
- Can cause unintended bugs due to accidental redeclaration.

#### **Example**

```js
var x = 10;
if (true) {
  var x = 20; // Redeclaring allowed
}
console.log(x); // 20 (Not block-scoped)
```

---

## 2. `let` (Introduced in ES6 - 2015)

✅ **Strengths**:

- Block-scoped (only accessible inside `{}` where declared).
- Can be reassigned but not redeclared in the same scope.
- Prevents hoisting-related issues.

❌ **Limitations**:

- Cannot be redeclared within the same block.

#### **Example**

```js
let y = 10;
if (true) {
  let y = 20; // This `y` is different (block-scoped)
  console.log(y); // 20
}
console.log(y); // 10 (Original `y` remains unchanged)
```

---

## 3. `const` (Introduced in ES6 - 2015)

✅ **Strengths**:

- Block-scoped like `let`.
- Cannot be reassigned after declaration.
- Ensures immutability (useful for constants, objects, arrays).

❌ **Limitations**:

- Must be assigned a value when declared.
- The reference cannot be changed, but **objects/arrays can be modified**.

#### **Example**

```js
const z = 30;
// z = 40;  // ❌ Error: Cannot reassign a `const` variable

const arr = [1, 2, 3];
arr.push(4); // ✅ Allowed, modifying array contents
console.log(arr); // [1, 2, 3, 4]
```
