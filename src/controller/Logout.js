export default class Logout {
    constructor(props) {
        this.props = props;
    }

    logout() {
        this.props.res.redirect('/');
    }
}