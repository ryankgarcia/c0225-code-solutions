select c."firstName", c."lastName", pmt."amount"
from "payments" as "pmt"
join "customers" as "c" using ("customerId")
order by pmt."amount" desc
limit 10;
