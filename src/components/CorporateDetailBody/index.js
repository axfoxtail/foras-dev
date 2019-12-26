import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { Button } from 'react-bootstrap';
import './corporate-detail-body.scss';
import Line from '../Line';
import ReviewItem from '../ReviewItem';
import NewMessageModal from '../NewMessageModal';

const detail_img = require('../../assets/profile-images/default-corporate.png');
const icon_dropdown = require('../../assets/icons/icon-dropdown-white.png');

class CorporateDetailBody extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="container my-3 pb-0">
                <div className="card corporate-detail-body text-center">
                    <div className="row p-4">
                        <div className="col-6">
                            <div className="detail-language-title">
                                Language
                            </div>
                            <div className="detail-language-name">
                                Arabic
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="detail-experience-title">
                                Experience
                            </div>
                            <div className="detail-experience-year">
                                5 years
                            </div>
                        </div>
                    </div>
                    <Line />
                    <div className="row text-center d-block p-4">
                        <div className="technology-title mb-3">
                            المهارات
                        </div>
                        <div className="technology-wrapper">
                            <div className="technology-item">
                                Adobe Photoshop
                            </div>
                            <div className="technology-item">
                                Microsoft Word
                            </div>
                            <div className="technology-item">
                                Microsoft Excel
                            </div>
                        </div>
                    </div>
                    <Line />
                    <div className="row d-block p-4">
                        <div className="profile-description-title mb-3">
                            معلومات
                        </div>
                        <div className="profile-description">
                            profile description here.
                        </div>
                    </div>
                    <Line />
                    <div className="detail-button-group p-3">
                        <NewMessageModal receiver={this.props.data} />
                        <Button className="btn-buy mx-2">
                            عرض عمل
                        </Button>
                    </div>
                    <Line />
                    <div className="row d-block p-4">
                        <div className="former-experience-title">
                            الخبرات السابقة
                        </div>
                        <div className="former-experience-wrapper">
                            <div className="experience-item">

                            </div>
                        </div>
                    </div>
                    <Line />
                    <div className="row d-block p-4">
                        <div className="review-title">
                            التقييم
                        </div>
                        <div className="review-profile-container p-3">
                            <div className="reivew-profile-img-wrapper">
                                <img src={this.props.data.logo 
                                    ? this.props.data.logo 
                                    : detail_img} className="review-profile-img" alt="review-profile-img" />
                            </div>
                            <div className="review-rate-star-container">
                                <div className="review-rate-star-wrapper">
                                    {/* { this.props.data.marks && <Rater total={5} rating={Number(this.props.data.marks)} interactive={false} /> } */}
                                    <Rater total={5} rating={0} interactive={true} />
                                </div>
                                <div className="review-rate-star-value">
                                    {this.props.data.marks ? '(' + this.props.data.marks + ' & ' + this.props.data.marks +')' : '' }
                                </div>
                            </div>
                        </div>
                        <div className="btn-give-review-wrapper">
                            <Button className="btn-give-review"> قييم </Button>    
                        </div>
                    </div>
                    <Line />
                    <div className="row reviews-container">
                        {this.props.reviews && this.props.reviews.map((review, index) => 
                            <ReviewItem key={index} review={review} />
                        )}
                        <Button className="btn-reivew-load-more">
                            <img src={icon_dropdown} width="15" className="icon-dropdown mx-2" alt="icon-dropdown" />
                            more
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default CorporateDetailBody;