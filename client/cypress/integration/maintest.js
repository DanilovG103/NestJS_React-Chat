describe("renders the login or registration page", () => {
    it ("renders correctly", () => {
        cy.visit("/login")
        cy.get(".auth").should("exist")
    })

    it ("register working correctly", () => {
        cy.visit("/registration")
        cy.get("#login").type("cypress-test")
        cy.get("#password").type("cypresspswd")
        cy.get(".entry").click()
        cy.visit("/chat")
    })

    it ("login working correctly", () => {
        cy.visit("/login")
        cy.get("#login").type("cypress-test")
        cy.get("#password").type("cypresspswd")
        cy.get(".entry").click()
        cy.visit("/chat")
    })

    it ("typing & sending working correctly after login", () => {
        cy.visit("/login")
        cy.get("#login").type("cypress-test")
        cy.get("#password").type("cypresspswd")
        cy.get(".entry").click()
        cy.visit("/chat")
        cy.get("#message-text").type("cypress test: typing and sending after login")
        cy.get("#send-message-text").click()
    })
})