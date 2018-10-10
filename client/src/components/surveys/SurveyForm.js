// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return formFields.map( ({ label, name }) =>
		  <Field key={name} component={SurveyField} type="text" label={label} name={name} />
		);
  }

  render() {
    return (
      <div>
        <div className="form-row">
        
        <div className="form-group col-sm-2"></div>

        <div className="form-group col-sm-8">
          <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
              {this.renderFields()}
              <button type="submit" className="btn btn-warning mr-2" style={{ backgroundColor: '#ffb982', borderColor: '#ffb982' }}>Review</button>
              <Link to="/surveys" className="btn btn-light">
                Cancel
              </Link>
          </form>
        </div>
        
        <div className="form-group col-sm-2"></div>
        
        </div>
      </div>
    );
  };
};

function validate(values) {
  const errors= {};

  // Ensure there is a survey title:
  if (!values.title) {
    errors.title = 'You must provide a title.'
  }

  // Ensure there is an email subject:
  if (!values.subject) {
    errors.subject = 'You must provide a subject.'
  }

  // Ensure there is am email body:
  if (!values.body) {
    errors.body = 'You must provide a body.'
  }

  errors.recipients = validateEmails(values.recipients || '');

  if (!values.recipients) {
    errors.recipients = 'You must provide a comma separated list of emails. E.g., test@example.com, test2@example.com, etc.'
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
