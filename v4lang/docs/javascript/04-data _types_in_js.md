---
sidebar_position: 4
title: Data Types in JavaScript
slug: datatypes
---

# Data Types in JavaScript

### **Explanation:**

- **Immutable types**: Their values cannot be changed after creation.
- **Mutable types**: Their contents can be modified after creation (e.g., objects and arrays).

:::tip

- **Primitive types** are the basic data types that are **immutable** and are **stored by value**. Each primitive type represents a single value.
- **Non-Primitive (Reference)** types are more complex and are **mutable**. They can store collections of values or more complex entities. These types are **stored by reference**, meaning that variables refer to the memory address where the data is stored.

:::

| **Data Type**   | **Immutable** | **Storage Type** | **Description**                                                                   |
| --------------- | ------------- | ---------------- | --------------------------------------------------------------------------------- |
| **`Number`**    | Yes           | value            | integer or floating-point numbers, including `+Infinity`, `-Infinity`, and `NaN`. |
| **`String`**    | Yes           | value            | textual data enclosed in single, double, or backticks (template literals).        |
| **`Boolean`**   | Yes           | value            | logical entity: `true` or `false`.                                                |
| **`null`**      | Yes           | value            | an intentional absence of any object value.                                       |
| **`undefined`** | Yes           | value            | variable that has been declared but not assigned a value.                         |
| **`BigInt`**    | Yes           | value            | large integers with arbitrary precision (greater than the limit of `Number`).     |
| **`Symbol`**    | Yes           | value            | unique and immutable value, often used for object property keys.                  |
| **`Object`**    | Yes           | reference        | collection of key-value pairs (e.g., objects, arrays, functions).                 |
| **`Array`**     | Yes           | reference        | type of object used to store ordered collections of data (indexed by numbers).    |
| **`Function`**  | Yes           | reference        | block of code designed to perform a specific task.                                |
