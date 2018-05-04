import express from 'express';
import Edit from '../../controller/api/Edit';

let router = express.Router();
let edit;

router.post('/', (req, res, next) => {
    edit = new Edit({ res, req });
    edit.postData();
});

router.get('/edit', (req, res) => {
    edit = new Edit({ res, req });
    edit.render();
});

export default router;