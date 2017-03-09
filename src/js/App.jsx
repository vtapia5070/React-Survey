import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import { apiKey, SampleSurvey } from './utilities/private.js';
import { getSurvey, QuestionTypes } from './utilities';
import RadioButton from './components/RadioButton.jsx';
import CheckboxString from './components/CheckboxString.jsx';
import TextboxGrid from './components/TextboxGrid.jsx';
import TenPointScale from './components/TenPointScale.jsx';

class Survey extends React.Component {
    constructor (props) {
        super(props); // is this neccessary?

        this.handleButtonClick = this.handleButtonClick.bind(this);

        const survey = SampleSurvey; // TODO: make sure
        // TODO: We will need a way to determine which question we will start with.
        this.state = {
            answers: {
                Q101: true,
            }, // Where we will store respondent answers.
            questionPosition: 0, // Current question.
            questions: survey.questions, // TODO: Destructure questions to be assigned to position number.
        };

    }

    handleButtonClick (event, answers) {
        console.log('submitAnswer called', 'event:', event, 'answers:', answers);
        const val = event.target.value;
        // extend answers to this.state.answers
        const surveyAnswers = _.extend(this.state.answers, answers);
        if (val === 'Previous' && this.state.questionPosition > 0) {
            const nextPosition = this.state.questionPosition - 1;
            this.setState({
                answers: surveyAnswers,
                questionPosition: nextPosition
            });
        }
        if (val === 'Next' && this.state.questionPosition < this.state.questions.length) {
            const nextPosition = this.state.questionPosition + 1;
            this.setState({
                answers: surveyAnswers,
                questionPosition: nextPosition
            });
        }
        console.log(this.state.answers);
    }

    renderQuestion () {
       // TODO: refactor destructuring to apply spread operator for props repeated in each component.
        const { position, label, type, responses } = this.state.questions[this.state.questionPosition];
        console.log(position, label, responses);
        console.log(this.state.questions.length);

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
                        question={label}
                        position={position}
                        responses={responses}
                        onButtonClick={this.handleButtonClick}
                    />
                )
                break;
            case 'CheckboxString':
                return (
                    <CheckboxString
                        question={label}
                        position={position}
                        responses={responses}
                    />
                )
                break;
            case 'TextboxGrid':
                return (
                    <TextboxGrid
                        question={label}
                        position={position}
                        responses={responses}
                    />
                );
                break;
            case 'LabelCustomHTML':
                return <div>This is an empty question with a skip script. Are all of these question types (13) the same?</div>;
                break;
            case 'TenPointScale':
                return (
                    <TenPointScale
                        question={label}
                        position={position}
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
