---
sidebar_position: 1
title: Flow Control
---


**Flow control (or control flow) in Dart** refers to the way a program executes statements in a logical sequence based on conditions, loops, and branching structures. It determines how the program makes decisions and repeats actions.

### **Types of Flow Control in Dart**
Flow control can be categorized into three main types:

### 1. **Conditional Statements (Decision Making)**
   - Used to execute code based on conditions.

#### **`if` Statement**
Executes a block of code if the condition is `true`.

```dart
int age = 18;

if (age >= 18) {
  print("You are eligible to vote.");
}
```

#### **`if-else` Statement**
Provides an alternative block to execute when the condition is `false`.

```dart
int marks = 40;

if (marks >= 50) {
  print("Pass");
} else {
  print("Fail");
}
```

#### **`if-else if-else` Statement**
Checks multiple conditions in sequence.

```dart
int score = 85;

if (score >= 90) {
  print("Grade: A");
} else if (score >= 75) {
  print("Grade: B");
} else {
  print("Grade: C");
}
```

#### **`switch-case` Statement**
Used for multiple conditions, especially when comparing against fixed values.

```dart
String grade = "B";

switch (grade) {
  case "A":
    print("Excellent!");
    break;
  case "B":
    print("Good job!");
    break;
  case "C":
    print("Needs improvement.");
    break;
  default:
    print("Invalid grade.");
}
```

---

### 2. **Looping Statements (Repetition)**
   - Used to execute a block of code multiple times.

#### **`for` Loop**
Executes code a fixed number of times.

```dart
for (int i = 1; i <= 5; i++) {
  print("Iteration $i");
}
```

#### **`while` Loop**
Executes as long as a condition is `true`.

```dart
int num = 1;

while (num <= 3) {
  print("Number: $num");
  num++;
}
```

#### **`do-while` Loop**
Executes at least once, then repeats as long as the condition is `true`.

```dart
int count = 1;

do {
  print("Count: $count");
  count++;
} while (count <= 3);
```

#### **`for-in` Loop (Iterating Over Collections)**
Used for iterating over lists, sets, and maps.

```dart
List<String> fruits = ["Apple", "Banana", "Cherry"];

for (String fruit in fruits) {
  print(fruit);
}
```

#### **`forEach` Loop**
Executes a function on each element of a collection.

```dart
fruits.forEach((fruit) => print(fruit));
```

---

### 3. **Control Statements (Altering Flow)**
   - Used to modify loop or function execution.

#### **`break` Statement**
Exits the loop immediately.

```dart
for (int i = 1; i <= 5; i++) {
  if (i == 3) break; // Stops at 3
  print(i);
}
```

#### **`continue` Statement**
Skips the current iteration and moves to the next.

```dart
for (int i = 1; i <= 5; i++) {
  if (i == 3) continue; // Skips 3
  print(i);
}
```

#### **`return` Statement**
Exits a function and optionally returns a value.

```dart
int add(int a, int b) {
  return a + b;
}
```

---

### **Flow Control in Exception Handling**
Dart provides `try`, `catch`, `finally`, and `throw` for handling errors.

```dart
try {
  int result = 10 ~/ 0; // Division by zero
} catch (e) {
  print("Error: $e");
} finally {
  print("Execution complete.");
}
```

---

### **Conclusion**
Flow control in Dart helps structure the logic of your program efficiently using **conditions, loops, and control statements**. Mastering these concepts allows you to write **efficient, readable, and error-free** Dart programs. 🚀