import ThemeProvider from '../components/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import { ApolloWrapper } from "../components/ApolloWrapper";
import NavBar from '@/components/widgets/NavBar/NavBar';
import Analytics from 'next/script';
import Head from 'next/head';

export const metadata = {
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

      <body>
        <ApolloWrapper>
          <ThemeProvider>
            <CssBaseline />
            <NavBar />
            {children}
          </ThemeProvider>
        </ApolloWrapper>

      </body>
    </html>
  )
}
