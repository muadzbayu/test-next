// app/layout.tsx
import './globals.css'
import Sidebar from '../components/sidebar'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div>
          <Sidebar />
          <main className="ml-64 p-8 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
