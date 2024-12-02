import { HiOutlineStar, HiStar } from "react-icons/hi2";

const CurrencyDropdown = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFavorite,
  title = "",
}) => {
  
  const isFavorite = (curr) => favorites.includes(curr);

  if (!currencies || currencies.length === 0) {
    return <div>Loading currencies...</div>; 
  }

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
  {/* Title */}
  <label
    htmlFor={title}
    className="block text-sm font-semibold text-green-400 "
  >
    {title}
  </label>

  {/* Input Section */}
  <div className="mt-2 flex items-center gap-2">
    {/* Dropdown */}
    <div className="relative w-full">
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="w-full py-2 px-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
      >
        {/* Favorites */}
        {favorites.map((favCode) => {
          const favCurrency = currencies.find(
            (curr) => curr.code === favCode
          );
          if (favCurrency) {
            return (
              <option
                className="bg-gray-700 text-white"
                value={favCurrency.code}
                key={favCurrency.code}
              >
                {favCurrency.name} ({favCurrency.code})
              </option>
            );
          }
          return null;
        })}

        {/* Divider */}
        <option disabled className="bg-gray-600">
          ----------
        </option>

        {/* Other Currencies */}
        {currencies
          .filter((currencyObj) => !favorites.includes(currencyObj.code))
          .map((currencyObj) => {
            return (
              <option
                value={currencyObj.code}
                key={currencyObj.code}
                className="bg-gray-700 text-white"
              >
                {currencyObj.name} ({currencyObj.code})
              </option>
            );
          })}
      </select>
    </div>

    {/* Star Button */}
    <button
      onClick={() => handleFavorite(currency)}
      className="p-2 bg-gray-700 rounded-full hover:bg-green-500 transition-colors focus:outline-none"
    >
      {isFavorite(currency) ? (
        <HiStar className="text-yellow-400 text-xl" />
      ) : (
        <HiOutlineStar className="text-gray-400 text-xl" />
      )}
    </button>
  </div>
</div>

  );

};

export default CurrencyDropdown;
