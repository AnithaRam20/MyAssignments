//Import chromium and test from Playwright test package
import {chromium ,test} from "@playwright/test";

//create a test case and define a async test case to nav to website

test("Simple Test",async()=>{
    //creating one browser
    let browser=await chromium.launch();

    //Create new context in browser
    let context=await browser.newContext();
    //Create new page in the context
    let page=await context.newPage();

    //navigate page to google URL.
    await page.goto("https://www.google.com/");
    
    //pause test execution for 5seconds
    await page.waitForTimeout(5000);

})