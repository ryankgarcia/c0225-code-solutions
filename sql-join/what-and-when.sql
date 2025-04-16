select f."title", f."releaseYear", "genres"."name"
from "films" as "f"
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
where "title" = 'Boogie Amelie';
