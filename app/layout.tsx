import type { Metadata, Viewport } from "next";
import { Changa_One, Geist, Dynalight, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const changaOne = Changa_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-changa",
});

const dynalight = Dynalight({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dynalight",
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: 'Lake Sevan - A Taste of the Caucasus',
    template: '%s | Lake Sevan'
  },
  description: 'Experience the authentic flavors of Armenia at Lake Sevan, a fine dining restaurant in Antwerp. Enjoy traditional Armenian dishes made with the finest ingredients in an elegant setting.',
  keywords: ['Armenian restaurant', 'Antwerp dining', 'Lake Sevan', 'Armenian cuisine', 'fine dining Antwerp', 'authentic Armenian food'],
  authors: [{ name: 'Lake Sevan' }],
  creator: 'Lake Sevan',
  publisher: 'Lake Sevan',
  metadataBase: new URL('https://lakesevan.be'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lake Sevan - A Taste of the Caucasus',
    description: 'Experience the authentic flavors of Armenia at Lake Sevan. Fine dining in the heart of Antwerp.',
    url: 'https://lakesevan.be',
    siteName: 'Lake Sevan',
    locale: 'nl_BE',
    type: 'website',
    images: [
      {
        url: '/lake_sevan_logo_v2.svg',
        width: 1200,
        height: 630,
        alt: 'Lake Sevan - Authentic Armenian Cuisine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lake Sevan - A Taste of the Caucasus',
    description: 'Experience the authentic flavors of Armenia at Lake Sevan. Fine dining in the heart of Antwerp.',
    images: ['/lake_sevan_logo_v2.svg'],
    creator: '@lakesevan_antwerp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/lake_sevan_logo_v2.svg' },
      { url: '/lake_sevan_logo_v2.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/lake_sevan_logo_v2.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/lake_sevan_logo_v2.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/lake_sevan_logo_v2.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    yandex: 'YANDEX_VERIFICATION_CODE',
  },
  category: 'restaurant',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${changaOne.variable} ${geistSans.variable} ${dynalight.variable} ${poppins.variable}`}
    >
      <body className="min-h-screen h-full font-sans">{children}</body>
      {/* <body className="bg-[radial-gradient(ellipse_at_center,_#2a2a2a_0%,_#1f1f1f_45%,_#141414_70%,_#0b0b0b_100%)] min-h-screen font-sans">
        {children}
      </body> */}
    </html>
  );
}
