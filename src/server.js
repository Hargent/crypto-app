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
    

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
    var url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='+primaryCurrency+'&from_to_currency='+secondaryCurrency+'&apikey='+ process.env.REACT_APP_RAPID_API_KEY;

    request.get({
        url: url,
        json: true,
        headers: {'User-Agent': 'request'}
    }, (err, res, data) => {
        if (err) {
        console.log('Error:', err);
        } else if (res.statusCode !== 200) {
        console.log('Status:', res.statusCode);
        } else {
        // data is successfully parsed as a JSON object:
        console.log(data);
        
        }
    }).then((data)=>res.json(data));
    console.log("body :",primaryCurrency )
    // const options = {
    //     method: 'GET',
    //     url: 'https://alpha-vantage.p.rapidapi.com/query',
    //     params: {from_currency: primaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: secondaryCurrency},
    //     headers: {
    //         'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
    //         'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    //         }
    //     };
    //     axios.request(options)
    //     .then( (response)=> {
    //         console.log('res : ', response.data);
    //         res.json(response.data);
    //     }).catch( (error)=> {
    //         console.error(error);
    //     });
})

app.listen(PORT ,()=>{console.log(`Server running on port ${PORT}`)});  