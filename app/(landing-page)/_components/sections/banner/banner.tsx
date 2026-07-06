import { Badge } from "@/components/ui/badge"
import SectionContainer from "../../section-container"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SearchDoctorsForm from "@/features/doctor/components/search-doctors-form"

export default function Banner() {
  return (
    <section id="banner" className="bg-primary/5">
      <SectionContainer className="gap-10 py-4 md:max-w-225">
        <div className="flex flex-col items-center gap-6">
          <Badge variant="secondary">Certified & Verified</Badge>
          <div className="space-y-3">
            <h1 className="text-center text-[1.875rem] md:text-[2.5rem] leading-[1.33333] font-bold tracking-[0%] text-balance">
              Discover Trusted <br className="md:hidden" />
              <span className="text-primary">Health Services</span> Near You
            </h1>
            <p className="text-center text-xs md:text-sm leading-[1.33333] md:leading-[1.28571] text-neutral-600">
              Find verified doctors, top-tier medical centers, and book seamless
              online appointments tailored to your exact needs.
            </p>
          </div>
        </div>
        <Tabs defaultValue="professionals">
          <TabsList variant="line">
            <TabsTrigger value="professionals">Professionals</TabsTrigger>
            <TabsTrigger value="health-services">Health Services</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>
          <TabsContent value="professionals">
            <Tabs defaultValue="doctors">
              <TabsList>
                <TabsTrigger value="doctors">Doctors</TabsTrigger>
                <TabsTrigger value="therapists">Therapists </TabsTrigger>
                <TabsTrigger value="pharmacists">Pharmacists</TabsTrigger>
                <TabsTrigger value="lab-technicians">
                  Lab Technicians
                </TabsTrigger>
              </TabsList>
              <TabsContent value="doctors">
                <SearchDoctorsForm />
              </TabsContent>
              <TabsContent value="therapists">Therapists</TabsContent>
              <TabsContent value="pharmacists">Pharmacists</TabsContent>
              <TabsContent value="lab-technicians">Lab Technicians</TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="health-services">health Services</TabsContent>
          <TabsContent value="events">Events</TabsContent>
        </Tabs>
      </SectionContainer>
    </section>
  )
}
