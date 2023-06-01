import './globals.css';
import { Inter } from '@next/font/google';
import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/footer/Footer';
import Provider from '@components/Provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MVP Trades',
  description: 'Electronic trading of Gaming accounts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <NavBar/>
          {children}
          <Footer/>
        </main>
        </Provider>
      </body>
    </html>
  )
}
