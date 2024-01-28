
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
	<section>{children}</section>



	)
}