import Image from 'next/image';
import styles from './page.module.scss';
import Banner from '../components/Banner/Banner';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import About from '../components/About/About';

export default function Home() {
  return (
    <main className={'styles.main '}>
      <div className={styles.page__banner}>
        <Banner />
        <HowWeWork />
        <About />
      </div>
    </main>
  );
}
