select c."firstName", c."lastName", f."title"
from "customers" as "c"
join "rentals" using ("customerId")
join "inventory" using ("inventoryId")
join "films" as "f" using ("filmId")
where f."title" = 'Magic Mallrats';
