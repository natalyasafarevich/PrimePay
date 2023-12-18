type NavLinkT = {
  title: string;
  to: string;
};
export const NAV_LINKS: Array<NavLinkT> = [
  {
    title: 'About Us',
    to: 'about',
  },
  {
    title: 'Features',
    to: 'features ',
  },
  {
    title: 'Pricing',
    to: 'pricing ',
  },
  {
    title: 'Blog',
    to: 'blog ',
  },
];

type ItemsT = {
  img: string;
  label: string;
  desc: string;
};
export const HOW_WORK_ITEMS: Array<ItemsT> = [
  {
    img: '/careate-icon.svg',
    label: 'Create an account',
    desc: `Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business`,
  },
  {
    img: '/bank-icon.svg',
    label: 'Attach bank accounts',
    desc: `Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business`,
  },
  {
    img: '/money-icon.svg',
    label: 'Send money',
    desc: `Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business`,
  },
];
type ItemAboutT = {label: string; value: string};
export const ITEMS_ABOUT: Array<ItemAboutT> = [
  {label: 'Downloaded', value: '12.000 +'},
  {label: 'Transactions', value: '$10 M'},
  {label: 'Feedback', value: '1.000 +'},
];
type FeaturesCard = {
  src: string;
  title: string;
  desc: string;
};
export const FEATURES_CARDS: Array<FeaturesCard> = [
  {
    src: '/safe-se.svg',
    title: 'Safe & Security',
    desc: `Easily integrate with all your need favorite tools through and APIsing including automatic `,
  },
  {
    src: '/account.svg',
    title: 'Merchant account',
    desc: `Easily integrate with all your need favorite tools through and APIsing including automatic `,
  },
  {
    src: '/account2.svg',
    title: 'Merchant account',
    desc: `Easily integrate with all your need favorite tools through and APIsing including automatic `,
  },
  {
    src: '/paid.svg',
    title: 'Fast get paid',
    desc: `Easily integrate with all your need favorite tools through and APIsing including automatic `,
  },
];
type TestimonialCardT = {
  image: string;
  name: string;
  position: string;
};
export const TESTIMONIAL_CARD: Array<TestimonialCardT> = [
  {
    image: 'Photo-1.png',
    name: 'Natasha ',
    position: 'Designer',
  },
  {
    image: 'Photo-2.png',
    name: 'Joe Cook ',
    position: 'Developer',
  },
  {
    image: 'Photo-3.png',
    name: 'Jessica Jobs ',
    position: 'Product Designer at Uber.INC',
  },
];
type BankItemT = {
  label: string;
};
export const BANK_ITEMS: Array<BankItemT> = [
  {label: 'All your transaction'},
  {label: 'Receipts transaction'},
  {label: 'Experience Smart App'},
  {label: 'Control your Budget'},
  {label: 'Find your expenses'},
];
type ItemT = {label: string};
type PriceCardT = {
  src: string;

  price: number;
  items: Array<ItemT>;
  isActive: boolean;
};
const defaultText: Array<ItemT> = [
  {
    label: 'Modern Design',
  },
  {
    label: 'Easy to Customize ',
  },
  {
    label: 'Quickly Set Up A Website',
  },
  {
    label: 'Another Feature',
  },
  {
    label: '24/7 Customer Support',
  },
];
export const PRICE_CARDS: Array<PriceCardT> = [
  {
    src: '/basic.svg',
    price: 10,
    items: defaultText,
    isActive: false,
  },
  {
    src: '/standart.svg',
    price: 19,
    items: defaultText,
    isActive: true,
  },
  {
    src: '/premium.svg',
    price: 35,
    items: defaultText,
    isActive: false,
  },
];

export const FOOTER_SOCIAL = [
  {
    url: 'https://www.instagram.com/',
    img: '/insta.svg',
  },
  {
    url: 'https://www.facebook.com/',
    img: '/fb.svg',
  },
  {
    url: 'https://twitter.com/',
    img: '/twiter.svg',
  },
  {
    url: 'https://www.linkedin.com/',
    img: '/in.svg',
  },
  {
    url: 'https://www.youtube.com//',
    img: '/youtube.svg',
  },
];
