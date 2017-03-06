import React from 'react';
import ReactDOM from 'react-dom';
import { apiKey, SampleSurvey } from './utilities/private.js';
import { getSurvey, QuestionTypes } from './utilities';
import RadioButton from './components/inputs/RadioButton.jsx';
import Button from './components/Button.jsx';

class Survey extends React.Component {
    constructor (props) {
        super(props); // is this neccessary?

        this.handleButtonClick = this.handleButtonClick.bind(this);

        const survey = SampleSurvey; // TODO: make sure
        // TODO: We will need a way to determine which question we will start with.
        this.state = {
            answers: {}, // Where we will store respondent answers.
            questionPosition: 0, // Current question.
            questions: survey.questions, // TODO: Destructure questions to be assigned to position number.
        };

    }

    handleButtonClick (event) {
        const val = event.target.value;
        if (val === 'Previous' && this.state.questionPosition > 0) {
            const nextPosition = this.state.questionPosition - 1;
            this.setState({questionPosition: nextPosition});
        }
        if (val === 'Next' && this.state.questionPosition < this.state.questions.length) {
            const nextPosition = this.state.questionPosition + 1;
            this.setState({questionPosition: nextPosition});
        }
    }

    renderQuestion () {
        const { position, label, type, responses } = this.state.questions[this.state.questionPosition];
        console.log(position, label, responses);
        // TODO: apply this to all question types, use switch statement?
        return (
            QuestionTypes[type] &&
            <RadioButton
                question={label}
                position={position}
                responses={responses}
            />
        );

    }

    render () {
        return (
            <div className="survey-container">
                { this.renderQuestion() }
                <Button disabled={false} onClick={this.handleButtonClick} value="Previous" />
                <Button disabled={false} onClick={this.handleButtonClick} value="Next" />
            </div>
        );
    }
};

ReactDOM.render(
    <Survey />,
    document.querySelector('#app')
);
