-- List the first and last name of all customers, plus the total amount they've spent on rentals. Order them by total paid, descending.

-- Hint: You need to group the customer rows together and sum up their rental amounts.

-- Hint: Karl Seal should be first with $221.55 paid.

select c."firstName", c."lastName", sum(p."amount") as "totalSpent"
from "customers" as "c"
-- something to note: when doing a complex join statement...this is how to think of writing the joins
-- join "tableName" as "alias" on alias."foreignKey" = alias."primaryKey"
join "rentals" as "r" on r."customerId" = c."customerId"
join "payments" as "p" on p."rentalId" = r."rentalId"
-- when writing the group by clause, these are the
group by c."customerId", c."firstName", c."lastName"
-- order by clause should reference the aggregate you created in the select statement
order by "totalSpent" desc;
