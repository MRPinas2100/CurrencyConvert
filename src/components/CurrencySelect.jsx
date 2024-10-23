import { currencyCodes } from "../constants/currencyCodes"

export const CurrencySelect = ({ selectedCurrency, handleCurrency }) => {
  const contryCode = selectedCurrency.substring(0, 2)
  const urlApiFlags = `https://flagsapi.com/${contryCode}/flat/64.png`

  return (
    <div className="currency-select">
      <img src={urlApiFlags} alt="Flag" />
      <select
        className="currency-dropdown"
        value={selectedCurrency}
        onChange={handleCurrency}
      >
        {currencyCodes.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  )
}
