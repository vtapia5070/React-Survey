/*
 * Check box inputs
 */

import React, { Component, PropTypes } from 'react';
import { _ } from 'underscore';
import NavButtons from './NavButtons.jsx';

class CheckboxString extends Component {

    constructor (props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        debugger;
        this.state = {
            responseAnswers: props.initialAnswers,
        };
    }

    shouldComponentUpdate (nextProps, nextState) {
        return _.isEqual(this.state.responseAnswers, nextState.responseAnswers);
    }

    handleButtonClick (event) {
        this.props.onButtonClick(event, this.state.responseAnswers);
    }

    onInputChange (event) {
        const responseIndex = event.target.id;
        const val = event.target.checked ? 1 : 0;
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
            const responseHtml = { __html: response.text };
            console.log('answers:', this.state);
            const isChecked = !!this.state.responseAnswers[`Q${this.props.position}_${response.index}`];
            console.log('rendering:', isChecked);

            return (
                <div key={response.index}>
                    <input
                        checked={isChecked}
                        id={response.index}
                        onChange={this.onInputChange}
                        type="checkbox"
                    />
                    <label dangerouslySetInnerHTML={responseHtml}></label>
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
                <div dangerouslySetInnerHTML={questionHtml}></div>
                {this.renderResponses()}
                <NavButtons disabled={this.props.disableButton} onClick={this.handleButtonClick} />
            </div>
        );
    }
}

CheckboxString.propTypes = {
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
};

export default CheckboxString;
