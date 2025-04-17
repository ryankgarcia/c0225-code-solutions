# full-stack-intro-notes

## Notes

the vite requires its own server and runs on port 5173

**troubleshooting**
if your server is still running and attached to a port, npm run dev may not work correctly, which will give an error saying that an address or port is already being used.

you can handle this by doing the following (development servers usually run on port 5173 and 8080)

check which one the server is being run on and do the following command in the terminal. replace <PORT> with the port number still in use

ex:
lsof -i :5173

kill the process using the Process ID. replace <PID> with the PID listed by the lsof command

kill -9 <PID>

a common place to store passwords or encryption keys is in .env files. this is why they won't be on github
in these exercises we will use dotenv in the node server

CORS = Cross-Origin Resource Sharing. the purpose of it is to restrict which clients an access it

the browser will reject fetch requests to the api server unless the api server is configured to allow requests from localhost. this is because they are on different ports.
when doing your final project, in order to avoid a CORS error, set the fetch path to => fetch('/api/grades')
