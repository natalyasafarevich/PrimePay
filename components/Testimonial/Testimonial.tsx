import React, {FC} from 'react';

import {TESTIMONIAL_CARD} from '../../constants/constants';
import TestimonialCard from './Card/Card';

import './Testimonial.scss';

const Testimonial: FC = () => {
  return (
    <div className='testimonial'>
      <div className='container'>
        <div className='testimonial__inner '>
          <div className='testimonial__main'>
            <p className='testimonial__title'>
              “Say goodbye to clutter and <br /> <span>bounce rates.</span>
            </p>
            <div className='testimonial__card'>
              {TESTIMONIAL_CARD.map((card, i) => {
                return (
                  <div key={i} className='testimonial__item'>
                    <TestimonialCard card={card} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
