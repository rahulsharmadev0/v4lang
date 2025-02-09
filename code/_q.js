/* -----------------------------------------------
   Object Immutability [Medium]
-------------------------------------------------*/
{
  // Task: Make userId immutable
  let user = {
    userId: 1,
    name: "John",
    age: 30,
  };
  // ans:
  Object.defineProperties(user, { userId: { writable: false } });
  //or
  Object.defineProperty(user, "userId", { writable: false });
}

/* -----------------------------------------------
   Variable Hoisting Behavior [Hard]
-------------------------------------------------*/
{
  console.log(a); // undefined
  var a;
  console.log(a); // undefined
  console.log(a++); // NaN
  console.log(a); // NaN

  var a = 10;
  console.log(a); // 10
}

/* -----------------------------------------------
   Arrow Functions & 'this' Context [Medium]
-------------------------------------------------*/
{
  const foo = () => {
    console.log(this.name);
  };

  foo.call({ name: "John" }); // undefined
}

{
  const foo2 = function () {
    console.log(this.name);
  };

  foo2.call({ name: "John" }); // John
}

/* -----------------------------------------------
   Function & Variable Hoisting [Hard]
-------------------------------------------------*/
console.log(a); // undefined, because a is hoisted

{
  var a = 1;
}
var b = 1;

runMe();

{
  var runMe = function () {
    console.log(a); //  undefined
  };
}

runMe(); // 1 because runMe is defined now

/* -----------------------------------------------
  Function Overriding & Hoisted [Hard] 
-------------------------------------------------*/
function runMe(a) {
  console.log(1 + a);
}

runMe(1); // 3

// this will override the previous function
function runMe(a) {
  console.log(2 + a);
}

runMe(1); // 3

var runMe = (a) => {
  console.log(3 + a);
};

runMe(1); // 4

/* -----------------------------------------------
   Function Overriding & Scoping [Hard]
-------------------------------------------------*/
{
  // 🔄 Overridden at execution time (block scope rules)
  function runMe() {
    console.log(1);
  }
}

runMe(); // 1️

// 🚀 Hoisted during parsing phase
function runMe() {
  console.log(2);
}

runMe(); // 1️

// 📝 Reassigned at execution time (variable assignment)
var runMe = () => {
  console.log(3);
};

runMe; // 🤫 Do Nothing
runMe(); // 3️
runMe.call(); // 3️
