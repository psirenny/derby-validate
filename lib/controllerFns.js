module.exports = function (app) {
  app.fn('$validate.form.event', function (e) {
    e.at().set('event', e.type);
  });
};