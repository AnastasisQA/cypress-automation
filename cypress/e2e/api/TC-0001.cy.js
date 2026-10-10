import GenericMethods from "../../pages/genericMethods.js"
import AddContactList from "../../pages/AddContactList.js"


describe("TC-001", () => {

  let testData;
  const testCaseId = "TC-0001"

  before("load fixture", () => {
    cy.fixture(`testData-sprint`).then((data)=>{
      testData = data[testCaseId];
    });
  });

  it("TC001 - Sign Up, Login and Contact creation", () => {

    const { firstName, lastName, email, password, contactFirstName, contactLastName } = testData

    const inGenericMethods = new GenericMethods() 
    const inAddContactList = new AddContactList() 

    //Sign up a User and then login
    cy.OpenThinkTesterPage()
    cy.AddUser(firstName, lastName, email, password)
    inGenericMethods.clickButton('Logout')
    inGenericMethods.verifyTextIsVisible('Contact List App')
    cy.Login(email,password)
    inGenericMethods.verifyTextIsVisible('Contact List')

    // Add a new contact
    inGenericMethods.clickButton('Add a New Contact')
    inAddContactList.addFirstName(contactFirstName)
    inAddContactList.addLastName(contactLastName)
    inGenericMethods.clickButton('Submit')

    //Verify that the created contact has the correct Name
    inGenericMethods.verifyTextIsVisible(contactFirstName+' '+contactLastName)


   
  })
})
