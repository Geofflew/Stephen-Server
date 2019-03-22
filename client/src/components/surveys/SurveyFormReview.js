import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router';



const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {

  const reviewFields = _.map(formFields, ({name, label}) => {
    return (
      <div>
        <label>{label}</label>
        <label>{formValues[name]}</label>
      </div>
    );

  });



  return (
    <div>
      <h5> Please confirm</h5>

      {reviewFields}
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>

      <button
        onClick={() => submitSurvey(formValues, history)}>
        Sned Survey

      </button>

    </div>
  );
};


function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
