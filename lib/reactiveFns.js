var _ = require('lodash');

module.exports = function (app) {
  app.on('model', function(model) {
    model.fn('$validate.messages', function (inputErrors, inputEvent, formEvent, options) {
      if (formEvent === 'submit') return inputErrors;
      if (!options[inputEvent]) return [];
      return _.intersection(inputErrors, options[inputEvent]);
    });
  });
};