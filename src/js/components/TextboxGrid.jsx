import React, { Component, PropTypes } from 'react';
import { _ } from 'underscore';
import NavButtons from './NavButtons.jsx';

class TextboxGrid extends Component {

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
        // TODO: Check which inputs are required/optional.
        const responses = this.props.responses.map((response) => {
            const responseHtml = { __html: response.text }
            return (
                <div key={response.index}>
                    <input
                        id={response.index}
                        type="text"
                        onChange={this.onInputChange}
                    />
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

TextboxGrid.propTypes = {
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

export default TextboxGrid;
