import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/lib/Provider/Providers'
import MainNavbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beauty Spa',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Toaster/>
          <MainNavbar/>
          {children}
          <Footer/>
          </body>
          
      </html>
    </Providers>
  )
}
