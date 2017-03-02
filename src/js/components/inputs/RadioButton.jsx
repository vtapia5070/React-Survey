/*
 * Input - Radio Buttons
 */

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
            console.log(response);
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
        return (
            <div>
                <p>{this.props.position}</p>
                <label dangerouslySetInnerHTML={this.props.questionHtml} />
                <div className="responses">
                    {this.renderResponses()}
                </div>
            </div>
        );
    }
}

RadioButton.propTypes = {
    questionHtml: PropTypes.object,
    position: PropTypes.number,
    responses: PropTypes.array,
}

export default RadioButton;
