import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import router from './controller/index.js';
import {limiter} from './middleware/limiter.js';
import {errors} from 'celebrate';
import {requestLogger, errorLogger} from './middleware/logger.js';
import catchAllError from './middleware/catchAllError.js';

const app = express();

const {PORT = 3000} = process.env;

// security
app.use(cors());
app.options('*', cors());
app.use(helmet());
app.use(limiter);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// logs all requests
app.use(requestLogger);

// routing
app.use(router);

config({path: './.env'});

//logs all errors
app.use(errorLogger);

// central error handler
app.use(errors());
app.use(catchAllError);

app.listen(PORT);
console.log('====================================');
console.log('listening on port', PORT);
console.log('====================================');
