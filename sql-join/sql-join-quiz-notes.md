# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?

a foreign key refers to the id created in one table that is used to represent data from a different table to keep it organized. it is one column that links the two tables together. a foreign key points one

- How do you join two SQL tables? (Provide at least two syntaxes.)

join "table" using ("tableId")
join "table" as "alias" using ("tableId")

- How do you temporarily rename columns or tables in a SQL statement?

by creating an alias for the column title in your select clause

- How do you create a one-to-many relationship between two tables?

a foreign key in one table pointing to a primary key in another table

- How do you create a many-to-many relationship between two tables?

a 3rd table that contains a foreign key to one table and another foreign key to the other table, which creates a join table

## Notes

'join' keyword combines data from different tables in SQL
the join clause combines data from two different database tables into one result set

normal form is the organizational practice of having each piece of data split into exactly one table

best practice is to name the primary key column after the table name
