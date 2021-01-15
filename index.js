const genInvHttps = require("./invoice/generate/post-https");
const genInvRequest = require("./invoice/generate/post-request");
const genInvUnirest = require("./invoice/generate/post-unirest");
const genInvAxios = require("./invoice/generate/post-axios");

// loading .env, if exists
require('dotenv').config({path: ".env"});

// if .env file doesnt exist, you can give your RapidAPI-Key here 
var myApiKey = process.env.API_KEY || "your-RapidAPI-key";

// You can modify this JSON to generate Invoices for your customers
var invoiceData = {
	from: {
		city: 'Los Angeles',
		companyName: 'OrbitSolve, LLC',
		country: 'USA',
		state: 'California',
		street: '345 Wellknown St'
	},
	header: { date: '09-Jan-2021', dueDate: '08-Feb-2021', number: '12345' },
	invoiceTo: {
		city: 'Gotham',
		country: 'USA',
		name: 'Peter Parker',
		state: 'Marvel',
		street: '12345 Spider Ave',
		zip: 123456
	},
	items: [
		{ amount: 450, description: 'Laptop', quantity: 1, unitPrice: 450 },
		{ amount: 45, description: 'Tax' }
	],
	output: { format: 'pdf', template: 'letter-green' },
	totals: [{ amount: 10.5, description: 'Shipping & Handling' }],
	footer: {
		paymentTerms: 'Please make your checks payable to OrbitSolve, LLC',
		thanksNote: 'THANK YOU FOR YOUR BUSINESS'
	}
};

// Calling API using HTTPS library
genInvHttps.generateInvoice(myApiKey, invoiceData);

// Calling API using REQUEST library
// genInvRequest.generateInvoice(myApiKey, invoiceData);

// Calling API using UNIREST library
// genInvUnirest.generateInvoice(myApiKey, invoiceData);

// Calling API using AXIOS library
// genInvAxios.generateInvoice(myApiKey, invoiceData);
