'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Moon, Sun, Globe } from 'lucide-react'
import { useTheme } from 'next-themes'

const languages = [
  { code: 'EN', name: 'English' },
  { code: 'ES', name: 'Español' },
  { code: 'AR', name: 'العربية' },
  { code: 'CN', name: '中文' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('EN')

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-sm dark:bg-gray-900 dark:bg-opacity-90' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600 dark:text-green-400">NutriDecode</Link>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="#features" onClick={(e) => smoothScroll(e, 'features')} className="text-gray-600 hover:text-green-600 transition-colors dark:text-gray-300 dark:hover:text-green-400">Features</Link>
          <Link href="#how-it-works" onClick={(e) => smoothScroll(e, 'how-it-works')} className="text-gray-600 hover:text-green-600 transition-colors dark:text-gray-300 dark:hover:text-green-400">How It Works</Link>
          <Link href="#pricing" onClick={(e) => smoothScroll(e, 'pricing')} className="text-gray-600 hover:text-green-600 transition-colors dark:text-gray-300 dark:hover:text-green-400">Pricing</Link>
          <Link href="/app" onClick={(e) => smoothScroll(e, 'app')} className="text-gray-600 hover:text-green-600 transition-colors dark:text-gray-300 dark:hover:text-green-400">App</Link>
          <div className="relative group">
            <button className="flex items-center text-gray-600 hover:text-green-600 transition-colors dark:text-gray-300 dark:hover:text-green-400">
              <Globe className="w-5 h-5 mr-1" />
              {selectedLanguage}
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block dark:bg-gray-800">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  onClick={() => setSelectedLanguage(lang.code)}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
          <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
            Login
          </button>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white px-4 py-2 flex flex-col space-y-2 dark:bg-gray-900">
          <Link href="#features" onClick={(e) => smoothScroll(e, 'features')} className="text-gray-600 hover:text-green-600 transition-colors dark:text-gray-300 dark:hover:text-green-400">Features</Link>
          <Link href="#how-it-works" onClick={(e) => smoothScroll(e, 'how-it-works')} className="text-gray-600 hover:text-green-600 transition-colors dark:text-gray-300 dark:hover:text-green-400">How It Works</Link>
          <Link href="#pricing" onClick={(e) => smoothScroll(e, 'pricing')} className="text-gray-600 hover:text-green-600 transition-colors dark:text-gray-300 dark:hover:text-green-400">Pricing</Link>
          <Link href="/app" onClick={(e) => smoothScroll(e, 'app')} className="text-gray-600 hover:text-green-600 transition-colors dark:text-gray-300 dark:hover:text-green-400">App</Link>
          <div className="relative">
            <button className="flex items-center text-gray-600 hover:text-green-600 transition-colors dark:text-gray-300 dark:hover:text-green-400">
              <Globe className="w-5 h-5 mr-1" />
              {selectedLanguage}
            </button>
            <div className="mt-2 w-48 bg-white rounded-md shadow-lg dark:bg-gray-800">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  onClick={() => setSelectedLanguage(lang.code)}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 self-start"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
          <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors self-start">
            Login
          </button>
        </nav>
      )}
    </header>
  )
}

