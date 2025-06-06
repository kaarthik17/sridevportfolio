'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Add usePathname
import clsx from 'clsx';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current pathname
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const getLinkClassNames = (path: string) => {
    const isActive = pathname === path;
    return clsx(
      'hover:text-blue-500', // Optional: Add hover color
      isActive ? 'border-b-2 border-blue-500' : '' // Apply border for active link
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Sri&apos;s Portfolio
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
          <li>
            <Link href="/" className={getLinkClassNames('/')}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className={getLinkClassNames('/projects')}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className={getLinkClassNames('/contact')}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Sidebar */}
        <div
          className={clsx(
            'fixed top-0 right-0 h-full w-2/3 bg-white dark:bg-gray-800 shadow-lg p-6 transform transition-transform duration-300 ease-in-out',
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <button className="mb-6" onClick={toggleMenu}>
            <X className="h-6 w-6" />
          </button>
          <ul className="space-y-6 text-lg text-gray-800 dark:text-gray-200 font-medium">
            <li>
              <Link href="/" className={getLinkClassNames('/')} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className={getLinkClassNames('/projects')} onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className={getLinkClassNames('/contact')} onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
