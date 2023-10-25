-- Use two joins to select the "releaseYear" and "genres"."name" of the film with the "title" 'Boogie Amelie'. There is a special table in the database named "filmGenre" for this purpose.
select
    "a"."realseYear" as "addresses",
    "cit"."genres" as "cities",
    "a"."district",
    "con"."name"
  from "addresses" as "a"
  join "cities" as "cit" using ("cityId")
  join "countries" as "con" using ("countryId")
  limit 30;
