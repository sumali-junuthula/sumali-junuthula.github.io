import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function FloatingHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ top: '50%', right: '50%', translateX: '50%', translateY: '-50%' }}
      animate={{
        position: 'fixed',
        top: scrolled ? '1rem' : '50%',
        right: scrolled ? '1rem' : '50%',
        translateX: scrolled ? '0%' : '50%',
        translateY: scrolled ? '0%' : '-50%',
        scale: 1,
      }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="z-50 flex gap-4 items-center bg-black/60 px-4 py-2 rounded shadow-lg text-white backdrop-blur"
    >
      <span className="font-techmono text-sm">Sumali</span>
      <a href="https://github.com/sumali" target="_blank" rel="noreferrer">
        <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
      </a>
      <a href="https://linkedin.com/in/sumali" target="_blank" rel="noreferrer">
        <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
      </a>
    </motion.div>
  )
}
