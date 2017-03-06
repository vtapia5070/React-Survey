import React from 'react';
import ReactDOM from 'react-dom';
import { apiKey, SampleSurvey } from './utilities/private.js';
import { getSurvey, QuestionTypes } from './utilities';
import RadioButton from './components/inputs/RadioButton.jsx';

class Survey extends React.Component {
    constructor (props) {
        super(props); // is this neccessary?

        this.loadPreviousQuestion = this.loadPreviousQuestion.bind(this);
        this.loadNextQuestion = this.loadNextQuestion.bind(this);

        const survey = SampleSurvey; // TODO: make sure
        // TODO: We will need a way to determine which question we will start with.
        this.state = {
            answers: {}, // Where we will store respondent answers.
            questionPosition: 0, // Current question.
            questions: survey.questions, // TODO: Destructure questions to be assigned to position number.
        };
    }

    loadPreviousQuestion (event) {
        this.setState({questionPosition: this.state.questionPosition--});
    }

    loadNextQuestion (event) { // When user presses the next button.
        // if (!Object.keys(this.state.answers)) {
            // survey has not started, render the first index of questions array.
            // invoke this.renderQuestion()
            // return
        // }
        // otherwise update state with next question
        this.setState({questionPosition: this.state.questionPosition++});
    }

    renderQuestion () {
        const { position, label, type, responses } = this.state.questions[this.state.questionPosition];
        console.log(position, label, responses);
        // TODO: apply this to all
        return (
            QuestionTypes[type] &&
            <RadioButton
                question={label}
                position={position}
                responses={responses}
            />
        );
        // console.log(question);

    }

    render () {
        return (
            <div className="survey-container">
                { this.renderQuestion() }
                <button
                    value="previous"
                    onClick={this.loadPreviousQuestion}
                >Previous</button>
                <button
                    value="next" // do we need this?
                    onClick={this.loadNextQuestion}
                >Next</button>
            </div>
        );
    }
};

ReactDOM.render(
    <Survey />,
    document.querySelector('#app')
);
