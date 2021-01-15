const http = require("https");

function fnGenerateInvoice(apiKey, invoiceData) {
  console.log("Calling API using HTTPS...");

  const options = {
    "method": "POST",
    "hostname": "dhana-invoice.p.rapidapi.com",
    "port": null,
    "path": "/invoice/generate",
    "headers": {
      "content-type": "application/json",
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "dhana-invoice.p.rapidapi.com",
      "useQueryString": true
    }
  };

  const req = http.request(options, function (res) {
    const chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      const body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.write(JSON.stringify(invoiceData));
  req.end();

} 

module.exports = {
  generateInvoice: fnGenerateInvoice
}