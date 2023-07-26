## You need TWO terminal windows to run this project:

In one terminal, cd into `backend`. Run npm install to install the dependencies, then npm start to launch the server (base URL is localhost:8080).
To use custom port, e.g. 8081, please create .env file in backend folder: PORT=8081

In the other terminal, cd into `client`. Run npm install to install the dependencies. Then run npm start, and go to localhost:3000 in your browser.

## To set up database:
- In terminal, cd into `backend`
- run `psql`
- Create a database called `kitchensync` 
- run `\c kitchensync`
- run `\i db/schema/database.sql` to create tables
- run each file in the db/seeds folder,
e.g. `\i db/seeds/01_users.sql`