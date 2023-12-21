import React, {FC} from 'react';
import './Bank.scss';
import {BANK_ITEMS} from '../../constants/constants';
import {it} from 'node:test';

const Bank: FC = () => {
  return (
    <div className='bank'>
      <div className='bank__inner'>
        <div className='wrap'>
          <div className='container'>
            <div className='bank__row'>
              <div className='bank__info'>
                <p className='bank__title'>
                  Credit is the Fastest Mobile <span>Banking Solution.</span>
                </p>
                <p className='bank__desc'>
                  Feels great in low-light Mood for your eye Protection Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt
                </p>
                <div className='bank__box'>
                  {BANK_ITEMS.map((item, i) => {
                    return (
                      <p key={i} className='bank__item'>
                        {item.label}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className='bank__img'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
