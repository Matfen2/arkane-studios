import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.scss';

// Importation de toutes les images
import marvelsBlade from '../../assets/picts/marvelsBlade/marvelsBlade.webp';
import redfall from '../../assets/picts/redfall/redfall.webp';
import deathloop from '../../assets/picts/deathloop/deathloop.webp';
import prey from '../../assets/picts/prey/prey.webp';
import dishonoredDeathOfOutsider from '../../assets/picts/dishonoredDeathOfOutsider/dishonoredDeathOfOutsider.webp';
import dishonored2 from '../../assets/picts/dishonored2/dishonored2.webp';
import dishonored from '../../assets/picts/dishonored/dishonored.webp';
import arxFatalis from '../../assets/picts/arxFatalis/arxFatalis.webp';

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
