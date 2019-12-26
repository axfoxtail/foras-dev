import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Line from '../Line';
import './corporate-profile-body.scss';

const detail_img = require('../../assets/profile-images/default-individual.png');
const icon_dropdown = require('../../assets/icons/icon-dropdown-white.png');

class CorporateProfileBody extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="container my-3 pb-0">
                <div className="card individual-detail-body text-center">
                    <h4> الوظائف المفتوحة </h4>
                    <Line />
                    <div className="row d-block p-4">
                        <div className="row open-job-item">
                            <div className="col-2">
                                <div className="logo-container">
                                    <div className="logo-wrapper">
                                        <img src={detail_img} className="logo-img" alt="logo-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="center-center">
                                    مندوب مبيعات
٣٠٠٠ ريال
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="center-center">
                                الرياض
لمدة شهر
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row button-group">
                                    <Button className="btn-modify"> تعديل </Button>
                                    <Button className="btn-end"> إنهاء </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-button-group p-3">
                        <Link to="/job-post">
                            <Button className="btn-send-msg mx-2">
                                + إضافة وظيفة جديدة
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default CorporateProfileBody;