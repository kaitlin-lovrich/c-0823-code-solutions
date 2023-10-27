-- Select the 10 largest payment amounts, including the first and last name of the customer who paid. Notice how the one-to-many relationship between customers and payments is modeled in the two tables.

select
    "p"."amount" as "payments",
    "c"."firstName"
    "c"."lastName"
  from "payments" as "p"
  join "customers" as "c" using ("customerId")
  order by "p"."amount" desc
  limit 10;
