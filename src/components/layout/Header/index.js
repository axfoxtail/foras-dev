import React from 'react';
import { 
        Navbar, 
        Nav, 
    } from 'react-bootstrap';
import LoginModal from '../../LoginModal';
import RegisterCorporateModal from '../../RegisterCorporateModal';
import RegisterIndividualModal from '../../RegisterIndividualModal';
import ForasDropdownMenu from '../../ForasDropdownMenu';
import './header.scss';
import ForasNotification from '../../ForasNotification';
import ForasMessage from '../../ForasMessage';
import ForasProfile from '../../ForasProfile';
import session from '../../../services/session.service';

const individual_nav = [
    {
        title: 'خريطة الفرص',
        link: '/map'
    },
    {
        title: 'قائمة الوظائف',
        link: '/jobs'
    },
    {
        title: 'قائمة الشركات',
        link: '/corporates'
    }
];

const corporate_nav = [
    {
        title: 'خريطة الفرص',
        link: '/map'
    },
    {
        title: 'قائمة الوظائف',
        link: '/jobs'
    },
    {
        title: 'قائمة الأفراد',
        link: '/individuals'
    }
];

class Header extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isLoggedIn: false,
            role: null,
        }
    }

    componentDidMount() {
        const user = session.get('foras-user');
        const isLoggedIn = user ? true : false;
        this.setState({isLoggedIn: isLoggedIn});
        if (user) {
            this.setState({role: user.role});
        }
    }

    render() {
        return (
            <div className="header">
                <div className="container-fluid">
                    <Navbar>
                        <Navbar.Brand href="/">
                        <img
                            src={require('../../../assets/logo.png')}
                            className="d-inline-block align-top logo"
                            alt="Foras logo"
                        />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="px-5">
                                <Nav.Link href="/">الرئيسية</Nav.Link>
                                {this.state.isLoggedIn && this.state.role === 'individual' && <ForasDropdownMenu title="الأفراد" nav={individual_nav} navClass="individual-nav" />}
                                {this.state.isLoggedIn && this.state.role === 'corporate' && <ForasDropdownMenu title="الشركات" nav={corporate_nav} navClass="corporate-nav" />}
                                <Nav.Link href="/contact-us">تواصل معنا</Nav.Link>
                            </Nav>
                            {this.state.isLoggedIn === true ?
                                <div className="d-inline-flex mr-auto">
                                    <ForasNotification />
                                    <ForasMessage />
                                    <ForasProfile />
                                </div>
                                :
                                <div className="d-inline-flex mr-auto">
                                    <LoginModal />
                                    <RegisterIndividualModal />
                                    <RegisterCorporateModal />
                                </div>
                            }
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                {/* Individual Menu */}
                {/* <div className={this.state.showIndividual ? 'foras-dropdown show' : 'foras-dropdown'} id="individual-nav">
                    <div className="sub-nav">
                        <Nav className="px-5">
                            <Nav.Link href="/individuals/map">خريطة الفرص</Nav.Link>
                            <Nav.Link href="/individuals/jobs-list">قائمة الوظائ</Nav.Link>
                            <Nav.Link href="/individuals/favorites">قائمة الشرك</Nav.Link>
                        </Nav>
                    </div>
                </div> */}
                {/* Corporate Menu */}
                {/* <div className={this.state.showCorporate ? 'foras-dropdown show' : 'foras-dropdown'} id="corporate-nav">
                    <div className="sub-nav">
                        <Nav className="px-5">
                            <Nav.Link href="/corporates/map">خريطة الفرص</Nav.Link>
                            <Nav.Link href="/corporates/jobs-list">قائمة الوظائ</Nav.Link>
                            <Nav.Link href="/corporates/favorites">قائمة الشرك</Nav.Link>
                        </Nav>
                    </div>
                </div> */}
            </div>
        );
    }    
    
}

export default Header;