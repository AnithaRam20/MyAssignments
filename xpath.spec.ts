import test from "@playwright/test";

test("To Verify create Lead button",async({page})=>
{
    await page.goto("https://leaftaps.com/opentaps/control/main");

    //Locate the Element using attribute xpath

    await page.locator("//input[@name='USERNAME']").fill("Demosalesmanager");

   //locate an element using partial attribute based xpath
    await page.locator("//input[contains(@name,'PASS')]").fill("crmsfa");

   //locate an element using grand parent as known and grandchild as unknown (grandparent and grandchild) relative xpath also collection based xpath
    await page.locator("(//form[@id='login']//input)[3]").click();

    //locate element using partial text based

    await page.locator("//a[contains(text(),'CRM/SFA')]").click();

    //locate an element using text based xpath 

    await page.locator("//a[text()='Leads']").click();


    await page.locator("//a[text()='Create Lead']").click();

    await page.locator("//input[@id='createLeadForm_companyName']").fill("TestLeaf");

    //locate an element thru cousins xpath
    await page.locator("//span[contains(text(),'Last name')]/preceding::input[1]").fill("Anitha");

    await page.locator("//span[contains(text(),'Last name')]/following::input[1]").fill("Ram");

    await page.locator("//select[@name='dataSourceId']").selectOption({index:3});

   //locate an elemt using xpath attribute
   await page.locator("//input[@value='Create Lead']").click();

    await page.waitForTimeout(5000);

})