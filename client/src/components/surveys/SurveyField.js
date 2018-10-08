// SurveyField contains logic to render a single label and text input
import React from 'react';

export default ({ input, label }) => {
  return (
    <div class="form-group">
      <label>{label}</label>
      <input className="form-control" {...input} />
    </div>
  )
};
