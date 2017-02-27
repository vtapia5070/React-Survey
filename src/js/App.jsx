import React from 'react';
import ReactDOM from 'react-dom';
import { apiKey, SampleSurvey } from './private.js';

class HelloWorld extends React.Component {

    static getSurvey () {
        function jsonpCallback(json){
            console.log('json response:', JSON.stringify(json));
        }

        $.ajax({
            url: `http://api.insightexpress.com/Questions/Types?X-ApiKey=${apiKey}`, // &callback=jsonpCallback
            type: 'GET',
            jsonpCallback: 'jsonpCallback',
            contentType: 'text/javascript',
            // contentType: 'application/json',
            dataType: "jsonp"
            // success: (result) => {
            //     console.log(result);
            // },
            // error: (err) => {
            //     console.log(err);
            // }
        });

        // function foo(response) {
        //     console.log('response:', response);
        //     // document.getElementById("output").innerHTML = response.bar;
        // };

        // var tag = document.createElement("script");
        // tag.type='application/json';
        // tag.src = `http://api.insightexpress.com/surveys/281980?X-ApiKey=${apiKey}`;

        // document.getElementsByTagName("head")[0].appendChild(tag);
    }

    render () {
        // this.constructor.getSurvey();
        console.log('sampleSurvey:', SampleSurvey);
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
