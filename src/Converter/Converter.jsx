import './Converter.css';

import React,{useState} from 'react'

import Rates from '../Rates/Rates';
import axios from 'axios'

const Converter = () => {

    const currencies = ['USD','BTC','ETH','XRP','LTC','ADA']

    const [amount, setAmount] =useState(1)
    const [primaryCurrency, setPrimaryCurrency] =useState('USD')
    const [secondaryCurrency, setSecondaryCurrency] =useState('USD');
    const [rateData, setRateDate]=useState({
        rates:0,
        result:0,
        primaryCurrencyExchanged:'USD',
        secondaryCurrencyExchanged:'USD',
    })


    
    const Convert = () => {
            console.log("Converting....")
            const data= {
                primaryCurrency : primaryCurrency,
                secondaryCurrency : secondaryCurrency
            }
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
                        const rate = data['Realtime Currency Exchange Rate']['5. Exchange Rate']
                        setRateDate({
                            rates:rate,
                            result:rate*amount,
                            primaryCurrencyExchanged:primaryCurrency,
                            secondaryCurrencyExchanged:secondaryCurrency,
                        })
                    })
                    .catch((error)=>{
                        console.log('Error : ',error)
                    });
    }
    console.log(amount,primaryCurrency,secondaryCurrency)
    return (
        <section className="converter__container">
            <h2>Currency Converter</h2>
            <div className="converter__content">
                <div className="converter__primary__content div">
                    <h3>Primary Currency : </h3>
                    <div>
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
                    
                </div>
                <div className="converter__secondary__content div">
                    <h3>Secondary Currency : </h3>
                    <div>
                        <input
                            type="number"
                            name="secondary"
                            value={rateData.result}
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
            </div>
            <div className="rate__container">
                <Rates
                rateData={rateData}
                />
            </div>
        </section>
    )
}

export default Converter