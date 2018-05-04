import express from 'express';
import Login from '../controller/Login';

let router = express.Router();

/* GET login page. */
router.post('/', function(req, res, next) {
    let login = new Login({ res, req });
    login.login();
});

export default router;