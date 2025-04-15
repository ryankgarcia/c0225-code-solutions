# sql-select-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is SQL and how is it different from languages like JavaScript?

SQL is a declarative programming language

- How do you retrieve specific columns from a database table?

using the select statement and putting the column names you are looking to query for

- How do you filter rows based on some specific criteria?

using the where clause select from table where then you put the criteria you want

- What are the benefits of formatting your SQL?

for readability purposes

- What are four comparison operators that can be used in a `where` clause?

= , != , < , and >

- How do you limit the number of rows returned in a result set?

by adding a limit followed by the number at the end of the select statement

- How do you retrieve all columns from a database table?

with the asterisk symbol in your select statement, with no quotes

- How do you control the sort order of a result set?

by using an order by statement followed by the ascending or desc

## Notes

every time you write a column name or table name write it in double quotes
double quotes is a column name or table name
single quotes is text

SQL = structured query language

select "column_name"
from "table_name"

**put double quotes around all column names & table names**

come up with how you like to write the formatting of your sql and stick to it.

selecting from a database is reading in CRUD

example select statement...
select "name",
"price"
from "products";
