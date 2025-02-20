---
sidebar_position: 7
title: Types of Scope
slug: scopes
---

# Types of Scope

## 1. Global Scope

- Variables declared outside any function or block
- Accessible throughout the entire program
- Created using `var`, `let`, or `const` at the top level

```js
const globalVar = "I'm global";

function testScope() {
  console.log(globalVar); // Accessible
}
```

## 2. Function/Local Scope

- Variables declared inside a function
- Only accessible within that function
- Each function creates its own scope

```js
function myFunction() {
  var localVar = "I'm local";
  console.log(localVar); // Accessible
}
// console.log(localVar); // ❌ Error: localVar is not defined
```

## 3. Block Scope

- Variables declared inside a block `{}`
- Only accessible within that block
- Created using `let` and `const` (not `var`)

```js
if (true) {
  let blockVar = "I'm block-scoped";
  const alsoBlock = "Me too";
  // Both accessible here
}
// console.log(blockVar); // ❌ Error: blockVar is not defined
```

## 4. Lexical/Static Scope

- Inner functions can access variables from outer scope
- Scope is determined by the location where variables are declared

```js
function outer() {
  const message = "Hello";
  function inner() {
    console.log(message); // Can access message
  }
  inner();
}
```
