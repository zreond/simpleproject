import express from "express";
import { StatusCodes } from "http-status-codes";
import { expressYupMiddleware } from 'express-yup-middleware';

import {deleteUser, getUser, addUser, updateUser } from './user.schema.js';
import userController from "./controllers/user.controller.js";

const router = express.Router();


//send response as json format
router.use(express.json());



//routes

router.post('/', 
    expressYupMiddleware({ schemaValidator: addUser, expectedStatusCode: StatusCodes.BAD_REQUEST}), 
    userController.addUser
);

router.get('/all', userController.allUser);

router.get('/:id', 
    expressYupMiddleware({schemaValidator: getUser, expectedStatusCode: StatusCodes.BAD_REQUEST }), 
    userController.getUserById
);

router.put('/:id',
    expressYupMiddleware({ schemaValidator: updateUser, expectedStatusCode: StatusCodes.BAD_REQUEST }),
    userController.updateUser
);

router.delete('/:id',
    expressYupMiddleware({ schemaValidator: deleteUser, expectedStatusCode: StatusCodes.BAD_REQUEST }),
    userController.deleteUser
);


export default router;