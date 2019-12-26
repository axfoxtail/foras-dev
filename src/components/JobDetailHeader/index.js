import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { Button } from 'react-bootstrap';
import './job-detail-header.scss';
import Line from '../Line';

const detail_img = require('../../assets/profile-images/default-corporate.png');
const icon_heart_o = require('../../assets/icons/icon-heart-o.png');
// const icon_heart = require('../../assets/icons/icon-heart.png');
const icon_location_o = require('../../assets/icons/icon-location-o.png');

class JobDetailHeader extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="container pt-3">
                <div className="card job-detail-header">
                    <div className="row">
                        <div className="col-2">
                            <div className="detail-img-container">
                                <div className="detail-img-wrapper">
                                    <img src={this.props.jobOwner.logo 
                                        ? this.props.jobOwner.logo 
                                        : detail_img} alt="detail-img" className="detail-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="row p-3">
                                <div className="col-6">
                                    <div className="row">
                                        <div className="detail-period-title">اسم الشركة : </div>
                                        <div className="detail-period-value">30</div>
                                    </div>
                                    <div className="row">
                                        <div className="detail-fare-title">مسمى الوظيفة : </div>
                                        <div className="detail-fare-value">3000</div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="detail-period-title">الفترة : </div>
                                        <div className="detail-period-value">30</div>
                                    </div>
                                    <div className="row">
                                        <div className="detail-fare-title">الأجرة : </div>
                                        <div className="detail-fare-value">3000</div>
                                    </div>
                                </div>
                            </div>
                            <Line />
                            <div className="row">
                                <div className="col-6">
                                    <div className="detail-rate d-flex ml-auto">
                                        {/* { this.state.user.marks && <Rater total={5} rating={this.state.user.marks} interactive={false} /> } */}
                                        <Rater total={5} rating={5} interactive={false} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="detail-button-group d-flex ml-auto">
                                        <Button className="btn-heart icon-button border-circle">
                                            <img src={icon_heart_o} className="icon-img" alt="icon-heart" />
                                        </Button>
                                        <Button className="btn-location icon-button border-circle">
                                            <img src={icon_location_o} className="icon-img" alt="icon-location" />
                                        </Button>
                                        <Button className="btn-start-date ml-2 px-3">{this.props.data.end_date}</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
    
}

export default JobDetailHeader;