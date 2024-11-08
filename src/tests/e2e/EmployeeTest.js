// Import selenium-webdriver and Firefox driver
const { Builder, By, until } = require("selenium-webdriver");
require("geckodriver");
const firefox = require("selenium-webdriver/firefox");

// Function to build a Selenium WebDriver instance using Firefox
async function setupDriver() {
  const options = new firefox.Options();

  // Set Firefox to run in headless mode
  //options.addArguments("--headless");

  const driver = await new Builder()
    .forBrowser("firefox")
    .setFirefoxOptions(options)
    .build();

  await driver.manage().setTimeouts({ implicit: 10000 });
  return driver;
}

async function runTests() {
  const driver = await setupDriver();

  try {
    await driver.get("http://localhost:3000/employees");

    const pageTitle = await driver.getTitle();
    console.assert(
      pageTitle === "Employee App",
      `Title was "${pageTitle}" instead of "Employee App"`
    );

    //Test Add Emploee Button
    const addEmployeeButton = await driver.findElement(By.className("bg-yellow-400 text-black py-4 px-8 text-lg font-semibold uppercase rounded-full transition-colors duration-300 hover:bg-yellow-300"));
    await driver.wait(until.elementIsVisible(addEmployeeButton), 5000); 
    await driver.wait(until.elementIsEnabled(addEmployeeButton), 5000);

    await addEmployeeButton.click();

    const addEmployeeModel = await driver.findElement(By.className("fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"));
    try {
      await driver.wait(until.elementIsVisible(addEmployeeModel), 5000);
      const modelDisplaed = await addEmployeeModel.isDisplayed()
      console.assert(
        modelDisplaed,
        "Modal did not appear within the expected time"
      );

      if (modelDisplaed) {
        const fisrtNameField = await driver.findElement(By.id("firstName"));
        const lastNameField = await driver.findElement(By.id("lastName"));
        const emailField = await driver.findElement(By.id("email"));
        const departmentField = await driver.findElement(By.id("department"));
        const salaryField = await driver.findElement(By.id("salary"));
        const submitButton = await driver.findElement(By.className("bg-blue-500 text-white px-4 py-2 rounded"));

        await fisrtNameField.sendKeys("Jane");
        await lastNameField.sendKeys("Doe");
        await emailField.sendKeys("jane@doe.com");
        await departmentField.sendKeys("IT");
        await salaryField.sendKeys("50000");

        await submitButton.click();

        await driver.wait(until.stalenessOf(addEmployeeModel), 5000); 

        //const rows = await driver.findElements(By.className("bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"));
        const rows = await driver.findElements(By.css("tr"));
        const expectedRow = ["Jone", "Doe", "jane@doe.com", "IT", "50000"];

        let found = false;

        for (let row of rows) {
          const cells = await row.findElements(By.css("td"));
          console.log(cells)

          let match = true;

          for (let i = 0; i < cells.length; i++) {
            const cellText = await cells[i].getText();
            console.log(cellText)
            if (cellText !== expectedRow[i]) {
              match = false;
              break;
            }
          }

          if (match) {
            found = true;
            const deleteButton = await cells[1].findElement(By.className("bg-red-400 text-white py-2 px-4 text-sm rounded hover:bg-red-300"));
            await deleteButton.click();
            
            /*
            const deleteModel = await driver.findElement(By.className("fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"));
            await driver.wait(until.elementIsVisible(deleteModel), 5000);
            const deleteModelDisplaed = await deleteModel.isDisplayed()
            console.assert(
              deleteModelDisplaed,
              "Delete Modal did not appear within the expected time"
            );

            const actualDeleteButton = await deleteModel.findElement(By.className("bg-red-400 text-white py-2 px-4 text-sm rounded hover:bg-red-300"));
            await driver.wait(until.elementIsVisible(actualDeleteButton), 5000); 
            await driver.wait(until.elementIsEnabled(actualDeleteButton), 5000);
            
            await actualDeleteButton.click();

            await driver.wait(until.stalenessOf(deleteModel), 5000); 
            */
            await driver.sleep(10000);

            break;
          }
        }

        console.assert(found, `No new row with matching values found in table`);

        if (found) {
          console.log("New emplyee found in table");
        } else {
          console.log("No new Row found in table");
        }

        
      }
      

    } catch (error) {
      console.assert(false, error);
    }


    console.log("Tests completed successfully!");
  } finally {
    await driver.quit();
  }
}

runTests();