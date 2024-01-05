import ThemeProvider from '../lib/ThemeProvider'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
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
        <ThemeProvider>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>

    </html>
  )
}