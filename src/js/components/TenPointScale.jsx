import React, { Component, PropTypes } from 'react';
import { _ } from 'underscore';
import NavButtons from './NavButtons.jsx';

class TenPointScale extends Component {
    constructor (props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);

        this.state = {
            responseAnswers: {},
        }
    }

    shouldComponentUpdate (nextProps, nextState) {
        return _.isEqual(this.state.responseAnswers, nextState.responseAnswers);
    }

    handleButtonClick (event) {
        this.props.onButtonClick(event, this.state.responseAnswers);
    }

    onInputChange (event) {
        const responseIndex = event.target.id;
        const val = event.target.value;
        const answer = {
            [`Q${this.props.position}_${responseIndex}`]: val,
        }

        const answers = _.extend(this.state.responseAnswers, answer);

        this.setState({
            responseAnswers: answers,
        });
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
                <input
                    id="slider1"
                    onChange={this.onInputChange}
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                />
                <NavButtons disabled={this.props.disableButton} onClick={this.handleButtonClick} />
            </div>
        );
    }
}

TenPointScale.propTypes = {
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

export default TenPointScale;
