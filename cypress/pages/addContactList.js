class AddContactList {

  addFirstName(firstname) {
    cy.contains('* First Name:').closest('p').find('[placeholder="First Name"]').type(firstname)
  }

  addLastName(lastName) {
    cy.contains('* Last Name:').closest('p').find('[placeholder="Last Name"]').type(lastName)
  }

  addDateOfBirth(dateOfBirth) {
    cy.get('[for="birthdate"]').siblings('#birthdate').type(dateOfBirth)
  }

  selectContact(firstname, lastName){
    cy.get('.contacts thead tbody').contains(firstname+' '+lastName).click()
  }
  deleteContact(firstname, lastName){
    cy.get('.contactTable tr').its('length').then((counter)=>{
      cy.get('.contactTable tr').contains(firstname+' '+lastName).click()
      cy.contains('Delete Contact').should('be.visible').click()
      cy.get('.contactTable tr').should('have.length',counter-1)
    })
  }
}

export default AddContactList
