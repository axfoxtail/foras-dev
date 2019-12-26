import React from 'react';
import { Link } from "react-router-dom";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import './job-card.scss';
import { Button } from 'react-bootstrap';
import favoriteApi from '../../services/favorite.service';
import session from '../../services/session.service';

const logo = require('../../assets/profile-images/corporate.png');
// const icon_heart = require('../../assets/icons/icon-heart.png');
const icon_heart_o = require('../../assets/icons/icon-heart-o.png');
const icon_location_o = require('../../assets/icons/icon-location-o.png');

class JobCard extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isFavorite: false,
        }
    }

    componentDidMount() {
        this.checkFavorite();
    }

    checkFavorite = () => {
        const user = session.get('foras-user');
        if(user) {
            this.setState({isFavorite: false});
            const favorites = user.fav_jobs;
            for (let i=0; i < favorites.length; i++) {
                if(this.props.data.id === favorites[i].job_id) {
                    this.setState({isFavorite: true});
                    return true;
                }
            }
        }
    }

    toggleFavorite = (id) => {
        favoriteApi.toggleFavoriteJob({job_id: id})
            .then((response) => {
                if(response.status === 200) {
                    session.set('foras-user', response.data);
                    this.checkFavorite();
                }
            })
            .catch((error) => {
                console.log('err: ', error);
            });
    }

    render() {
        return (
            <div className={this.props.className}>
                <div className="card">
                    <div className="row text-right">
                        <div className="col-4">
                            <Link to={`/jobs/${this.props.data.id}`}>
                            <div className="logo-container">
                                <div className="logo-wrapper">
                                    <img src={this.props.data.users.logo 
                                        ? this.props.data.users.logo 
                                        : logo} className="logo" alt="logo" />
                                </div>
                            </div>
                            <div className="rate-star-container">
                                { this.props.data.users.marks && <Rater total={5} rating={Number(this.props.data.users.marks)} interactive={false} /> }
                            </div>
                            </Link>
                        </div>
                        <div className="col-8 d-grid">
                            <div className="font-weight-bold">{this.props.data.job_name}</div>
                            <div>{this.props.data.location}</div>
                            <div>{this.props.data.start_date} ~ {this.props.data.end_date}</div>
                            <div>{this.props.data.users.marks}</div>
                            <div className="card-button-group">
                                <Button className={this.state.isFavorite === true ? "btn-favorite icon-button ml-2 active" : "btn-favorite icon-button ml-2"} 
                                    onClick={() => this.toggleFavorite(this.props.data.id)}
                                ></Button>
                                <Button className="btn-map icon-button border-black ml-2">
                                    <img src={icon_location_o} className="icon-img" alt="icon" />
                                </Button>
                                <Button className="btn-start-date ml-2 px-3">{this.props.data.start_date}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobCard;