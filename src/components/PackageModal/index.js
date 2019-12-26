import React from 'react';
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import './package-modal.scss';
import PaymentModal from '../PaymentModal';

const img_btn_go = require('../../assets/images/btn-go.png');
const icon_check = require('../../assets/icons/icon-check.png');
const icon_uncheck = require('../../assets/icons/icon-uncheck.png');
const img_visa = require('../../assets/images/visa.png');

class PackageModal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showModal: false,
            showPaymentModal: false,
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

    handlePaymentModalClose = () => {
        this.setState({showPaymentModal: false});
    }
    
    handlePaymentModalShow = () => {
        this.setState({showModal: false, showPaymentModal: true});
    }

    handleInputChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({[name] : value});
    }

    handleNext = () => {
        
    }
  
    render() {
        return (
            <div>
                <Button className="btn-renew" onClick={this.handleShow}>
                    التجديد او اختيار حزمة جديدة
                </Button>
        
                <Modal show={this.state.showModal} onHide={this.handleClose} className="package-modal">
                    <Modal.Header>
                        <Modal.Title> برجاء اختيار الحزمة المناسبة </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row text-center">
                            <div className="col-4 p-3">تواصل مع 10 مرشح</div>
                            <div className="col-4 p-3 right-border-indicator">تواصل مع 2٠ مرشح</div>
                            <div className="col-4 p-3 right-border-indicator">تواصل مع ٣٠ مرشح</div>
                        </div>
                        <div className="row text-center text-white">
                            <div className="col-4 p-3 light">$1٥٠</div>
                            <div className="col-4 p-3 medium right-border-indicator">$٢0٠</div>
                            <div className="col-4 p-3 heavy right-border-indicator">$٢٥٠</div>
                        </div>
                        <div className="row text-center">
                            <div className="col-4 p-3">
                                <div className="row m-0 py-2">
                                    <div className="d-inline">
                                        <img src={icon_check} className="ml-2 float-right" width="25" alt="" />
                                        تواصل مع ١٠ مرشح مباش
                                    </div>
                                </div>
                                <div className="row m-0 py-2">
                                    <div className="d-inline">
                                        <img src={icon_check} className="ml-2 float-right" width="25" alt="" />
                                        نشر وظيفة واح
                                    </div>
                                </div>
                                <div className="row m-0 py-2">
                                    <div className="d-inline">
                                        <img src={icon_check} className="ml-2 float-right" width="25" alt="" />
                                        لبحث عن السيرة الذاتي
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 p-3 right-border-indicator">
                                <div className="row m-0 py-2">
                                    <div className="d-inline">
                                        <img src={icon_check} className="ml-2 float-right" width="25" alt="" />
                                        تواصل مع ٢٠ مرشح مباش
                                    </div>
                                </div>
                                <div className="row m-0 py-2">
                                    <div className="d-inline">
                                        <img src={icon_check} className="ml-2 float-right" width="25" alt="" />
                                        نشر الى حد 2 وظائف
                                    </div>
                                </div>
                                <div className="row m-0 py-2">
                                    <div className="d-inline">
                                        <img src={icon_check} className="ml-2 float-right" width="25" alt="" />
                                        لبحث عن السيرة الذاتي
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 p-3 right-border-indicator">
                                <div className="row m-0 py-2">
                                    <div className="d-inline">
                                        <img src={icon_check} className="ml-2 float-right" width="25" alt="" />
                                        تواصل مع ١٠ مرشح مباش
                                    </div>
                                </div>
                                <div className="row m-0 py-2">
                                    <div className="d-inline">
                                        <img src={icon_check} className="ml-2 float-right" width="25" alt="" />
                                        نشر وظيفة واح
                                    </div>
                                </div>
                                <div className="row m-0 py-2">
                                    <div className="d-inline">
                                        <img src={icon_check} className="ml-2 float-right" width="25" alt="" />
                                        لبحث عن السيرة الذاتي
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-4">
                                <Button className="icon-button">
                                    <img src={icon_uncheck} width="50" alt="icon-check" />
                                </Button>
                            </div>
                            <div className="col-4 right-border-indicator">
                                <Button className="icon-button">
                                    <img src={icon_uncheck} width="50" alt="icon-check" />
                                </Button>
                            </div>
                            <div className="col-4 right-border-indicator">
                                <Button className="icon-button">
                                    <img src={icon_uncheck} width="50" alt="icon-check" />
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-go icon-button" onClick={this.handlePaymentModalShow}>
                            <img src={img_btn_go} className="img-btn-go" alt="Go Button" />
                        </Button>
                        {/* <PaymentModal 
                            showPaymentModal={this.state.showPaymentModal} 
                            handlePaymentModal={this.handlePaymentModal} 
                        /> */}
                    </Modal.Footer>
                </Modal>
                {/* ======================================================== */}
                <Modal show={this.state.showPaymentModal} onHide={this.handlePaymentModalClose} className="payment-modal">
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
                        <Button className="btn-go icon-button" onClick={this.handleNext}>
                            <img src={img_btn_go} className="img-btn-go" alt="Go Button" />
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
    
}
  
export default PackageModal;