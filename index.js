module.exports = function (app) {
  require('./lib/controllerFns')(app);
  require('./lib/reactiveFns')(app);
};