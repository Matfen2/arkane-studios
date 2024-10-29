import React, { useState } from 'react'
import '../Studio/Studio.scss'
import jobs from '../../data/jobs.json'
import nextProject from '../../assets/picts/marvelsBlade/marvelsBlade.png'
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
        <div className='join'>
          <h2>REJOINGEZ NOTRE EQUIPE</h2>
          <button type='button'>
            <a href='#jobs'>CARRIERES</a>
          </button>
        </div>
      </div>
      {/* ABOUT */}
      <div className='about'>
        <h2>Arkane Studio Lyon</h2>
        <p className='description'>Les bureaux d'Arkane Studios en France se situent au centre de Lyon, dans le quartier branché de la Confluence, un endroit populaire pour la nature, les sports, la nourriture et la musique. </p>
        <br />
        <p className='description'>Lyon est la deuxième plus grosse ville de France et est renommée pour sa gastronomie, ainsi que ses monuments historiques et architecturaux, dont certains sont inscrits au Patrimoine mondial de l'UNESCO.</p>
        <br />
        <p className='description'>La ville est également connue pour sa Fête des Lumières qui se tient pendant quatre jours autour du 8 décembre et qui donne à Lyon le titre mérité de Ville des Lumières.</p>
      </div>
      {/* PROJECT */}
      <div className='project'>
        <h2>Projet Actuel</h2>
        <NavLink to="/games/1">
          <img src={nextProject} alt='nextProject' className='img-fluid w-100' />
        </NavLink>
      </div>
      {/* JOBS */}
      <div className='jobs' id='jobs'>
        <h2>Carrières</h2>
        <div className={`jobs-container ${selectedJob ? 'open' : ''}`}>
          <div className='row'>
            {/* Liste des titres de postes */}
            <div className='job-titles col-lg-4 col-md-12 col-sm-12'>
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

            {/* Détails du poste sélectionné */}
            {selectedJob && (
              <div className='job-details col-lg-8 col-md-12 col-sm-12'>
                <div className='job-position'>
                  <h3>{selectedJob.title}</h3>
                  <p className='department'>{selectedJob.department}</p>
                </div>
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
                <a href={selectedJob.hrefSite} target="_blank" rel="noopener noreferrer" className='apply-button'>
                  Postuler en ligne
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Studio