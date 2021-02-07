## Description of my solution

Talk us through your solution, thought process etc here.
<li>Store all users as an array in redux state, using redux and redux-thunk
<li>Most basic details of user (user picture and email) is shown in <User /> component
<li>Upon clicking "Add User" button, 5 users will be fetched by the API and appended to the users array. (5 is hardcoded)
<li>Decided to update webpack with scss integration
<li> Added ability to debug redux wuth redux dev tools in chrome.

## Things I would do next

Anything that you didn't get time to do should go here.
<li> Test cases are incomplete and a few failing as well. (need more time to fix)
<li> Remove User / Update User
<li> Use of Typescript
<li> Implement routing to make URL's more search friendly
<li> Make the UI more responsive and pleasing.

## Assumptions that I made

Any assumptions that were made about the application - this could be around acceptance criteria etc.
<li> Assuming webpack was incomplete with file-loader and url-loader packages not present in package.json during fork
<li> Assuming that only user data is required in redux, and without the use of React Context
<li> No need to use typescript.
