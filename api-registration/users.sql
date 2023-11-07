                                             Table "public.users"
     Column     |            Type             | Collation | Nullable |                 Default                 
----------------+-----------------------------+-----------+----------+-----------------------------------------
 userId         | integer                     |           | not null | nextval('"users_userId_seq"'::regclass)
 username       | text                        |           | not null | 
 hashedPassword | text                        |           | not null | 
 createdAt      | timestamp(6) with time zone |           | not null | now()
Indexes:
    "users_pkey" PRIMARY KEY, btree ("userId")
    "users_username_key" UNIQUE CONSTRAINT, btree (username)

