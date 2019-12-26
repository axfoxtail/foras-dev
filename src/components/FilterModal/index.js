import React from 'react';
import { Modal, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import './filter-modal.scss';
import userApi from '../../services/user.service';
import session from '../../services/session.service';
import helper from '../../services/helper.service';

const img_btn_go = require('../../assets/images/btn-go.png');
const img_filter_workdays = require('../../assets/images/filter-workdays.png');
const img_filter_workhours = require('../../assets/images/filter-workhours.png');
const img_filter_money = require('../../assets/images/filter-money.png');
const img_filter_period = require('../../assets/images/filter-period.png');
const img_btn_filter = require('../../assets/images/btn-filter.png');

class FilterModal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showModal: false,
            filterOption: '',
            workdays: '',
            workhours: '',
            salary_type: '',
            salary_amount: '',
            period: '',
            errors: {},
        }
    }
  
    handleClose = () => {
        this.setState({showModal: false});
    }
    
    handleShow = () => {
        this.setState({showModal: true});
    }

    clearFilterParam = () => {
        switch(this.state.filterOption) {
            case 'workdays' :
                this.setState({
                    workhours: '',
                    salary_type: '',
                    salary_amount: '',
                    period: '',
                });
                break;
            case 'workhours' :
                this.setState({
                    workdays: '',
                    salary_type: '',
                    salary_amount: '',
                    period: '',
                });
                break;
            case 'salary' :
                this.setState({
                    workdays: '',
                    workhours: '',
                    period: '',
                });
                break;
            case 'period' :
                this.setState({
                    workdays: '',
                    workhours: '',
                    salary_type: '',
                    salary_amount: '',
                });
                break;
            default :
                this.setState({
                    workdays: '',
                    workhours: '',
                    salary_type: '',
                    salary_amount: '',
                    period: '',
                });
        }
        
    }

    handleInputChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({[name] : value});
    }

    checkFilterOption = (filterOption) => {
        if(this.state.filterOption === filterOption) {
            return true;
        }
        return false;
    }

    handleFilterNav = (filterOption) => {
        this.setState({filterOption: filterOption});
    }

    checkActive = (workday) => {
        let workdays = this.state.workdays;
        if(workdays.includes(workday)) {
            return true;
        }
        return false;
    }

    handleToggleWorkdays = (workday) => {
        let workdays = this.state.workdays;
        if(workdays.includes(workday)) {
            workdays = workdays.split(workday).join(',').split(',,').join(',');
        } else {
            workdays = workdays + workday + ',';
        }
        this.setState({
            workdays: workdays
        });
    }

    handleFilter = () => {
        this.clearFilterParam();
        console.log(this.state);
    }
  
    render() {
        return (
            <div>
                <Button className="btn-filter" onClick={this.handleShow}>
                    <img src={img_btn_filter} className="filter-button-img" alt="btn-filter" />
                </Button>
        
                <Modal show={this.state.showModal} onHide={this.handleClose} className="filter-modal">
                    <Modal.Header>
                        <Modal.Title>تسجيل الدخول</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="filter-nav">
                            <div className="row m-0">
                                <div className="col-3 p-0">
                                    <Button className={this.checkFilterOption('workdays') ? "btn-filter-nav active" : "btn-filter-nav"}
                                        onClick={() => this.handleFilterNav('workdays')}>
                                            <img src={img_filter_workdays} className="filter-nav-img" />
                                        </Button>
                                </div>
                                <div className="col-3 p-0">
                                    <Button className={this.checkFilterOption('workhours') ? "btn-filter-nav active" : "btn-filter-nav"} 
                                        onClick={() => this.handleFilterNav('workhours')}>
                                            <img src={img_filter_workhours} className="filter-nav-img" />
                                        </Button>
                                </div>
                                <div className="col-3 p-0">
                                    <Button className={this.checkFilterOption('salary') ? "btn-filter-nav active" : "btn-filter-nav"} 
                                        onClick={() => this.handleFilterNav('salary')}>
                                            <img src={img_filter_money} className="filter-nav-img" />
                                        </Button>
                                </div>
                                <div className="col-3 p-0">
                                    <Button className={this.checkFilterOption('period') ? "btn-filter-nav active" : "btn-filter-nav"} 
                                        onClick={() => this.handleFilterNav('period')}>
                                            <img src={img_filter_period} className="filter-nav-img" />
                                        </Button>
                                </div>
                            </div>
                        </div>
                        {/* --- sub option --- */}
                        <div className={this.checkFilterOption('period') ? "filter-period open" : "filter-period"}>
                            <div className="row m-0">
                                <InputGroup className="col-12 d-block pl-1">
                                    <Form.Control as="select" className="select" name="period" onChange={this.handleInputChange}>
                                        <option value="">-- البلد --</option>
                                        <option value="days">أيام</option>
                                        <option value="weeks">أسابيع</option>
                                        <option value="months">الشهور</option>
                                    </Form.Control>
                                </InputGroup>
                                {/* <InputGroup className="col-6 d-block pl-1">
                                    <Form.Control as="select" className="select" name="state" onChange={this.handleInputChange}>
                                        <option value="">-- البلد --</option>
                                        <option value="morning">عسير</option>
                                        <option value="evening">عسير</option>
                                        <option value="late night">عسير</option>
                                    </Form.Control>
                                </InputGroup> */}
                            </div>
                        </div>
                        <div className={this.checkFilterOption('salary') ? "filter-salary open" : "filter-salary"}>
                            <div className="row m-0">
                                <InputGroup className="col-6 d-block pl-1">
                                    <Form.Control as="select" className="select" name="salary_type" value={this.state.salary_type} onChange={this.handleInputChange}>
                                        <option value="">-- البلد --</option>
                                        <option value="hourly">ساعيا</option>
                                        <option value="monthly">شهريا</option>
                                    </Form.Control>
                                </InputGroup>
                                <InputGroup className="col-6 d-block pl-1">
                                    <Form.Control type="text" name="salary_amount" value={this.state.salary_amount} onChange={this.handleInputChange}>
                                    </Form.Control>
                                </InputGroup>
                            </div>
                        </div>
                        <div className={this.checkFilterOption('workhours') ? "filter-workhours open" : "filter-workhours"}>
                            <div className="row">
                                <InputGroup className="col-12 ">
                                    <Form.Control as="select" defaultValue={this.state.workhours} className="select" name="workhours" onChange={this.handleInputChange}>
                                        <option value="">-- البلد --</option>
                                        <option value="morning">صباح</option>
                                        <option value="evening">مساء</option>
                                        <option value="late night">وقت متأخر من الليل</option>
                                    </Form.Control>
                                </InputGroup>
                            </div>
                        </div>
                        <div className={this.checkFilterOption('workdays') ? "filter-workdays open" : "filter-workdays"}>
                            <h5 className="my-3 pr-3 text-right duration-of-employment"> مدة العملأيام العمل </h5>
                            <div className="row">
                                <div className="col-3">
                                    <Button className={this.checkActive('Saturday') ? "btn-toggle-workdays active" : "btn-toggle-workdays"} onClick={() => this.handleToggleWorkdays('Saturday')}> السبت </Button>
                                </div>
                                <div className="col-3">
                                    <Button className={this.checkActive('Sunday') ? "btn-toggle-workdays active" : "btn-toggle-workdays"} onClick={() => this.handleToggleWorkdays('Sunday')}> الأحد </Button>
                                </div>
                                <div className="col-3">
                                    <Button className={this.checkActive('Monday') ? "btn-toggle-workdays active" : "btn-toggle-workdays"} onClick={() => this.handleToggleWorkdays('Monday')}> الإتنين </Button>
                                </div>
                                <div className="col-3">
                                    <Button className={this.checkActive('Tuesday') ? "btn-toggle-workdays active" : "btn-toggle-workdays"} onClick={() => this.handleToggleWorkdays('Tuesday')}> الثلاثاء </Button>
                                </div>
                                <div className="col-3">
                                    <Button className={this.checkActive('Wednesday') ? "btn-toggle-workdays active" : "btn-toggle-workdays"} onClick={() => this.handleToggleWorkdays('Wednesday')}> الأربعاء </Button>
                                </div>
                                <div className="col-3">
                                    <Button className={this.checkActive('Thursday') ? "btn-toggle-workdays active" : "btn-toggle-workdays"} onClick={() => this.handleToggleWorkdays('Thursday')}> الخميس </Button>
                                </div>
                                <div className="col-3">
                                    <Button className={this.checkActive('Friday') ? "btn-toggle-workdays active" : "btn-toggle-workdays"} onClick={() => this.handleToggleWorkdays('Friday')}> الجمعة </Button>
                                </div>
                            </div>
                        </div>
                            
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-go mx-auto btn-lg" onClick={this.handleFilter}> Apply </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
    
}
  
export default FilterModal;