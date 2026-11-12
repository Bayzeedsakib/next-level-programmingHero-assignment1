# Type Aliases vs. Interfaces in TypeScript

TypeScript provides both `type` aliases and `interface` declarations to
describe the shape of data. They often look similar, but they have some
important differences.

An `interface` is mainly used to describe the structure of objects. It
supports extension with `extends`, and multiple declarations with the
same name are automatically merged. This feature, known as declaration
merging, can be useful when extending existing library types.

A `type` alias can describe more than object shapes. It can represent
unions, intersections, primitive types, tuples, function types, and
other complex combinations. For example, a type alias can define a value
as either a string or a number, which an interface cannot do directly.

Both options support many common object-modeling tasks. Interfaces can
extend other interfaces, while type aliases can combine types using
intersections (`&`). However, type aliases cannot be reopened through
declaration merging.

So, when should you choose one? Use an `interface` when defining object
shapes, especially public APIs or structures that may need to be
extended. Choose a `type` alias when you need unions, tuples,
primitives, or more advanced type combinations.

In everyday TypeScript development, either can work for simple object
definitions. The most important thing is to stay consistent with your
project's conventions and choose the feature that best expresses the
data you are modeling.
