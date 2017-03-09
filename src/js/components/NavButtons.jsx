/*
 * Buttons!
 */
import React, { Component, PropTypes } from 'react';

class NavButtons extends Component {
    constructor (props) {
        super(props);
    }

    render () {
       return (
            <div>
                <button
                    disabled={ this.props.disabled === 'Previous'}
                    onClick={this.props.onClick}
                    value="Previous"
                >Previous</button>
                <button
                    disabled={ this.props.disabled === 'Next'}
                    onClick={this.props.onClick}
                    value="Next"
                >Next</button>
            </div>
        );
    }
}

NavButtons.propTypes = {
    disabled: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.string,
};

export default NavButtons;
