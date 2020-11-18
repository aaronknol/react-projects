import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

function Job ({ job }) {
    return (
        <article className="job-info">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.duties}</p>
            {
                job.duties.map((duty, index) => {
                return (
                    <div className="job-desc" key={index}>
                        <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                        <p>{duty}</p>
                    </div>
                )
                })
            }
       </article>
    )
}

export default Job;