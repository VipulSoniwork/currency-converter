currency_converter:
  title: "Currency Converter - Real-time Exchange Rates"
  description: >
    A simple and interactive Currency Converter application that allows users to convert
    between multiple currencies in real-time using live exchange rates. The app enables
    users to select currencies, input an amount, and get the converted value instantly.

  features:
    - Real-time Exchange Rates: "Fetches live exchange rates from an external API."
    - Currency Selection: "Dropdowns to select the source and destination currencies"
    - Currency Swap: "A button to swap the 'From' and 'To' currencies."
    - Favorites: "Allows users to mark their favorite currencies for quick access."
    - Responsive Design: "The application is fully responsive and works seamlessly across different devices."

  tech_stack:
    frontend:
      - React.js
      - Tailwind CSS
      - API integration: "Currency Exchange API"
      - Flag icons: "via flag-icon-css"

  setup_instructions:
    prerequisites:
      - Node.js
      - npm: "comes with Node.js"

    steps_to_run_locally:
      - step_1:
          description: "Clone the Repository"
          command: |
            git clone https://github.com/yourusername/currency-converter.git
            cd currency-converter
      - step_2:
          description: "Install Dependencies"
          command: |
            npm install
      - step_3:
          description: "Start the Development Server"
          command: |
            npm run dev
          note: "This will start the server and open the app in your browser. The app will typically be available at http://localhost:3000."

  api_integration:
    description: "This project uses a currency exchange API to fetch real-time exchange rates."
    suggested_api_services:
      - ExchangeRate API
    note: "Ensure to add your API key to the configuration file in the backend or frontend as required."

  project_structure:
    src:
      components: "Contains React components for the application, such as CurrencyDropdown, App, etc."
      styles: "Contains CSS/SCSS files or Tailwind configuration for styling the app."
      app_js: "Main React component where the currency converter logic is implemented."
      index_js: "Entry point for React, rendering the app into the DOM."

  components_used:
    - CurrencyDropdown: "Dropdown component to select 'From' and 'To' currencies. Displays a list of currencies along with their flags."
    - Conversion Logic: "Handles the core functionality to convert the amount based on selected currencies and live exchange rates."
    - Swap Button: "A button to swap the selected 'From' and 'To' currencies."
    - Favorites: "Allows users to save their favorite currencies for quick selection."

  screenshots:
    description: "Include screenshots of the app's UI to demonstrate the functionality, such as:"
    items:
      - Currency selection
      - Conversion results
      - Responsive design on mobile and desktop
