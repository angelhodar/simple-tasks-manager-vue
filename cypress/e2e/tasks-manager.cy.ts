// https://on.cypress.io/api

describe('Tasks Manager', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('visits the app root url', () => {
    cy.contains('h1', 'Simple Tasks Manager')
  })

  it('opens the task form when "New Task" button is clicked', () => {
    cy.get('button').contains('New Task').click()
    cy.get('div[role="dialog"]').should('be.visible')
    cy.get('div[role="dialog"]').contains('Create New Task').should('be.visible')
  })

  it('opens the task form in edit mode when edit button is clicked', () => {
    cy.get('button').contains('New Task').click()
    cy.get('input[placeholder="Task title"]').type('Test Task')
    cy.get('textarea[placeholder="Task description"]').type('Test Description')
    cy.get('input[type="date"]').type('2024-01-01')
    cy.get('button[type="submit"]').contains('Create').click()

    cy.get('table').contains('Test Task').should('be.visible');

    cy.get('table').find('tbody tr:first').find('button[aria-label="Edit"]').click()
    cy.get('div[role="dialog"]').should('be.visible')
    cy.get('div[role="dialog"]').contains('Edit Task').should('be.visible')
  })

  it('adds a task to the table when the form is submitted', () => {
    cy.get('button').contains('New Task').click()
    cy.get('input[placeholder="Task title"]').type('Test Task')
    cy.get('textarea[placeholder="Task description"]').type('Test Description')
    cy.get('input[type="date"]').type('2024-01-01')
    cy.get('button[type="submit"]').contains('Create').click()

    cy.get('table').contains('Test Task').should('be.visible')
    cy.get('table').contains('Test Description').should('be.visible')
    cy.get('table').contains('Jan 1, 2024').should('be.visible')
  })

  it('persists the task after page reload', () => {
    cy.get('button').contains('New Task').click()
    cy.get('input[placeholder="Task title"]').type('Test Task')
    cy.get('textarea[placeholder="Task description"]').type('Test Description')
    cy.get('input[type="date"]').type('2024-01-01')
    cy.get('button[type="submit"]').contains('Create').click()

    cy.reload()

    cy.get('table').contains('Test Task').should('be.visible')
    cy.get('table').contains('Test Description').should('be.visible')
    cy.get('table').contains('Jan 1, 2024').should('be.visible')
  })
})
