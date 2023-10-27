-- List the first and last name of all customers, plus the total amount they've spent on rentals. Order them by total paid, descending.
select
    "firstName",
    "lastName",
    sum("p"."amount") as "totalSpent"
    from "customers"
    join "payments" as "p" using ("customerId")
    group by "customerId"
    order by "totalSpent" desc;
