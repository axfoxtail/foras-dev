import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './confirm-role-modal.scss';
import userApi from '../../services/user.service';
import session from '../../services/session.service';
import helper from '../../services/helper.service';

const img_btn_go = require('../../assets/images/btn-go.png');
class ConfirmRoleModal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showModal: false,
            role: '',
        }
    }
  
    handleClose = () => {
        this.setState({showModal: false});
        this.props.closeRoleModal();
    }
    
    handleShow = () => {
        this.setState({showModal: true});
    }

    handleRole = (role) => {
        this.setState({role: role});
    }
  
    render() {
        return (
            <div>
                {/* <Button className="btn-role" onClick={this.handleShow}>
                    showModal
                </Button> */}
        
                <Modal show={this.props.showModal} onHide={this.handleClose} className="role-modal">
                    <Modal.Header>
                        <Modal.Title>يرجى تأكيد دورك.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="button-group text-center d-block">
                            <Button className={this.state.role === 'individual' ? "btn-role active" : "btn-role"}
                                onClick={() => this.handleRole('individual')}
                            >I want to register as Individual.</Button>
                            <Button className={this.state.role === 'corporate' ? "btn-role active" : "btn-role"}
                                onClick={() => this.handleRole('corporate')}
                            >I want to register as Corporate.</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-go icon-button" onClick={() => this.props.handleNext(this.state.role)}>
                            <img src={img_btn_go} className="img-btn-go" alt="Go Button" />
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
    
}
  
export default ConfirmRoleModal;