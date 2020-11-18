import React from 'react';

import Job from './Job';

function Jobs({ jobs }) {
    return (
        jobs.map((job, item) => {
            return (
                <Job job={job} key={job.id}></Job>
            )
        })
    )
}

export default Jobs;