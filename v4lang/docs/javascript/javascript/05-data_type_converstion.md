---
sidebar_position: 5
title: Data Type Converstion
slug: ../datatype_converstion
---

# Data Type Converstion

## **1. Implicit Type Conversion (Type Coercion)**

JavaScript automatically converts data types in some operations.

| Expression  | Converted To | Result                                           |
| ----------- | ------------ | ------------------------------------------------ |
| `"5" + 3`   | String       | `"53"` (String concatenation)                    |
| `"5" - 3`   | Number       | `2` (Subtraction forces number conversion)       |
| `true + 2`  | Number       | `3` (`true` → `1`)                               |
| `false + 2` | Number       | `2` (`false` → `0`)                              |
| `5 + null`  | Number       | `5` (`null` → `0`)                               |
| `"5" * "2"` | Number       | `10` (Multiplication forces number conversion)   |
| `"5" == 5`  | Boolean      | `true` (loose equality converts `"5"` to number) |

---

## **2. Explicit Type Conversion (Manual Conversion)**

You can manually convert values using JavaScript methods.

### **String Conversion**

| Method       | Example            | Result  |
| ------------ | ------------------ | ------- |
| `String()`   | `String(123)`      | `"123"` |
| `toString()` | `(123).toString()` | `"123"` |

### **Number Conversion**

| Method         | Example                 | Result                              |
| -------------- | ----------------------- | ----------------------------------- |
| `Number()`     | `Number("123")`         | `123`                               |
| `parseInt()`   | `parseInt("123px")`     | `123` (Extracts number from string) |
| `parseFloat()` | `parseFloat("12.34px")` | `12.34`                             |

### **Boolean Conversion**

| Method      | Example      | Result  |
| ----------- | ------------ | ------- |
| `Boolean()` | `Boolean(1)` | `true`  |
| `!!value`   | `!!0`        | `false` |

#### **Truthy and Falsy Values in Boolean Conversion**

- **Falsy Values** (convert to `false`): `0`, `""` (empty string), `null`, `undefined`, `NaN`, `false`
- **Truthy Values** (convert to `true`): All other values, including `"0"`, `"false"`, `[]`, `{}`, `function(){}`

## **3. Special Cases in Type Conversion**

| Expression          | Converted To | Result                          |
| ------------------- | ------------ | ------------------------------- |
| `Number(undefined)` | `NaN`        | `NaN`                           |
| `Number(null)`      | `0`          | `0`                             |
| `Number(true)`      | `1`          | `1`                             |
| `Number(false)`     | `0`          | `0`                             |
| `Number(" 123 ")`   | `123`        | `123` (Trims spaces)            |
| `Number("abc")`     | `NaN`        | `NaN`                           |
| `Boolean("false")`  | `true`       | `"false"` is a non-empty string |
| `Boolean([])`       | `true`       | An empty array is truthy        |
| `Boolean({})`       | `true`       | An empty object is truthy       |

## **4. JSON Conversion**

To convert objects or arrays to JSON strings:

```js
const obj = { name: "Rahul", age: 25 };
console.log(JSON.stringify(obj)); // '{"name":"Rahul","age":25}'
```

To convert a JSON string back to an object:

```js
const jsonString = '{"name":"Rahul","age":25}';
console.log(JSON.parse(jsonString)); // { name: "Rahul", age: 25 }
```
