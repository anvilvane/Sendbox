import { GeistSans } from 'geist/font/sans';
import config from '@/config';
import NotFoundContent from '@/components/NotFoundContent';
import './globals.css';

export const metadata = {
  title: 'Page Not Found | Sendbox',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <html lang="en" data-theme={config.colors.theme} className={GeistSans.className}>
      <body>
        <NotFoundContent />
      </body>
    </html>
  );
}
