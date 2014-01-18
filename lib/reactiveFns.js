var _ = require('lodash');

module.exports = function (app) {
  app.on('model', function(model) {
    model.fn('$validate.messages', function (inputErrors, inputEvent, formEvent, rules) {
      // show all errors if the form was submitted
      if (formEvent === 'submit') return inputErrors;

      // show errors associated with this event (keypress, blur, etc..)
      if (!rules[inputEvent]) return [];
      return _.filter(inputErrors, function (err) {
        return rules[inputEvent][err];
      });
    });
  });
};