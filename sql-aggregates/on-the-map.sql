-- List the number of "cities" per country in the "countries" table.
select
    "countries"."name" as "countryName",
    count("cityId") as "cityCount"
  from "countries"
  join "cities" using ("countryId")
  group by "countryName"
  order by "cityCount" desc;
