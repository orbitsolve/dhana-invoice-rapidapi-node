const request = require('request');

function fnGenerateInvoice(apiKey, invoiceData) {
    console.log("Calling API using REQUEST...");

    const options = {
        method: 'POST',
        url: 'https://dhana-invoice.p.rapidapi.com/invoice/generate',
        headers: {
            'content-type': 'application/json',
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'dhana-invoice.p.rapidapi.com',
            useQueryString: true
        },
        body: invoiceData,
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });

}

module.exports = {
    generateInvoice: fnGenerateInvoice
}