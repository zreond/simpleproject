import express from "express";
import { StatusCodes } from "http-status-codes";
import helmet from 'helmet';

import userRoutes from './user.routes.js';
import mainRoutes from './main.routes.js';

const app = express();
const port = 3000;


//middleware
//send response as json format
app.use(express.json());
app.use(helmet());

const STATUS = {
    success: "OK",
    failure: "NO"
}


app.use('/v1/', mainRoutes);
app.use('/v1/user', userRoutes);


app.listen(port, () => {
    console.log(`App is running at port ${port}`);
})