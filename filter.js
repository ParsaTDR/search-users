import { getUsers } from './data.js';
/* in commonjs 
    const {getUsers} = require('./data')
*/
//this code filters the properties of the imported object and makes them accessible for the search
const userFilter = (filter = {}) => {
    if (Object.keys(filter).length) {
        if ('skills' in filter) {
            const { skills } = filter;
            const users = getUsers();
            return users.filter((user) => user.skills.toLowerCase().indexOf(filter.skills) != -1);
        }
        if ('name' in filter) {
            const { name } = filter;
            const users = getUsers();
            return users.filter((user) => user.name.toLowerCase().indexOf(filter.name) != -1);
        }
        if ('age' in filter) {
            const { age } = filter;
            const users = getUsers();
            return users.filter((user) => user.age === age);
        }
        if ('id' in filter) {
            const { id } = filter;
            const users = getUsers();
            return users.filter((user) => user.id === id);
        }
        return [];
    } else {
        return getUsers();
    }
};
export {userFilter};
/* in commonjs 
    module.exports = {userFilter}
*/