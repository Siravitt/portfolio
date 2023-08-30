import './globals.css'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <div className="w-screen h-screen p-4">
          <div className="w-full h-full bg-primary relative rounded-lg border">
            <NavBar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
