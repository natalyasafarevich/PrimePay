import Image from 'next/image';
import styles from './page.module.scss';
import Banner from '../components/Banner/Banner';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import About from '../components/About/About';
import Features from '../components/Features/Features';

export default function Home() {
  return (
    <main className={'styles.main '}>
      <div className={styles.page__banner}>
        <Banner />
        <HowWeWork />
        <About />
        <Features />
      </div>
    </main>
  );
}
