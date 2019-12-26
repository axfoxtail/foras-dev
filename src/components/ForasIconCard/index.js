import React from 'react';

import './foras-icon-card.scss';

// import slide01 from '../../assets/images/map.png';

class ForasIconCard extends React.Component {
    constructor() {
        super();;
    }
    
    render() {
        return (
            <div className="icon-card container">
                <div className="card-img">
                    <img
                    className="d-block w-100 my-3"
                    src={this.props.iconURL}
                    alt={this.props.title}
                    />
                </div>
                <h4>{this.props.title}</h4>
                <div className="row">
                    <span className="dot-square my-2"></span>
                </div>
                <div className="text-center">
                    {this.props.description}
                </div>
            </div>
        );
    }
}

export default ForasIconCard;