import React from 'react'
import Analytics from 'next/script';


export const metadata = {
  title: 'wolt api',
  description: 'abtme Wolt API',
  icons: {
    icon: [
      {
        url: '/build/favicon.ico',
        href: '/build/favicon.ico',
      },
    ],
  },

}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
	<section>{children}
	
	<Analytics
          id="gtag-inline-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WN0YMDN8RR', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />



	</section>



	)
}