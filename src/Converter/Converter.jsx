import './Converter.css';

import React,{useState} from 'react'

import Rates from '../Rates/Rates';

const Converter = () => {

    const currencies = ['USDT','BTC','ETH','XRP','LTC','ADA']

    const [amount, setAmount] =useState(1)
    const [primaryCurrency, setPrimaryCurrency] =useState('BTC')
    const [secondaryCurrency, setSecondaryCurrency] =useState('USDT')

    
    const Convert = () => {
        
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
                    onChange={(e)=>setAmount(e.target.value)}
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
                    value={5}
                    disabled
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
        <Rates/>
    </section>
  )
}

export default Converter