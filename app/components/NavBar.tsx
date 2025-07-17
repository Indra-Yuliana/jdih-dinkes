'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Profil', href: '/profile' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Produk #1', href: '/product/1' },
  { name: 'Products', href: '/products'}
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-4 bg-gray-50 p-4 text-black">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`px-3 py-1 rounded ${
            pathname === item.href ? 'bg-blue-500 text-white' : 'hover:bg-blue-500'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
