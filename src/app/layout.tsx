import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/lib/site-config';
import FloatingActionButtons from '@/components/portfolio/FloatingActionButtons';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: SITE_CONFIG.seo.title,
  description: SITE_CONFIG.seo.description,
  keywords: SITE_CONFIG.seo.keywords.join(', '),
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    siteName: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    images: [
      {
        url: `${SITE_CONFIG.domain}/images/dr-chintan-gujarathi.webp`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Senior Consultant Plastic Surgeon Pune`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    images: [`${SITE_CONFIG.domain}/images/dr-chintan-gujarathi.webp`],
  },
};

function PhysicianSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: SITE_CONFIG.doctor.fullName,
    image: `${SITE_CONFIG.domain}/images/dr-chintan-gujarathi.webp`,
    description: SITE_CONFIG.seo.description,
    priceRange: '₹₹₹',
    medicalSpecialty: ['PlasticSurgery', 'CosmeticSurgery'],
    qualification: SITE_CONFIG.doctor.qualifications,
    url: SITE_CONFIG.domain,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    memberOf: SITE_CONFIG.doctor.affiliations.map((a) => ({
      '@type': 'MedicalOrganization',
      name: a.full,
    })),
    worksFor: SITE_CONFIG.locations.map((loc) => ({
      '@type': 'Hospital',
      name: loc.hospital,
      address: {
        '@type': 'PostalAddress',
        streetAddress: loc.address,
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      telephone: loc.phone,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: loc.coordinates.lat,
        longitude: loc.coordinates.lng,
      },
    })),
    availableService: [
      ...SITE_CONFIG.procedures.cosmetic,
      ...SITE_CONFIG.procedures.reconstructive,
      ...SITE_CONFIG.procedures.nonSurgical,
    ].map((proc) => ({
      '@type': 'MedicalProcedure',
      name: proc.title,
      description: proc.shortDesc,
    })),
    areaServed: {
      '@type': 'City',
      name: 'Pune',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <PhysicianSchema />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
        <FloatingActionButtons />
      </body>
    </html>
  );
}
