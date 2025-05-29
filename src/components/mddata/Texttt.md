
# Understanding Object and Method Relationships in Coding



## The Core Concept: Objects and Methods

One of the most important realizations in programming is that **70% of coding concepts rely on objects, arrays, and their method relationships**.
Understanding how to interact with objects, call methods, and pass arguments is crucial for writing efficient and scalable code.

---

## Key Insights for Beginners

### 1. Methods and Objects Relationship

 Every method belongs to an object or a class (in object-oriented programming).
 Some methods are built-in (provided by the language), while others are custom (defined by developers).

---

### 2. Understanding Method Arguments

 Some methods require multiple arguments, while others may need none.

Example:

```javascript
console.log("Hello", "World"); // Method with multiple arguments
```

---

### 3. Built-in vs Custom Methods

 Built-in Methods: Provided by the language, such as `JSON.stringify() and Array.map()`

 Custom Methods: Defined by developers inside objects or classes.

---

### 4. Console is an Object, Log is a Method

Many developers use `console.log()` without realizing that:

 console is an object
 log is a method that belongs to the console object

Example:

```javascript
console.log("This is a method call!");
```

You can inspect it like this:

```javascript
console;       // Shows the console object
console.log;   // Shows the log method inside the console object
```

---

## Example: Next.js API Route Using Object & Method

Next.js provides the `NextResponse` object with a method `.json()` that accepts two arguments:

```javascript
import { NextResponse } from 'next/server';

export async function POST(req) {
  const user = { _id: "12345", role: "admin" };
  return NextResponse.json(
    user.role === "admin"
      ? { message: "Welcome, Admin!", status: "success" }
      : { message: "Access Denied", status: "error" },
    { status: 200 }
  );
}
```

---

## Today's Takeaway: Master Object & Method Relations

For beginners, learning how to call methods on objects and pass arguments effectively is a fundamental skill.
It’s a cross-language concept that improves clarity and efficiency in coding.

---

## Action Plan

Practice creating and calling methods on objects in:

* JavaScript
* Python
* Or any other language you're learning

This is a core step in becoming a proficient programmer.
