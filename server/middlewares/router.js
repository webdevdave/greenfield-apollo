// modules =================================================
var expressJwt = require('express-jwt');
var path = require('path');
var config = require('../config/config');

module.exports = function(app, express) {
  // API routes ====================================================
  // statuc code 401 if unauthorized
  // pass token in req.headers.authorizaion as 'Bearer [token]'
  var usersRouter = express.Router();
  app.use('/api/users', expressJwt({secret: config.secret},
    usersRouter));
  require('./users')(usersRouter);

  // authentication routes =========================================
  var authRouter = express.Router();
  app.use('/authenticate', authRouter);
  require('./authenticate')(authRouter);

  // frontend routes ===============================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
  });
};
