import React from 'react';
import { Button } from 'react-bootstrap';

import './foras-filter-individuals-fav.scss';
import Line from '../Line';
import IndividualCard from '../IndividualCard';
import userApi from '../../services/user.service';
import favoriteApi from '../../services/favorite.service';

const icon_location = require('../../assets/icons/icon-location.png');
const icon_post = require('../../assets/icons/icon-post.png');
const icon_star = require('../../assets/icons/icon-star.png');
const icon_money = require('../../assets/icons/icon-money.png');

class ForasFilterIndividualsFav extends React.Component {
    constructor() {
        super();
        this.state = {
            activeSort: null,
            individualList: [],
            favoriteList: [],
        }
    }

    componentDidMount() {
        // Fetch Individuals List
        this.getIndividuals(null);
        // Fetch Favorite Individuals List
        favoriteApi.getFavoriteIndividuals()
            .then((response) => {
                if(response.status === 200) {
                    this.setState({favoriteList: response.data});
                }
            })
            .catch((error) => {
                console.log('err: ', error);
            });
    }

    getIndividuals(sort) {
        // Fetch Individuals List
        const body = {
            sort: this.state.activeSort ? null : sort
        };

        userApi.getIndividuals(body)
            .then((response) => {
                if(response.status === 200) {
                    this.setState({individualList: response.data});
                }
            })
            .catch((error) => {
                console.log('err: ', error);
            });
    }

    toggleFilter = (sort) => {
        this.setState({activeSort: this.state.activeSort === sort ? null : sort});
        this.getIndividuals(sort);
    }    

    render() {
        return (
            <div className="container">
                <div className="row py-5">
                    <h2 className="mx-auto"> قائمة الأفراد </h2>
                </div>
                <Line />
                <div className="row text-center py-3">
                    <div className="col-4 p-3">
                        <Button className={"btn-filter-toggle btn-lg w-100" + (this.state.activeSort === "distance" ? " active" : "")} onClick={() => this.toggleFilter('distance')}>
                            الترتيب حسب المسافة
                            <img src={icon_location} className="filter-bnt-icon" alt="filter by distance" />
                        </Button>
                    </div>
                    <div className="col-4 p-3">
                        <Button className={"btn-filter-toggle btn-lg w-100" + (this.state.activeSort === "name" ? " active" : "")} onClick={() => this.toggleFilter('name')}>
                            الترتيب حسب الوظيفة
                            <img src={icon_post} className="filter-bnt-icon" alt="filter by job" />
                        </Button>
                    </div>
                    <div className="col-4 p-3">
                        <Button className={"btn-filter-toggle btn-lg w-100" + (this.state.activeSort === "star_rate" ? " active" : "")} onClick={() => this.toggleFilter('star_rate')}>
                            الترتيب حسب التقييم
                            <img src={icon_star} className="filter-bnt-icon" alt="filter by rating star" />
                        </Button>
                    </div>
                    <div className="col-4 p-3">
                        
                    </div>
                    <div className="col-4 p-3">
                        <Button className={"btn-filter-toggle btn-lg w-100" + (this.state.activeSort === "hourly_rate" ? " active" : "")} onClick={() => this.toggleFilter('hourly_rate')}>
                            الترتيب حسب الراتب
                            <img src={icon_money} className="filter-bnt-icon" alt="filter by salary" />
                        </Button>
                    </div>
                </div>
                <Line />
                <div className="row pt-3 pb-5 individual-list">
                    {this.state.individualList.map((obj, index) => 
                        <IndividualCard className="col-6 p-3" key={index} data={obj} favorites={this.state.favoriteList} />
                    )}
                </div>
            </div>
        );
    }
    
}
  
export default ForasFilterIndividualsFav;