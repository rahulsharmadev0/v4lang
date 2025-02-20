---
title: Closures in JavaScript
slug: closures
---

# Closures in JavaScript 🗺️

A **closure** is a function that **remembers the variables from its outer scope**, even after the outer function has finished executing.

## 📌 Key Points About Closures

1. A closure is created **when a function is defined inside another function**.
2. The **inner function retains access** to the outer function's variables.
3. The outer function’s execution may complete, but the inner function still remembers and can access its variables.

### Example 1: Basic Closure

```javascript
function outerFunction() {
  let outerVar = "I am from outer scope";

  function innerFunction() {
    console.log(outerVar); // ✅ Can access outerVar due to closure
  }

  return innerFunction;
}

const myClosure = outerFunction(); // `outerFunction` runs and returns `innerFunction`
myClosure(); // Output: I am from outer scope
```

:::info Why?  
Even though `outerFunction()` has finished executing, `myClosure()` still has access to `outerVar` because **closures remember the scope where they were created**.
:::

---

### Example 2: Closure with Private Variables (Data Encapsulation)

Closures are useful for **hiding variables** from the global scope.

```javascript
function counter() {
  let count = 0; // Private variable

  return function () {
    count++; // `count` is remembered by closure
    console.log(count);
  };
}

const increment = counter(); // `increment` is a closure
increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3
```

:::info Why?

- `count` **is not accessible directly**, but the closure remembers it.
- Every time `increment()` is called, it **modifies the private `count` variable**.
  :::

---

### Example 3: Closures in Loops (Fixing the `var` Issue)

```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Output: 4, 4, 4 (because `var` is function-scoped)
```

🔹 **Fix with Closure using `let`:**

```javascript
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Output: 1, 2, 3 (because `let` is block-scoped)
```

---

:::tip

### When to Use Closures?

✅ Data privacy (e.g., **hiding variables**)  
✅ Maintaining **state** between function calls  
✅ **Callbacks & Event handlers**  
✅ Creating **factory functions**

:::
