import React, {FC} from 'react';
import './Card.scss';
type ItemT = {
  label: string;
};
type CardPricingT = {
  card: {
    src: string;
    price: number;
    items: Array<ItemT>;
    isActive: boolean;
  };
};
const CardPricing: FC<CardPricingT> = ({card}) => {
  return (
    <div className='card-pricing'>
      <div className='card-pricing__inner'>
        <div
          className={`card-pricing__bg ${card.isActive && 'active'}`}
          style={{background: `no-repeat url(${card.src})`}}
        >
          {/* <p className='card-pricing__title'>{card.label}</p> */}
        </div>
        <p className='card-pricing__date'>
          ${card.price}.00 <span>Month</span>
        </p>
        <div className='card-pricing__box'>
          {card.items.map((item, i) => (
            <div key={i} className='card-pricing__item'>
              {item.label}
            </div>
          ))}
        </div>
        <button
          className={`card-pricing__button ${card.isActive && 'button-dark'}`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CardPricing;
