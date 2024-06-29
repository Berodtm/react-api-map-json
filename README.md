## Overview

This project demonstrates a simple React application that fetches data from an API, filters the data based on user input, and dynamically displays the results. It also includes a counter that shows the total number of entities fetched from the API. The project showcases the use of React hooks, including \`useEffect\`, to manage state and side effects effectively.

## Features

- **API Data Fetching**: Fetches JSON data from the specified API endpoint.
- **Dynamic Data Display**: Displays the fetched data dynamically using the \`map\` method.
- **Filter Search**: Allows users to filter the displayed data based on search input.
- **Entity Counter**: Displays the total number of entities fetched from the API.
- **Controlled Data Fetching**: Uses a state flag with \`useEffect\` to control when the data is fetched, avoiding automatic fetch on page load.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **JavaScript (ES6+)**: For implementing the logic and functionality.
- **CSS**: For styling the components.
- **HTML**: The markup language used within React components.
- **Fetch API**: To make HTTP requests to the API.
- **React Hooks**: Specifically \`useState\` and \`useEffect\` for managing state and side effects.

## Application Structure

### Components

- **App**: The main component that holds the state and handles data fetching, filtering, and rendering.
- **TableList**: A component that receives filtered data and renders it in a table format.
- **Table**: A component that displays individual entity data.

### Functionality

1. **API Data Fetching**:
   - The \`fetchData\` function fetches JSON data from the specified API endpoint.
   - It uses a while loop to handle paginated data by following "next" links until all data is fetched.
   - The total number of entities fetched is stored in a state variable and displayed on the page.

2. **Filter Search**:
   - Users can enter search terms in an input field.
   - The \`filterData\` function filters the fetched data based on the search input and updates the displayed results dynamically.

3. **Dynamic Data Display**:
   - The filtered data is mapped and rendered using the \`TableList\` component, which in turn uses the \`Table\` component to display each entity's details.

4. **Entity Counter**:
   - A counter below the fetch button displays the total number of entities fetched from the API.

5. **Controlled Data Fetching with \`useEffect\`**:
   - Data fetching is controlled using a state flag (\`fetchDataFlag\`).
   - \`useEffect\` is used to trigger the API call only when the fetch button is clicked, not on page load, by setting the \`fetchDataFlag\` state to true.


## Project Structure

```
src/
|-- components/
|   |-- Table.js
|   |-- TableList.js
|-- utils/
|   |-- fetchData.js
|   |-- filterData.js
|-- App.js
|-- index.js
|-- App.css
```

## Using the API

For API interactions, please conduct tests within a development Chrome instance due to CORS restrictions. Follow these steps to initiate a session with disabled security:

On Windows: Press the Windows key + R and run the script: "chrome.exe --user-data-dir='C://Chrome dev session' --disable-web-security"
On Mac: Enter the following into the terminal: open -na "Google Chrome" --args --user-data-dir='/tmp/Chrome dev session' --disable-web-security"

Note: This method should not be used for regular web browsing.