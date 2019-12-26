import React from 'react';

import './individual-detail.scss';
import JobDetailHeader from '../../../components/JobDetailHeader';
import JobDetailBody from '../../../components/JobDetailBody';
import SimilarJobs from '../../../components/SimilarJobs';

class JobDetail extends React.Component {
    constructor(props) {
        super();
        this.state = {
            job: {},
            jobOwner: {},
            similars: [],
            reviews: [],
        }
    }

    componentDidMount() {
        const param = window.location.href.split('jobs/')[1];
        
    }

    render() {
        return (
            <div className="main bg-detail-header">
                <JobDetailHeader data={this.state.job} jobOwner={this.state.jobOwner} />
                <JobDetailBody data={this.state.job} jobOwner={this.state.jobOwner} reviews={this.state.reviews} />
                <SimilarJobs data={this.state.similars} />
            </div>
        );
    }
}

export default JobDetail;