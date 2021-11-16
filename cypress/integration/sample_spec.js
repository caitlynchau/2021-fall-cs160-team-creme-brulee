// Sample passing test
describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
})
// Sample failing test
describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(false)
    })
})

// Test: Visit a Page
describe('Visit Briefcase Page', () => {
    it('Visits Briefcase', () => {
      cy.visit('localhost:3000')
    })
})

// Finding the Submit Button
describe('Locating Submit Button', () => {
    it('finds the content "Submit"', () => {
      cy.visit('localhost:3000')
  
      cy.contains('Submit')
    })
  })

// Test Typing into Form Textboxes
describe('Test Typing in Textboxes', () => {
    it('testing typing in textboxes', () => {
        cy.visit('localhost:3000')
      
        cy.contains('Submit').click()
    
        cy.url().should('include', 'feed')
        cy.get('email_address').type('joyce@gmail.com').should('have.value','joyce@gmail.com')
    })
})

// // Clicking the Submit Button
// describe('Clicking Submit Button', () => {
//     it('clicking the content "Submit"', () => {
//       cy.visit('localhost:3000')
  
//       cy.contains('Submit').click()

//       cy.url().should('include', 'feed')
//     })
//   })
