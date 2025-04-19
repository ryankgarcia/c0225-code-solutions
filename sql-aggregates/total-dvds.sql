select "title",
count(*) as "DVDsPerTitle"
from "films"
join "inventory" using ("filmId")
join "stores" using ("storeId")
group by "title";
