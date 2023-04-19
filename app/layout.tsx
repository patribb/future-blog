import { Footer, Navbar } from './(shared)'
import './globals.css'

export const metadata = {
  title: 'Future Blog',
  description: 'Blog App built in NextJs that uses AI',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
