-- Generate a list of all addresses in the system that includes their "line1", "cities"."name", and "district". Bragging rights if you get the name of the country in there too.
select
    "line1" as "addresses",
    "cit"."name" as "city",
    "district",
    "con"."name" as "country"
  from "addresses" as "a"
  join "cities" as "cit" using ("cityId")
  join "countries" as "con" using ("countryId")
  limit 30;
