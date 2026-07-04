import Link from "next/link"

import LogoMinimised from "@/components/logo-minimised"
import Stream from "@/components/icons/socials/stream"
import Facebook from "@/components/icons/socials/facebook"
import X from "@/components/icons/socials/x"
import Linkedin from "@/components/icons/socials/linkedin"
import Instagram from "@/components/icons/socials/instagram"
import Telegram from "@/components/icons/socials/telegram"
import Medium from "@/components/icons/socials/medium"

const LINKS: { label: string; href: string }[] = [
  { label: "About Our Platform", href: "about-our-platform" },
  { label: "Data Privacy Policy", href: "data-privacy-and-policy" },
  { label: "Terms of Medical Service", href: "terms-of-medical-services" },
  { label: "Contact Support", href: "contact-support" },
  { label: "API Documentation", href: "api-documentation" },
]

const SOCIALS: { icon: React.ElementType; label: string; href: string }[] = [
  { icon: Stream, label: "subscribe", href: "#" },
  { icon: Facebook, label: "facebook", href: "#" },
  { icon: X, label: "x", href: "#" },
  { icon: Linkedin, label: "linkedin", href: "#" },
  { icon: Instagram, label: "instagram", href: "#" },
  { icon: Telegram, label: "telegram", href: "#" },
  { icon: Medium, label: "medium", href: "#" },
]

export default function Footer() {
  return (
    <footer className="flex flex-col gap-5 bg-neutral-50 px-4 py-10 md:px-37.5">
      <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <LogoMinimised className="h-6 w-22.5" />
        <ul className="flex flex-wrap justify-center self-stretch py-2.5 md:flex-nowrap gap-y-5 md:gap-5 md:px-5">
          {LINKS.map(({ label, href }, i) => (
            <li
              key={i}
              className="basis-1/2 text-xs leading-[1.33333] font-bold text-neutral-600 odd:text-right even:text-left odd:pr-5 md:w-auto md:basis-auto md:text-sm md:leading-[1.28571]"
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-px bg-border" />
      <div className="flex flex-col items-center justify-center gap-12.5 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="space-y-5 text-xs leading-[1.33333] text-neutral-600 md:text-sm md:leading-[1.28571]">
          <p>
            © 2026 MeetMedico Inc. All clinical reference guidelines are
            peer-reviewed. Emergency cases must contact local emergency
            infrastructure instantly.
          </p>
          <div>Protected via Secure SSL Architecture</div>
        </div>
        <div className="flex items-center gap-5.25">
          {SOCIALS.map(({ icon: Icon, label, href }, i) => (
            <Link href={href} key={i}>
              <Icon />
              <span className="sr-only">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
