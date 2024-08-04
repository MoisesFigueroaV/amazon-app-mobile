// app/layout.tsx
import React from 'react';
import Head from 'next/head';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mi Portafolio</title>
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;