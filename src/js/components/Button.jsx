import React, { Component, PropTypes } from 'react';

class Button extends Component {
    constructor (props) {
        super(props);
    }

    render () {
       return (
            <button
                value={this.props.value}
                onClick={this.props.onClick}
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
