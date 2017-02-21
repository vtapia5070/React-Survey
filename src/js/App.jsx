import React from 'react';
import ReactDOM from 'react-dom';
import apiKey from './private.js';

class HelloWorld extends React.Component {

    static getSurvey () {
        const request = new XMLHttpRequest();
        // const query = ;
        const url = `http://api.insightexpress.com/Questions/Options/Get?X-ApiKey=${apiKey}`;
        request.open('GET', url);
        // request.setRequestHeader('Access-Control-Allow-Origin', '*');
        // request.setRequestHeader('Api-Key', apiKey);
        request.onerror = (res) => {
            console.log(res);
        }; // error handler here
        request.onload = (res) => {
            console.log(res);
        }
        request.send(null);
        // request.send();
        return request.responseText;
    }

    render () {
        this.constructor.getSurvey();
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
