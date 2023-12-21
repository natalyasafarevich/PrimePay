import React, {FC} from 'react';
import './LightMood.scss';

const LightMood: FC = () => {
  return (
    <div className='light-mood'>
      <div className='light-mood__inner container'>
        <p className='light-mood__title'>
          Feels great in low-light Mood for your <span>eye Protection</span>
        </p>
        <div className='light-mood__row'>
          <div
            className='light-mood__img'
            style={{background: `center/contain no-repeat url(/Mobilets.svg)`}}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LightMood;
