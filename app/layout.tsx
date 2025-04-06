import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eman Aljishi',
  description: 'Created with ',
  generator: 'v0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
