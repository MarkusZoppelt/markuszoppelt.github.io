import { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
      {/* Navigation Bar */}
      <nav className="relative z-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative px-4 py-2 bg-[#1a1a1a] rounded-lg border border-gray-800/50 backdrop-blur-sm">
                  <span className="text-gray-100 font-semibold">MZ</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="relative group px-3 py-2 rounded-lg text-gray-300/90 hover:text-gray-100 transition-colors duration-200"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
                <span className="relative">Home</span>
              </Link>
              <Link
                href="/projects"
                className="relative group px-3 py-2 rounded-lg text-gray-300/90 hover:text-gray-100 transition-colors duration-200"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
                <span className="relative">Projects</span>
              </Link>
              <Link
                href="/contact"
                className="relative group px-3 py-2 rounded-lg text-gray-300/90 hover:text-gray-100 transition-colors duration-200"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
                <span className="relative">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-20" />
        {children}
      </main>
    </div>
  );
} 