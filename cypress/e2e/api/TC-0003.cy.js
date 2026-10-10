import GenericMethods from "../../pages/genericMethods.js"
import AddContactList from "../../pages/AddContactList.js"


describe("TC-0003", () => {

  let testData;
  const testCaseId = "TC-0003"

  before("load fixture", () => {
    cy.fixture(`testData-sprint`).then((data)=>{
      testData = data[testCaseId];
    });
  });

  it("TC-0003 - Delete Contact", () => {

    const {email, password, contactFirstName, contactLastName } = testData

    const inGenericMethods = new GenericMethods() 
    const inAddContactList = new AddContactList() 

    //Preconditions - Load the Open Thinker page
    cy.OpenThinkTesterPage()
    cy.Login(email,password)
    inGenericMethods.verifyTextIsVisible('Contact List')

    // Create a Constact
    inGenericMethods.clickButton('Add a New Contact')
    inAddContactList.addFirstName(contactFirstName)
    inAddContactList.addLastName(contactLastName)
    inGenericMethods.clickButton('Submit')

    //open the Created contact and delete it
    inAddContactList.deleteContact(contactFirstName,contactLastName)
   
  })
})
