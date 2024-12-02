# Currency Converter - Real-time Exchange Rates

A simple and interactive Currency Converter application that allows users to convert between multiple currencies in real time using live exchange rates. The app enables users to select currencies, input an amount, and get the converted value instantly.

## Features
- **Real-time Exchange Rates**: Fetches live exchange rates from an external API.
- **Currency Selection**: Dropdowns to select the source and destination currencies, with country flags displayed.
- **Currency Swap**: A button to swap the "From" and "To" currencies.
- **Favorites**: Allows users to mark their favorite currencies for quick access.
- **Responsive Design**: The application is fully responsive and works seamlessly across different devices.

## Tech Stack
### Frontend:
- React.js
- Tailwind CSS
- API integration (Currency Exchange API)
- Flag icons (via `flag-icon-css`)

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your local machine:
- **Node.js**
- **npm** (comes with Node.js)

---

### Steps to Run the Project Locally

1. **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/currency-converter.git
    cd currency-converter
    ```

2. **Install Dependencies**
    Run the following command to install the necessary dependencies:
    ```bash
    npm install
    ```

3. **Start the Development Server**
    To start the application locally, use the following command:
    ```bash
    npm run dev
    ```
    This will start the server and open the app in your browser. The app will typically be available at [http://localhost:3000](http://localhost:3000).

---

### API Integration
This project uses a currency exchange API to fetch real-time exchange rates. You can integrate any reliable API service, such as:
- **ExchangeRate API**

Ensure to add your API key to the configuration file in the backend or frontend as required.

---

## Project Structure
- **src:
      **components**: Contains React components for the application, such as CurrencyDropdown, App, etc.
      **styles**: Contains CSS/SCSS files or Tailwind configuration for styling the app.
      **app_js**: Main React component where the currency converter logic is implemented.
      **index_js**: Entry point for React, rendering the app into the DOM.

---

## Components Used
- **CurrencyDropdown**: Dropdown component to select "From" and "To" currencies. Displays a list of currencies.
- **Conversion Logic**: Handles the core functionality to convert the amount based on selected currencies and live exchange rates.
- **Swap Button**: A button to swap the selected "From" and "To" currencies.
- **Favorites**: Allows users to save their favorite currencies for quick selection.
