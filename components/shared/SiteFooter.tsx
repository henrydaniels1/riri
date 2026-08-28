'use client'

import Link from 'next/link'
import { CircleUserRound, Mail, MapPin, Phone, Star } from 'lucide-react'
import { Logo } from '@/components/shared/Navbar'
import { Eyebrow } from '@/components/shared/Eyebrow'

const divisions = [
  { title: 'Ghostwriting', href: '/services/ghostwriting' },
  { title: 'Cyber Security', href: '/services/cyber-security' },
  { title: 'Human Resources', href: '/services/human-resources' },
]

export function SiteFooter() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo footer />
            <p>One trusted parent company, three specialized divisions. Ghostwriting, cyber security and human resources expertise delivered under one accountable roof.</p>
            <div className="socials">
              <Link href="#contact" aria-label="LinkedIn"><CircleUserRound size={15} /></Link>
              <Link href="#contact" aria-label="Instagram"><Star size={15} /></Link>
              <Link href="#contact" aria-label="Phone"><Phone size={15} /></Link>
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/">Home</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
          </div>
          <div>
            <h4>Our Divisions</h4>
            {divisions.map(s => <Link href={s.href} key={s.title}>{s.title}</Link>)}
          </div>
          <div>
            <h4>Contact</h4>
            <p className="contact-line"><MapPin size={15} /> 1200 Corporate Plaza, Suite 400<br />Austin, TX 78701</p>
            <p className="contact-line"><Phone size={15} /> +1 (512) 555-0134</p>
            <p className="contact-line"><Mail size={15} /> hello@veridiangroup.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Veridian Group. All rights reserved.</span>
          <span>
            <Link href="#contact">Privacy Policy</Link>
            <Link href="#contact">Terms of Service</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
