---
sidebar_position: 1
title: Introduction
slug: introduction
---

# What is ES6 (ECMAScript 6)?

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

#### 3. Speculative Optimization & Deoptimization\*\*

- The JIT compiler assumes certain optimizations based on past executions.
- If an assumption is incorrect (e.g., a variable that was always a number suddenly becomes a string), the engine **deoptimizes** and falls back to bytecode execution.

#### 4. Garbage Collection & Memory Management

- JavaScript engines use **Generational Garbage Collection**, meaning frequently used objects are kept, while short-lived ones are quickly discarded.
- The engine identifies and removes unreachable objects to free up memory.

## JavaScript Engine Examples

- **V8 Engine (Google Chrome, Node.js)**
- **SpiderMonkey (Mozilla Firefox)**
- **JavaScriptCore (Safari)**
