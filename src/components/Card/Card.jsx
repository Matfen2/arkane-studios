import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.scss';

// Importation de toutes les images
import marvelsBlade from '../../assets/picts/marvelsBlade/marvelsBlade.png';
import redfall from '../../assets/picts/redfall/redfall.png';
import deathloop from '../../assets/picts/deathloop/deathloop.png';
import prey from '../../assets/picts/prey/prey.png';
import dishonoredDeathOfOutsider from '../../assets/picts/dishonoredDeathOfOutsider/dishonoredDeathOfOutsider.png';
import dishonored2 from '../../assets/picts/dishonored2/dishonored2.png';
import dishonored from '../../assets/picts/dishonored/dishonored.png';
import arxFatalis from '../../assets/picts/arxFatalis/arxFatalis.png';

// Mapping des images avec les identifiants
const images = {
  marvelsBlade,
  redfall,
  deathloop,
  prey,
  dishonoredDeathOfOutsider,
  dishonored2,
  dishonored,
  arxFatalis
};

const Card = ({ id, title, imageKey }) => {
  const navigate = useNavigate();

  const gameClick = () => {
    navigate(`/games/${id}`);
  };

  return (
    <div className="card">
      <img src={images[imageKey]} alt={title} className="img-fluid w-100" />
      <div className="infoGame">
        <p className='see' onClick={gameClick}>VOIR LE JEU</p>
      </div>
    </div>
  );
};

export default Card;
