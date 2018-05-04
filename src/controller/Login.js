import * as GLOBAL_CONSTANTS from '../config';

export default class Login {
    constructor(props) {
        this.props = props;
    }

    login() {
        // validate login
        if (this.props.req.body.username === (process.env.ADMIN_USERNAME || GLOBAL_CONSTANTS.CREDENTIALS.username) && this.props.req.body.password === (process.env.ADMIN_PASSWORD || GLOBAL_CONSTANTS.CREDENTIALS.password)) {
            this.props.res.redirect('/home');
        } else {
            this.props.res.render('error', {
                notShowLogout: true,
                notShowHome: true,
                label: GLOBAL_CONSTANTS.PAGE_LABELS.Error_401,
                routes: GLOBAL_CONSTANTS.Routes,
                headerLabel: GLOBAL_CONSTANTS.PAGE_LABELS.Header,
                currentYear: new Date().getFullYear(),
                footerLabel: GLOBAL_CONSTANTS.PAGE_LABELS.Footer
            });
        }
    }
}