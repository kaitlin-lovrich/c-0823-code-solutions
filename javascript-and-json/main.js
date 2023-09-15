const booksArray = [
  {
    isbn: 'isbn1',
    title: 'How to be a Student',
    author: 'Kaitlin Lovrich',
  },
  {
    isbn: 'isbn3',
    title: 'How to be a Teacher',
    author: 'Shawn Kost',
  },
  {
    isbn: 'isbn3',
    title: 'How to be a Great Student',
    author: 'Kathy Garcia',
  },
];

console.log('booksArray:', booksArray);
console.log('typeof booksArray:', typeof booksArray);

const jsonBooks = JSON.stringify(booksArray);

console.log('JSON.stringify(booksArray):', jsonBooks);
console.log('typeof JSON.stringify(booksArray):', typeof jsonBooks);

const jsonNumAndString = `{
  "Number id": "1",
  "String name": "Kaitlin"
}`;

const parsedJson = JSON.parse(jsonNumAndString);

console.log('parsedJson variable:', parsedJson);
console.log('typeof parsedJson variable:', typeof parsedJson);
