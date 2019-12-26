import React from 'react';
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import './payment-modal.scss';
import userApi from '../../services/user.service';
import session from '../../services/session.service';
import helper from '../../services/helper.service';

const img_btn_go = require('../../assets/images/btn-go.png');
const img_visa = require('../../assets/images/visa.png');

class PaymentModal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showModal: false,
            email: '',
            password: '',
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

    handleLogin = () => {
        userApi.login(this.state)
            .then((response) => {
                if (response.status === 200) {
                    session.set('foras-user', response.data);
                    helper.showToast('Success', 'Successfully logged in', 1);
                    window.location.reload();
                } else {
                    helper.showToast('Error', 'Invalid User', 3);
                }
            })
            .catch((error) => {
                // console.log('err: ', error);
                helper.showToast('Error', 'Invalid User', 3);
            });
    }
  
    render() {
        return (
            <div>
                <Button className="btn-go icon-button" onClick={this.handleShow}>
                    <img src={img_btn_go} className="img-btn-go" alt="Go Button" />
                </Button>
        
                <Modal show={this.state.showModal} onHide={this.handleClose} className="payment-modal">
                    <Modal.Header>
                        <Modal.Title>طريقة الدفع</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="payment-form">
                            <InputGroup className="my-3">
                                <img src={img_visa} className="img_visa" alt="Visa Icon" />
                                <FormControl
                                    style={{paddingLeft: 100}}
                                    placeholder="رقم البطاقة"
                                    aria-label="card number"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                    name="card_number"
                                    value={this.state.card_number}
                                    onChange={this.handleInputChange}
                                />
                            </InputGroup>
                            <InputGroup className="mt-4 mb-3">
                                <FormControl
                                    placeholder="الإسم على البطاقة"
                                    aria-label="card_name"
                                    aria-describedby="basic-addon2"
                                    type="text"
                                    name="card_name"
                                    value={this.state.card_name}
                                    onChange={this.handleInputChange}
                                />
                            </InputGroup>
                            <h6 className="text-right pr-3"> تاريخ الإنتهاء </h6>
                            <div className="row">
                                <div className="col-6">
                                    <InputGroup className="mt-4 mb-3">
                                        <FormControl
                                            placeholder="الشهر"
                                            aria-label="Password"
                                            aria-describedby="basic-addon2"
                                            className="input-password"
                                            type="text"
                                            name="expire_date"
                                            value={this.state.expire_date}
                                            onChange={this.handleInputChange}
                                        />
                                    </InputGroup>
                                </div>
                                <div className="col-6">
                                    <InputGroup className="mt-4 mb-3">
                                        <FormControl
                                            placeholder="الإنتهاء"
                                            aria-label="Password"
                                            aria-describedby="basic-addon2"
                                            className="input-password"
                                            type="text"
                                            name="cvc"
                                            value={this.state.cvc}
                                            onChange={this.handleInputChange}
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                            <InputGroup className="mt-4 mb-3">
                                <FormControl
                                    placeholder="الرقم السري"
                                    aria-label="Password"
                                    aria-describedby="basic-addon2"
                                    className="input-password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                />
                            </InputGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-go icon-button" onClick={this.handleLogin}>
                            <img src={img_btn_go} className="img-btn-go" alt="Go Button" />
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
    
}
  
export default PaymentModal;