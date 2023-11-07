                                 Table "public.entries"
  Column  |  Type   | Collation | Nullable |                  Default                   
----------+---------+-----------+----------+--------------------------------------------
 entryId  | integer |           | not null | nextval('"entries_entryId_seq"'::regclass)
 title    | text    |           | not null | 
 notes    | text    |           | not null | 
 photoUrl | text    |           | not null | 
Indexes:
    "entries_pkey" PRIMARY KEY, btree ("entryId")

