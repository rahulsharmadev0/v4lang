## **JavaScript arithmetic operator:**

| Operator | Name                   | Example         | Result |
|----------|------------------------|----------------|--------|
| `+`      | Addition               | `5 + 3`        | `8`    |
| `-`      | Subtraction            | `10 - 4`       | `6`    |
| `*`      | Multiplication         | `6 * 2`        | `12`   |
| `/`      | Division               | `9 / 3`        | `3`    |
| `%`      | Modulus (Remainder)    | `10 % 3`       | `1`    |
| `**`     | Exponentiation         | `2 ** 3`       | `8`    |
| `++`     | Increment              | `let a = 5; a++` | `6`  |
| `--`     | Decrement              | `let b = 7; b--` | `6`  |


## **JavaScript Bitwise Operators:**

| Operator | Name                      | Example       | Result (Binary) | Result (Decimal) |
|----------|---------------------------|--------------|----------------|----------------|
| `&`      | Bitwise AND               | `5 & 3`      | `0101 & 0011`  | `0001 (1)`    |
| `\|`     | Bitwise OR                | `5 \| 3`     | `0101 | 0011`  | `0111 (7)`    |
| `^`      | Bitwise XOR (Exclusive OR) | `5 ^ 3`     | `0101 ^ 0011`  | `0110 (6)`    |
| `~`      | Bitwise NOT               | `~5`         | `~0101`        | `1010 (-6)`   |
| `<<`     | Left Shift                | `5 << 1`     | `0101 << 1`    | `1010 (10)`   |
| `>>`     | Right Shift (Sign-preserving) | `5 >> 1` | `0101 >> 1`    | `0010 (2)`    |
| `>>>`    | Zero-fill Right Shift     | `-5 >>> 1`   | Depends on 32-bit binary representation | Large positive number |

### Explanation:
- **Bitwise AND (`&`)**: Performs AND on each bit. Only 1 & 1 results in 1.
- **Bitwise OR (`|`)**: Performs OR on each bit. At least one 1 results in 1.
- **Bitwise XOR (`^`)**: Performs XOR on each bit. If bits are different, result is 1.
- **Bitwise NOT (`~`)**: Inverts bits (1s become 0s and vice versa). Uses two's complement for negative values.
- **Left Shift (`<<`)**: Shifts bits left, filling 0s at the right.
- **Right Shift (`>>`)**: Shifts bits right, keeping the sign bit for negative numbers.
- **Zero-fill Right Shift (`>>>`)**: Shifts bits right, always filling 0s (does not preserve sign).


## **JavaScript Comparison Operators:**  

| Operator | Name                         | Example (`a = 5, b = "5"`) | Result |
|----------|------------------------------|---------------------------|--------|
| `==`     | Equal to                     | `a == b`                  | `true`  |
| `===`    | Strict equal to (type + value) | `a === b`                 | `false` |
| `!=`     | Not equal to                 | `a != b`                   | `false` |
| `!==`    | Strict not equal to          | `a !== b`                  | `true`  |
| `>`      | Greater than                 | `a > 3`                    | `true`  |
| `<`      | Less than                    | `a < 3`                    | `false` |
| `>=`     | Greater than or equal to     | `a >= 5`                   | `true`  |
| `<=`     | Less than or equal to        | `a <= 4`                   | `false` |


## **JavaScript Special Operators** 🚀

JavaScript provides several **special operators** that go beyond basic arithmetic and logical operations. These operators enhance functionality and make code more concise.

---

### **1. Ternary Operator (`? :`)**
- A shorthand for `if...else` statements.
- **Syntax:**  
  ```js
  condition ? expressionIfTrue : expressionIfFalse;
  ```
- **Example:**
  ```js
  let age = 18;
  let message = (age >= 18) ? "You can vote!" : "You cannot vote.";
  console.log(message); // Output: You can vote!
  ```

---

### **2. Spread Operator (`...`)**
- Expands (spreads) elements of an array or properties of an object.
- **Example with Arrays:**
  ```js
  let arr1 = [1, 2, 3];
  let arr2 = [...arr1, 4, 5, 6]; // Combines arrays
  console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
  ```
- **Example with Objects:**
  ```js
  let obj1 = { name: "Alice" };
  let obj2 = { ...obj1, age: 25 };
  console.log(obj2); // Output: { name: "Alice", age: 25 }
  ```

---

### **3. Rest Operator (`...`)**
- Collects multiple elements into an array.
- **Example:**
  ```js
  function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  console.log(sum(1, 2, 3, 4)); // Output: 10
  ```

---

### **4. Nullish Coalescing Operator (`??`)**
- Returns the right-hand operand if the left-hand operand is `null` or `undefined`.
- **Example:**
  ```js
  let user = null;
  let username = user ?? "Guest";
  console.log(username); // Output: Guest
  ```

---

### **5. Optional Chaining Operator (`?.`)**
- Prevents errors when accessing nested properties that may not exist.
- **Example:**
  ```js
  let person = { name: "Alice", address: { city: "New York" } };
  console.log(person.address?.city); // Output: New York
  console.log(person.contact?.phone); // Output: undefined (no error)
  ```

---

### **6. Comma Operator (`,`)**
- Evaluates multiple expressions and returns the last one.
- **Example:**
  ```js
  let a = (1, 2, 3);
  console.log(a); // Output: 3
  ```

---

### **7. `typeof` Operator**
- Returns the type of a variable.
- **Example:**
  ```js
  console.log(typeof 42); // Output: "number"
  console.log(typeof "Hello"); // Output: "string"
  console.log(typeof undefined); // Output: "undefined"
  ```

---

### **8. `instanceof` Operator**
- Checks if an object is an instance of a specific class.
- **Example:**
  ```js
  class Car {}
  let myCar = new Car();
  console.log(myCar instanceof Car); // Output: true
  ```

---

### **9. `in` Operator**
- Checks if a property exists in an object.
- **Example:**
  ```js
  let obj = { name: "Alice", age: 25 };
  console.log("name" in obj); // Output: true
  console.log("gender" in obj); // Output: false
  ```

---

### **10. `delete` Operator**
- Removes a property from an object.
- **Example:**
  ```js
  let obj = { name: "Alice", age: 25 };
  delete obj.age;
  console.log(obj); // Output: { name: "Alice" }
  ```

