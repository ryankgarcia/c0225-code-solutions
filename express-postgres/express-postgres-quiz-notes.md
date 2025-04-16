# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?

its purpose is to connect to your database, send SQL queries, receive results, and handle database errors

- How do you tell `pg` which database to connect to?

by creating a database object. in that object, create one pool for your server. and add it at the end of the connection stream.

- How do you send SQL to PostgreSQL from your Express server?

using db.query, the sql and any parameters

- How do you access the rows that get returned from the SQL query?

results.rows and by setting it equal to a variable to store its value

- What must you always remember to put around your asynchronous route handlers? Why?

a try/catch to catch any errors. this way we guarantee that we always return a response to the client, even when an error occurs

- What is a SQL Injection Attack and how do you avoid it in `pg`?

SQL injection attacks is an attacker being granted admin access to the databases
avoid using template literals when making SQL queries in pg
the purpose of parameterizing it is to avoid SQL injection attacks

## Notes
