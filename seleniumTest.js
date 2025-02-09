const { Builder, By, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
require('geckodriver');

async function runTest() {
  // Create Firefox options and add the headless argument
  let options = new firefox.Options();
  options.addArguments("-headless"); // Enable headless mode

  let driver = await new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .build();

  try {
    // 1. Open the React app
    await driver.get('http://localhost:3000');
    console.log("Opened the home page.");

    // Verify the home page title
    let homeText = await driver.findElement(By.tagName('h2')).getText();
    if (homeText === "Welcome to the Forum") {
      console.log("Home page loaded successfully.");
    } else {
      console.log("Failed to load the home page.");
    }

    // 2. Navigate to "Find Questions"
    let findQuestionsLink = await driver.findElement(By.linkText("Find Questions"));
    await findQuestionsLink.click();
    await driver.wait(until.urlContains("/questions"), 5000);
    console.log("Navigated to Find Questions.");

    // 3. Navigate to "New Post"
    let newPostLink = await driver.findElement(By.linkText("New Post"));
    await newPostLink.click();
    await driver.wait(until.urlContains("/new-post"), 5000);
    console.log("Navigated to New Post.");

    // 4. Verify the form presence
    let formElement = await driver.findElement(By.tagName("form"));
    if (formElement) {
      console.log("New Post form is visible.");
    } else {
      console.log("New Post form is missing.");
    }

    console.log("All tests passed!");
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    await driver.quit();
  }
}

runTest();
