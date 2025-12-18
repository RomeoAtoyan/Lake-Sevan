import { Metadata } from 'next';

type Props = {
  type?: string;
  data: Record<string, any>;
};

export default function StructuredData({ type = 'Restaurant', data }: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export const getRestaurantStructuredData = (): Metadata => {
  const data = {
    name: 'Lake Sevan',
    description: 'Authentic Armenian Cuisine in the heart of Antwerp',
    url: 'https://lakesevan.be',
    image: 'https://lakesevan.be/lake_sevan_logo_v2.svg',
    telephone: '+32 123 45 67 89',
    priceRange: '€€-€€€',
    servesCuisine: ['Armenian', 'Caucasian', 'Middle Eastern'],
    hasMenu: 'https://lakesevan.be/menu',
    acceptsReservations: 'https://lakesevan.be/reservations',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Restaurant Street 1',
      addressLocality: 'Antwerp',
      postalCode: '2000',
      addressCountry: 'BE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.2194',
      longitude: '4.4025',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '18:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '12:00',
        closes: '15:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/lakesevan',
      'https://www.instagram.com/lakesevan_antwerp',
      'https://www.tripadvisor.com/Restaurant_Review-g188636-d12345678-Lake_Sevan-Antwerp_Antwerp_Province.html',
    ],
  };

  return {
    other: {
      'application-ld+json': JSON.stringify(data),
    },
  };
};
