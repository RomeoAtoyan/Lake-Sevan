import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Experience authentic Armenian cuisine at Lake Sevan, a fine dining restaurant in the heart of Antwerp. Join us for traditional dishes made with the finest ingredients.',
  openGraph: {
    title: 'Lake Sevan - Authentic Armenian Cuisine in Antwerp',
    description: 'Experience the authentic flavors of Armenia at Lake Sevan. Fine dining in the heart of Antwerp.',
    images: [
      {
        url: '/lake_sevan_logo_v2.svg',
        width: 1200,
        height: 630,
        alt: 'Lake Sevan - Authentic Armenian Cuisine',
      },
    ],
  },
};
