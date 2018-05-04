import express from 'express';
import DefaultRenderer from '../controller/DefaultRenderer';

let router = express.Router();

router.get('/', function(req, res, next) {
	let defaultRenderer = new DefaultRenderer({res, req});
	defaultRenderer.render();
});

export default router;