import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SectionContainer from "../../section-container"
import HospitalIcon from "@/components/icons/hospital"
import EventsIcon from "@/components/icons/events"
import HealthcareProfessionalIcon from "@/components/icons/healthcare-professional"
import { Button } from "@/components/ui/button"

export default function GrowYourHealthPresenceSection() {
  return (
    <section id="grow-your-healthcare-presence" className="bg-primary/5">
      <SectionContainer>
        <h2 className="text-center text-xl leading-[1.3rem] font-semibold md:text-[1.75rem]">
          Grow Your Healthcare Presence
        </h2>
        <ul className="flex w-full flex-col gap-3 md:flex-row md:items-stretch md:gap-8 [&>li]:flex-1">
          <li>
            <Card className="h-full border-primary/50 bg-white/80 hover:border-secondary/50">
              <CardHeader className="flex flex-1 flex-col items-start gap-8 p-6">
                <HospitalIcon className="group-hover/card:stroke-secondary" />
                <div className="space-y-2">
                  <CardTitle className="text-base leading-5 font-bold md:text-xl md:leading-[1.3]">
                    List Health Services
                  </CardTitle>
                  <CardDescription className="md:text-base md:leading-6">
                    List your hospital, pharmacy, or laboratory to reach more
                    patients and grow your visibility.
                  </CardDescription>
                </div>
                <div className="flex flex-1 items-end">
                  <Button size="sm">List Hospital</Button>
                </div>
              </CardHeader>
            </Card>
          </li>
          <li>
            <Card className="h-full border-primary/50 bg-white/80 hover:border-secondary/50">
              <CardHeader className="flex flex-1 flex-col items-start gap-8 p-6">
                <EventsIcon className="group-hover/card:stroke-secondary" />
                <div className="space-y-2">
                  <CardTitle className="text-base leading-5 font-bold md:text-xl md:leading-[1.3]">
                    List Medical Events
                  </CardTitle>
                  <CardDescription className="md:text-base md:leading-6">
                    Publish medical events, manage registrations, and reach
                    healthcare professionals worldwide.
                  </CardDescription>
                </div>
                <div className="flex flex-1 items-end">
                  <Button size="sm">Create Event</Button>
                </div>
              </CardHeader>
            </Card>
          </li>
          <li>
            <Card className="h-full border-primary/50 bg-white/80 hover:border-secondary/50">
              <CardHeader className="flex flex-1 flex-col items-start gap-8 p-6">
                <HealthcareProfessionalIcon className="group-hover/card:stroke-secondary" />
                <div className="space-y-2">
                  <CardTitle className="text-base leading-5 font-bold md:text-xl md:leading-[1.3]">
                    Register as Health Professional
                  </CardTitle>
                  <CardDescription className="md:text-base md:leading-6">
                    Join as a doctor, therapist, pharmacist, or lab technician
                    to connect, collaborate, and grow your professional
                    presence.
                  </CardDescription>
                </div>
                <div className="flex flex-1 items-end">
                  <Button size="sm">Register</Button>
                </div>
              </CardHeader>
            </Card>
          </li>
        </ul>
      </SectionContainer>
    </section>
  )
}
