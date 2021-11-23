// Test: Visit a Page
describe('Visit Briefcase Page', () => {
    it('Visits Briefcase', () => {
      cy.visit('localhost:3000')
    })
})

// Finding the Submit Button
describe('Locating SignUp Button', () => {
    it('finds the sign up button', () => {
      cy.visit('localhost:3000')
  
      cy.contains('Sign Up Here')
    })
  })

// Clicking the Submit Button
describe('Clicking Submit Button', () => {
    it('clicking the content "Submit"', () => {
      cy.visit('localhost:3000')
  
      cy.contains('Sign Up Here').click()

      cy.url().should('include', 'signin')
    })
  })

// Finding the Login Button
describe('Locating Log In Button', () => {
    it('finds the log in button', () => {
      cy.visit('localhost:3000')
  
      cy.contains('Log In')
    })
  })

describe('Clicking Login Button', () => {
    it('clicking login button', () => {
      cy.visit('localhost:3000')
  
      cy.contains('Log In').click()

      cy.url().should('include', 'signin')
    })
  })

// Test Typing into Form Textboxes
describe('Test Typing in Textboxes', () => {
    it('testing typing in textboxes', () => {
        cy.visit('localhost:3000/signin')
        cy.get('[id^=email]').type('joyce@gmail.com').should('have.value','joyce@gmail.com')
        cy.get('[id^=user]').type('joyce').should('have.value','joyce')
        cy.get('[id^=pass').type('pass').should('have.value', 'pass')
        cy.contains('Submit').click()
        cy.url().should('include', 'feed')
    })
})

// describe('Users api', () => {
//     context('POST /user', () => {
//         it('should create a user', () => {
//             cy.request({
//                 method: 'POST',
//                 url: 'localhost:3001/userapi/user'
//             })
//                 .should((response) => {
//                     cy.log(JSON.stringify(response.body))
//                 });
//         });
//     });
// });

// describe('Users api', () => {
//     context('GET /users', () => {
//         it('should return all users', () => {
//             cy.request({
//                 method: 'GET',
//                 url: 'localhost:3001/userapi/users'
//             })
//                 .should((response) => {
//                     cy.log(JSON.stringify(response.body))
//                 });
//         });
//     });
// });
// describe('Posts api', () => {
//     context('POST /post', () => {
//         it('should create a post', () => {
//             cy.request({
//                 method: 'POST',
//                 url: 'localhost:3001/postapi/post'
//             })
//                 .should((response) => {
//                     cy.log(JSON.stringify(response.body))
//                 });
//         });
//     });
// });

// // describe('Posts api', () => {
// //     context('GET /posts', () => {
// //         it('should return all posts', () => {
// //             cy.request({
// //                 method: 'GET',
// //                 url: 'localhost:3001/postapi/posts'
// //             })
// //                 .should((response) => {
// //                     cy.log(JSON.stringify(response.body))
// //                 });
// //         });
// //     });
// // });



