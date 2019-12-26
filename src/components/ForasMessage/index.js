import React from 'react';
import { Dropdown } from 'react-bootstrap';
import MessageCard from '../MessageCard';
import './foras-message.scss';
import messageApi from '../../services/message.service';

const icon_message = require('../../assets/icons/icon-message.png');
const icon_compose = require('../../assets/icons/icon-compose.png');
const icon_dropdown = require('../../assets/icons/icon-dropdown-black.png');
const img_dropdown_triangle = require('../../assets/images/DropdownTriangle.png');

class ForasMessage extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: [],
        }
    }
    
    componentDidMount() {
        messageApi.getMessages()
            .then((response) => {
                if(response.status === 200) {
                    this.setState({messages: response.data});
                }
            })
            .catch((error) => {
                console.log('err: ', error);
            });
    }

    render() {
        return (
            <Dropdown className="foras-message">
                <Dropdown.Toggle id="dropdown-message" className="icon-button mx-3" bsPrefix={true}>
                    <img src={icon_message} alt="icon-message" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                    <img src={img_dropdown_triangle} className="dropdown-triangle-img" alt="dropdown triangle" />
                    {this.state.messages.map((obj, index) =>
                        <Dropdown.Item key={index} eventKey={index} className="message-item">
                            <MessageCard data={obj} />
                        </Dropdown.Item>
                    )}
                    
                    <Dropdown.Item eventKey="0" className="btn-message-setting mt-3">
                        <img src={icon_compose} alt="icon-compose" className="icon-img ml-4" /> كتابة رسالة جديدة
                    </Dropdown.Item>

                    <Dropdown.Divider className="mt-3" />
                    
                    <Dropdown.Item eventKey="4" className="text-center">
                        المزيد
                        <img src={icon_dropdown} alt="icon-dropdown" className="dropdown-icon-img mr-2" />
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default ForasMessage;