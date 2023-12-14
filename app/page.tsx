import Image from 'next/image';
import styles from './page.module.scss';
import Banner from '../components/Banner/Banner';

export default function Home() {
  return (
    <main className={'styles.main '}>
      <div className={styles.page__banner}>
        <Banner />
      </div>
    </main>
  );
}
