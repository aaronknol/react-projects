import React, { useState, useEffect } from 'react';
import Job from './Job';
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading&hellip;</h1>
      </section>

    )
  }
  const {company, dates, duties, title} = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <div className="btn-container">
          {
            jobs.map((job, index) => {
              return (
                <button key={job.id} type="button" onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>
                  {job.company}
                </button>
              )
            })
          }
        </div>
        <Job job={jobs[value]} />
      </div>
    </section>
  )
}

export default App
