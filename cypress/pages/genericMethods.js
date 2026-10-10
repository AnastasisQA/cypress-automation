class GenericMethods {

  clickButton(button) {
    cy.contains('button', button).should('be.visible').click()
  }

  verifyTextIsVisible(text){
    cy.contains(text).should('be.visible')
  }
}

export default GenericMethods
