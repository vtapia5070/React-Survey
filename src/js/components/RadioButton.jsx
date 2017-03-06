/*
 * Input - Radio Buttons
 */

// TODO:
// Handle required responses.
// Consider options. (how many can be selected?)
// What do we do with image tags in respose text?

import React, { Component, PropTypes } from 'react';

class RadioButton extends Component {
    constructor (props) {
        super(props);

        // this.onInputChange = this.onInputChange.bind(this);

        // TODO: How will we set state for each response?
        // How will we manage the change of each response input?
        // Need more insight on how responses will be referenced. (POST, skip scripts, etc.)
    }

    renderResponses () {
        const responses = this.props.responses.map((response) => {
            return (
                <div key={response.index}>
                    <input
                        id={response.index}
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
            </div>
        );
    }
}

RadioButton.propTypes = {
    question: PropTypes.string,
    // question: PropTypes.object,
    position: PropTypes.number,
    responses: PropTypes.arrayOf(
        PropTypes.shape({
            index: PropTypes.number,
            text: PropTypes.string,
        }),
    ),
}

export default RadioButton;
