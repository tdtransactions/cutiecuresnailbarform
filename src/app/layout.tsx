import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cutiecures Nail Bar | Exclusive Coupon',
  description: 'Get your exclusive discount coupon for Cutiecures Nail Bar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
