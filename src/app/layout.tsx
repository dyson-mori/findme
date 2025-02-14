"use client";

import { Montserrat, My_Soul } from "next/font/google";

import { APIProvider } from "@vis.gl/react-google-maps";

import { ThemeProvider } from "styled-components";

import Global from '@global/styles';
import themes from '@global/theme';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <ThemeProvider theme={themes}>
        <html lang="en">
          <body className={`${montserrat.variable} ${my_soul.variable}`}>
            {children}
          </body>
        </html>
        <Global />
      </ThemeProvider>
    </APIProvider>
  );
};

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-montserrat",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const my_soul = My_Soul({
  subsets: ['latin'],
  variable: "--font-my-soul",
  weight: ['400'],
});