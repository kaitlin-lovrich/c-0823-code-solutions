# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  When we want to display multiple similar components from a collection of data in an array
- Why is it important for React components to be data-driven?
  so you can reuse components and plug in data
- Where in the component code would a list of React components typically be built?
  Most of the time, they are built in the JSX inside `{}` using `Array.map()`
- What `Array` method is commonly used to create a list of React components?
  map()
- Why do components in a list need to have unique keys?
  so that it can be uniquely identified among other items in an array
- What is the best value to use as a "key" prop when rendering lists?
  an id in an object

## Notes

only use `Record<>` when you do not know the name of the `keys` aka `properties`

every array of elements must have a unique key at the top of the list of elements
