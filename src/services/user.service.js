import userDao from '../models/persistence/user.dao.js';

const getAllUser = () => {
    return userDao.fetchAllUser();
}

const getUser = (userId) => {
    return userDao.get(userId);
}

const addUser = (details) => {
    return userDao.insert(details);
}

const removeUser = (userId) => {
    return userDao.remove(userId);
}

const updateUser = (userId, details) => {
    return userDao.update(userId, details);
}


export default {
    getUser,
    addUser,
    removeUser,
    updateUser,
    getAllUser
}
