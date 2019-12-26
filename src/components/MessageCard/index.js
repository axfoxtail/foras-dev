import React from 'react';
// import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './message-card.scss';
// import { Button } from 'react-bootstrap';

const profile = require('../../assets/profile-images/corporate.png');
// const icon_heart = require('../../assets/icons/icon-heart.png');
// const icon_heart_o = require('../../assets/icons/icon-heart-o.png');
// const icon_location_o = require('../../assets/icons/icon-location-o.png');

class MessageCard extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="card message-card">
                <div className="row text-right">
                    <div className="col-3">
                        <div className="logo-circle-container border-none bg-foras">
                            <div className="logo-wrapper">
                                <img src={profile} className="logo" alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="font-weight-bold"> {this.props.data.sender.name} </div>
                        <div> {this.props.data.created_at} </div>
                        <div> <span className="font-weight-bold">{this.props.data.subject}</span> - {this.props.data.message} </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageCard;