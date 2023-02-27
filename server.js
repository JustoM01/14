// requiring express
const express = require('express');
// connecting database
const sequelize = require('./Connection/connection');
const path = require('path');



const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);



  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'public')));






  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));

  });
