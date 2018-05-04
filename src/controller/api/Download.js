import path from 'path';
import jsonXlsx from 'icg-json-to-xlsx';
import * as GLOBAL_CONSTANTS from '../../config';
import mkdirp from 'mkdirp';
import fs from 'fs';

export default class Landing {
    constructor(props) {
        this.props = props;
    }

    downloadData() {
        let _self = this;
        mkdirp(path.join(__dirname + '/../../downloads'), (err) => {
            if (err)
                console.error(err)
            else {
                fs.closeSync(fs.openSync(path.join(__dirname + '/../../downloads/' + GLOBAL_CONSTANTS.DOWNLOAD_FILE_NAME), 'w'));
            }
        });
        _self.props.req.db.collection('csv').find().sort({
            $natural: -1
        }).limit(1).toArray((err, results) => {
            if (!results || !results[0]) {
                _self.props.res.redirect(GLOBAL_CONSTANTS.Routes.HOME);
            } else {
                jsonXlsx.writeFile(path.join(__dirname + '/../../downloads/' + GLOBAL_CONSTANTS.DOWNLOAD_FILE_NAME), results[0].completeRecordsObject, { headers: GLOBAL_CONSTANTS.RECORDS_HEAD_DOWNLOAD });
                _self.props.res.download(path.join(__dirname + '/../../downloads/' + GLOBAL_CONSTANTS.DOWNLOAD_FILE_NAME));
            }
        })
    }
}