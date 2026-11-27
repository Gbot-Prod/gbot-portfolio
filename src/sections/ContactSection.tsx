import GlassPanel from '../components/GlassPanel/GlassPanel'
import Section from '../components/Section/Section'
import { contactItems } from '../data/contact'
import type { ContactItem } from '../types/portfolio'
import type { SectionProps } from './types'

function ContactValue({ value, href, external }: ContactItem) {
  if (!href) return value

  return (
    <a
      className="underline"
      href={href}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
    >
      {value}
    </a>
  )
}

function ContactSection({ id }: SectionProps) {
  return (
    <Section id={id} kicker="Get in touch" title="Contact Information">
      <GlassPanel centered>
        {contactItems.map((item) => (
          <p key={item.label}>
            {item.label}: <ContactValue {...item} />
          </p>
        ))}
      </GlassPanel>
    </Section>
  )
}

export default ContactSection
