# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
  node package manager
- What is a package?
  a collection of code
- What are some other popular package managers?
  Yarn PnpM
- How can you create a `package.json` with `npm`?
  with the command npm init --yes
- What is a dependency and how do you add one to a package?
  a package that your project needs to ~do the thing~
  add with the command npm install <package>
- What happens when you add a dependency to a package with `npm`?
  it gets added to your package.json file and a node modules directory gets created
- What is a devDependency and how do you add one to a package?
  packages added to your project that are only used during development, add the --save-dev option when you install the package
- How do you define and run `npm` scripts? Why are these useful?
  add a scripts property to your package.json object

## Notes

Questions answered in class

Would you include this package.json file in gitignore?
no, include in your project root folder

Can you remove a dependency using npm?
npm unistall eslint
or go to package .json and delete package from json object

Is there a syntax to update packages?
npm update jquery
