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
  
      cy.contains('SIGN UP')
    })
  })

// Clicking the Submit Button
describe('Clicking Submit Button', () => {
    it('clicking the content "Submit"', () => {
      cy.visit('localhost:3000')
  
      cy.contains('SIGN UP').click()

      cy.url().should('include', 'feed')
    })
  })

// // Test Typing into Form Textboxes
// describe('Test Typing in Textboxes', () => {
//     it('testing typing in textboxes', () => {
//         cy.visit('localhost:3000')
      
//         cy.contains('SIGN UP').click()
    
//         cy.url().should('include', 'feed')
//         cy.get('email_address').type('joyce@gmail.com').should('have.value','joyce@gmail.com')
//     })
// })

describe('Users api', () => {
    context('POST /user', () => {
        it('should create a user', () => {
            cy.request({
                method: 'POST',
                url: 'localhost:3001/userapi/user'
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                });
        });
    });
});

describe('Users api', () => {
    context('GET /users', () => {
        it('should return all users', () => {
            cy.request({
                method: 'GET',
                url: 'localhost:3001/userapi/users'
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                });
        });
    });
});
describe('Posts api', () => {
    context('POST /post', () => {
        it('should create a post', () => {
            cy.request({
                method: 'POST',
                url: 'localhost:3001/postapi/post'
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                });
        });
    });
});

describe('Posts api', () => {
    context('GET /posts', () => {
        it('should return all posts', () => {
            cy.request({
                method: 'GET',
                url: 'localhost:3001/postapi/posts'
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                });
        });
    });
});



