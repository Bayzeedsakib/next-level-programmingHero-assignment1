# Type Narrowing in TypeScript

Type narrowing is a TypeScript feature that helps the compiler
understand the specific type of a value within a particular part of your
code. It is useful when a variable can hold multiple types, such as
`string | number`. By checking the value first, you can safely use
methods and properties that belong to its actual type.

## 1. Using `typeof`

The `typeof` operator checks JavaScript's basic types, such as strings
and numbers.

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Inside each branch, TypeScript knows whether `value` is a string or a
number.

## 2. Using `instanceof`

The `instanceof` operator checks whether an object was created from a
particular class.

```ts
class Dog {
  bark() {
    console.log("Woof!");
  }
}

function makeSound(animal: Dog | Date) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    console.log(animal.toDateString());
  }
}
```

TypeScript narrows `animal` to `Dog` or `Date` based on the check.

## 3. Using the `in` Operator

The `in` operator checks whether an object contains a particular
property.

```ts
type Admin = { name: string; permissions: string[] };
type Customer = { name: string; purchaseCount: number };

function showDetails(user: Admin | Customer) {
  if ("permissions" in user) {
    console.log(user.permissions);
  } else {
    console.log(user.purchaseCount);
  }
}
```

Here, TypeScript identifies the user's type by checking for the
`permissions` property.

Type narrowing makes code safer, clearer, and easier to maintain. These
checks help prevent errors when working with union types and allow
TypeScript to provide more accurate autocomplete and type checking.
