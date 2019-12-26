import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { Button } from 'react-bootstrap';
import './individual-detail-header.scss';

const detail_img = require('../../assets/profile-images/default-individual.png');
const icon_heart_o = require('../../assets/icons/icon-heart-o.png');
const icon_heart = require('../../assets/icons/icon-heart.png');
const icon_location_o = require('../../assets/icons/icon-location-o.png');

class IndividualDetailHeader extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="container pt-3">
                <div className="card individual-detail-header text-center">
                    <div className="detail-img-container">
                        <div className="detail-img-wrapper">
                            <img src={this.props.data.logo 
                                ? this.props.data.logo 
                                : detail_img} alt="detail-img" className="detail-img" />
                        </div>
                    </div>
                    <div className="detail-name">
                        {this.props.data.name}
                    </div>
                    <div className="detail-rate">
                        { this.props.data.marks && <Rater total={5} rating={this.props.data.marks} interactive={false} /> }
                    </div>
                    <div className="detail-created-at">
                        { this.props.data.created_at }
                    </div>
                    <div className="detail-button-group">
                        <Button className="btn-heart icon-button border-circle">
                            <img src={icon_heart_o} className="icon-img" alt="icon-heart" />
                        </Button>
                        <Button className="btn-location icon-button border-circle">
                            <img src={icon_location_o} className="icon-img" alt="icon-location" />
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default IndividualDetailHeader;