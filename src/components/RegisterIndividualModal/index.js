import React from 'react';
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import './register-individual-modal.scss';

import userApi from '../../services/user.service';
import session from '../../services/session.service';
import helper from '../../services/helper.service';

const img_btn_go = require('../../assets/images/btn-go.png');
const icon_user = require('../../assets/icons/icon-user.png');
const icon_location = require('../../assets/icons/icon-location.png');
const icon_email = require('../../assets/icons/icon-email.png');
const icon_password = require('../../assets/icons/icon-password.png');
const icon_male = require('../../assets/icons/icon-male.png');
const icon_female = require('../../assets/icons/icon-female.png');
const icon_tel = require('../../assets/icons/icon-tel.png');

class RegisterIndividualModal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showModal: false,
            role: 'individual',
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            address: '',
            state: '',
            city: '',
            gender: '',
            phone: '',
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
        const target = event.target;
        const name = target.name;
        switch(target.type) {
            case 'button' : 
                this.setState({[name] : target.value});
                break;
            case 'checkbox' : 
                break;
            default : 
                this.setState({[name] : target.value});
                break;
        }
    }

    registerAsIndividual = () => {
        userApi.register(this.state)
            .then(response => {
                if(response.status === 200) {
                    session.set('foras-user', response.data);
                    helper.showToast('Success', 'Successfully registerd.', 1);
                    window.location.reload();
                } else if(response.status === 400){
                    if(response.errors) {
                        this.setState({errors: response.errors});
                    }
                } else {
                    console.log('in.register: ', response);
                    helper.showToast('Error', 'Failed to register.', 3);
                }
            })
            .catch((error) => {
                console.log('in.register.err:', error);
                helper.showToast('Error', 'Failed to register.', 3);
            });
    }
  
    render() {
        return (
            <div>
                <Button className="btn-register-individual" onClick={this.handleShow}>
                تسجيل فرد جد
                </Button>
        
                <Modal show={this.state.showModal} onHide={this.handleClose} className="register-modal">
                    <Modal.Header>
                        <Modal.Title>تسجيل فرد جد</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="register-form">
                            <div className="row">
                                <div className="col-6">
                                    <InputGroup className="d-block">
                                        <img src={icon_user} className="input-icon" alt="User Icon" />
                                        <FormControl
                                            placeholder="username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            type="text"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                        />
                                        <div className="err-msg"> {this.state.errors.name ? this.state.errors.name[0] : ''} </div>
                                    </InputGroup>
                                    <InputGroup className="d-block">
                                        <img src={icon_email} className="input-icon" alt="Email Icon" />
                                        <FormControl
                                            placeholder="ahmed@mail.com"
                                            aria-label="Email"
                                            aria-describedby="basic-addon1"
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange}
                                        />
                                        <div className="err-msg"> {this.state.errors.email ? this.state.errors.email[0] : ''} </div>
                                    </InputGroup>
                                    <InputGroup className="d-block">
                                        <img src={icon_password} className="input-icon" alt="Password Icon" />
                                        <FormControl
                                            placeholder="كلمه السر"
                                            aria-label="Password"
                                            aria-describedby="basic-addon1"
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                        />
                                        <div className="err-msg"> {this.state.errors.password ? this.state.errors.password[0] : ''} </div>
                                    </InputGroup>
                                    <InputGroup className="mb-0 d-block">
                                        <img src={icon_password} className="input-icon" alt="Password Icon" />
                                        <FormControl
                                            placeholder="تأكيد كلمة المرور"
                                            aria-label="Password Conform"
                                            aria-describedby="basic-addon1"
                                            type="password"
                                            name="password_confirmation"
                                            value={this.state.password_confirmation}
                                            onChange={this.handleInputChange}
                                        />
                                        <div className="err-msg"> {this.state.errors.password_confirmation ? this.state.errors.password_confirmation[0] : ''} </div>
                                    </InputGroup>
                                </div>    
                                <div className="col-6 right-border-indicator">
                                    <InputGroup className="d-block">
                                        <img src={icon_location} className="input-icon" alt="Location Icon" />
                                        <FormControl
                                            placeholder="العنوان"
                                            aria-label="Address"
                                            aria-describedby="basic-addon1"
                                            type="text"
                                            name="address"
                                            value={this.state.address}
                                            onChange={this.handleInputChange}
                                        />
                                        <div className="err-msg"> {this.state.errors.address ? this.state.errors.address[0] : ''} </div>
                                    </InputGroup>
                                    <div className="row">
                                        <InputGroup className="col-6 d-block pl-1">
                                            <Form.Control as="select" className="select" name="state" onChange={this.handleInputChange}>
                                                <option value="">-- البلد --</option> {/* -- none -- */}
                                                <option value="عسير">عسير</option> {/* 'Asir */}
                                                <option value="الباحة">الباحة</option> {/* Bahah */}
                                                <option value="المنطقة الشرقية">المنطقة الشرقية</option> {/* Eastern Province */}
                                                <option value="وابل">وابل</option> {/* Ha'il */}
                                                <option value="الجوف">الجوف</option> {/* Jawf */}
                                                <option value="جازان">جازان</option> {/* Jizan */}
                                                <option value="المدينة المنورة">المدينة المنورة</option> {/* Madinah */}
                                                <option value="مكه">مكه</option> {/* Makkah */}
                                                <option value="نجران">نجران</option> {/* Najran */}
                                                <option value="الحدود الشمالية">الحدود الشمالية</option> {/* Northern Borders */}
                                                <option value="قاسم">قاسم</option> {/* Qassim */}
                                                <option value="مدينة الرياض">مدينة الرياض</option> {/* Riyadh */}
                                                <option value="تبوك">تبوك</option> {/* Tabuk */}
                                            </Form.Control>
                                            <div className="err-msg"> {this.state.errors.state ? this.state.errors.state[0] : ''} </div>
                                        </InputGroup>
                                        <InputGroup className="col-6 d-block pr-1">
                                            <FormControl
                                                className="none-icon"
                                                placeholder="المدينة"
                                                aria-label="City"
                                                aria-describedby="basic-addon1"
                                                type="text"
                                                name="city"
                                                value={this.state.city}
                                                onChange={this.handleInputChange}
                                            />
                                            <div className="err-msg"> {this.state.errors.city ? this.state.errors.city[0] : ''} </div>
                                        </InputGroup>
                                    </div>
                                    <div className="row m-b-15">
                                        <div className="col-6 pl-1">
                                            <Button name="gender" value="male" className={this.state.gender === 'male' ? "btn-gender active" : "btn-gender"} onClick={this.handleInputChange}>
                                                <img src={icon_male} className="gender-icon" alt="Male Icon" />
                                                ذكر
                                            </Button>
                                        </div>
                                        <div className="col-6 pr-1">
                                            <Button name="gender" value="female" className={this.state.gender === 'female' ? "btn-gender active" : "btn-gender"} onClick={this.handleInputChange}>
                                                <img src={icon_female} className="gender-icon" alt="Female Icon" />
                                                أنثى
                                            </Button>
                                        </div>
                                        <div className="err-msg"> {this.state.errors.gender ? this.state.errors.gender[0] : ''} </div>
                                    </div>
                                    <InputGroup className="mb-0 d-block">
                                        <img src={icon_tel} className="input-icon" alt="Tel Icon" />
                                        <FormControl
                                            placeholder="رقم الهاتف"
                                            aria-label="Tel"
                                            aria-describedby="basic-addon1"
                                            type="text"
                                            name="phone"
                                            value={this.state.phone}
                                            onChange={this.handleInputChange}
                                        />
                                        <div className="err-msg"> {this.state.errors.phone ? this.state.errors.phone[0] : ''} </div>
                                    </InputGroup>
                                </div>    
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-go icon-button" onClick={this.registerAsIndividual}>
                            <img src={img_btn_go} className="img-btn-go" alt="Go Button" />
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
    
}
  
export default RegisterIndividualModal;