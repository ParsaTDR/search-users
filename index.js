import { userFilter } from './filter.js';
/* in commonjs 
    const {userFilter} = require('./filter')
*/
console.log(userFilter({ name: "e" }));
//for search, we use userFilter() and add a property of the object to search, here all the users with the name containing (e) will be the output;