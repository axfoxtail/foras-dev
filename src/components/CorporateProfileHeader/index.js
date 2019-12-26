import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { Button } from 'react-bootstrap';
import './corporate-profile-header.scss';
import PackageModal from '../PackageModal';

const detail_img = require('../../assets/profile-images/default-corporate.png');
const icon_heart_o = require('../../assets/icons/icon-heart-o.png');
const icon_heart = require('../../assets/icons/icon-heart.png');
const icon_check = require('../../assets/icons/icon-check.png');

class CorporateProfileHeader extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="container pt-3">
                <div className="card individual-detail-header text-center">
                    <div className="row">
                        <div className="col-6 profile-info">
                            <div className="detail-img-container">
                                <div className="detail-img-wrapper p-0">
                                    <img src={this.props.user.logo 
                                        ? this.props.user.logo 
                                        : detail_img} alt="detail-img" className="detail-img" />
                                </div>
                            </div>
                            <div className="detail-name mt-3">
                                {this.props.user.name}
                            </div>
                            <div className="detail-rate">
                                { this.props.user.marks && <Rater total={5} rating={this.props.user.marks} interactive={false} /> }
                            </div>
                            <Button className="btn-profile-edit px-4">
                                تعديل معلومات الشركة
                            </Button>
                        </div>
                        <div className="col-6 package-info">
                            <h4 className="mb-3"> حزمة التواصل مع ٣٠ مرشح </h4>
                            <div className="package-item">
                                <img src={icon_check} className="icon-check ml-3" alt="icon-check" />
                                يمكنك التواصل مع ٣٠ مرشح مباشرة
                            </div>
                            <div className="package-item">
                                <img src={icon_check} className="icon-check ml-3" alt="icon-check" />
                                يمكنك التواصل مع ٣٠ مرشح مباشرة
                            </div>
                            <div className="package-item">
                                <img src={icon_check} className="icon-check ml-3" alt="icon-check" />
                                يمكنك التواصل مع ٣٠ مرشح مباشرة
                            </div>
                            <PackageModal />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default CorporateProfileHeader;