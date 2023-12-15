import React, {FC} from 'react';
import './Card.scss';

type FeaturesCardT = {
  card: {
    src: string;
    title: string;
    desc: string;
  };
};

const FeaturesCard: FC<FeaturesCardT> = ({card}) => {
  return (
    <div className='features-card'>
      <div className='features-card__inner'>
        <div
          className='features-card__img'
          style={{background: `center/cover no-repeat url(${card.src})`}}
        ></div>
        <p className='features-card__title'>{card.title}</p>
        <p className='features-card__desc'>{card.desc}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
