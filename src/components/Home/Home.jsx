import React from 'react';
import '../Home/Home.scss';
import games from '../../data/games.json';
import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import studioLyon from '../../assets/picts/arkane/arkaneStudioLyon.webp';

const Home = () => {
  return (
    <div className='home'>
      <div className='present'>
        <div className='about'>
          <p className='description'>
          Fondé en 1999, Arkane Studios s'est développé pour devenir l'une des équipes de développement les plus reconnues de l'industrie du jeu vidéo. Arkane s'est construit une réputation de créateur de jeux au style unique et à l'action immersive avec une approche artisanale.
          Les titres du studio, dont Dishonored, Dishonored 2, Prey et DEATHLOOP, ont remporté de nombreuses reconnaissances prestigieuses dans le monde entier, parmi lesquelles plusieurs titres "Game of the Year".
          </p>
        </div>
      </div>

      <div className='studio'>
        <h2>STUDIO</h2>
        <NavLink to="/studio" className='studio-link'>
          <img src={studioLyon} alt='studioLyon' className='img-fluid w-100' />
          <div className='location'>
            <p>Lyon, France</p>
          </div>
        </NavLink>
      </div>

      <div className='games'>
        <h2>JEUX</h2>
        <div className="container">
          <div className="row">
            {games.map((game) => (
              <div key={game.id} className="col-lg-6 col-md-6 col-sm-12">
                <Card
                  id={game.id}
                  title={game.title}
                  imageKey={game.imageKey} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
