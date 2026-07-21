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
import ProfessionalsTabContent from "./professionals-tab-content"
import HealthServicesTabContent from "./health-services-tab-content"
import EvetnsTabContent from "./events-tab-content"

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
            <ProfessionalsTabContent />
          </TabsContent>
          <TabsContent value="health-services">
            <HealthServicesTabContent />
          </TabsContent>
          <TabsContent value="events">
            <EvetnsTabContent />
          </TabsContent>
        </Tabs>
      </SectionContainer>
    </section>
  )
}
