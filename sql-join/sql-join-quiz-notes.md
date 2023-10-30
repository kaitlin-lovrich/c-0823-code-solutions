# sql-join-quiz-notes

## Quiz Questions

- What is a foreign key?
  A foreign key is a key used to link two tables together.
- How do you join two SQL tables? (Provide at least two syntaxes.)
  My answer: "with a `join` <tableName> `using` clause"
  - By using the `join` clause, followed by the `using` clause, and then the column name.
  - By using the `join` clause, followed by the target table name, and then an expression that matches the foreign key in the `from` table with the primary key in the target table.

```js
select *
  from "products"
  join "suppliers" using ("supplierId");
```

- How do you temporarily rename columns or tables in a SQL statement?
  using the `as` clause. alias column names, this applies only to the result set and does not change the original column names.

```js
select "products"."name" as "product",
       "suppliers"."name" as "supplier"
  from "products"
  join "suppliers" using ("supplierId");
```

```js
select "p"."name" as "product",
       "p"."category",
       "s"."name" as "supplier",
       "s"."state"
  from "products" as "p"
  join "suppliers" as "s" using ("supplierId");
```

```js
select "p"."name" as "product",
       "p"."category",
       "s"."name" as "supplier",
       "s"."state"
  from "products" as "p"
  join "suppliers" as "s" using ("supplierId")
 where "p"."category" = 'cleaning'
   and "p"."price"    < 20;
```

- How do you create a one-to-many relationship between two tables?
  a foreign key in one table pointing to a primary key in another table
- How do you create a many-to-many relationship between two tables?
  My answer: "can be modeled by introducing a 3rd "join table" that contains a foreign key to one of the tables and another foreign key to the other table."
  Class answer: - Add a third table (referred to as a "join" table) that contains two fields: a foreign key to the first table and a foreign key to the second table.

## Notes

Things to note about the above select statement:
Selects all columns from both "products" table and "suppliers" table.

- `join` clause goes after `from` clause.
- `join` clause is instructing the database server to link the two tables by their "supplierId" column.
- This form of the `join` clause requires that the `primary key` and `foreign key` have exactly the same name. If that is not the case, an alternate form of the `join` clause can be used:

```js
join "suppliers" on "products"."supplierId" = "suppliers"."supplierId".
```
