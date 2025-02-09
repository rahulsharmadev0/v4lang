### **Objects in JavaScript: A Complete Overview**  

In JavaScript, an **object** is a collection of key-value pairs where keys are strings (or Symbols) and values can be of any type. 

---

### **1. Declaring an Object**  
#### **Using Object Literals (Most Common)**
```js
let person = {
  name: "Rahul",
  age: 25,
  city: "Delhi"
};
```
#### **Using the `Object` Constructor**
```js
let person = new Object();
person.name = "Rahul";
person.age = 25;
```

### **2. Accessing & Updating Properties**  
```js
console.log(person.name);   // "Rahul"
console.log(person["age"]); // 25
person["age"] = 26; // Update existing
person.city = "Mumbai"; // Update existing
person.country = "India"; // Add new property
```
---

### **4. Object Reference Concept**

- When you create an object, JavaScript:
    - Allocates memory in the heap
    - Creates a reference in the stack
    - The variable holds this reference, not the actual object
- When you assign an object to another variable, only the reference is copied

```js
let obj1 = { name: "A" }; // 1. Object created in heap
                          // 2. Reference stored in stack
                          // 3. obj1 points to heap location

let obj2 = obj1;          // Only the reference is copied
                          // Both variables point to same heap location
```
---

### **5. Shallow Copy vs Deep Copy**  
- **Shallow Copy** (nested objects not include)
  ```js
  let objA = { name: "Rahul", details: { age: 25 } };
  let copyByAssign = Object.assign({}, objA); // Shallow copy
  let copyBySpread = {...objA} // Shallow copy
  ```

- **Deep Copy** (Copies everything)
  ```js
  let objA = { name: "Rahul", details: { age: 25 } };
  let byJson = JSON.parse(JSON.stringify(objA)); // Deep copy
  let byClone = structuredClone(objA);
  ```
---

### **6. Object Comparison (`==` vs `===`)**  
Objects are compared by reference, not by value.  
```js
let obj1 = { name: "Rahul" };
let obj2 = { name: "Rahul" };

console.log(obj1 === obj2); // false (Different memory references)
console.log(obj1 == obj2);  // false
```
---

### **7. Freezing & Sealing Objects**  
- **`Object.freeze(obj)`** → Prevents adding, modifying, or deleting properties.
  ```js
  let obj = { name: "Rahul" };
  Object.freeze(obj);
  obj.name = "Amit"; // No effect
  obj.age = 30; // No effect
  console.log(obj); // { name: "Rahul" }
  ```

- **`Object.seal(obj)`** → Prevents adding or deleting properties but allows modifications.
  ```js
  let obj = { name: "Rahul" };
  Object.seal(obj);
  obj.name = "Amit"; // Allowed
  delete obj.name; // Not allowed
  obj.age = 30; // Not allowed
  console.log(obj); // { name: "Amit" }
  ```
---
