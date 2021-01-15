var axios = require("axios").default;

function fnGenerateInvoice(apiKey, invoiceData) {
    console.log("Calling API using AXIOS...");

    var options = {
        method: 'POST',
        url: 'https://dhana-invoice.p.rapidapi.com/invoice/generate',
        headers: {
            'content-type': 'application/json',
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'dhana-invoice.p.rapidapi.com'
        },
        data: invoiceData
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

module.exports = {
    generateInvoice: fnGenerateInvoice
}