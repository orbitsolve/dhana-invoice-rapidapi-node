# How to call Dhana-Invoice-API from RapidAPI
Dhana-Invoice API provides a simple way to generate Invoices for your customers.  This is a Nodejs example to use Dhana-Invoice API published in RapidAPI marketplace.  

This example shows how to call this API using different HTTP client libraries
- [HTTPS](https://nodejs.org/api/https.html#https_https_request_options_callback)
- [Axios](https://www.npmjs.com/package/axios)
- [Unirest](https://www.npmjs.com/package/unirest)
- [Request](https://www.npmjs.com/package/request)

# Pre-requisites
1. Create your account with [RapidAPI](https://rapidapi.com) 
2. Subscribe [Dhana Invoice](https://rapidapi.com/orbitsolve/api/dhana-invoice)
    - It's free to use this API with a quota of 25 requests per month free.
3. Get your API-Key  
    - You can find API-Key from the Endpoints section or settings

# To test this code
    npm install
    npm test

## Configure API Key
You can create .env file and add your RapidAPI-Key as given below

    API_KEY="xxxx"
