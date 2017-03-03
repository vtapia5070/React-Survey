import React from 'react';
import ReactDOM from 'react-dom';
import { apiKey, SampleSurvey } from './utilities/private.js';
import { getSurvey, questionTypes } from './utilities';
import RadioButton from './components/inputs/RadioButton.jsx';

class Survey extends React.Component {
    constructor () {
        const survey = SampleSurvey;

        // TODO: We will need a way to determine which question we will start with.
        this.setState({
            answers: {}, // Where we will store respondent answers.
            position: 101, // Current question.
            questions: survey.questions, // TODO: Destructure questions to be assigned to position number.
        });
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

        const question

        return surveyQuestions;
    }

    renderQuestion () {
        // this.state.questions
    }

    render () {
        this.constructor.loadSurvey();

        return (
            <div className="survey-container">
                {this.renderQuestion}
            </div>
        );
    }
};

ReactDOM.render(
    <Survey />,
    document.querySelector('#app')
);
