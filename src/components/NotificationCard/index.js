import React from 'react';
import './notification-card.scss';

const profile = require('../../assets/profile-images/corporate.png');

class NotificationCard extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="card notification-card">
                <div className="row text-right">
                    <div className="col-3">
                        <div className="logo-container">
                            <div className="logo-wrapper">
                                <img src={profile} className="logo" alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div> {this.props.data.message} </div>
                        <div> {this.props.data.created_at} </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotificationCard;