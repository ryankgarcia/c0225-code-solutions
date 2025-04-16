select a."line1", city."name" as "cityName", a."district", country."name" as "countryName"
from "addresses" as "a"
join "cities" as "city" using ("cityId")
join "countries" as "country" using ("countryId");
