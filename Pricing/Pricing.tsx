import React, {FC} from 'react';
import './Pricing.scss';
import CardPricing from './Card/Card';
import {PRICE_CARDS} from '../constants/constants';

const Pricing: FC = () => {
  return (
    <div className='pricing'>
      <div className='pricing__inner container'>
        <p className='pricing__title'>
          Our payment services <span> worldwide</span>
        </p>
        <div className='pricing__row'>
          {PRICE_CARDS.map((card, i) => {
            return (
              <div key={i} className='pricing__card'>
                <CardPricing card={card} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
