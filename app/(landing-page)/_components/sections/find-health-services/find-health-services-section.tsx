import { TypographyH2 } from "@/components/ui/typography"
import SectionContainer from "../../section-container"
import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import FindHealthServicesCard from "./find-health-services-card"
import FIND_HEALTH_SERVICES_SECTION_CONTENT from "@/contents/find-health-service-content"
import FindHealthServicesCarouselItem from "./find-health-services-carousel-item"

export default function FindHealthServicesSection() {
  return (
    <section id="find-health-services">
      <SectionContainer className="gap-3 pt-16">
        <TypographyH2 className="font-semibold">
          Find Health Services by Specialities
        </TypographyH2>
        <Tabs defaultValue="hospitals">
          <TabsList className="md:self-center">
            <TabsTrigger value="hospitals">Hospitals</TabsTrigger>
            <TabsTrigger value="pharmacies">Pharmacies </TabsTrigger>
            <TabsTrigger value="laboratories">Laboratories</TabsTrigger>
            <TabsIndicator />
          </TabsList>
          <TabsContent
            value="hospitals"
            className="peer-data-[variant=default]:pt-7.25 md:pt-8"
          >
            <Carousel className="flex w-full flex-col gap-7.25 md:gap-8">
              <CarouselContent>
                {FIND_HEALTH_SERVICES_SECTION_CONTENT.hospitals.map(
                  ({ imgSrc, designation, location, name }, i) => (
                    <FindHealthServicesCarouselItem>
                      <FindHealthServicesCard
                        key={i}
                        imgSrc={imgSrc}
                        name={name}
                        designation={designation}
                        location={location}
                        actionButton={<ActionButton>View Profile</ActionButton>}
                      />
                    </FindHealthServicesCarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselNavigation>Explore All Hospitals</CarouselNavigation>
            </Carousel>
          </TabsContent>
          <TabsContent
            value="pharmacies"
            className="peer-data-[variant=default]:pt-7.25 md:pt-8"
          >
            <Carousel className="flex w-full flex-col gap-7.25 md:gap-8">
              <CarouselContent>
                {FIND_HEALTH_SERVICES_SECTION_CONTENT.pharmacies.map(
                  ({ imgSrc, designation, location, name }, i) => (
                    <FindHealthServicesCarouselItem>
                      <FindHealthServicesCard
                        key={i}
                        imgSrc={imgSrc}
                        name={name}
                        designation={designation}
                        location={location}
                        actionButton={<ActionButton>View Profile</ActionButton>}
                      />
                    </FindHealthServicesCarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselNavigation>Explore All Pharmacies</CarouselNavigation>
            </Carousel>
          </TabsContent>
          <TabsContent
            value="laboratories"
            className="peer-data-[variant=default]:pt-7.25 md:pt-8"
          >
            <Carousel className="flex w-full flex-col gap-7.25 md:gap-8">
              <CarouselContent>
                {FIND_HEALTH_SERVICES_SECTION_CONTENT.laborataries.map(
                  ({ imgSrc, designation, location, name }, i) => (
                    <FindHealthServicesCarouselItem>
                      <FindHealthServicesCard
                        key={i}
                        imgSrc={imgSrc}
                        name={name}
                        designation={designation}
                        location={location}
                        actionButton={<ActionButton>View Profile</ActionButton>}
                      />
                    </FindHealthServicesCarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselNavigation>Explore All Laborataries</CarouselNavigation>
            </Carousel>
          </TabsContent>
        </Tabs>
      </SectionContainer>
    </section>
  )
}

function ActionButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
      variant="secondary"
      className="h-10.25 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:text-sm md:leading-[1.28571]"
    >
      {children}
    </Button>
  )
}
