import './Rates.css';

import React from 'react'

const Rates = ({rateData}) => {
  return (
    <section className="rates__container">
        <h3>Exchange Rate : </h3>
        <h1>{rateData.rates}</h1>
        <p><i>from </i>{rateData.primaryCurrencyExchanged} <i>to</i> {rateData.secondaryCurrencyExchanged}</p>
    </section>
  )
}

export default Rates