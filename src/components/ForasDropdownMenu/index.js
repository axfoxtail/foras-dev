import React from 'react';
import { Modal, Button, Navbar, Nav } from 'react-bootstrap';

import './foras-dropdown-menu.scss';

const icon_dropdown = require('../../assets/icons/icon-dropdown-white.png');
const img_dropdown_triangle = require('../../assets/images/DropdownTriangle.png');

class ForasDropdownMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
    }
    
    handleClose = () => {
        this.setState({showModal: false});
    }

    handleShow = () => {
        this.setState({showModal: true});
    }

    render() {
        return (
            <div>
                <Button className="btn-foras-dropdown" onClick={this.handleShow}>
                    {this.props.title}
                    <img src={icon_dropdown} width="15" className="icon-dropdown-white mr-1" alt="" />
                </Button>
        
                <Modal 
                    show={this.state.showModal} 
                    onHide={this.handleClose} 
                    className="dropdown-modal" 
                    backdropClassName="foras-backdrop"
                    animation={false}
                    >
                    <img src={img_dropdown_triangle} className="dropdown-triangle-img" alt="dropdown triangle" />
                    <Modal.Body>
                        <Navbar>
                            <Nav className={this.props.navClass}>
                                {Object.entries(this.props.nav).map(([key, obj]) => {
                                    return (<Nav.Link key={key} href={obj.link} className="px-4">{obj.title}</Nav.Link>);
                                })}
                            </Nav>
                        </Navbar>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
    
}
  
export default ForasDropdownMenu;