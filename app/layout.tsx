import {Jost} from 'next/font/google';
import './globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const jost = Jost({subsets: ['latin']});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={`${jost.className} `}>
        <>
          <Header />
        </>
        {children}
        <Footer />
      </body>
    </html>
  );
}
