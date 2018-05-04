import * as GLOBAL_CONSTANTS from '../config';

export default class DefaultRenderer {
    constructor(props) {
        this.props = props;
    }

    render() {
        this.props.res.render('index', {
            notShowLogout: true,
            label: GLOBAL_CONSTANTS.PAGE_LABELS.Login,
            routes: GLOBAL_CONSTANTS.Routes,
            headerLabel: GLOBAL_CONSTANTS.PAGE_LABELS.Header,
            currentYear: new Date().getFullYear(),
            footerLabel: GLOBAL_CONSTANTS.PAGE_LABELS.Footer
        });
    }
}