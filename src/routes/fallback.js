import express from 'express';
import ErrorRenderer from '../controller/ErrorRenderer';

let router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
	let errorRenderer = new ErrorRenderer({res, req});
	errorRenderer.render();
});

export default router;