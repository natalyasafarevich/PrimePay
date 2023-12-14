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
