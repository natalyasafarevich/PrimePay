import React, {FC} from 'react';
import './Features.scss';
import FeaturesCard from './Card/Card';
import {FEATURES_CARDS} from '../../constants/constants';

const Features: FC = () => {
  return (
    <div className='features'>
      <div className='features__inner container'>
        <p className='features__title'>
          Why it is
          <br /> Worth Choosing <span> PrimePay.</span>
        </p>
        <div className='features__row'>
          <div className='features__content'>
            <p className='features__text'>
              <span>Integration other</span> Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt
              Laoreet non curabitur gravida sagittis aliquam bibendum.
            </p>
            <div className='features__img'></div>
          </div>

          {FEATURES_CARDS.map((card, i) => {
            return (
              <div className='features__box' key={i}>
                <FeaturesCard card={card} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
