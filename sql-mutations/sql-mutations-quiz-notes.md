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

in a database there is no undo button!

a foreign key is a primary key from another table. it encodes the relationship
data integrity is enforced in relational databases
data integrity means the data is consistent

any time you do a mutation include returning\* at the end

psql -d pagila -f name-of-file.sql

in SQL a list of values is referred to as a tuple
