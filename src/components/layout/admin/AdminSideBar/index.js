import React from 'react';
import { ListGroup } from 'react-bootstrap'
import './admin-side-bar.scss';
import environment from '../../../../environments';

const logo = require('../../../../assets/logo.png');

class AdminSideBar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            activeRoute: '',
        }
    }

    componentDidMount() {
        const activeRoute = window.location.href.split(environment.domain)[1];
        this.setState({activeRoute: activeRoute});
    }
    
    render() {
        return(
            <div className="side-bar-container">
                <div className="side-bar-logo-container">
                    <a href="/">
                        <img src={logo} alt="admin logo" className="logo-img" />
                    </a>
                </div>
                <div className="side-nav">
                    <ListGroup>
                        <ListGroup.Item href="/admin/individuals" action className={this.state.activeRoute === '/admin/individuals' ? 'active' : ''} >
                            Individuals
                        </ListGroup.Item>
                        <ListGroup.Item href="/admin/corporates" action className={this.state.activeRoute === '/admin/corporates' ? 'active' : ''} >
                            Corporates
                        </ListGroup.Item>
                        <ListGroup.Item href="/admin/jobs" action className={this.state.activeRoute === '/admin/jobs' ? 'active' : ''} >
                            Jobs
                        </ListGroup.Item>
                        <ListGroup.Item href="/admin/notifications" action className={this.state.activeRoute === '/admin/notifications' ? 'active' : ''} >
                            Notifications
                        </ListGroup.Item>
                        <ListGroup.Item href="/admin/messages" action className={this.state.activeRoute === '/admin/messages' ? 'active' : ''} >
                            Messages
                        </ListGroup.Item>
                        <ListGroup.Item href="/admin/contacts" action className={this.state.activeRoute === '/admin/contacts' ? 'active' : ''} >
                            Contacts
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        );
    }
}

export default AdminSideBar;