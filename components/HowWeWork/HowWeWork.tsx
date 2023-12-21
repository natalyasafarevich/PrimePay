import React, {FC} from 'react';
import './HowWeWork.scss';
import {HOW_WORK_ITEMS} from '../../constants/constants';

const HowWeWork: FC = () => {
  return (
    <div className='howWork'>
      <div className='howWork__inner'>
        <div className='howWork__row'>
          {HOW_WORK_ITEMS.map((item, index) => {
            return (
              <div key={index} className='howWork__box'>
                <div
                  className='howWork__img'
                  style={{
                    background: `center/contain no-repeat url(${item.img})`,
                  }}
                ></div>
                <p className='howWork__text'>
                  {item.label}
                  <span>{item.desc}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HowWeWork;
