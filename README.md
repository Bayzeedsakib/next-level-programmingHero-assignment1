# TypeScript Assignment 1

This repository contains solutions to TypeScript problems covering fundamental and intermediate TypeScript concepts. The assignment focuses on type safety, functions, generics, interfaces, classes, inheritance, asynchronous programming, and type narrowing.

## Technologies Used

- TypeScript
- JavaScript
- Node.js

## Project Structure

```text
B8A1/
│
├── solution.ts
├── type-narrowing.md
├── type-vs-interface.md
└── README.md
```

## Assignment Tasks

### 1. Function with Optional Parameters

Implemented `multiplyValue()` to multiply a number by a given multiplier. If no multiplier is provided, it defaults to multiplying the value by 2.

### 2. Union Types and Type Checking

Implemented `processInput()` using union types and `typeof` to handle strings, numbers, and booleans differently.

### 3. Function with Readonly Tuple

Implemented `formatCoordinate()` using a readonly tuple containing latitude, longitude, and location name.

### 4. Generics with Rest Parameters

Implemented `concatenateArrays()` using generics and rest parameters to combine multiple arrays into a single array.

### 5. Interfaces and Array Filtering

Defined a `Course` interface and implemented `getPopularCourses()` to return published courses that meet the minimum student requirement.

### 6. Generic Function with Constraints

Implemented `pluckValues()` using generics and `keyof` to extract specific property values from an array of objects.

### 7. Classes and Inheritance

Created an `Employee` class with protected and private properties. Extended it through a `Manager` class using inheritance and the `super` keyword.

### 8. Asynchronous Programming

Implemented `validateAgeAsync()` using Promises and `setTimeout()`. It grants access to users aged 18 or above and rejects the Promise for users below 18.

### 9. Type Narrowing in TypeScript

Explained type narrowing with practical examples using:

- `typeof`
- `instanceof`
- `in` operator

See [type-narrowing.md](./type-narrowing.md) for details.

### 10. Type Aliases vs. Interfaces

Explained the differences between TypeScript's `type` aliases and `interface` declarations, including their use cases, extension, and declaration merging.

See [type-vs-interface.md](./type-vs-interface.md) for details.

## How to Run the Project

**Step 1: Clone the repository**

```bash
git clone https://github.com/Apollo-Level2-Web-Dev/B8A1.git
```

**Step 2: Navigate to the project directory**

```bash
cd B8A1
```

**Step 3: Install TypeScript and ts-node (if not already installed)**

```bash
npm install -g typescript ts-node
```

**Step 4: Run the TypeScript file**

```bash
ts-node solution.ts
```

Alternatively, compile the TypeScript file into JavaScript:

```bash
tsc solution.ts
node solution.js
```

## Learning Outcomes

Through this assignment, I practiced:

- Working with TypeScript primitive and union types.
- Using optional parameters and readonly tuples.
- Understanding generics and generic constraints.
- Defining and using interfaces.
- Applying classes, access modifiers, and inheritance.
- Handling asynchronous operations with Promises.
- Understanding type narrowing techniques.
- Identifying the differences between type aliases and interfaces.

## Author

**Bayzeed Sakib Angel**
