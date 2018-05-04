import express from 'express';
import mongodb from 'mongodb';
import apiRoutes from './api';
import * as GLOBAL_CONSTANTS from '../config/constants';


let router = express.Router();


mongodb.MongoClient.connect(GLOBAL_CONSTANTS.DB_URL, (err, database) => {
    if (err) {
        return;
    }

    router.use('/', (req, res, next) => {
        req.db = database;
        next();
    }, apiRoutes);
});

export default router;