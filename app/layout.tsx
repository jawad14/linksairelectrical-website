import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { FloatingMobileCTA } from '@/components/blocks/FloatingMobileCTA';
import { defaultMetadata } from '@/config/site.config';
import './globals.css';

const fontSans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const fontHeading = Poppins({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: '#0F5E94',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontHeading.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <FloatingMobileCTA />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
