import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card my-4" key={survey._id}>
          <div className="card-body">
            <h5 className="card-title">{survey.title}</h5>
            <p className="card-text">{survey.body}</p>
            <p className="card-text">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
            <a href="#" className="card-link">Yes Votes: {survey.yes}</a>
            <a href="#" className="card-link">No Votes: {survey.no}</a>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h3 className="mt-3">Previous Surveys:</h3>
        {this.renderSurveys()}
      </div>
    )
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)
