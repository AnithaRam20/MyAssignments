import {test,expect} from "@playwright/test";

test("Assertation",async({page})=>{

    //navigate to URL
 await page.goto("https://leaftaps.com/opentaps/control/main");

 //assert Title and URL of Page

 await expect(page).toHaveTitle("Leaftaps - TestLeaf Automation Platform");

 await expect(page).toHaveURL("https://leaftaps.com/opentaps/control/main");

//navigate to label and asserting labelname is correct

  let usernameLabel=page.locator("//label[@for='username']");

  await expect(usernameLabel).toBeVisible();

  //navigate to Username textbox and asserting username textbox is visible
   let usernameField=page.getByRole("textbox",{name:"Username"});

  await expect(usernameField).toBeVisible();

  await expect(page.getByRole("button",{name:"Login"})).toBeVisible();


    
})