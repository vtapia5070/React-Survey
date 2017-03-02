/*
 * Input - Radio Buttons
 */

import React, { Component, PropTypes } from 'react';

class RadioButton extends Component {
    constructor (props) {
        super(props);
    }

    renderResponses () {
        const responses = this.props.responses.map((response) => {
            console.log(response);
            return (
                <div>
                    <input type="radio" />
                    <label>{response.text}</label>
                </div>
            );
        });

        return responses;
    }

    render () {
        console.log('props:', this.props);
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
