module.exports = function (app) {
  app.view.fn('$validate.message', function (messages) {
    return messages ? messages[0] : '';
  });
};