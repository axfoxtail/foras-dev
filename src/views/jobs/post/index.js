import React from 'react';

import './post.scss';
import JobPostForm from '../../../components/JobPostForm';

function JobPost() {
    return (
        <div className="main bg-detail-header">
            <JobPostForm />
        </div>
    );
}

export default JobPost;