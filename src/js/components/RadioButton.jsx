/*
 * Input - Radio Buttons
 */

// TODO:
// Handle required responses.
// Consider options. (how many can be selected?)
// What do we do with image tags in respose text?

import React, { Component, PropTypes } from 'react';
import { _ } from 'underscore';
import NavButtons from './NavButtons.jsx';

class RadioButton extends Component {

    constructor (props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);

        // TODO: will there be multiple like this one? if yess make it an array.
        this.state = {
            responseAnswers: props.initialAnswers,
        }
        // if only one response is needed can we send back {Q104_2: 1}
        // or will we have to send back all possible answers
        // ex: { Q104_1: 0, Q104_2: 1, Q104_3: 0, Q104_4: 0 }
    }

    shouldComponentUpdate (nextProps, nextState) {
        return _.isEqual(this.state.responseAnswers, nextState.responseAnswers);
    }

    handleButtonClick (event) {
        this.props.onButtonClick(event, this.state.responseAnswers);
    }

    onInputChange (event) {
        const responseIndex = event.target.id;
        const val = event.target.checked? 1 : 0;
        const answer = {
            [`Q${this.props.position}_${responseIndex}`]: val,
        }

        const answers = _.extend(this.state.responseAnswers, answer);

        this.setState({
            responseAnswers: answers,
        });
    }

    renderResponses () {
        const responses = this.props.responses.map((response) => {
            const isChecked = this.state.responseInitialValues[`Q${this.props.position}_${response.index}`];
            console.log('rendering:', isChecked);
            return (
                <div key={response.index}>
                    <input
                        checked={isChecked}
                        id={response.index}
                        onChange={this.onInputChange}
                        type="radio"
                    />
                    <label>{response.text}</label>
                </div>
            );
        });

        return responses;
    }

    render () {
        const questionHtml = { __html: this.props.question }
        return (
            <div>
                <p>Question {this.props.position}</p>
                <label dangerouslySetInnerHTML={questionHtml} />
                <div className="responses">
                    {this.renderResponses()}
                </div>
                <NavButtons disabled={this.props.disableButton} onClick={this.handleButtonClick} />
            </div>
        );
    }
}

RadioButton.propTypes = {
    disableButton: PropTypes.string,
    initialAnswers: PropTypes.object,
    onButtonClick: PropTypes.func,
    position: PropTypes.number,
    question: PropTypes.string,
    responses: PropTypes.arrayOf(
        PropTypes.shape({
            index: PropTypes.number,
            text: PropTypes.string,
        }),
    ),
}

export default RadioButton;
