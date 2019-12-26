import React from 'react';
import { Button } from 'react-bootstrap';

import './similar-jobs.scss';
import Line from '../Line';
import JobCard from '../JobCard';
import jobApi from '../../services/job.service';

const icon_location = require('../../assets/icons/icon-location.png');
const icon_post = require('../../assets/icons/icon-post.png');
const icon_money = require('../../assets/icons/icon-money.png');
const icon_star = require('../../assets/icons/icon-star.png');
const icon_calendar = require('../../assets/icons/icon-calendar.png');
const icon_timer = require('../../assets/icons/icon-timer.png');
const icon_triangle_up = require('../../assets/icons/icon-triangle-up.png');
const icon_triangle_down = require('../../assets/icons/icon-triangle-down.png');

class SimilarJobs extends React.Component {
    constructor() {
        super();
        this.state = {
            activeSort: null,
            jobs: [],
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row py-5">
                    <h2 className="mx-auto">وظائف مشابهة</h2>
                </div>
                <div className="row pt-3 pb-5">
                    {this.props.data && this.props.data.map((obj, index) =>
                        <JobCard key={index} className="col-6 p-3" data={obj} />
                    )}
                </div>
            </div>
        );
    }
    
}
  
export default SimilarJobs;