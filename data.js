//Information of the users as an array
const users = [
    { id: 1, name: 'Parsa', skills: 'Backend developer', age: 16 },
    { id: 2, name: 'Jon', skills: 'Frontend deveolper', age: 19 },
    { id: 3, name: 'Robert', skills: 'Fullstack developer', age: 23 },
    { id: 4, name: 'Barley', skills: 'Designer', age: 20 },
    { id: 5, name: 'Stuart', skills: 'Data scientist', age: 27 },
    { id: 6, name: 'James', skills: 'Project Manager', age: 16 },
    //...
];

const getUsers = () => {
    return users;
};
export { getUsers };

/* in commonjs 
    module.exports = {getUsers}
*/