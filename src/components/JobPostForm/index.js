import React from 'react';
import { Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import './job-post-form.scss';
import jobApi from '../../services/job.service';
import session from '../../services/session.service';
import helper from '../../services/helper.service';
import Line from '../Line';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ar from 'date-fns/locale/ar-DZ';
registerLocale('ar', ar)

const icon_datepicker = require('../../assets/icons/icon-datepicker.png');

class JobPostForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showModal: false,
            job_name: '',
            category_id: '',
            location: '',
            start_date: '',
            end_date: '',
            workdays: '',
            workhours: '',
            salary_type: '',
            salary_amount: '',
            languages: '',
            job_details: '',
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

    handleStartDateChange = (date) => {
        this.setState({start_date: date});
    }

    handleEndDateChange = (date) => {
        this.setState({end_date: date});
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
        this.setState({workdays: workdays});
    }

    handleSubmit = () => {
        jobApi.postJob(this.state)
            .then(response => {
                if(response.status === 200) {
                    helper.showToast('Success', 'Successfully posted a job.', 1);
                    window.location.href='/profile';
                } else {
                    helper.showToast('Error', 'Failed to post a job.', 3);
                }
            })
            .catch((error) => {
                console.log('>>err:', error);
                helper.showToast('Error', 'Failed to post a job.', 3);
            });
    }

    render() {
        return (
            <div className="container py-5">
                <Form className="job-post-form card p-5">
                    <div className="row mx-auto mb-3">
                        <h3> الوظائف المفتوحة </h3>
                    </div>
                    <Line />
                    <div className="row mt-5">
                        <div className="col-6 pl-4">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="مسمى الوظيفة"
                                    aria-label="Job Title"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                    name="job_name"
                                    value={this.state.job_name}
                                    onChange={this.handleInputChange}
                                />
                            </InputGroup>
                            <h5 className="my-3 pr-3 text-right job-field"> مجال الوظيفة </h5>
                            <InputGroup className="mb-3">
                                <Form.Control as="select" className="select" name="category_id" onChange={this.handleInputChange}>
                                    <option>-- البلد --</option> {/* -- none -- */}
                                    <option value="1">Web</option> {/* 'Category 1 */}
                                    <option value="2">Mobile</option> {/* category 2 */}
                                </Form.Control>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="مسمى الوظيفة"
                                    aria-label="Job Location"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                    name="location"
                                    value={this.state.location}
                                    onChange={this.handleInputChange}
                                />
                            </InputGroup>
                            <h5 className="my-3 pr-3 text-right duration-of-employment"> مدة العمل </h5>
                            <div className="position-relative">
                                <img src={icon_datepicker} className="datepicker-icon" alt="Date picker" />
                                <DatePicker
                                    className="form-control"
                                    placeholder="مسمى الوظيفة"
                                    locale="ar"
                                    selected={this.state.start_date}
                                    onChange={this.handleStartDateChange}
                                />
                            </div>
                            <div className="position-relative">
                                <img src={icon_datepicker} className="datepicker-icon" alt="Date picker" />
                                <DatePicker
                                    className="form-control"
                                    placeholder="مسمى الوظيفة"
                                    locale="ar"
                                    selected={this.state.end_date}
                                    onChange={this.handleEndDateChange}
                                />
                            </div>
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
                        <div className="col-6 pr-4">
                            <h5 className="my-3 pr-3 text-right workhours"> ساعات العمل </h5>
                            <InputGroup className="mb-3">
                                <Form.Control as="select" className="select" name="workhours" onChange={this.handleInputChange}>
                                    <option value="">-- عدد ساعات العمل --</option> {/* -- none -- */}
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </Form.Control>
                            </InputGroup>
                            <h5 className="my-3 pr-3 text-right the-fare"> الأجرة </h5>
                            <div className="row mb-3">
                                <InputGroup className="col-6 pl-1">
                                    <Form.Control as="select" className="select" name="salary_type" onChange={this.handleInputChange}>
                                        <option>-- طريقة الدفع --</option> {/* -- none -- */}
                                        <option value="hourly">ساعيا</option>
                                        <option value="daily">اليومي</option>
                                        <option value="weekly">أسبوعي</option>
                                        <option value="monthly">شهريا</option>
                                    </Form.Control>
                                </InputGroup>
                                <InputGroup className="col-6 pr-1">
                                    <FormControl
                                        className="none-icon"
                                        placeholder="المدينة"
                                        aria-label="Salary Amount"
                                        aria-describedby="basic-addon1"
                                        type="text"
                                        name="salary_amount"
                                        value={this.state.salary_amount}
                                        onChange={this.handleInputChange}
                                    />
                                </InputGroup>
                            </div>
                            <h5 className="my-3 pr-3 text-right language-required"> اللغات المطلوبة </h5>
                            <InputGroup className="mb-3">
                                <Form.Control as="select" className="select" name="languages" onChange={this.handleInputChange}>
                                    <option value="">-- إختر اللغات المطلوبة --</option> {/* -- none -- */}

                                    <option value="arabic">عربى</option>
                                    <option value="english">الإنجليزية</option>
                                </Form.Control>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    className="none-icon"
                                    placeholder="تفاصيل الوظيفة"
                                    aria-label="Job Details"
                                    aria-describedby="basic-addon1"
                                    as="textarea"
                                    rows="7"
                                    name="job_details"
                                    value={this.state.job_details}
                                    onChange={this.handleInputChange}
                                />
                            </InputGroup>
                        </div>    
                    </div>
                    <Button className="btn-add-job" onClick={this.handleSubmit}> إضافة الوظيفة </Button>
                </Form>
            </div>
        );
    }
}

export default JobPostForm;