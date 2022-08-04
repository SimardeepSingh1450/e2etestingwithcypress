describe('spec name', () => {
  it('test1', () => {
    cy.visit('https://example.cypress.io')
  })
  it('We have correct Page Title', () => {
    cy.visit('https://codedamn.com')
    
    // cy.contains('Input here the Text which must be present on WebPage currently visiting')
    
    //cy.contains('string') -> It navigates or scrolls to the part of the webpage where this string is present only when we hover over the assert statement of cy.conatains


    // cy.get('div').should('exist')//Tells the number of divs or HTML Tags in the Page...
    //.should('exist') means div is expected to exist in the DOM

    // cy.get('div#idname').should('not.exist') -> We can use cy.get with id tag as well... 
    //.should('not.exist') means div is not expected to exist in the DOM


    //Accessing Buttons for Testing...
    //Way-1:
    //cy.get('.classname > div > a');// Here is a href which is used for links becasue we are trying to access a button Here
    
    //Way-2:Using attribute Syntax of Testing:
    //cy.get('div[id=id_name]').should('exist')

    //Way-3:Using data-testid custom attribute added in html by user:
    //cy.get('[data-testid=buttonname]')


    
    //should [have.text] Method:
    //should have this text:
    // cy.contains('Videos are so 2008-ish...').should('have.text','Videos are so 2008-ish...')

    
    //Using -> cy.viewport:
    // cy.viewport(1280,720);
    // cy.viewport('iphone-x');

  
    //Checking Buttons :
    //Using -> cy.contains('Text on Button').click()
    // Example->  cy.contains('Explore All Roadmaps').click();


    //Using cy.url():
    //cy.url() ->Tells us the current URL of the Webpage and returns a promise object :
    // cy.url().then((value)=>{
    //   cy.log('The current real URL is : ',value);
    // })



    //Verifying Page URLS:
    // cy.url().should('include','/string_to_be_included_in_URL')


  
    //Typing or LoggingIn with Cypress:
    // cy.get('[data-testid=username]').type('admin_name');
    // cy.get('[data-testid=passsword]').type('password');
    // cy.get('[data-testid=login]').click();
    //Verify if you have succesfully loggedIn to the correct URL -> cy.url().should('include','/dashboard');



  })


  //Understanding the beforeEach hook:
  //It is used in describe but out outside the it test fns...
  //  beforeEach(()=>{
  //  cy.viewport(1280,720);
  //  cy.visit('https://codedamn.com')
  //  NOTE: ->Whatever command is inside this beforeEach it is executed for all it test fns... so this beforeEach should be written at the top because the test fns will follow this only if it is above them...
  //  })


  //Using localstorage with cypress :
  //  cy.then(()=>{
  //  window.localStorage.setItem('keyname','keyvalue');
  //})


  //Pausing the cypress execution button using:
  //cy.pause()


  //Command Level Timeouts in Cypress:
  //We can use these timeouts to customly render the tests slowly :
  //cy.contains('Setting up the Challenge',{timeout:10*1000}).should('not.exist')


  //How to use Terminal Commands in Cypress:
  //We use {} to enter key strokes combinations with other tasks...
  //  cy.get('[data-testid=xterm]')
  //  .type('{ctrl}{c}')
  //  .type('touch testscript.js{enter}')


  //We can also use Template Literals in cypress:
  //const filename=Math.random();
  //cy.log(`Filename is ${filename}`);

  
  //Using RightClick in Cypress:
  // cy.contains('filename').rightclick();


})