import React from 'react';
import ReactDOM from 'react-dom';
import { apiKey, SampleSurvey } from './utilities/private.js';
import { getSurvey, QuestionTypes } from './utilities';
import RadioButton from './components/RadioButton.jsx';
import Button from './components/Button.jsx';
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
       // TODO: refactor destructuring to apply spread operator for props repeated in each component.
        const { position, label, type, responses } = this.state.questions[this.state.questionPosition];
        console.log(position, label, responses);

        switch (QuestionTypes[type]) {
            case 'RadioButton':
                return (
                    <RadioButton
                        question={label}
                        position={position}
                        responses={responses}
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
                <Button disabled={ this.state.questionPosition === 0 } onClick={this.handleButtonClick} value="Previous" />
                <Button disabled={ this.state.questionPosition === this.state.questions.length } onClick={this.handleButtonClick} value="Next" />
            </div>
        );
    }
};

ReactDOM.render(
    <Survey />,
    document.querySelector('#app')
);
