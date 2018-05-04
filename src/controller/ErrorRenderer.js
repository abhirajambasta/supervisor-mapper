import * as GLOBAL_CONSTANTS from '../config';

export default class ErrorRenderer {
    constructor(props) {
        this.props = props;
    }

    render() {
        this.props.res.render('error', {
            notShowLogout: true,
            label: GLOBAL_CONSTANTS.PAGE_LABELS.Error_404,
            routes: GLOBAL_CONSTANTS.Routes,
            headerLabel: GLOBAL_CONSTANTS.PAGE_LABELS.Header,
            currentYear: new Date().getFullYear(),
            footerLabel: GLOBAL_CONSTANTS.PAGE_LABELS.Footer
        });
    }
}