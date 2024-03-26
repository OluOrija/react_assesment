# React API Application
This is a React application that fetches data from a public API and displays it in a visually appealing format. The application utilizes the JSONPlaceholder API to retrieve data from the /posts endpoint.

# How to Run the Application Locally
To run the application locally, follow these steps:
- Clone the repositoy - git clone <repository-url>
- Navigate to the project directory - cd react-api-app
- Install dependencies - npm install
- Start the development server - npm start

# run the Unit tests using Jest
To run the unit test, follow these steps:
- Clone the repositoy - git clone <repository-url>
- Navigate to the project directory - cd react-api-app
- Run the command: npx jest

# Additional Notes
Dependencies: The application utilizes React, React Bootstrap, and node-fetch for fetching data and rendering components. Ensure that you have these dependencies installed before running the application.

Testing: Unit tests have been included to ensure the functionality of the application. You can run the tests using Jest by running the following command: npx jest

Styling: The application uses Bootstrap for styling components. You can customize the styling further by modifying the styles.css file or by adding additional CSS classes.

Error Handling: Error handling has been implemented for API calls to provide a user-friendly error message in case of failure. Errors are also logged to the browser console for debugging purposes.

Loading Indicator: A loading indicator is displayed while fetching data from the API. There is a 1-second delay before the indicator disappears to improve user experience.

API Endpoint: The application fetches data from the JSONPlaceholder API's /posts endpoint. Ensure you have an internet connection to fetch data successfully.

Unit Test: A unit test has been included to ensure that the API endpoint returns a 200 status code. You can run this test to verify the API's response status.

By following these instructions, you can run the application locally, test its functionality, and make any necessary modifications to suit your requirements. If you encounter any issues or have any questions, feel free to reach out to the project maintainers.
