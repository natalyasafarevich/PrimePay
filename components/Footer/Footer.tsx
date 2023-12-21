'use client';
import React, {FC} from 'react';
import './Footer.scss';
import Link from 'next/link';
import {Link as LinkScroll} from 'react-scroll/modules';
import {FOOTER_SOCIAL, NAV_LINKS} from '../../constants/constants';

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='wrap'>
        <div className='footer__inner'>
          <div className='container'>
            <div className='footer__row'>
              <div className='footer__box'>
                <Link href={'/'} className='footer__logo logo'>
                  PrimePay.
                </Link>
                <p className='footer__desc'>
                  Lorem ipsum dolor sitonsecteturadipisicing elit sed do eiusmod
                  temporincididunt Laoreet non sagittis aliquam bibendum.
                </p>
                <div className='footer__flex'>
                  {FOOTER_SOCIAL.map((item, i) => {
                    return (
                      <Link
                        key={i}
                        href={item.url}
                        className='footer__link'
                        style={{
                          background: `center/cover no-repeat url(${item.img})`,
                        }}
                      ></Link>
                    );
                  })}
                </div>
              </div>
              <div className='footer__items'>
                <div className='footer__container'>
                  <p className='footer__title'>Menu</p>
                  <ul className='footer__list'>
                    {NAV_LINKS.map((item, i) => {
                      return (
                        <LinkScroll
                          key={i}
                          // activeClass='active'
                          to={item.to}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {item.title}
                        </LinkScroll>
                      );
                    })}
                  </ul>
                </div>
                <div className='footer__container'>
                  <p className='footer__title'>Address</p>
                  <div className='footer__desc'>
                    1700 W Blancke St, kiyev port south USA, America
                    <br />
                    <br />
                    <Link href={'tel:+3255456789'}> +3255 456 789</Link>
                    <br />
                    <Link href={'mailto:mail@primpay.com'}>
                      {' '}
                      mail@primpay.com
                    </Link>
                  </div>
                  <button className='footer__button'> Get A Quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
