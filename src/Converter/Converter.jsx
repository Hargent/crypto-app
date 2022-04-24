import './Converter.css';

import React,{useState} from 'react'

import Rates from '../Rates/Rates';
import axios from 'axios'

const Converter = () => {

    const currencies = ['USD','BTC','ETH','XRP','LTC','ADA']

    const [amount, setAmount] =useState(1)
    const [primaryCurrency, setPrimaryCurrency] =useState('USD')
    const [secondaryCurrency, setSecondaryCurrency] =useState('USD');
    const [rates, setRates] = useState(0)
    const [result, setResult] = useState(0)

    
    const Convert = () => {
        const data= [{
            primaryCurrency:`${primaryCurrency}`,
            secondaryCurrency:`${secondaryCurrency}`
        }]
        fetch('http://localhost:8080/convert',{
            method:'POST',
            headers: {
                'content-Type': 'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(response=>response.json())
            .then(data => {
                console.log(data.response);
            })
            .catch(error=>console.log('Error : ',error))
        
        // const options = {
        //     method: 'GET',
        //     url: 'https://alpha-vantage.p.rapidapi.com/query',
        //     params: {from_currency: primaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: secondaryCurrency},
        //     headers: {
        //       'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
        //       'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
        //     }
        //   };
        // axios.request(options).then( (response)=> {
        //     const rate = response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']
        //     setRates(rate)
        //     setResult(rate*amount)
        //     console.log(rate);
        // }).catch( (error)=> {
        //     console.error(error);
        // });
    }
    console.log(amount,primaryCurrency,secondaryCurrency)
    return (
        <section className="container converter__container">
            <h1>Converter</h1>
            <div className="converter__content">
                <div className="converter__primary__content">
                    <h3>Primary Currency : </h3>
                    <input
                        type="number"
                        name="primary"
                        value={amount.value}
                        min='1'
                        placeholder="Enter amount"
                        onChange={(e)=>{setAmount(e.target.value)}}
                    />
                    <select 
                        name="primary"
                        value={primaryCurrency.value}
                        className="currency__select__options"
                        onChange={(e)=>{setPrimaryCurrency(e.target.value)}}
                        >
                            {
                                currencies.map((currency, i) =>{
                                    return(
                                        <option key={i} value={currency}>{currency}</option>
                                    )
                                })
                            }
                    </select>  
                </div>
                <div className="converter__secondary__content">
                    <h3>Secondary Currency : </h3>
                    <input
                        type="number"
                        name="secondary"
                        value={result}
                        disabled ={true}
                    />
                    <select 
                        name="currency__select"
                        value={secondaryCurrency}
                        className="currency__select__options"
                        onChange={(e)=>{setSecondaryCurrency(e.target.value)}}
                        >
                            {
                                currencies.map((currency, i) =>{
                                    return(
                                    <option key={i} value={currency}>{currency}</option>
                                    )
                                })
                            }
                    </select>  
                </div>
            </div>
            <button type="submit" className="btn btn__primary" onClick={Convert}>Convert</button>
            <Rates
            rate={rates}
            primaryCurrency={primaryCurrency}
            secondaryCurrency={secondaryCurrency}
            />
        </section>
    )
}

export default Converter