-- Find the total number of physical DVDs in "inventory". This should include all DVDs in all stores.

select "title",
      count(*) as "DVDsPerTitle"
from "films"
join "inventory" using ("filmId")
join "stores" using ("storeId")
group by "title"
