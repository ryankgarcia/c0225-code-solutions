select "c"."firstName", "c"."lastName", sum("p"."amount") as "totalSpent"
from "customers" as "c"
join "rentals" as "r" on "r"."customerId"="c"."customerId"
join "payments" as "p" on "p"."rentalId"="r"."rentalId"
group by "c"."customerId", "c"."firstName", "c"."lastName"
order by "totalSpent" desc;
