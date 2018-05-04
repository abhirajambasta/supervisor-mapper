import express from 'express';
import Download from '../../controller/api/Download';

let router = express.Router();
let download;

router.get('/', (req, res, next) => {
	download = new Download({res, req});
	download.downloadData();
});

export default router;