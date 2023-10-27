# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  The basic operations on data in a SQL table are Create, Read, Update, and Delete
- How do you add a row to a SQL table?
  An SQL insert statement, `values` has to be in the same order as the list of columns ("name", "description", "price"), values must be wrapped in single quotes

```js
insert into tableName ("name", "description", "price", "category");
values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care');
```

- How do you add multiple rows to a SQL table at once?
  Data rows can be batch inserted into a database table by specifying more than one tuple of values, separated by commas (include a returning clause if we want the affected row(s) returned to us.)

```js
insert into "products" ("name", "description", "price", "category")
values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care'),
       ('Tater Mitts', 'Scrub some taters!', 6, 'cooking')
returning *;
```

- How do you update rows in a database table?
  using the update statment and set clause,

```js
update "products"
    set "price" = 100,
        "name" = 'Super Shakeweight'
  where "productId" = 24;
```

- How do you delete rows from a database table?
  by using a delete statement with a from and where clause

```js
delete
  from "products"
  where "category" = 'cleaning'
  and "price"    < 20
```

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  to specify what rows to update or delete
- How do you accidentally delete or update all rows in a table?
  by not including a where clause
- How do you get back the modified row without a separate `select` statement?
  include a returning clause if we want the affected row(s) returned to us

## Notes

include a returning clause if we want the affected row(s) returned to us.

psql -d pagila -c '\l' // databases
psql -d pagila -c '\dt' // tables
psql -d pagila -c '\d <tableName>' // specify table

use pg web for a GUI
