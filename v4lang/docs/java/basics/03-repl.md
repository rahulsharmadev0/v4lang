---
sidebar_position: 3
title: What is REPL?
---

# What is REPL? (Ctrl + Shift + I > console)

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
   2 + 3;
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
