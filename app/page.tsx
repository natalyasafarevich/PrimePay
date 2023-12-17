import Image from 'next/image';
import styles from './page.module.scss';
import Banner from '../components/Banner/Banner';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import About from '../components/About/About';
import Features from '../components/Features/Features';
import Testimonial from '../components/Testimonial/Testimonial';
import Awards from '../components/Awards/Awards';

export default function Home() {
  return (
    <main className={'styles.main '}>
      <div className={styles.page__banner}>
        <Banner />
        <HowWeWork />
        <About />
        <Features />
        <Testimonial />
        <Awards />
      </div>
    </main>
  );
}
