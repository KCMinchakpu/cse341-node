const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Eleazar Cross');
});

module.exports = routes;
