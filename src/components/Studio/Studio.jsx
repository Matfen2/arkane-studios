import React, { useState } from 'react'
import '../Studio/Studio.scss'
import jobs from '../../data/jobs.json'
import nextProject from '../../assets/picts/marvelsBlade/marvelsBlade.webp'
import { NavLink } from 'react-router-dom'

const Studio = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const showDetailsJob = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className='studio'>
      {/* TEAM */}
      <div className='team'>
        <div className='about'>
          <p className='description'>
            Rejoindre Arkane Lyon, c'est l'opportunité de collaborer et d'évoluer au sein d'une équipe passionnée, sur des technologies de pointe et des jeux innovants appréciés par des millions de joueurs. Vous travaillerez dans un environnement stimulant et accueillant dans nos bureaux situés dans le quartier de la Confluence à Lyon (France), un lieu de verdure, de sport, de gastronomie et de musique.
          </p>
          <button type='button'>
            <a href='#jobs'>CARRIERES</a>
          </button>
        </div>
      </div>
      {/* PROJECT */}
      <div className='project'>
        <h2>Projet Actuel</h2>
        <NavLink to="/games/1">
          <img src={nextProject} alt='nextProject' className='img-fluid w-100' />
        </NavLink>
      </div>
      {/* JOBS */}
      <div className="jobs" id="jobs">
        <h2>Carrières</h2>
        <div className={`jobs-container ${selectedJob ? 'open' : ''}`}>
          <div className="job-titles">
            {jobs.map((job) => (
              <p
                key={job.id}
                className={`titleJobs ${selectedJob?.id === job.id ? 'active' : ''}`}
                onClick={() => showDetailsJob(job)}
              >
                {job.title}
              </p>
            ))}
          </div>

          {selectedJob && (
            <div className="job-details">
              <h3>{selectedJob.title}</h3>

              <h4>Responsabilités :</h4>
              <ul>
                {selectedJob.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>

              <h4>Qualifications :</h4>
              <ul>
                {selectedJob.qualifications.map((qual, index) => (
                  <li key={index}>{qual}</li>
                ))}
              </ul>

              <a href={selectedJob.hrefSite} target="_blank" rel="noopener noreferrer" className="apply-button">
                Postuler en ligne
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Studio