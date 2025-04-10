# postgres-database-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a database schema?

a set of all the tables in your database and their relationship to each other

- What is a table?

a table is data that is stored and has relationships with each other

- What is a row?

one piece of data out of the table that has similar attributes

- What is an attribute and what other names are used to describe them?

an attribute is a column. another name to describe them are column headers

## Notes

to search inside an sql file from the command line use this...

`psql -d <database_name> -c "select * from table_name"`

A collection of tables is called a schema.

A schema defines how the data in a relational database should be organized.

You should be able to complete most things in relationship to the database in the command line but a good visualization tool will diagram the the tables in the database, their structure and the relationship between them

There are operating system specific visualization tools which are often paid for

The following are a few good visualization tools for your own use...
DbVisualizer - mac, linux, windows
pgAdmin - mac, linux, windows
DBeaver - mac, linux, windows

Another free tool that comes built into the curriculum is pgWeb. It doesn't provide visualization features but it does provide an overview of data and tables, and lets you run SQL queries.

this is how you would run it from the command line

pgweb <database-name>

**Side Note**
to stop pgweb do Control+C in your terminal, after you are finished with it, be sure to close it using the same command (Control+C). If you want to run it, and need to use the terminal, open up a second terminal window and work from that one.
