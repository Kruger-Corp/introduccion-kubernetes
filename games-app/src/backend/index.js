const http = require('http');
const express = require('express');
const gamesRoute = require('./controllers/games.controller');
const database = require('./db/client');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(express.json());

database.getInstance({
  db_host: 'localhost',
  db_port: 5432,
  db_user: 'admin',
  db_password: 'admin'
});

app.use('/games', gamesRoute);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})


