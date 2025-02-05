JavaScript is a powerful scripting language

| **Use for** | **Popular Software Using JavaScript** |  
|------------|---------------------------------|  
| **Web development** | - **VS Code** (Electron-based) |  
| **Server-side programming with Node.js** | - **WhatsApp Web** (Uses Node.js for backend) |  
| **Browser extensions and add-ons** | - **Discord** (Electron-based app with web tech) |  
| **Mobile app development using frameworks** | - **Instagram** (Uses React Native for mobile apps) |  
| **Scripting and automation tasks** | - **GitHub Actions** (JavaScript for CI/CD automation) |  



## Brief History of JavaScript

- Created by Brendan Eichm at Netscape in 1995
- Originally designed for `Netscape Browser` to make websites interactive
- Microsoft created JScript for Internet Explorer as a competitor. Internet Explorer was discontinued in 2022.
- Standardized as **ECMAScript by ECMA International in 1997**
- Evolved beyond browsers:
    - Node.js (2009) enabled server-side JavaScript
    - Modern frameworks like React, Angular, and Vue.js
    - "Any application that can be written in JavaScript, will eventually be written in JavaScript" (Atwood's Law)

Key Milestones:
1. 1995: Birth at Netscape
2. 1996: Microsoft's JScript (#CopyCat 😺)
3. 1997: ECMAScript standardization
4. 2009: Node.js release
5. 2015: ECMAScript 6 (ES6) major update

## What is ES6 (ECMAScript 6)?
ES6 (ECMAScript 2015) is the 6th version of JavaScript, introduced in 2015.

## JavaScript Compilation Process in Modern Engines
JavaScript is **Just-In-Time (JIT) compiled**, meaning it is compiled into machine code right before execution. This process consists of multiple stages:

#### Step 1: Parsing
- The JavaScript engine reads the code and breaks it into tokens (lexical analysis).
- These tokens are then converted into an **Abstract Syntax Tree (AST)**, which represents the structure of the code.
- If there are syntax errors, they are detected at this stage.

#### Step 2: Intermediate Representation (IR) and Bytecode Generation

#### Step 3: Interpretation & Execution

#### **Step 4: Just-In-Time (JIT) Compilation & Optimization**
- The JIT compiler monitors the code as it runs, identifying frequently used functions and loops (a process called **hot path detection**).
- It recompiles and optimizes these frequently executed sections into **machine code**.
- Optimized machine code is stored in memory for reuse, making subsequent executions much faster.

## How JavaScript Optimizes Performance
JavaScript engines use multiple optimization techniques:

#### 1. Inline Caching
- Frequently used functions and objects are stored in memory for quick access.
- Instead of looking up properties dynamically every time, the engine assumes their shape remains the same, reducing lookup overhead.

#### 2. Hidden Classes & Polymorphism Handling
JavaScript engines create **hidden classes** behind the scenes, allowing faster property access.

#### 3. Speculative Optimization & Deoptimization**
- The JIT compiler assumes certain optimizations based on past executions.
- If an assumption is incorrect (e.g., a variable that was always a number suddenly becomes a string), the engine **deoptimizes** and falls back to bytecode execution.

#### 4. Garbage Collection & Memory Management
- JavaScript engines use **Generational Garbage Collection**, meaning frequently used objects are kept, while short-lived ones are quickly discarded.
- The engine identifies and removes unreachable objects to free up memory.

## JavaScript Engine Examples
- **V8 Engine (Google Chrome, Node.js)**  
- **SpiderMonkey (Mozilla Firefox)**  
- **JavaScriptCore (Safari)**  

## What is REPL? (Ctrl + Shift + I > console)
**REPL (Read-Eval-Print Loop)** is an interactive programming environment where you can run JavaScript (or other languages) **line by line** and see the results immediately.  

### **Breaking it down:**
1. **Read** → Takes your input (a JavaScript command).  
2. **Eval** → Evaluates (executes) the command.  
3. **Print** → Displays the result.  
4. **Loop** → Repeats the process for the next command.  

### **Example in JavaScript (Node.js REPL)**  
1. Open your terminal and type:  
   ```sh
   node
   ```
2. You’ll enter the **Node.js REPL** (interactive mode). Try this:  
   ```js
   2 + 3
   ```
   Output:  
   ```
   5
   ```
3. You can also define variables and functions:  
   ```js
   let name = "Rahul";
   console.log("Hello, " + name);
   ```
   Output:  
   ```
   Hello, Rahul
   ```

### **Why is REPL useful?**
- Quick testing of JavaScript code.
- Debugging small code snippets.
- Learning and experimenting with JavaScript without creating a file.  


### **How to Comment and Document Code in JavaScript?**  
Commenting is essential in JavaScript for better readability, debugging, and documentation. JavaScript supports **single-line, multi-line, and JSDoc comments**.

---

### 1️⃣ Single-Line Comments (`//`) - `Ctrl + /`
Use `//` for short explanations or to disable code on a **single line**.  
```js
// This is a single-line comment
let x = 10;  // Variable storing a number
```
✅ **Best for:** Quick notes and debugging.

---

### 2️⃣ Multi-Line Comments (`/* ... */`) - `Shift + Alt + A`
Use `/* ... */` for **multi-line explanations**.  
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

### 3️⃣ Inline Documentation / JSDoc Comments (`/** ... */`) - `Shift + Alt + A`
JSDoc is used for **documenting functions, parameters, and return types**.  
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

### **💡 Best Practices for Commenting**
✔ **Write meaningful comments**, not obvious ones.  
✔ **Use JSDoc for functions, classes, and APIs**.  
✔ **Avoid over-commenting**; code should be self-explanatory.  

  