## Limio

Welcome to the Limio coding interview.

## Our tech stack

The Limio tech stack is always evolving as we continue to seek out the best tools for the job. Our main tech stack is:

  * React with Redux (front-end of our main app & Limio Shop)
  * Gatsby (Limio Shop)
  * AWS Lambda with Serverless for our backend API
  * Node.js for the above & our product catalog backend
  * AWS DynamoDB for our main database
  * Git for our product catalog storage
  * AWS Cognito for our user management
  * We build with Webpack
  * Jest for testing
  * Other AWS services for serving builds/files such as S3, Cloudfront, amongst others

And we are currently working towards introducing the following:

 * React testing library to replace some of component tests
 * Refactoring to use React hooks across our codebase where possible
 
We will continue to discuss & add new tech where we feel it would improve our products.

### Instructions

Please answer the question below (just write the answers in the spaces provided). Once the coding examples are done, please zip up your files and send them via http://wetransfer.com (GMail blocks ZIP attachments).  

We can then discuss the changes that you have made.

### Overview

The directories contain 3 sample apps. They are based on the the tic-tac-toe react tutorial, which you can find at [https://reactjs.org/tutorial/tutorial.html].

The directories are:

| Directory      | Contents    |
| ---------------|-------------| 
| app-original   | The original app from the tutorial |
| app-standalone | The same app, but re-written slightly (this has been updated to move away from class components and use functional components with React hooks) |
| app-redux      | The same app, using redux |

### Questions

Please answer the following questions:
    
1. Comparing the app-original and app-standalone code bases. The app-standalone code base has put each component in a separate file and directory structure.   
Why do you think that was done, what are the advantages / disadvantages?

- It is a common react folder structure convention where each component file (index.js) is located in its own folder (NameOfComponent). This structure convention serves the purpose of managing the component tree.

  #### ADVANTAGES:
- Separation of concern. Ideally, each component is responsible for one thing only.
- It makes the codebase more organised, structured and easier to read and maintain.
- Allows to update individual components without affecting other components.
- Gives the ability to reuse individual components and follow DRY principle.
- The error messages are more specific, readable and therefore easier to debug.
- The components are easier to test in isolation.
- Makes the app more scalable and modular. Components can be added, removed or updated without affecting other components.

  #### DISADVANTAGES:
- More files to create, maintain, test & debug.
- Components have to be imported. This is a bit more time consuming.
- Can be more challenging creating a component structure and the relationships between components and their props.


2. Thinking about a production ready app, what do you think is missing from all the examples? *Hint: the square component in the standalone app has one*

- Dedicated unit tests for each component. It allows to test each component in isolation and make sure it works as expected. It is imperative for test driven development.

3. Are you familiar with Redux? If so what is the basic idea behind it and what would be a good case for using it?

- Personally I have not used Redux yet. I know it is a popular state management tool for react and is used to create global states that can by accessed by any component in the app. Redux is mostly used by large applications that have complex nested states that need to be accessed by multiple components. It eases the process of passing props and avoiding prop drilling. React offers a library native approach to this with the Context API and 2 web hooks: useContext and useReducer.

4. *If you are interested in the full-stack role* Please take a look at the partial implementation of an express routes in backend/router.js.
    * Thinking of a production application, what issues do you see with this code? *List as many as you like* 

### Coding Challenges

With either the app-standalone or app-redux (**not both** - whichever you are comfortable with), please complete the following changes:

1. Update the app so that it highlights the winning move.
2. Update the app so that it allows for a named player X and Y, and it keeps a league table of who won each game.
3. If you get time, implement something that you think that the app could do and is cool. What other things would you change.

### Expectations
 * We don't want you to spend too long on this exercise, just the necessary amount of time to show your front-end and back-end skills. We expect it to take 1.5 hours if you have React experience, longer if you have no React experience. 
    * If you don't answer all questions, that is fine. We prefer depth on a few questions rather than superficial answers.
 * Some testing, but not extensive. Have at least one test case, so that we know you can do it. 
    * You'll notice the example code doesn't have much testing. It should.
 * Clean, concise code. Comments are appreciated.
 * Knowledge of up to date React features e.g. Hooks.




    
      
    
    

 





