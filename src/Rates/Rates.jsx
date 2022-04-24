import './Rates.css';

import React from 'react'

const Rates = ({rate, primaryCurrency, secondaryCurrency}) => {
  return (
    <section className="rates__container">
      <h3>Exchange Rate : </h3>
        <h1>{rate}</h1>
        <p><i>from </i>{primaryCurrency} <i>to</i> {secondaryCurrency}</p>
    </section>
  )
}

export default Rates