/*
 * Input - Radio Buttons
 */

// TODO:
// Handle required responses.
// Consider options. (how many can be selected?)
// What do we do with image tags in respose text?

import React, { Component, PropTypes } from 'react';
import { _ } from 'underscore';
import NavButton from './NavButton.jsx';

class RadioButton extends Component {
    constructor (props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);

        // TODO: will there be multiple like this one? if yess make it an array.
        this.state = {
            responseAnswers: {},
        }
        // if only one response is needed can we send back {Q104_2: 1}
        // or will we have to send back all possible answers
        // ex: { Q104_1: 0, Q104_2: 1, Q104_3: 0, Q104_4: 0 }
    }

    shouldComponentUpdate (nextProps, nextState) {
        return _.isEqual(this.state.responseAnswers, nextState.responseAnswers);
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

    handleButtonClick (event) {
        this.props.onButtonClick(event, this.state.responseAnswers);
    }

    renderResponses () {
        const responses = this.props.responses.map((response) => {
            return (
                <div key={response.index}>
                    <input
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
                <div>
                    <NavButton disabled={ this.props.position === 0 } onClick={this.handleButtonClick} value="Previous" />
                    <NavButton disabled={ false } onClick={this.handleButtonClick} value="Next" />
                </div>
            </div>
        );
    }
}

RadioButton.propTypes = {
    question: PropTypes.string,
    onButtonClick: PropTypes.func,
    position: PropTypes.number,
    responses: PropTypes.arrayOf(
        PropTypes.shape({
            index: PropTypes.number,
            text: PropTypes.string,
        }),
    ),
}

export default RadioButton;
