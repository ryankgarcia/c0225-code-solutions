select country."name" as "countryName",
count(*) as "totalCities"
from "cities"
join "countries" as "country" using ("countryId")
group by country."name"
order by "totalCities" desc;
