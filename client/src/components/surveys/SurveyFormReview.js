// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <h6 className="card-title">{label}</h6>
        <p className="card-text text-muted mb-3">{formValues[name]}</p>
      </div>
    );
  })

  return (
    <div >

      <div className="card bg-light mt-3 mx-auto" style={{width: '50rem'}}>
        <div className="card-body">

          {reviewFields}

          <button onClick={onCancel} className="btn btn-dark mr-2" /* style={{ backgroundColor: '#e9ecef' }} */ >Edit</button>
          <button onClick={() => submitSurvey(formValues)} className="btn btn-warning mr-2" style={{ backgroundColor: '#ffb982', borderColor: '#ffb982' }}>Send Survey</button>
        </div>
      </div>

    </div>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
