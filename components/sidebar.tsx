// components/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const Sidebar: React.FC = () => {
  const pathname = usePathname()

  const menu = [
    { name: 'All Posts', href: '/articles' },
    { name: 'Preview', href: '/preview' },
  ]

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-6 fixed top-0 left-0">
      <h2 className="text-2xl font-bold mb-8">📝 Test Next</h2>
      <ul className="space-y-3">
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={clsx(
                'block px-4 py-2 rounded-lg transition',
                pathname === item.href
                  ? 'bg-gray-700 text-white font-semibold'
                  : 'hover:bg-gray-700 hover:text-white text-gray-300'
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
