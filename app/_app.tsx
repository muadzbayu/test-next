// pages/_app.tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/sidebar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-6 w-full">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
