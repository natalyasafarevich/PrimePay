import React, {FC} from 'react';
import './Banner.scss';

const Banner: FC = () => {
  return (
    <div className='banner'>
      <div className='banner__wrap'>
        <div className='banner__text'>
          <p className='banner__title'>
            Ready To Launch Your Online <span>Payment</span> App
          </p>
          <p className='banner__desc'>
            A simple yet modern solution to showcase your app
          </p>
          <button className='banner__button button-dark'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
