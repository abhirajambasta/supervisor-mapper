import express from 'express';
import Logout from '../controller/Logout';

let router = express.Router();

router.get('/', (req, res, next) => {
    let logout = new Logout({res, req});
	logout.logout();
});

export default router;