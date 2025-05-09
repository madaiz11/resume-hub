'use client';

import { useAdminAuth } from '@/hooks';
import { BarChart2, FileText, LogOut, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';

export function Header() {
  const pathname = usePathname();
  const { isAuthenticated, logout } = useAdminAuth();

  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold transition-colors hover:text-primary">
            ResumeHub
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                pathname === '/' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <FileText className="h-4 w-4" />
              Resume
            </Link>
            <Link
              href="/statistics"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                pathname === '/statistics' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <BarChart2 className="h-4 w-4" />
              Statistics
            </Link>
            {isAuthenticated && (
              <Link
                href="/admin"
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                  pathname.startsWith('/admin') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <User className="h-4 w-4" />
                Admin
              </Link>
            )}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <Button variant="outline" size="sm" className="hidden md:flex" onClick={() => logout()}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="hidden md:flex" asChild>
              <Link href="/admin/login">Admin Login</Link>
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
