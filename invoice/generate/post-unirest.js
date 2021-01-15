var unirest = require("unirest");

function fnGenerateInvoice(apiKey, invoiceData) {
    console.log("Calling API using UNIREST...");

	var req = unirest("POST", "https://dhana-invoice.p.rapidapi.com/invoice/generate");

	req.headers({
		"content-type": "application/json",
		"x-rapidapi-key": apiKey,
		"x-rapidapi-host": "dhana-invoice.p.rapidapi.com",
		"useQueryString": true
	});

	req.type("json");
	req.send(invoiceData);

	req.end(function (res) {
		if (res.error) throw new Error(res.error);

		console.log(res.body);
	});

}

module.exports = {
	generateInvoice: fnGenerateInvoice
}