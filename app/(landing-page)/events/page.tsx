import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionContainer from "../_components/section-container"
import SearchDoctorsForm from "@/features/doctor/components/search-doctors-form"

export default function Banner() {
  return (
    <section id="banner" className="bg-primary/5">
      <SectionContainer className="gap-10 py-4">
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
