import React from 'react';
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import './new-message-modal.scss';
import messageApi from '../../services/message.service';
import helper from '../../services/helper.service';

const img_btn_go = require('../../assets/images/btn-go.png');

class RatingModal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showModal: false,
            message: '',
            errors: {},
        }
    }
  
    handleClose = () => {
        this.setState({showModal: false});
    }
    
    handleShow = () => {
        this.setState({showModal: true});
    }

    handleInputChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({[name] : value});
    }

    handleNewMessage = () => {
        const message = {
            receiver_id: this.props.jobOwner.id,
            message: this.state.message,
        };
        messageApi.sendMessage(message)
            .then((response) => {
                if (response.status === 200) {
                    helper.showToast('Success', 'Successfully Sent.', 1);
                    window.location.reload();
                } else if(response.status === 400){
                    if(response.errors) {
                        this.setState({errors: response.errors});
                    }
                } else {
                    helper.showToast('Error', 'Invalid Params.', 3);
                }
            })
            .catch((error) => {
                console.log('err: ', error);
                helper.showToast('Error', 'Error Occupied.', 3);
            });
    }
  
    render() {
        return (
            <div className="d-inline-flex">
                <Button className="btn-send-msg mx-2" onClick={this.handleShow}>
                    إرسال رسالة
                </Button>
        
                <Modal show={this.state.showModal} onHide={this.handleClose} className="message-modal">
                    <Modal.Header>
                        <Modal.Title>إرسال رسالة</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="message-form">
                            <div className="err-msg text-center"> {(this.state.errors && typeof this.state.errors === 'string') ? this.state.errors : ''} </div>
                            <InputGroup className="my-3 d-block">
                                <FormControl
                                    placeholder="رسالة"
                                    aria-label="message"
                                    aria-describedby="basic-addon1"
                                    as="textarea" 
                                    rows="5"
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                />
                                <div className="err-msg"> {this.state.errors.message ? this.state.errors.message[0] : ''} </div>
                            </InputGroup>
                        </Form>
                        {/* <div className="social-icon-group pt-3">
                            <a href="/" className="social-btn">
                                <img src={img_linkedin} className="social-icon" alt="Linkedin" />
                            </a>
                            <a href="/" className="social-btn mx-5">
                                <img src={img_google} className="social-icon" alt="Google" />
                            </a>
                            <a href="/" className="social-btn">
                                <img src={img_facebook} className="social-icon" alt="Facebook" />
                            </a>
                        </div> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-go icon-button" onClick={this.handleNewMessage}>
                            <img src={img_btn_go} className="img-btn-go" alt="Go Button" />
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
    
}
  
export default RatingModal;