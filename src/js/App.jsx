import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import { SampleSurvey } from './utilities/private.js';
import { getSurvey, QuestionTypes } from './utilities/index.js';
import RadioButton from './components/RadioButton.jsx';
import CheckboxString from './components/CheckboxString.jsx';
import TextboxGrid from './components/TextboxGrid.jsx';
import TenPointScale from './components/TenPointScale.jsx';
import NavButtons from './components/NavButtons.jsx';

class Survey extends React.Component {
    constructor (props) {
        super(props); // is this neccessary?

        this.handleButtonClick = this.handleButtonClick.bind(this);

        const survey = SampleSurvey; // TODO: make sure
        // TODO: We will need a way to determine which question we will start with.
        this.state = {
            answers: {
                Q100: 'Test answer',
            }, // Where we will store respondent answers.
            questionPosition: 3, // Current question.
            questions: survey.questions, // TODO: Destructure questions to be assigned to position number.
        };

    }

    handleButtonClick (event, answers = {}) {
        const val = event.target.value;
        if (val === 'Previous' && this.state.questionPosition > 0) {
            const nextPosition = this.state.questionPosition - 1;
            this.setState({
                answers: answers,
                questionPosition: nextPosition
            });
        }
        if (val === 'Next' && this.state.questionPosition < this.state.questions.length) {
            const nextPosition = this.state.questionPosition + 1;
            this.setState({
                answers: answers,
                questionPosition: nextPosition
            });
        }
        console.log('updated answers:', this.state.answers);
    }

    renderQuestion () {
       // TODO: refactor destructuring to apply spread operator for props repeated in each component.
        const { position, label, type, responses } = this.state.questions[this.state.questionPosition];
        let disableButton;
        if (this.state.questionPosition === this.state.questions.length - 1) {
            disableButton = 'Next';
        }
        if (this.state.questionPosition === 0) {
            disableButton = 'Previous';
        }

        // TODO: is there a better way to store the current questionPosition
        // so it matches with the index of the questions array?
        if (position === this.state.questions.length + 100) {
            return (
                <div>
                    <p>This is the end of the survey!</p>
                </div>
            );
        }

        switch (QuestionTypes[type]) {
            case 'RadioButton':
                return (
                    <RadioButton
                        disableButton={disableButton}
                        initialAnswers={this.state.answers}
                        onButtonClick={this.handleButtonClick}
                        position={position}
                        question={label}
                        responses={responses}
                    />
                )
                break;
            case 'CheckboxString':
                return (
                    <CheckboxString
                        disableButton={disableButton}
                        initialAnswers={this.state.answers}
                        onButtonClick={this.handleButtonClick}
                        position={position}
                        question={label}
                        responses={responses}
                    />
                )
                break;
            case 'TextboxGrid':
                return (
                    <TextboxGrid
                        disableButton={disableButton}
                        initialAnswers={this.state.answers}
                        onButtonClick={this.handleButtonClick}
                        position={position}
                        question={label}
                        responses={responses}
                    />
                );
                break;
            case 'LabelCustomHTML':
                return (
                    <div>
                        <p>This is an empty question with a skip script. Are all of these question types (13) the same?</p>
                        <NavButtons disableButton={disableButton} onClick={this.handleButtonClick} />
                    </div>
                );
                break;
            case 'TenPointScale':
                return (
                    <TenPointScale
                        disableButton={disableButton}
                        initialAnswers={this.state.answers}
                        onButtonClick={this.handleButtonClick}
                        position={position}
                        question={label}
                        responses={responses}
                    />
                );
                break;
            default :
                return (
                    <div>The component for this question type has not been created yet.</div>
                );
        }

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
