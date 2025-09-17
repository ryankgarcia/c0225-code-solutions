-- customers table and payments table

-- Select the 10 largest payment amounts, including the first and last name of the customer who paid

-- need to rework this solution because its not correct.
select "c"."firstName" as "customers",
      "c"."lastName",
      "p"."amount" as "payments"
from "c"
join "p" on "c"."customerId" = "p"."customerId"
order by "amount" desc
limit 10;
