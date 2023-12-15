import React, {FC} from 'react';
import './About.scss';
import {ITEMS_ABOUT} from '../../constants/constants';

const About: FC = () => {
  return (
    <div className='about'>
      <div className='about__inner container'>
        <div className='about__row'>
          <div className='about__text'>
            <p className='about__title'>
              Send and receive <span>payments</span> easily
            </p>
            <p className='about__desc'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='about__video'>
              <button className='about__icon'>
                Lorem ipsum dolor sit <span> Amet, consectetur</span>
              </button>
            </div>
          </div>
          <div className='about__img'></div>
        </div>
        <div className='about__items'>
          <div className='about__container'>
            {ITEMS_ABOUT.map((item, i) => {
              return (
                <p className='about__card' key={i}>
                  {item.value}
                  <span>{item.label}</span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
