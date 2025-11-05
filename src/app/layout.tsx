import type { Metadata } from 'next';
import '../styles/globals.css';

const siteName = 'PetZone – Multi-Speciality Pet Clinic, Pet Shop & Grooming Centre';
const siteDescription = 'Trusted veterinary clinic, grooming centre and pet shop in Koothattukulam. Book appointments and enquire via WhatsApp.';
const siteUrl = 'https://www.petzone-koothattukulam.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: '%s · PetZone Koothattukulam'
  },
  description: siteDescription,
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName,
    locale: 'en_IN'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription
  },
  alternates: {
    canonical: '/'
  },
  keywords: [
    'Koothattukulam Pet Clinic',
    'Veterinary Doctor in Koothattukulam',
    'Pet Grooming Centre',
    'Pet Shop Koothattukulam',
    'Veterinary Clinic near me'
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
        {/* JSON-LD for Local Business / VeterinaryClinic */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VeterinaryCare',
              name: siteName,
              url: siteUrl,
              telephone: '+91 75929 00941',
              email: 'petZonekoothattukulam@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Near Marigiri School, Opposite Sai Service, MC Road',
                addressLocality: 'Koothattukulam',
                addressRegion: 'Kerala',
                addressCountry: 'IN'
              },
              openingHours: 'Mo-Su 09:00-20:00',
              sameAs: [
                'https://instagram.com/',
                'https://facebook.com/',
                'https://wa.me/917592900941',
                'https://youtube.com/'
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}


