import React, { Component, PropTypes } from 'react';

class TenPointScale extends Component {
    constructor (props) {
        super(props);
    }

    renderResponses () {
        // TODO: What about the example in the design specs?
        // Will we have multiple scales for each response seperately?
        // Or will all of these questions be similar to this survey (BAILEYS)?
        // Each response is a point in the scale.
    }

    render () {
        const questionHtml = { __html: this.props.question }
        return (
            <div>
                <p>Question {this.props.position}</p>
                <div dangerouslySetInnerHTML={questionHtml}></div>
                <input id="slider1" type="range" min="1" max="10" step="1" />
            </div>
        );
    }
}

TenPointScale.propTypes = {
    question: PropTypes.string,
    position: PropTypes.number,
    responses: PropTypes.arrayOf(
        PropTypes.shape({
            index: PropTypes.number,
            text: PropTypes.string,
        }),
    ),
};

export default TenPointScale;
