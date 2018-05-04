import express from 'express';
import Modify from '../../controller/api/Modify';

let router = express.Router();

/* GET modify list page. */
router.get('/', function(req, res, next) {
    let modify = new Modify({ res, req });
    modify.modifyList();
});

router.post('/', function(req, res, next) {
    let modify = new Modify({ res, req });
    modify.updateNewObject();
})

export default router;