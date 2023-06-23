`use strict`
const { Builder } = require("selenium-webdriver");
const CalculatorPage = require("../pages/CalculatorPage");
require("dotenv").config();
const data = require("../data/calculator");
const assert = require("assert");
const path = require("path");

/**
 * selenium can't open relative path, and we must find absolute path
 *
 */
const relativePath = "../index.html";
const absoluteFilePath = path.resolve(__dirname, relativePath);

const fileUrl = `file://${absoluteFilePath}`;

describe("Test My Calculator", async function () {
  let driver;
  let calculator;
  beforeEach("Open Calculator", async function () {
    driver = new Builder().forBrowser(process.env.USE_BROWSER).build();

    calculator = new CalculatorPage(driver);
    await calculator.visit(fileUrl);
  });
  afterEach("Close browser", function () {
    calculator.closeBrowser();
  });

  it("Addition 2 and 2", async function () {
    await driver.sleep(2000);
    const result = await calculator.simpleCalculating(
      data.two,
      data.add,
      data.two,
      data.equal,
      data.display
    );
    await driver.sleep(2000);
    assert.equal(result, "4");
  });
  it("Multiply 2 and 2", async function () {
    await driver.sleep(2000);
    const result = await calculator.simpleCalculating(
      data.two,
      data.multiply,
      data.two,
      data.equal,
      data.display
    );
    await driver.sleep(2000);
    assert.equal(result, "4");
  });
  it("Multiply 2 and 2 is different from 5", async function () {
    await driver.sleep(2000);
    const result = await calculator.simpleCalculating(
      data.two,
      data.multiply,
      data.two,
      data.equal,
      data.display
    );
    await driver.sleep(2000);
    assert.notEqual(result, '5');
  });
  it("Divide 8 and 4", async function () {
    await driver.sleep(2000);
    const result = await calculator.simpleCalculating(
      data.eight,
      data.divide,
      data.four,
      data.equal,
      data.display
    );
    await driver.sleep(2000);
    assert.equal(result, '2');
  });

});
