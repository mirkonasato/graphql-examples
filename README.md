# GraphQL Examples

This repository contains some GraphQL examples in JavaScript. It uses Apollo Server on the backend, React and Apollo Client on the frontend.

The `custom-scalar` branch shows how to write a custom scalar type to represent dates as ISO-8601 strings in the GraphQL schema, while treating them as JavaScript Date objects internally in the server code.

## Setup

Start the server:

```
cd server
npm install
npm start
```

The server will be available at [localhost:9000](http://localhost:9000), and show the GraphQL Playground if you open it in a web browser.

Start the client:

```
cd client
npm install
npm start
```

The React app will be visible at [localhost:3000](http://localhost:3000).
