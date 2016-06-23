const path = require('path');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('client/index.html'));
  });

   // Catch all;
  app.get('/*', (req, res) => {
    res.redirect('/');
    // res.status(404);
    // res.send('Page does not exist. <p><a href="/">Click here</a> to go back</p>');
  });
};