import React from 'react';
import { Link } from "react-router-dom";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './individual-card.scss';
import { Button } from 'react-bootstrap';
import favoriteApi from '../../services/favorite.service';
import session from '../../services/session.service';

const img_default_individual = require('../../assets/profile-images/default-individual.png');

class IndividualCard extends React.Component {
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
            const favorites = user.fav_individuals;
            for (let i=0; i < favorites.length; i++) {
                if(this.props.data.id === favorites[i].individual_id) {
                    this.setState({isFavorite: true});
                    return;
                }
            }
        }
    }

    toggleFavorite = (id) => {
        favoriteApi.toggleFavoriteIndividual({individual_id: id})
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
                <div className="card individual-card">
                    <div className="row text-right">
                        <div className="col-4">
                            <Link to={`/individuals/${this.props.data.id}`}>
                            <div className="logo-circle-container bg-white">
                                <div className="logo-wrapper">
                                    <img src={this.props.data.logo 
                                        ? this.props.data.logo 
                                        : img_default_individual} className="logo" alt="logo" />
                                </div>
                            </div>
                            </Link>
                            <div className="rate-star-container">
                                { this.props.data.marks && <Rater total={5} rating={this.props.data.marks} interactive={false} /> }
                            </div>
                        </div>
                        <div className="col-8 d-grid">
                            <div className="individual-name font-weight-bold"> { this.props.data.name } </div>
                            <div className="individual-address"> { this.props.data.address } </div>
                            <div className="individual-city"> { this.props.data.city } </div>
                            <div className="individual-hourly-rate font-weight-bold"> { this.props.data.hourly_rate ? this.props.data.hourly_rate + ' في الساعة' : '-' } </div>
                            <div className="card-button-group">
                                <Button className={this.state.isFavorite === true ? "btn-favorite icon-button ml-2 active" : "btn-favorite icon-button ml-2"}
                                    onClick={() => this.toggleFavorite(this.props.data.id)}
                                ></Button>
                                <Button className="btn-start-date ml-2 px-3"> { this.props.data.created_at } </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndividualCard;