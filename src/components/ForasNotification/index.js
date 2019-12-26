import React from 'react';
import { Dropdown } from 'react-bootstrap';
import NotificationCard from '../NotificationCard';
import './foras-notification.scss';
import notificationApi from '../../services/notification.service';

const icon_bell = require('../../assets/icons/icon-bell.png');
const icon_gear = require('../../assets/icons/icon-gear.png');
const icon_dropdown = require('../../assets/icons/icon-dropdown-black.png');
const img_dropdown_triangle = require('../../assets/images/DropdownTriangle.png');

class ForasNotification extends React.Component {
    constructor() {
        super();
        this.state = {
            notifications: [],
        }
    }
    
    componentDidMount() {
        notificationApi.getNotifications()
            .then((response) => {
                if(response.status === 200) {
                    this.setState({notifications: response.data});
                }
            })
            .catch((error) => {
                console.log('err: ', error);
            })
    }

    render() {
        return (
            <Dropdown className="foras-notification">
                <Dropdown.Toggle id="dropdown-notification" className="icon-button mx-3" bsPrefix={true}>
                    <img src={icon_bell} alt="icon-bell" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                    <img src={img_dropdown_triangle} className="dropdown-triangle-img" alt="dropdown triangle" />
                    <Dropdown.Item eventKey="0" className="btn-notification-setting mb-3">
                        <img src={icon_gear} className="icon-img ml-4" alt="icon-gear" /> إعدادات التنبيهات الواردة
                    </Dropdown.Item>

                    {this.state.notifications.map((obj, index) => 
                        <Dropdown.Item key={index} eventKey={index} className="notification-item">
                            <NotificationCard data={obj} />
                        </Dropdown.Item>
                    )}
                    
                    <Dropdown.Divider className="mt-3" />
                    <Dropdown.Item eventKey="4" className="text-center">
                        المزيد
                        <img src={icon_dropdown} className="dropdown-icon-img mr-2" alt="icon-dropdown" />
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default ForasNotification;