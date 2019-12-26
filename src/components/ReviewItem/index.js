import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import './review-item.scss';
import Line from '../Line';

class ReviewItem extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="review-item my-3">
                <div className="review-item-header">
                    <div className="review-item-giver">
                        {this.props.review.provider.name}
                    </div>
                    <div className="review-item-star-wrapper">
                        { this.props.review.marks && <Rater total={5} rating={Number(this.props.review.marks)} interactive={false} /> }
                    </div>
                </div>
                <Line />
                <div className="review-item-body text-right">
                    { this.props.review.comment }
                </div>
            </div>
        );
    }
    
}

export default ReviewItem;