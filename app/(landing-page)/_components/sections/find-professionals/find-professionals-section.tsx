import { TypographyH2 } from "@/components/ui/typography"
import SectionContainer from "../../section-container"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsIndicator,
} from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/ui/carousel"
import FindProfessionalsCard from "./find-professionals-card"
import { Button } from "@/components/ui/button"
import FIND_PROFESSIONALS_SECTION_CONTENT from "@/contents/find-professionals-section-content"

export default function FindProfessionalsSection() {
  return (
    <section id="find-professionals">
      <SectionContainer className="gap-3">
        <TypographyH2>Find Professionals by Specialities</TypographyH2>
        <Tabs defaultValue="doctors">
          <TabsList className="md:self-center">
            <TabsTrigger value="doctors">Doctors</TabsTrigger>
            <TabsTrigger value="therapists">Therapists </TabsTrigger>
            <TabsTrigger value="pharmacists">Pharmacists</TabsTrigger>
            <TabsTrigger value="lab-technicians">Lab Technicians</TabsTrigger>
            <TabsIndicator />
          </TabsList>
          <TabsContent
            value="doctors"
            className="peer-data-[variant=default]:pt-5 md:peer-data-[variant=default]:pt-8"
          >
            <Carousel className="flex w-full flex-col gap-5 md:gap-8">
              <CarouselContent>
                {FIND_PROFESSIONALS_SECTION_CONTENT.doctors.map(
                  ({ imgSrc, designation, location, name, tags }, i) => (
                    <CarouselItem key={i}>
                      <FindProfessionalsCard
                        imgSrc={imgSrc}
                        name={name}
                        designation={designation}
                        location={location}
                        tags={tags}
                        actionButton={<ActionButton>View Profile</ActionButton>}
                      />
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselNavigation>Explore All Doctors</CarouselNavigation>
            </Carousel>
          </TabsContent>
          <TabsContent
            value="therapists"
            className="peer-data-[variant=default]:pt-5 md:peer-data-[variant=default]:pt-8"
          >
            <Carousel className="flex w-full flex-col gap-5 md:gap-8">
              <CarouselContent>
                {FIND_PROFESSIONALS_SECTION_CONTENT.therapists.map(
                  ({ imgSrc, designation, location, name, tags }, i) => (
                    <CarouselItem key={i}>
                      <FindProfessionalsCard
                        imgSrc={imgSrc}
                        name={name}
                        designation={designation}
                        location={location}
                        tags={tags}
                        actionButton={<ActionButton>View Profile</ActionButton>}
                      />
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselNavigation>Explore All Therapists</CarouselNavigation>
            </Carousel>
          </TabsContent>
          <TabsContent
            value="pharmacists"
            className="peer-data-[variant=default]:pt-5 md:peer-data-[variant=default]:pt-8"
          >
            <Carousel className="flex w-full flex-col gap-5 md:gap-8">
              <CarouselContent>
                {FIND_PROFESSIONALS_SECTION_CONTENT.pharmacists.map(
                  ({ imgSrc, designation, location, name, tags }, i) => (
                    <CarouselItem key={i}>
                      <FindProfessionalsCard
                        imgSrc={imgSrc}
                        name={name}
                        designation={designation}
                        location={location}
                        tags={tags}
                        actionButton={<ActionButton>View Profile</ActionButton>}
                      />
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselNavigation>Explore All Pharmacists</CarouselNavigation>
            </Carousel>
          </TabsContent>
          <TabsContent
            value="lab-technicians"
            className="peer-data-[variant=default]:pt-5 md:peer-data-[variant=default]:pt-8"
          >
            <Carousel className="flex w-full flex-col gap-5 md:gap-8">
              <CarouselContent>
                {FIND_PROFESSIONALS_SECTION_CONTENT.labTechnicians.map(
                  ({ imgSrc, designation, location, name, tags }, i) => (
                    <CarouselItem key={i}>
                      <FindProfessionalsCard
                        imgSrc={imgSrc}
                        name={name}
                        designation={designation}
                        location={location}
                        tags={tags}
                        actionButton={<ActionButton>View Profile</ActionButton>}
                      />
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselNavigation>Explore All Technicians</CarouselNavigation>
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
