import React from 'react';
import ReactDOM from 'react-dom';
import { apiKey, SampleSurvey } from './private.js';
import { getSurvey } from './utilities';

class HelloWorld extends React.Component {

    static loadSurvey () {
        return SampleSurvey;
    }

    renderQuestions () {
        const survey = this.constructor.loadSurvey();
        console.log(survey);
        let surveyQuestions = survey.questions.map((question) => {
            return (<div key={question.position}>'{question.label}'</div>);
        })

        return surveyQuestions;
    }

    render () {
        this.constructor.loadSurvey();

        return (
            <div className="survey-container">
                <h1>Hello World</h1>
                <div> This will be the entry file for the survey </div>
                {this.renderQuestions()}
            </div>
        );
    }
};

ReactDOM.render(
    <HelloWorld />,
    document.querySelector('#app')
);
