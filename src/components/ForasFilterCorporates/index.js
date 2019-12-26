import React from 'react';
import { Button } from 'react-bootstrap';

import './foras-filter-corporates.scss';
import Line from '../Line';
import CorporateCard from '../CorporateCard';

const icon_location = require('../../assets/icons/icon-location.png');
const icon_post = require('../../assets/icons/icon-post.png');
const icon_star = require('../../assets/icons/icon-star.png');
const icon_triangle_up = require('../../assets/icons/icon-triangle-up.png');
const icon_triangle_down = require('../../assets/icons/icon-triangle-down.png');

class ForasFilterCorporates extends React.Component {
    constructor() {
        super();
        this.state = {
            favoriteList: [],
        }
    }

    toggleFilter = (sort) => {
        let sortObj = {
            orderBy: sort,
            orderDirection: (global.sortObj.orderBy === sort && global.sortObj.orderDirection === 'DESC') ? 'ASC' : 'DESC'
        };
        global.sortObj = sortObj;
        this.props.handleSort();
    }

    render() {
        return (
            <div className="container">
                <div className="row py-5">
                    <h2 className="mx-auto"> قائمة الشركات </h2>
                </div>
                <Line />
                <div className="row text-center py-3">
                    <div className="col-4 p-3">
                        <Button className={"btn-filter-toggle btn-lg w-100"} onClick={() => this.toggleFilter('distance')}>
                            <img src={(global.sortObj && global.sortObj.orderBy === "distance" && global.sortObj.orderDirection === 'DESC') ? icon_triangle_down : icon_triangle_up} className="filter-btn-triangle" alt="filter-btn-triangle" />
                            الترتيب حسب المسافة
                            <img src={icon_location} className="filter-bnt-icon" alt="filter by distance" />
                        </Button>
                    </div>
                    <div className="col-4 p-3">
                        <Button className={"btn-filter-toggle btn-lg w-100"} onClick={() => this.toggleFilter('city')}>
                            <img src={(global.sortObj && global.sortObj.orderBy === "city" && global.sortObj.orderDirection === 'DESC') ? icon_triangle_down : icon_triangle_up} className="filter-btn-triangle" alt="filter-btn-triangle" />
                            الترتيب حسب الوظيفة
                            <img src={icon_post} className="filter-bnt-icon" alt="filter by job" />
                        </Button>
                    </div>
                    <div className="col-4 p-3">
                        <Button className={"btn-filter-toggle btn-lg w-100"} onClick={() => this.toggleFilter('star_rate')}>
                            <img src={(global.sortObj && global.sortObj.orderBy === "star_rate" && global.sortObj.orderDirection === 'DESC') ? icon_triangle_down : icon_triangle_up} className="filter-btn-triangle" alt="filter-btn-triangle" />
                            الترتيب حسب التقييم
                            <img src={icon_star} className="filter-bnt-icon" alt="filter by rating star" />
                        </Button>
                    </div>
                </div>
                <Line />
                <div className="row pt-3 pb-5">
                    {this.props.data.map((obj, index) => 
                        <CorporateCard key={index} className="col-6 p-3" data={obj} />
                    )}
                </div>
            </div>
        );
    }
    
}
  
export default ForasFilterCorporates;