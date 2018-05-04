import express from 'express';
import multer from 'multer';
import path from 'path';
import Difference from '../../controller/api/Difference';

let router = express.Router();
let difference,
    multerUpload = multer({
        dest: path.join(__dirname + '/../../uploads')
    }).single('csvFile');

router.post('/', multerUpload, (req, res, next) => {
	difference = new Difference({res, req});
	difference.uploadData();
});

router.get('/', (req, res, next) => {
	difference = new Difference({res, req});
	difference.diffChecker();
});

export default router;