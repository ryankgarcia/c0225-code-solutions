# full-stack-practice-notes

## Notes

write notes here...

What needs to happen? Be very specific in each step so that you have a set of directions to work with

first work on getting the database to run (database setup) (done)

- create the database (call it fullStack-practice)
- run the database, test that it is working properly (sudo service postgresql status, then start)
- setup its own folder and add the schema and data sql in it

then work on the server (server setup)

- create a folder called server, inside of that folder add client-error, error-middleware
- inside the server folder add server.ts at the root
- the other files that should be in there are pg and error catching files for the middleware
- connect to the database using db.Pool method

in your server include the express to connect node=> express. use app = express function
use app.listen => to set the port the server will be listening to
app.use
app.(post || get || put || delete) for each of the methods

connecting the server to the front end via httpIE (test via httpie)
test each of the connection points you will be adding for post, get, put, delete (in the terminal)

front end setup (front end setup)
copy/paste your react code to see how everything looks visually for the user
separate them by pages, components, src, product
