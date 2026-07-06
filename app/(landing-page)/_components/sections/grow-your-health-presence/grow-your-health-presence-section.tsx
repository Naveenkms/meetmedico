import SectionContainer from "../../section-container"
import HospitalIcon from "@/components/icons/hospital"
import EventsIcon from "@/components/icons/events"
import HealthcareProfessionalIcon from "@/components/icons/healthcare-professional"
import { Button } from "@/components/ui/button"
import { TypographyH2 } from "@/components/ui/typography"
import GrowYourHealthPresenceCard from "./grow-your-health-presence-card"

export default function GrowYourHealthPresenceSection() {
  return (
    <section id="grow-your-healthcare-presence" className="bg-primary/5">
      <SectionContainer>
        <TypographyH2> Grow Your Healthcare Presence</TypographyH2>
        <ul className="flex w-full flex-col gap-3 md:flex-row md:items-stretch md:gap-8 [&>li]:flex-1">
          <li>
            <GrowYourHealthPresenceCard
              icon={HospitalIcon}
              title="List Health Services"
              description="List your hospital, pharmacy, or laboratory to reach more
                    patients and grow your visibility."
              actionButton={<Button size="sm">List Hospital</Button>}
            />
          </li>
          <li>
            <GrowYourHealthPresenceCard
              icon={EventsIcon}
              title="List Medical Events"
              description="Publish medical events, manage registrations, and reach
                    healthcare professionals worldwide."
              actionButton={<Button size="sm">Create Event</Button>}
            />
          </li>
          <li>
            <GrowYourHealthPresenceCard
              icon={HealthcareProfessionalIcon}
              title="Register as Health Professional"
              description="Join as a doctor, therapist, pharmacist, or lab technician
                    to connect, collaborate, and grow your professional
                    presence."
              actionButton={<Button size="sm">Register</Button>}
            />
          </li>
        </ul>
      </SectionContainer>
    </section>
  )
}
