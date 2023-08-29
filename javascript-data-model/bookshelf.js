const bookshelf = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];
// 2.
console.log(
  `Name of author in second book in bookshelf: ${bookshelf[1].author}`
);

// 3.
console.log(`ISBN of first book in bookshelf: ${bookshelf[0].isbn}`);

// 4.
console.log(`Title of third book in bookshelf: ${bookshelf[2].title}`);
