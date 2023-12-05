import userService from "../services/user.service.js";
import { StatusCodes } from "http-status-codes";


const STATUS = {
    success: "OK",
    failure: "NO"
}

const updateUser = (req, res) => {
    //alias of body -> user
    const { body: user } = req;

    const id = parseInt(req.params.id, 10)

    const updatedUser = userService.updateUser(id, user);

    if(updatedUser) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: updatedUser
        })
    }else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User with id ${id} does not foud.`,
        })
    }

    return res.status(StatusCodes.OK).send({
        status: STATUS.success, 
        data: addedUser,
    });
}

const addUser = (req, res) => {
    //alias of body -> user
    const { body: user } = req

    const addedUser = userService.addUser(user);

    return res.status(StatusCodes.CREATED).send({
        status: STATUS.success, 
        data: addedUser,
    });
}

const allUser = (req, res) => {
    const allUser = userService.getAllUser();

    if(allUser.length) {
        return res.status(StatusCodes.CREATED).send(allUser);
    }
    return res.status(StatusCodes.NOT_FOUND).send({
        status : STATUS.success,
        message: "No users found."
    })
}

const getUserById = (req, res) => {

    const id = parseInt(req.params.id, 10);
    const user = userService.getUser(id);

    if(user) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: user,
        })
    }
    
    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: "User not found",
    })
}

const deleteUser = (req, res) => {

    const id = parseInt(req.params.id, 10);

    const userExist = userService.getUser(id);

    if(userExist) {
        userService.removeUser(id);
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            message: `User ${id} has been deleted`
        })
    }

    return res.status(StatusCodes.OK).send({
        status: STATUS.success,
            message: `User ${id} does not exist`
    })
    
}

export default {
    updateUser,
    addUser,
    allUser,
    getUserById,
    deleteUser
}