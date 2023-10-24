# postgres-database-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a database schema?
  A schema defines how the data in a relational database should be organized.
- What is a table?
  a list of rows each having the same set of attributes.
  table correlates to an `array`
- What is a row?
  a record in that spreadsheet a row correlates to an `object` or record Like Record<> in typescript
- What is an attribute and what other names are used to describe them?
  an attribute is a decription of data. commonly referred to as columns

## Notes

Searches the pagila table for atributes of castmembers table
psql -d pagila -c "\d \"castMemebers\""
