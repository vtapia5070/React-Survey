import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render () {
        return (
            <div className="survey-container">
                <h1>Hello World</h1>
                <div> This will be the entry file for the survey </div>
            </div>
        );
    }
};

ReactDOM.render(
    <HelloWorld />,
    document.querySelector('#app')
);
