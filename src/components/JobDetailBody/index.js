import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { Button } from 'react-bootstrap';
import './job-detail-body.scss';
import Line from '../Line';
import ReviewItem from '../ReviewItem';
import NewMessageModal from '../NewMessageModal';

const detail_img = require('../../assets/profile-images/default-corporate.png');
const icon_dropdown = require('../../assets/icons/icon-dropdown-white.png');

class JobDetailBody extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.data);
    }

    render() {
        return (
            <div className="container my-3 pb-0">
                <div className="card job-detail-body text-center">
                    <div className="row p-4">
                        <div className="col-3">
                            <div className="detail-experience-title">
                                الخبرة المطلوبة
                            </div>
                            <div className="detail-experience-value">
                                7 years
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="detail-career-level-title">
                                المستوى الوظيفي
                            </div>
                            <div className="detail-career-level-value">
                                Average
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="detail-language-title">
                                اللغات المطلوبة
                            </div>
                            <div className="detail-language-value">
                                Arabic
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="detail-experience-title">
                                المستوى الوظيفي
                            </div>
                            <div className="detail-experience-value">
                                5 years
                            </div>
                        </div>
                    </div>
                    <Line />
                    <div className="row text-center d-block p-4">
                        <div className="job-details-title mb-3">
                            تفاصيل الوظيفة
                        </div>
                        <div className="job-details-value">
                            {this.props.data.job_details}
                        </div>
                    </div>
                    
                    <Line />
                    <div className="detail-button-group p-3">
                        <NewMessageModal receiver={this.props.jobOwner} />
                        <Button className="btn-buy mx-2">
                            تقدم للوظيفة
                        </Button>
                    </div>
                    <Line />
                    <div className="row d-block p-4">
                        <div className="about-company-title mb-3">
                            معلومات عن الشركة
                        </div>
                        <div className="about-company-value">
                            information about company here.
                        </div>
                    </div>
                    <Line />
                    <div className="row d-block p-4">
                        <div className="review-title">
                            تقييم الشركة
                        </div>
                        <div className="review-profile-container p-3">
                            <div className="reivew-profile-img-wrapper">
                                <img src={this.props.jobOwner.logo 
                                    ? this.props.jobOwner.logo 
                                    : detail_img} className="review-profile-img" alt="review-profile-img" />
                            </div>
                            <div className="review-rate-star-container">
                                <div className="review-rate-star-wrapper">
                                    {/* { this.props.jobOwner.marks && <Rater total={5} rating={Number(this.props.jobOwner.marks)} interactive={false} /> } */}
                                    <Rater total={5} rating={0} interactive={true} />
                                </div>
                                <div className="review-rate-star-value">
                                    {this.props.jobOwner.marks ? this.props.jobOwner.marks + ' & ' + this.props.jobOwner.marks : ''}
                                </div>
                            </div>
                        </div>
                        <div className="btn-give-review-wrapper">
                            <Button className="btn-give-review"> قييم الشركةs </Button>    
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

export default JobDetailBody;