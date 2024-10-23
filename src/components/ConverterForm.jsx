import { useState } from "react"
import { SwapIcon } from "../Icons"
import { CurrencySelect } from "./CurrencySelect"

export const ConverterForm = () => {
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("COP")

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <form action="#" className="converter-form">
      <div className="form-group">
        <label className="form-label">Enter Amount</label>
        <input type="number" className="form-input" required />
      </div>

      <div className="form-group form-currency-group">
        <div className="form-section">
          <label className="form-label">From</label>
          <CurrencySelect
            selectedCurrency={fromCurrency}
            handleCurrency={(event) => setFromCurrency(event.target.value)}
          />
        </div>

        <div className="swap-icon" onClick={handleSwapCurrencies}>
          <SwapIcon />
        </div>

        <div className="form-section">
          <label className="form-label">To</label>
          <CurrencySelect
            selectedCurrency={toCurrency}
            handleCurrency={(event) => setToCurrency(event.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="submit-btn">
        Get Exchange Rate
      </button>
      <p className="exchange-rate-result">1,000 usd = 4.323.070 cop</p>
    </form>
  )
}
