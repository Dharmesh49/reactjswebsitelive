const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const { default: Stripe } = require("stripe");

const stripe = require("stripe")('sk_test_51ITpw9LTn9rgg9arZZAgKkF9ucHDuPRv7QRu9euiQTqvjPLu2JS2APN4Y3NtYIdsiGC5kBP6DOqDYsGeBPH0a6Hi00qzXFjbtG')

const app = express();

app.use(cors({ origin: true}));

app.use(express.json());

app.get('/', (request, response) => response.status(200).send
('hello world')
)

app.post('/payments/create' , async (request, response)=>{

  const total = request.query.total;
    
  console.log('Payment Request Recieved BOOM !!! for this amount >>> ', total)

  const paymentIntent = await Stripe.PaymentIntents.create({
    amount: total,
    currency: "INR",
});

 response.status(201).send({
     clientSecret: paymentIntent.client_secret,
 })
})


exports.api = functions.https.onRequest(app)

//http://localhost:5001/bringmakesshop/us-central1/api

