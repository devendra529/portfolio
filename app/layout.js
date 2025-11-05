import { Inter } from 'next/font/google';
import './globals.css';
import ThemeToggle from '@/components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Devendra Pratap Singh | Java Backend Developer',
  description: 'Portfolio of Devendra Pratap Singh - Java Backend Developer & Tech Enthusiast specializing in Spring Boot, React, and Cloud Technologies',
  keywords: 'Java Developer, Backend Developer, Spring Boot, React, Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}