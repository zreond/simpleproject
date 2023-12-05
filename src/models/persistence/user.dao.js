import users from '../data/user.data.js';



const insert = (details) => {
    const newUser = {id: users.length + 1, ...details};
    users.push(newUser);

    return newUser;
}

const fetchAllUser = () => {
    return users;
}

const get = (userId) => {
    const findUser = users.find((user) => userId === user.id);
    return findUser;
}

const update = (userId, newDetails) => {
    let existingUser = null;
    let userIndex = 0;
    users.map((user, index) => {
        if(user.id === userId) {
            existingUser = user;
            userIndex = index;
        }
    })

    if(!existingUser) {
        return false;
    }

    const updatedUser = {
        ...existingUser,
        ...newDetails
    }

    users.splice(userIndex, 1, updatedUser);

    return updatedUser;
}

const remove = (userId) => {
    const deleteUser = users.find((user, index) => {
        if(user.id === userId) {
            //remove the array element of the found user
            users.splice(index, 1);

            return true;
        }
        return false;
    })

    return deleteUser;
    
}

export default{
    get,
    update,
    remove,
    insert,
    fetchAllUser
}