import Image from 'next/image';
import styles from './page.module.scss';
import Banner from '../components/Banner/Banner';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import About from '../components/About/About';
import Features from '../components/Features/Features';
import Testimonial from '../components/Testimonial/Testimonial';
import Awards from '../components/Awards/Awards';
import LightMood from '../components/LightMood/LightMood';
import Bank from '../components/Bank/Bank';
import Pricing from '../Pricing/Pricing';

export default function Home() {
  return (
    <main className={'styles.main '}>
      <div className={styles.page__banner}>
        <div className='wrap'>
          <Banner />
          <HowWeWork />
          <About />
          <Features />
          <Testimonial />
          <Awards />
          <LightMood />
        </div>
        <Bank />
        <div className='wrap'>
          <Pricing />
        </div>
      </div>
    </main>
  );
}
