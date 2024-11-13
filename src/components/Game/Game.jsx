import React, {useState} from 'react';
import '../Game/Game.scss';
import games from '../../data/games.json';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Importation de toutes les images de jacketWallpaper
import marvelsBladeJacketWallpaper from '../../assets/picts/marvelsBlade/marvelsBladeJacketWallpaper.png';
import redfallJacketWallpaper from '../../assets/picts/redfall/redfallJacketWallpaper.png';
import deathloopJacketWallpaper from '../../assets/picts/deathloop/deathloopJacketWallpaper.png';
import preyJacketWallpaper from '../../assets/picts/prey/preyJacketWallpaper.png';
import dishonoredDeathOfOutsiderJacketWallpaper from '../../assets/picts/dishonoredDeathOfOutsider/dishonoredDeathOfOutsiderJacketWallpaper.png';
import dishonored2JacketWallpaper from '../../assets/picts/dishonored2/dishonored2JacketWallpaper.png';
import dishonoredJacketWallpaper from '../../assets/picts/dishonored/dishonoredJacketWallpaper.png';
import arxFatalisJacketWallpaper from '../../assets/picts/arxFatalis/arxFatalisJacketWallpaper.png';


// Importation des images spécifiques pour chaque jeu (gameplay, etc.)
// Marvels Blade
import marvelsBladeGameplayFirst from '../../assets/picts/marvelsBlade/marvelsBladeGameplayFirst.png';
import marvelsBladeGameplaySecond from '../../assets/picts/marvelsBlade/marvelsBladeGameplaySecond.png';
import marvelsBladeGameplayThird from '../../assets/picts/marvelsBlade/marvelsBladeGameplayThird.png';
import marvelsBladeGameplayFour from '../../assets/picts/marvelsBlade/marvelsBladeGameplayFour.png';

// Redfall
import redfallGameplayFirst from '../../assets/picts/redfall/redfallGameplayFirst.png';
import redfallGameplaySecond from '../../assets/picts/redfall/redfallGameplaySecond.png';
import redfallGameplayThird from '../../assets/picts/redfall/redfallGameplayThird.png';
import redfallGameplayFour from '../../assets/picts/redfall/redfallGameplayFour.png';

// Deathloop
import deathloopGameplayFirst from '../../assets/picts/deathloop/deathloopGameplayFirst.png';
import deathloopGameplaySecond from '../../assets/picts/deathloop/deathloopGameplaySecond.png';
import deathloopGameplayThird from '../../assets/picts/deathloop/deathloopGameplayThird.png';
import deathloopGameplayFour from '../../assets/picts/deathloop/deathloopGameplayFour.png';

// Prey
import preyGameplayFirst from '../../assets/picts/prey/preyGameplayFirst.png';
import preyGameplaySecond from '../../assets/picts/prey/preyGameplaySecond.png';
import preyGameplayThird from '../../assets/picts/prey/preyGameplayThird.png';
import preyGameplayFour from '../../assets/picts/prey/preyGameplayFour.png';

// Dishonored La Mort de l'Outsider
import dishonoredDeathOfOutsiderGameplayFirst from '../../assets/picts/dishonoredDeathOfOutsider/dishonoredDeathOfOutsiderGameplayFirst.png';
import dishonoredDeathOfOutsiderGameplaySecond from '../../assets/picts/dishonoredDeathOfOutsider/dishonoredDeathOfOutsiderGameplaySecond.png';
import dishonoredDeathOfOutsiderGameplayThird from '../../assets/picts/dishonoredDeathOfOutsider/dishonoredDeathOfOutsiderGameplayThird.png';
import dishonoredDeathOfOutsiderGameplayFour from '../../assets/picts/dishonoredDeathOfOutsider/dishonoredDeathOfOutsiderGameplayFour.png';

// Dishonored 2
import dishonored2GameplayFirst from '../../assets/picts/dishonored2/dishonored2GameplayFirst.png';
import dishonored2GameplaySecond from '../../assets/picts/dishonored2/dishonored2GameplaySecond.png';
import dishonored2GameplayThird from '../../assets/picts/dishonored2/dishonored2GameplayThird.png';
import dishonored2GameplayFour from '../../assets/picts/dishonored2/dishonored2GameplayFour.png';

// Dishonored
import dishonoredGameplayFirst from '../../assets/picts/dishonored/dishonoredGameplayFirst.png';
import dishonoredGameplaySecond from '../../assets/picts/dishonored/dishonoredGameplaySecond.png';
import dishonoredGameplayThird from '../../assets/picts/dishonored/dishonoredGameplayThird.png';
import dishonoredGameplayFour from '../../assets/picts/dishonored/dishonoredGameplayFour.png';

// Arx Fatalis
import arxFatalisGameplayFirst from '../../assets/picts/arxFatalis/arxFatalisGameplayFirst.png';
import arxFatalisGameplaySecond from '../../assets/picts/arxFatalis/arxFatalisGameplaySecond.png';
import arxFatalisGameplayThird from '../../assets/picts/arxFatalis/arxFatalisGameplayThird.png';
import arxFatalisGameplayFour from '../../assets/picts/arxFatalis/arxFatalisGameplayFour.png';


// Mapping des images de gameplay pour chaque jeu
const pictures = {
  marvelsBlade: [
    marvelsBladeGameplayFirst,
    marvelsBladeGameplaySecond,
    marvelsBladeGameplayThird,
    marvelsBladeGameplayFour,
  ],
  redfall: [
    redfallGameplayFirst,
    redfallGameplaySecond,
    redfallGameplayThird,
    redfallGameplayFour,
  ],
  deathloop: [
    deathloopGameplayFirst,
    deathloopGameplaySecond,
    deathloopGameplayThird,
    deathloopGameplayFour,
  ],
  prey: [
    preyGameplayFirst,
    preyGameplaySecond,
    preyGameplayThird,
    preyGameplayFour
  ],
  dishonoredDeathOfOutsider: [
    dishonoredDeathOfOutsiderGameplayFirst,
    dishonoredDeathOfOutsiderGameplaySecond,
    dishonoredDeathOfOutsiderGameplayThird,
    dishonoredDeathOfOutsiderGameplayFour
  ],
  dishonored2: [
    dishonored2GameplayFirst,
    dishonored2GameplaySecond,
    dishonored2GameplayThird,
    dishonored2GameplayFour
  ],
  dishonored: [
    dishonoredGameplayFirst,
    dishonoredGameplaySecond,
    dishonoredGameplayThird,
    dishonoredGameplayFour
  ],
  arxFatalis: [
    arxFatalisGameplayFirst,
    arxFatalisGameplaySecond,
    arxFatalisGameplayThird,
    arxFatalisGameplayFour
  ]
};

// Mapping des images de jacketWallpaper
const jacketWallpapers = {
  marvelsBlade: marvelsBladeJacketWallpaper,
  redfall: redfallJacketWallpaper,
  deathloop: deathloopJacketWallpaper,
  prey: preyJacketWallpaper,
  dishonoredDeathOfOutsider: dishonoredDeathOfOutsiderJacketWallpaper,
  dishonored2: dishonored2JacketWallpaper,
  dishonored: dishonoredJacketWallpaper,
  arxFatalis: arxFatalisJacketWallpaper,
};

const Game = () => {
  const { id } = useParams();
  const gameInfo = games.find((game) => game.id === id);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="game">
      <div className={`present ${gameInfo.imageKey}`}>
        <div className='story'>
          <p className="pitch">{gameInfo.story}</p>
          <div className='listVideo'>
            {gameInfo.trailer && (
            <button type="button" className="btnTrailer">
              <a href={gameInfo.trailer} target="_blank" rel="noopener noreferrer">
               TRAILER
              </a>
            </button>
            )}
            {gameInfo.gameplay && (
            <button type="button" className="btnGameplay">
              <a href={gameInfo.gameplay} target="_blank" rel="noopener noreferrer">
                GAMEPLAY
              </a>
            </button>
            )}
          </div>
        </div>
      </div>
      <div
        className="pict"
        style={{
          backgroundImage: `url(${jacketWallpapers[gameInfo.imageKey]})`,
        }}
      >
      <div className='swiper-content'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {pictures[gameInfo.imageKey]?.map((picture, index) => (
          <SwiperSlide key={index}>
            <img src={picture} className="img-fluid w-100" alt={`slide-${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {pictures[gameInfo.imageKey]?.map((picture, index) => (
          <SwiperSlide key={index}>
            <img src={picture} className="img-fluid w-100" alt={`thumbnail-${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      <div className="listBtnSupport">
          {gameInfo.playstation && (
            <button type="button" className="btnPlaystation">
              <a href={gameInfo.playstation} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-playstation"></i>
                PLAYSTATION
              </a>
            </button>
          )}
          {gameInfo.xbox && (
            <button type="button" className="btnXbox">
              <a href={gameInfo.xbox} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-xbox"></i>
                XBOX
              </a>
            </button>
          )}
          {gameInfo.steam && (
            <button type="button" className="btnSteam">
              <a href={gameInfo.steam} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-steam"></i>
                STEAM
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
