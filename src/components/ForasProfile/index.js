import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import './foras-profile.scss';
import session from '../../services/session.service';

const img_default_individual = require('../../assets/profile-images/default-individual.png');
const img_default_corporate = require('../../assets/profile-images/default-corporate.png');
const icon_gear = require('../../assets/icons/icon-gear.png');
const icon_power = require('../../assets/icons/icon-power.png');
const img_dropdown_triangle = require('../../assets/images/DropdownTriangle.png');
const icon_dropdown_nav = require('../../assets/icons/icon-dropdown-white.png');

class ForasProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {},
        }
    }
    
    handleLogout = () => {
        session.del('foras-user');
        if (session.get('foras-user')) {
            this.handleLogout();
        }
    }

    componentDidMount() {
        const user = session.get('foras-user');
        this.setState({user: user});
    }

    render() {
        return (
            <Dropdown className="foras-profile">
                <Dropdown.Toggle id="dropdown-profile" className="icon-button mx-3" bsPrefix={true}>
                    <div className="row">
                        <div className="nav-profile-info mx-3">
                            الملف الشخصي
                            <img src={icon_dropdown_nav} alt="icon-dropdown" className="dropdown-icon-img mr-2" />
                        </div>
                        <div className="nav-profile-img-container">
                            <div className="nav-profile-img-wrapper">
                                <img src={this.state.user.logo 
                                    ? this.state.user.logo 
                                    : (this.state.user.role === 'corporate' 
                                        ? img_default_corporate 
                                        : img_default_individual)} alt="img-profie" className="nav-profile-img" />
                            </div>
                        </div>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors profile-dropdown">
                    <img src={img_dropdown_triangle} className="dropdown-triangle-img" alt="dropdown triangle" />
                    <div className="profile-detail">
                        <div className="profile-img-container">
                            <div className="profile-img-wrapper">
                                <img src={this.state.user.logo 
                                    ? this.state.user.logo 
                                    : (this.state.user.role === 'corporate' 
                                        ? img_default_corporate 
                                        : img_default_individual)} className="profile-img" alt="profile-img" />
                            </div>
                        </div>
                        <div className="profile-name">
                            { this.state.user.name }
                        </div>
                        <div className="profile-rate-star">
                            { this.state.user.marks && <Rater total={5} rating={this.state.user.marks} interactive={false} /> }
                        </div>
                    </div>

                    <Dropdown.Divider className="mt-3" />

                    <div className="text-center profile-address">
                        { this.state.user.address }
                    </div>
                    {/* <Dropdown.Item eventKey="0" className="btn-profile-location mt-3">
                        <img src={icon_location} alt="icon-compose" className="icon-img ml-4" /> تغيير الموقع
                    </Dropdown.Item>

                    <Dropdown.Divider className="mt-3" /> */}

                    <Dropdown.Item eventKey="profile-setting" className="btn-profile-edit mt-3" href="/profile">
                        <img src={icon_gear} alt="icon-compose" className="icon-img ml-4" /> تعديل الملف الشخصي
                    </Dropdown.Item>

                    <Dropdown.Divider className="mt-3" />

                    <Dropdown.Item eventKey="logout" className="btn-logout mt-3" onClick={this.handleLogout}>
                        <img src={icon_power} alt="icon-compose" className="icon-img ml-4" /> الخروج
                    </Dropdown.Item>
                    
                    {/* <Dropdown.Item eventKey="4" className="text-center">
                        المزيد
                        <img src={icon_dropdown} alt="icon-dropdown" className="dropdown-icon-img mr-2" />
                    </Dropdown.Item> */}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default ForasProfile;