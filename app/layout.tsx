import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | UK Tax Advisory`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.shortDescription,
  metadataBase: new URL(siteConfig.baseUrl),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.baseUrl,
    title: `${siteConfig.name} | UK Tax Advisory`,
    description: siteConfig.shortDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | UK Tax Advisory`,
    description: siteConfig.shortDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-0B9EBSVFGG`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0B9EBSVFGG');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
