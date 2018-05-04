import express from 'express';
import Landing from '../../controller/api/Landing';

let router = express.Router();
let landing;

router.get('/', (req, res, next) => {
	landing = new Landing({res, req});
	landing.render();
});

router.post('/', (req, res, next) => {
    landing = new Landing({res, req});
    landing.postData();
});

export default router;