import test from "@playwright/test";

test("Verify a Create Lead button",async({page})=>{

    //load the url

   await page.goto("https://leaftaps.com/opentaps/control/main");
//enter the username
   await page.getByRole("textbox",{name:"Username"}).fill("Demosalesmanager");
//enter the password  
   await page.getByLabel("Password").fill("crmsfa");
 
   //click the login button
   await page.locator("[value='Login']").click();
 
  //click the crmsfa
   await page.getByText("CRM/SFA",{exact:true}).click();

  //click the leads

   await page.getByText("Leads",{exact:true}).click();
   //click the createlead

   await page.getByRole("link",{name:"Create Lead"}).click();

   //enter the CompanyName
   await page.locator("#createLeadForm_companyName").fill("Testleaf");

   //enter the FirstName

   await page.locator("#createLeadForm_firstName").fill("Anitha");

   //enter the FirstName
   await page.locator("#createLeadForm_lastName").fill("Ram");

   //Select a value from source dropdown

   await page.locator("#createLeadForm_dataSourceId").selectOption({label:"Direct Mail"});

   await page.locator("[name='industryEnumId']").selectOption({value:"IND_HEALTH_CARE"});
   
   //click the create lead button
   await page.locator('[name="submitButton"]').click();
   
   //add the wait
   await page.waitForTimeout(5000);
})