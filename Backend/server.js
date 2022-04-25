const PORT =process.env.PORT || 8080;
const express = require('express');
const axios = require('axios').default;
const cors = require('cors');
require('dotenv').config();
var request = require('request');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Welcome to my sudoku backend')
});
app.post('/news', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://crypto-news-live3.p.rapidapi.com/news',
        headers: {
            'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
            }
        };
        axios.request(options)
        .then( (response)=> {
            res.json(response.data);
        }).catch( (error)=> {
            console.error(error);
        });
})
app.post('/convert', (req, res) => {
    const primaryCurrency = req.body.primaryCurrency
    const secondaryCurrency = req.body.secondaryCurrency

    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {from_currency: primaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: secondaryCurrency},
        headers: {
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
            }
        };
        axios.request(options)
        .then( (response)=> {
            res.json(response.data);
        }).catch( (error)=> {
            console.error(error.message);
        });
})

app.listen(PORT ,()=>{console.log(`Server running on port ${PORT}`)});  