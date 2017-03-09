/*
 * Check box inputs
 */

import React, { Component, PropTypes } from 'react';
import { _ } from 'underscore';
import NavButtons from './NavButtons.jsx';

class CheckboxString extends Component {
    constructor (props) {
        super(props);
    }

    renderResponses () {
        const responses = this.props.responses.map((response) => {
            const responseHtml = { __html: response.text }
            return (
                <div key={response.index}>
                    <input
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
    question: PropTypes.string,
    position: PropTypes.number,
    responses: PropTypes.arrayOf(
        PropTypes.shape({
            index: PropTypes.number,
            text: PropTypes.string,
        }),
    ),
};

export default CheckboxString;
