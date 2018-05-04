import * as GLOBAL_CONSTANTS from '../../config';

export default class Edit {
    constructor(props) {
        this.props = props;
    }

    postData() {
        let _self = this;
        _self.props.req.db.collection('csv').save({
            "completeRecordsObject": _self.props.req.body
        }, (err, result) => {
            if (err) return console.log(err)
            console.log('saved to database')
            _self.props.res.send({ redirect: GLOBAL_CONSTANTS.Routes.DIFFERENCE });
        });
    }

    render() {
        let _self = this;
        _self.props.req.db.collection('csv').find().sort({
            $natural: -1
        }).limit(1).toArray((err, results) => {
            _self.props.res.render('difference', {
                records: results[0].completeRecordsObject,
                recordHeads: GLOBAL_CONSTANTS.RECORDS_HEAD,
                recordData: GLOBAL_CONSTANTS.RECORDS_HEAD_DB,
                editLabel: GLOBAL_CONSTANTS.EDITLABEL,
                editAbleItem: GLOBAL_CONSTANTS.EDITABLE_FIELDS,
                isAdmin: true,
                label: GLOBAL_CONSTANTS.PAGE_LABELS.Edit,
                routes: GLOBAL_CONSTANTS.Routes,
                headerLabel: GLOBAL_CONSTANTS.PAGE_LABELS.Header,
                currentYear: new Date().getFullYear(),
                footerLabel: GLOBAL_CONSTANTS.PAGE_LABELS.Footer,
                enctypeValue: GLOBAL_CONSTANTS.FORM_ENCTYPE,
                dbField: GLOBAL_CONSTANTS.DB_FIELDS
            });
        })
    }
}