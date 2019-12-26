import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { Button } from 'react-bootstrap';
import './corporate-profile-footer.scss';
import Line from '../Line';
import ReviewItem from '../ReviewItem';
import userApi from '../../services/user.service';

const detail_img = require('../../assets/profile-images/default-individual.png');
const icon_dropdown = require('../../assets/icons/icon-dropdown-white.png');

class CorporateProfileFooter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            reviews: [],
        }
    }

    componentDidMount() {
        userApi.getReviews()
            .then((response) => {
                if(response.status === 200) {
                    this.setState({reviews: response.data});
                }
            })
            .catch((error) => {
                console.log('err: ', error);
            })
    }

    render() {
        return (
            <div className="container mt-3 mb-5 pb-0">
                <div className="card individual-detail-body text-center">
                    <div className="row p-4">
                        <div className="col-6">
                            <div className="detail-language-title">
                                مجال العمل
                            </div>
                            <div className="detail-language-name">
                                المبيعات
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="detail-experience-title">
                                المكان
                            </div>
                            <div className="detail-experience-year">
                                الرياض
                            </div>
                        </div>
                    </div>
                    <Line />
                    <div className="row d-block p-4">
                        <div className="profile-description-title mb-3">
                            معلومات عن الشركة
                        </div>
                        <div className="profile-description">
                            شركة MP Marketing هي شركة مساهمة سعودية ذات خبرة كبيرة في مجال التسويق. أنشئت عام ١٩٩٢ ميلدي. وتعمل في مجالات عديدة من ظمنها التسويق، الدعاية والإعلان، التسويق الإلكتروني والمبيعات. شركة MP Marketing هي شركة مساهمة سعودية ذات خبرة كبيرة في مجال التسويق. أنشئت عام ١٩٩٢ ميلدي. وتعمل في مجالات عديدة من ظمنها التسويق، الدعاية والإعلان، التسويق الإلكتروني والمبيعات.
                        </div>
                    </div>
                    <Line />
                    <div className="row d-block p-4">
                        <div className="review-title">
                            التقييم
                        </div>
                        <div className="review-profile-container p-3">
                            <div className="reivew-profile-img-wrapper">
                                <img src={detail_img} className="review-profile-img" alt="review-profile-img" />
                            </div>
                            <div className="review-rate-star-container">
                                <div className="review-rate-star-wrapper">
                                    {/* { this.state.user.marks && <Rater total={5} rating={this.state.user.marks} interactive={false} /> } */}
                                    <Rater total={5} rating={5} interactive={false} />
                                </div>
                                <div className="review-rate-star-value">
                                    (5.00 & 5.00)
                                </div>
                            </div>
                        </div>
                    </div>
                    <Line />
                    <div className="row reviews-container">
                        {this.state.reviews && this.state.reviews.map((review, index) => 
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

export default CorporateProfileFooter;