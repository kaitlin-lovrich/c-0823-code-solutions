# sql-select-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is SQL and how is it different from languages like JavaScript?
  it is the primary way of interacting with relational databases CRUD functionalities, it is different from javascript because javascript is an imperative programming language (you tell it what to do and how to do it) wheras SQL is a declarative programming language (programmers describe the results they want and the programming environment comes up with its own plan for getting those results) HTML and CSS are declarative languages
- How do you retrieve specific columns from a database table?
  With a select statement, the query starts with the select keyword, followed by a comma-separated list of column names follwed by a from clause specifying the table and must end with a semicolon. (In postgres specifically, surround table and column names with " double quotes to ensure the case matches)
  example below:

```js
select "name",
       "price"
  from "products"
```

- How do you filter rows based on some specific criteria?
  using the where clause, where clause comes after the from clause, text values are wrapped in single quotes, column is being compared using a single = equals sign. (Other comparisons like <, >, and != are available too).

```js
select "productId",
       "name",
       "price"
  from "products"
 where "category" = 'cleaning';
```

- What are the benefits of formatting your SQL?
  better readability
- What are four comparison operators that can be used in a `where` clause?
  =, <, >, and !=
- How do you limit the number of rows returned in a result set?
  using the limit clause
- How do you retrieve all columns from a database table?
  select \* (universal selector)
- How do you control the sort order of a result set?
  use the `order by` clause, example below:
  order by comes AFTER the from clause, order by is follwed by a column name. (default is ascending order)

```js
select *
  from "products"
  order by "price";
```

## Notes
