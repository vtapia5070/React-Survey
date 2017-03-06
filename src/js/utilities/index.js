// TODO : when getting data, filter out query steing questions
export const getSurvey = () => {

    const jsonpCallback =  (json) => {
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

};

export const QuestionTypes = {
    3: 'RadioButton',
    19: 'CheckboxString',
    22: 'TextboxGrid',
    13: 'LabelCustomHTML',
    7: 'TenPointScale'
};
