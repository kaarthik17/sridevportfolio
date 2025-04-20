import './globals.css';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Sri | Portfolio',
  description: 'Full-Stack Engineer | Backend-heavy | 10+ yrs experience',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/x-icon" href="/sriicon.ico" />
      </head>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
