import ThemeProvider from '../components/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import { ApolloWrapper } from "../components/ApolloWrapper";
import NavBar from '@/widgets/NavBar/NavBar';


export const metadata = {
  title: 'abtme',
  description: 'abtme',
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