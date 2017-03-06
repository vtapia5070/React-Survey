/*
 * Buttons!
 */
import React, { Component, PropTypes } from 'react';

class Button extends Component {
    constructor (props) {
        super(props);
    }

    render () {
       return (
            <button
                disabled={this.props.disabled}
                onClick={this.props.onClick}
                value={this.props.value}
            >{this.props.value}</button>
        );
    }
}

Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    value: PropTypes.string,
};

export default Button;
