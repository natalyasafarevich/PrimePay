import React, {FC} from 'react';
import './Awards.scss';

const Awards: FC = () => {
  return (
    <div className='awards'>
      <div className='awards__inner container'>
        <div className='awards__row'>
          <div className='awards__box'>
            <div className='awards__img awards__img_1'></div>
            <div className='awards__img awards__img_2'></div>
          </div>
          <div className='awards__rate'>
            <div className='awards__item'>
              <p className='awards__number'>4.5/5</p>
              <div className='awards__icon'></div>
              <p className='awards__text'>On the iOS App Store</p>
            </div>
            <div className='awards__item'>
              <p className='awards__number'>4.8/5</p>
              <div className='awards__icon'></div>
              <p className='awards__text'>On the Android Play Store.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
