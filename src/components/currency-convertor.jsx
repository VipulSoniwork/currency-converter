import { useEffect, useState } from "react";
import axios from "axios";
import CurrencyDropdown from "./dropdown";
import { HiArrowsUpDown } from "react-icons/hi2";
import currencySymbolMap from 'currency-symbol-map';

import "../style/style.css"

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [converting, setConverting] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || ["INR", "EUR"]
  );

  const fetchCurrencies = async () => {
    try {
      const res = await axios.get("https://api.frankfurter.app/currencies");
      const currencyNames = Object.entries(res.data).map(([code, name]) => ({
        code,
        name
      }));
      setCurrencies(currencyNames);
    } catch (error) {
      console.error("Error Fetching Currencies", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  useEffect(() => {
    setConvertedAmount(null);
  }, [fromCurrency, toCurrency, amount]);

  const convertCurrency = async () => {
    if (amount <= 0 || isNaN(amount)) {
      alert("Please enter a valid amount greater than 0.");
      return;
    }

    setConverting(true);
    try {
      const res = await axios.get(`https://api.frankfurter.app/latest`, {
        params: {
          amount,
          from: fromCurrency,
          to: toCurrency,
        },
      });
      const symbol = currencySymbolMap(toCurrency);
      setConvertedAmount(
        `${symbol}${res.data.rates[toCurrency].toFixed(2)} ${toCurrency}`
      );
    } catch (error) {
      alert("Failed to fetch conversion rate. Please try again later.");
      console.error("Error Fetching Conversion Rate:", error);
    } finally {
      setConverting(false);
    }
  };

  const handleFavorite = (currency) => {
    let updatedFavorites = [...favorites];

    if (favorites.includes(currency)) {
      updatedFavorites = updatedFavorites.filter((fav) => fav !== currency);
    } else if (favorites.length < 5) {
      updatedFavorites.push(currency);
    } else {
      alert("You can only have up to 5 favorite currencies.");
      return;
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="max-w-md mx-auto my-10 p-8 bg-gray-900 rounded-lg shadow-2xl">
  <h2 className="mb-4 text-2xl font-semibold text-white text-center">
    CURRENCY CONVERTER
  </h2>

  {/* Swap Section */}
  <div className="p-6 bg-gray-900 rounded-lg shadow-inner">
    <div className="flex justify-between items-center mb-8">
      <label
        htmlFor="amount"
        className="text-lg font-semibold text-gray-400"
      >
        Amount to Convert:
      </label>
      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        className="w-36 p-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
      />
    </div>

    {/* Updated Grid Layout */}
    <div className="grid  gap-3 items-center">
      {/* From Dropdown */}
      <div className="col-span-1">
        <CurrencyDropdown
          favorites={favorites}
          currencies={currencies}
          title="From:"
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          handleFavorite={handleFavorite}
        />
      </div>

      {/* Swap Button */}
      <div className="col-span-1 flex justify-center">
        <button
          onClick={swapCurrencies}
          className="p-3 bg-green-500 rounded-full hover:bg-green-600 transition-all duration-300"
        >
          <HiArrowsUpDown className="text-2xl text-white" />
        </button>
      </div>

      {/* To Dropdown */}
      <div className="col-span-1">
        <CurrencyDropdown
          favorites={favorites}
          currencies={currencies}
          title="To:"
          currency={toCurrency}
          setCurrency={setToCurrency}
          handleFavorite={handleFavorite}
        />
      </div>
    </div>
  </div>

  {/* Convert Button */}
  <div className="flex justify-center mt-4">
    <button
      onClick={convertCurrency}
      className={`w-full py-3 text-lg font-semibold bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 ease-in-out 
      ${converting ? "animate-pulse" : ""}`}
    >
      Convert
    </button>
  </div>

  {/* Converted Amount */}
  {convertedAmount && (
    <div className="mt-6 text-lg font-semibold text-center text-green-500 opacity-90 animate-fade-in">
      Converted Amount: {convertedAmount}
    </div>
  )}
</div>


  );
};

export default CurrencyConverter;
