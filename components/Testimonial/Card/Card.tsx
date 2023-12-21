import React, {FC} from 'react';
import './Card.scss';

type TestimonialCardT = {
  card: {
    image: string;
    name: string;
    position: string;
  };
};
const TestimonialCard: FC<TestimonialCardT> = ({card}) => {
  return (
    <div className='testimonial-card'>
      <div className='testimonial-card__inner'>
        <div className='testimonial-card__row'>
          <div className='testimonial-card__info'>
            <div
              className='testimonial-card__img'
              style={{background: `center/cover no-repeat url(${card.image})`}}
            ></div>
            <p className='testimonial-card__data'>
              {card.name}
              <span>{card.position}</span>
            </p>
          </div>
          <div className='testimonial-card__rate'></div>
        </div>
        <p className='testimonial-card__opinion'>
          “Our team was able to teach themselves primchat in a day.it's like
          using a shared email inboxust way more robust looking.”Primchat was
          the modern what we were looking.
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
