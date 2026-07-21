import { Badge } from "@/components/ui/badge"
import SectionContainer from "../../section-container"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsIndicator,
} from "@/components/ui/tabs"
import { TypographyH1 } from "@/components/ui/typography"
import SearchDoctorsForm from "@/features/professionals/doctors/components/search-doctors-form"
import SearchTherapistssForm from "@/features/professionals/therapists/components/search-therapists-form"
import SearchPharmacistsForm from "@/features/professionals/pharmacists/components/search-pharmacists.form"
import SearchLabTechniciansForm from "@/features/professionals/lab-technicians/components/search-pharmacists-form"

export default function BannerSection() {
  return (
    <section id="banner" className="bg-primary/5">
      <SectionContainer className="gap-10 py-6 md:max-w-225 md:gap-10 md:py-20.5">
        <div className="flex flex-col items-center gap-6">
          <Badge variant="secondary">Certified & Verified</Badge>
          <div className="space-y-3">
            <TypographyH1>
              Discover Trusted <br className="md:hidden" />
              <span className="text-primary">Health Services</span>
              <br className="md:hidden" /> Near You
            </TypographyH1>
            <p className="text-center text-xs/4 text-neutral-600 md:text-sm/4.5">
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
            <TabsIndicator />
          </TabsList>
          <TabsContent value="professionals">
            <Tabs defaultValue="doctors">
              <TabsList className="">
                <TabsTrigger value="doctors">Doctors</TabsTrigger>
                <TabsTrigger value="therapists">Therapists </TabsTrigger>
                <TabsTrigger value="pharmacists">Pharmacists</TabsTrigger>
                <TabsTrigger value="lab-technicians">
                  Lab Technicians
                </TabsTrigger>
                <TabsIndicator />
              </TabsList>
              <TabsContent value="doctors" className="pt-6! md:pt-6.5!">
                <SearchDoctorsForm />
              </TabsContent>
              <TabsContent value="therapists" className="pt-6! md:pt-6.5!">
                <SearchTherapistssForm />
              </TabsContent>
              <TabsContent value="pharmacists" className="pt-6! md:pt-6.5!">
                <SearchPharmacistsForm />
              </TabsContent>
              <TabsContent value="lab-technicians" className="pt-6! md:pt-6.5!">
                <SearchLabTechniciansForm />
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="health-services">health Services</TabsContent>
          <TabsContent value="events">Events</TabsContent>
        </Tabs>
      </SectionContainer>
    </section>
  )
}
