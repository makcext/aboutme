import ThemeProvider from '../components/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import { ApolloWrapper } from "../components/ApolloWrapper";
import NavBar from '@/components/widgets/NavBar/NavBar';
import Analytics from 'next/script';
import Head from 'next/head';

export const metadata = {
  "google-site-verification": 'qDLU6tnn0I7QTjPm7gHfv7O5u7L-xlhNcKF1O3OU3Ow',
  title: 'abtme',
  description: 'abtme',
  icons: {
    icon: [
      {
        url: '/build/favicon.ico',
        href: '/build/favicon.ico',
      },
    ],
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="qDLU6tnn0I7QTjPm7gHfv7O5u7L-xlhNcKF1O3OU3Ow" />
      </Head>
      <body>
        <ApolloWrapper>
          <ThemeProvider>
            <CssBaseline />
            <NavBar />
            {children}
          </ThemeProvider>
        </ApolloWrapper>
        <Analytics
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WN0YMDN8RR"
        />
        {/* <Analytics
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_TRACKING_ID', {
                page_path: window.location.pathname,
              });
            `,
          }}
        /> */}
      </body>
    </html>
  )
}