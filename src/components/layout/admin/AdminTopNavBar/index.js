import React from 'react';
import { Button } from 'react-bootstrap';
import './admin-top-nav-bar.scss';
import environment from '../../../../environments';
import session from '../../../../services/session.service';

class AdminTopNavBar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            activeRoute: ''
        }
    }

    componentDidMount() {
        const activeRoute = window.location.href.split(environment.domain + '/admin/')[1] + ' management';
        this.setState({activeRoute: activeRoute});
    }

    logout = () => {
        session.del('foras-user');
        if (session.get('foras-user')) {
            this.logout();
        }
    }

    render() {
        return(
            <div className="top-nav-bar-container">
                <div className="current-route">{this.state.activeRoute}</div>
                <Button className="btn-logout" onClick={this.logout}> الخروج </Button>
            </div>
        );
    }
}

export default AdminTopNavBar;