const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    // Destructure incoming request body for the following data:
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      // Convert array of strings into a list of objects
      recipients: recipients.split(',').map(email =>  ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    // Create Mailer object
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();
  });
};
