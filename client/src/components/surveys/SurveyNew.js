// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  render() {
    return (
      <div className="container my-3">
        <SurveyForm />
      </div>
    );
  };
};

export default SurveyNew;
