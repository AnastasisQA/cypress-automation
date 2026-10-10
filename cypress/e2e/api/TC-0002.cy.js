import GenericMethods from "../../pages/genericMethods.js"
import AddContactList from "../../pages/AddContactList.js"


describe("TC-0002", () => {

  let testData;
  const testCaseId = "TC-0002"

  before("load fixture", () => {
    cy.fixture(`testData-sprint`).then((data)=>{
      testData = data[testCaseId];
    });
  });

  it("TC002 - Wrong Contact date validation", () => {

    const {email, password, contactFirstName, contactLastName, contactDate } = testData

    const inGenericMethods = new GenericMethods() 
    const inAddContactList = new AddContactList() 

    //Preconditions - Load the Open Thinker page
    cy.OpenThinkTesterPage()
    cy.Login(email,password)
    inGenericMethods.verifyTextIsVisible('Contact List')

    // Populate the mandatory contact fields and then provide a wrong date
    inGenericMethods.clickButton('Add a New Contact')
    inAddContactList.addFirstName(contactFirstName)
    inAddContactList.addLastName(contactLastName)
    inAddContactList.addDateOfBirth(contactDate)
    inGenericMethods.clickButton('Submit')

    //Verify the error message
    inGenericMethods.verifyTextIsVisible('Contact validation failed: birthdate: Birthdate is invalid')


   
  })
})
