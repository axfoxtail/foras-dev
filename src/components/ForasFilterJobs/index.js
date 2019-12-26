import React from 'react';
import { Button } from 'react-bootstrap';

import './foras-filter-jobs.scss';
import Line from '../Line';
import JobCard from '../JobCard';

const icon_location = require('../../assets/icons/icon-location.png');
const icon_post = require('../../assets/icons/icon-post.png');
const icon_money = require('../../assets/icons/icon-money.png');
const icon_star = require('../../assets/icons/icon-star.png');
const icon_calendar = require('../../assets/icons/icon-calendar.png');
const icon_timer = require('../../assets/icons/icon-timer.png');
const icon_triangle_up = require('../../assets/icons/icon-triangle-up.png');
const icon_triangle_down = require('../../assets/icons/icon-triangle-down.png');

class ForasFilterJobs extends React.Component {
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
                    <h2 className="mx-auto">قائمة الوظائ</h2>
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
                        <Button className={"btn-filter-toggle btn-lg w-100"} onClick={() => this.toggleFilter('position_name')}>
                            <img src={(global.sortObj && global.sortObj.orderBy === "position_name" && global.sortObj.orderDirection === 'DESC') ? icon_triangle_down : icon_triangle_up} className="filter-btn-triangle" alt="filter-btn-triangle" />
                            الترتيب حسب الوظيفة
                            <img src={icon_post} className="filter-bnt-icon" alt="filter by job" />
                        </Button>
                    </div>
                    <div className="col-4 p-3">
                        <Button className={"btn-filter-toggle btn-lg w-100"} onClick={() => this.toggleFilter('salary')}>
                            <img src={(global.sortObj && global.sortObj.orderBy === "salary" && global.sortObj.orderDirection === 'DESC') ? icon_triangle_down : icon_triangle_up} className="filter-btn-triangle" alt="filter-btn-triangle" />
                            الترتيب حسب الراتب
                            <img src={icon_money} className="filter-bnt-icon" alt="filter by salary" />
                        </Button>
                    </div>
                    <div className="col-4 p-3">
                        <Button className={"btn-filter-toggle btn-lg w-100"} onClick={() => this.toggleFilter('star_rate')}>
                            <img src={(global.sortObj && global.sortObj.orderBy === "star_rate" && global.sortObj.orderDirection === 'DESC') ? icon_triangle_down : icon_triangle_up} className="filter-btn-triangle" alt="filter-btn-triangle" />
                            الترتيب حسب التقييم
                            <img src={icon_star} className="filter-bnt-icon" alt="filter by rating star" />
                        </Button>
                    </div>
                    <div className="col-4 p-3">
                        <Button className={"btn-filter-toggle btn-lg w-100"} onClick={() => this.toggleFilter('start_date')}>
                            <img src={(global.sortObj && global.sortObj.orderBy === "start_date" && global.sortObj.orderDirection === 'DESC') ? icon_triangle_down : icon_triangle_up} className="filter-btn-triangle" alt="filter-btn-triangle" />
                            الترتيب حسب تاريخ البداية
                            <img src={icon_calendar} className="filter-bnt-icon" alt="filter by start date" />
                        </Button>
                    </div>
                    <div className="col-4 p-3">
                        <Button className={"btn-filter-toggle btn-lg w-100"} onClick={() => this.toggleFilter('workhours')}>
                            <img src={(global.sortObj && global.sortObj.orderBy === "workhours" && global.sortObj.orderDirection === 'DESC') ? icon_triangle_down : icon_triangle_up} className="filter-btn-triangle" alt="filter-btn-triangle" />
                            الترتيب حسب ساعات العمل
                            <img src={icon_timer} className="filter-bnt-icon" alt="filter by workhours" />
                        </Button>
                    </div>
                </div>
                <Line />
                <div className="row pt-3 pb-5">
                    {this.props.data.map((obj, index) =>
                        <JobCard key={index} className="col-6 p-3" data={obj} />
                    )}
                </div>
            </div>
        );
    }
    
}
  
export default ForasFilterJobs;