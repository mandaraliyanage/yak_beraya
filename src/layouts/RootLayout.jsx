import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { BannerStrip } from '../components/BannerStrip'

export function RootLayout() {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <BannerStrip />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

