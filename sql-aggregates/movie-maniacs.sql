-- List the first and last name of all customers, plus the total amount they've spent on rentals. Order them by total paid, descending.
select
    "firstName",
    "lastName",
    "p"."rentalId"."amount" as "totalSpent"
    from "customers" as "c"
    join "rentals" as "r" using ("customerId")
    join "payments" as "p" using ("rentalId")
    order by "totalSpent" desc;
