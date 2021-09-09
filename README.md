# SNIPTECH-BE

A URL shortening service backend running Node.js with Express, with the database using PostgreSQL.

It's front-end codebase is available [here](https://github.com/keithlim/sniptech).

SnipTech is currently hosted on the Heroku platform under a free plan, and can be accessed [here](https://sniptech.herokuapp.com/). Similarly for the backend, the server can be tested using the root url: https://sniptech-be.herokuapp.com/.

The overall system is running a PEAN stack.

## Technology

### Server Architecture
- [Express] - a fast, minimal and flexible Node.js web application framework

- [Node.js] - an open-source Javascript server environment that is asynchronous event-driven

- [PostgreSQL] - an open-source relational database management system

### Notable Packages

- [cors] - to allow the whitelisting of the front-end domain, as both sides of the stack do not share the same domain

- [dotenv] - to support development when having development and production environments

- [pg] - a pure JavaScript PostgreSQL client for Node.js, to facilitate PostgreSQL operations, it's main logic is located [here](https://github.com/keithlim/sniptech-be/blob/master/src/db/pg-util.js)

[//]: #
   [Express]: <https://www.npmjs.com/package/express>
   [Node.js]: <https://nodejs.org/en/>
   [PostgreSQL]: <https://www.postgresql.org/>
   [cors]: <https://www.npmjs.com/package/cors>
   [dotenv]: <https://www.npmjs.com/package/dotenv>
   [pg]: <https://www.npmjs.com/package/pg>
