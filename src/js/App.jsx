import React from 'react';
import ReactDOM from 'react-dom';
import { apiKey, SampleSurvey } from './utilities/private.js';
import { getSurvey, QuestionTypes } from './utilities';
import RadioButton from './components/inputs/RadioButton.jsx';

class Survey extends React.Component {

    componentWillMount () {
        const survey = SampleSurvey; // TODO: make sure
        // TODO: We will need a way to determine which question we will start with.
        this.setState({
            answers: {}, // Where we will store respondent answers.
            questionPosition: 0, // Current question.
            questions: survey.questions, // TODO: Destructure questions to be assigned to position number.
        });
    }

    loadPreviousButton () {
        // TODO: When user presses the previous button.
    }

    loadNextQuestion () { // When user presses the next button.
        if (!Object.keys(this.state.answers)) {
            // survey has not started, render the first index of questions array.
            // invoke this.renderQuestion()
            // return
        }
        // otherwise update state with next question
        const nextPosition = this.state.position++;
        this.setState({questionPosition: nextPosition});
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
            </div>
        );
    }
};

ReactDOM.render(
    <Survey />,
    document.querySelector('#app')
);
