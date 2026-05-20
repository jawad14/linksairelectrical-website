import type { Metadata, Viewport } from 'next';
import { Lato, Open_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { defaultMetadata } from '@/config/site.config';
import './globals.css';

const fontSans = Open_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const fontHeading = Lato({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: '#0F4C81',
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
        </ThemeProvider>
      </body>
    </html>
  );
}
