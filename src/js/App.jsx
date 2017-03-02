import React from 'react';
import ReactDOM from 'react-dom';
import { apiKey, SampleSurvey } from './private.js';
import { getSurvey, questionTypes } from './utilities';
import RadioButton from './components/inputs/RadioButton.jsx';

class HelloWorld extends React.Component {

    static loadSurvey () {
        return SampleSurvey;
    }

    renderQuestions () {
        const survey = this.constructor.loadSurvey();

        let surveyQuestions = survey.questions.map((question) => {
            const questionType = questionTypes[question.type];
            const questionHtml = { __html: question.label };
            return (
                questionType &&
                <RadioButton
                    key={question.position}
                    questionHtml={questionHtml}
                    position={question.position}
                    responses={question.responses}
                />
            );
        });

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
