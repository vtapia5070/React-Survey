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

export const questionTypes = {
    3: 'RadioButton'
};
