# Calculator HTML CSS JS with Selenium Test Framework

This is a simple calculator web application built using HTML, CSS, and JavaScript. It also includes a Selenium test framework using Mocha and Mochawesome for automated testing of the calculator functionality. This README file provides instructions on how to set up and use the calculator, run the Selenium tests, and view the test report using Mochawesome.

## Prerequisites

Before you can use the calculator and run the Selenium tests with Mocha and Mochawesome, please ensure that you have the following prerequisites installed on your system:

- Node.js: You can download and install Node.js from the official website: https://nodejs.org
- Web browser driver: You need to have the appropriate web browser driver installed for the browser you want to use for testing. Supported browsers include Chrome, Firefox, Safari, and others. Refer to the Selenium documentation for instructions on how to install the specific browser driver.

## Setup

1. Clone the repository to your local machine:

```
git clone https://github.com/brankabjelica/calculator
```

2. Install the dependencies by navigating to the project directory and running the following command:

```
npm install
```

3. Create a `.env` file in the project root directory. Open the `.env` file and add the following line:

```
USE_BROWSER="prefered web browser"
```

Replace `"prefered web browser"` with the name of the web browser you want to use for testing, e.g., `"chrome"` or `"firefox"`.

## Usage

To use the calculator, open the `index.html` file in your preferred web browser. You can perform basic mathematical calculations using the calculator's user interface.

## Running Selenium Tests with Mocha and Mochawesome

The Selenium tests are located in the `test` directory. These tests verify the calculator's functionality automatically.

To run the Selenium tests with Mocha and generate the Mochawesome report, follow these steps:

1. Make sure you have completed the setup steps mentioned above.

2. Open a terminal and navigate to the project directory.

3. Run the following command:

```
npm run test
```

This command will execute the Selenium tests using Mocha and generate the test report in the `mochawesome-report` folder.

After running the command, you can open the generated `mochawesome.html` file in your web browser to view the detailed test report.

## Conclusion

You now have a calculator web application built using HTML, CSS, and JavaScript, along with a Selenium test framework using Mocha and Mochawesome for automated testing. You can use the calculator for performing mathematical calculations, run the Selenium tests, and view the test report using Mochawesome.

Feel free to explore and modify the code to suit your requirements. Happy calculating and testing!