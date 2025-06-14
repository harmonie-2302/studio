// src/components/layout/Header.tsx
"use client";

import Link from 'next/link';
import { SewingPinIcon, HomeIcon, ShoppingBagIcon, SparklesIcon, MailIcon, MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Accueil', icon: <HomeIcon className="h-5 w-5" /> },
  { href: '/services', label: 'Services', icon: <ShoppingBagIcon className="h-5 w-5" /> },
  { href: '/ai-designer', label: 'AI Créateur', icon: <SparklesIcon className="h-5 w-5" /> },
  { href: '/contact', label: 'Contact', icon: <MailIcon className="h-5 w-5" /> },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <SewingPinIcon className="h-8 w-8 text-accent group-hover:animate-pulse" />
          <h1 className="text-2xl font-headline tracking-wider group-hover:text-accent transition-colors">
            Harmy's Atelier
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild className="hover:bg-primary-foreground/10 hover:text-accent transition-colors">
              <Link href={item.href} className="flex items-center gap-2 px-3 py-2">
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-primary text-primary-foreground p-0">
              <div className="p-6">
                <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setIsMobileMenuOpen(false)}>
                    <SewingPinIcon className="h-7 w-7 text-accent" />
                    <h2 className="text-xl font-headline tracking-wider">
                    Harmy's Atelier
                    </h2>
                </Link>
                <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                    <Button 
                      key={item.label} 
                      variant="ghost" 
                      asChild 
                      className="justify-start hover:bg-primary-foreground/10 hover:text-accent transition-colors w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                    <Link href={item.href} className="flex items-center gap-3 p-3 text-lg">
                        {item.icon}
                        <span>{item.label}</span>
                    </Link>
                    </Button>
                ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
