# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?

insert, select, update, delete

- How do you add a row to a SQL table?

using the insert into statement, the table names and
a values statement in the row right after with the values you want to add

- How do you add multiple rows to a SQL table at once?

by specifying more than one tuple of values, separated by commas

- How do you update rows in a database table?

using the update keyword, and a where clause

- How do you delete rows from a database table?

using the delete keyword table name followed by where clause

- Why is it important to include a `where` clause in your `update` and `delete` statements?

so that sql knows where to delete, and all the data doesn't get deleted

- How do you accidentally delete or update all rows in a table?

if you don't include a where clause

- How do you get back the modified row without a separate `select` statement?

including the returning\* statement

- Why did you get an error when trying to delete certain films?

## Notes

in command line do this to help with viewing the data in the browser.
** pgweb --db pagila **

CRUD FOR SQL

CREATE = INSERT ** this exercise focuses on these with an asterisk
READ = SELECT
UPDATE = UPDATE ** this exercise focuses on these with an asterisk
DELETE = DELETE \*\* this exercise focuses on these with an asterisk

in a database there is no undo button!

a foreign key is a primary key from another table. it encodes the relationship
data integrity is enforced in relational databases
data integrity means the data is consistent

any time you do a mutation include returning\* at the end

psql -d pagila -f name-of-file.sql

in SQL a list of values is referred to as a tuple

an 'insert' statement is a means of adding rows to a table..this is how it would work...

**example**
insert into "products" ("name", "description", "price", "category") // these items are wrapped in double quotes
values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care') // these items are wrapped in single quotes

then by doing the following would return the new entry and the entire table
select \*
from "products"

**adding multiple rows** same idea, except you would just add the content below the values for each row as follows

insert into "products" ("name", "description", "price", "category") // these items are wrapped in double quotes
values ('Ostrich Pillow', 'Feel comfy and cozy!', 99, 'self care')
('Tater mitts', 'Scrub home tatters!', 6, 'cooking')
returning \*; // the returning star is useful because it returns all the rows that were affected by a mutation query

when writing code for the backend API, you will almost always use a returning \*

when updating a table, you must use a 'where' clause or you will delete all of the data by accident.
