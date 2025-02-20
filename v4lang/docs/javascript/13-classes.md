---
title: Classes in JavaScript
slug: classes
---

# Classes

Classes are a template for creating objects. They encapsulate data with code to work on that data.

> Classes in JS are built on prototypes

## **Defining classes**

A class can be defined in two ways: a class expression or a class declaration.

> class declarations have the same temporal dead zone restrictions as let or const and behave as if they are not hoisted.

```js
// Declaration
class Rectangle {}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {};
```

## **Class body**

The body of a class is the part that is in curly braces {}

## **Constructor**

> constructor can use the super keyword to call the constructor of the super class.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

## **Methods**

Methods are defined on the prototype of each class instance and are shared by all instances. Methods can be plain functions, async functions, generator functions, or async generator functions

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]
```

## **Static methods and fields**

Static properties (fields and methods) are defined on the class itself instead of each instance.

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
p1.displayName; // undefined
p1.distance; // undefined
console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

### **JavaScript Class Fields & Private Properties**

> Class fields behave like object properties, not variables. No `const`, `let`, or access modifiers (`public`, `private`).

```js
class Rectangle {
  height = 0; // Default value
  width; // Defaults to undefined
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

#### **2️⃣ Private Properties (`#`)**

Private fields are only accessible inside the class.

```js
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

❌ Cannot access `#height` or `#width` outside the class.  
✅ Ensures encapsulation & prevents external modifications.

## **Inheritance in JavaScript**

**Inheritance** allows one class (child) to inherit properties and methods from another class (parent). JavaScript supports **prototype-based** and **class-based** inheritance.

### **1️⃣ Class-Based Inheritance (ES6)**

Introduced in ES6, `extends` is used for inheritance.

```js
class Parent {
  greet() {
    console.log("Hello from Parent!");
  }
}
class Child extends Parent {} // Inherits Parent methods
const obj = new Child();
obj.greet(); // Output: Hello from Parent!
```

✅ Uses `super()` to call parent constructor.  
✅ Supports method overriding.

---

### **2️⃣ Prototype-Based Inheritance**

All JavaScript objects inherit from `Object.prototype` by default.

```js
function Parent() {}
Parent.prototype.greet = function () {
  console.log("Hello from Parent!");
};
function Child() {}
Child.prototype = Object.create(Parent.prototype); // Inherit Parent
const obj = new Child();
obj.greet(); // Output: Hello from Parent!
```

✅ More flexible, can modify prototypes dynamically.  
✅ Older but still widely used.

---

## **Types of Inheritance in JavaScript**

1. **Single Inheritance** – A class inherits from one parent.
2. **Multilevel Inheritance** – A class inherits from another child class.
   ```js
   class A {}
   class B extends A {}
   class C extends B {}
   ```
3. **Multiple Inheritance (Not Supported)** – JavaScript does not support direct multiple inheritance, but it can be mimicked using **mixins**.
   ```js
   const mixin = {
     sayHi() {
       console.log("Hi!");
     },
   };
   class User {}
   Object.assign(User.prototype, mixin);
   new User().sayHi(); // Output: Hi!
   ```

JavaScript mainly supports **single and multilevel inheritance**, while **multiple inheritance** is achieved via mixins. 🚀
