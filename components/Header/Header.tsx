'use client';
import React from 'react';
import './Header.scss';
import {Link as LinkScroll} from 'react-scroll/modules';
import Link from 'next/link';
import {NAV_LINKS} from '../../constants/constants';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__inner'>
        <div className='header__row'>
          <Link href={'/'} className='logo header__logo'>
            PrimePay.
          </Link>
          <div className='header__box'>
            <ul className='header__list'>
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
            <button className='header__button button-dark'>LOgIn</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
