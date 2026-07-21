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
  CarouselNavigation,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import DiscoverEventsCard from "./discover-events-card"
import DISCOVER_EVENTS_SECTION from "@/contents/discover-events-content"
import DiscoverEventsCarouselItem from "./discover-events-carousel-item"

export default function DiscoverEventsSection() {
  return (
    <section id="discover-events">
      <SectionContainer className="gap-6 pt-6 pb-8 md:gap-8">
        <TypographyH2 className="font-semibold">
          Discover Events for Healthcare Professionals & Patients
        </TypographyH2>
        <Tabs defaultValue="ongoing">
          <TabsList className="md:self-center">
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming </TabsTrigger>
            <TabsIndicator />
          </TabsList>
          <TabsContent
            value="ongoing"
            className="peer-data-[variant=default]:pt-8 md:peer-data-[variant=default]:pt-8"
          >
            <Carousel className="flex w-full flex-col gap-8">
              <CarouselContent>
                {DISCOVER_EVENTS_SECTION.ongoing.map(
                  ({ name, imgSrc, date, location, tags }, i) => (
                    <DiscoverEventsCarouselItem key={i}>
                      <DiscoverEventsCard
                        imgSrc={imgSrc}
                        name={name}
                        date={date}
                        location={location}
                        tags={tags}
                        actionButton={<ActionButton>View Details</ActionButton>}
                      />
                    </DiscoverEventsCarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselNavigation>Explore All Events</CarouselNavigation>
            </Carousel>
          </TabsContent>
          <TabsContent
            value="upcoming"
            className="peer-data-[variant=default]:pt-5"
          >
            <Carousel className="flex w-full flex-col gap-8">
              <CarouselContent>
                {DISCOVER_EVENTS_SECTION.upcoming.map(
                  ({ name, imgSrc, date, location, tags }, i) => (
                    <DiscoverEventsCarouselItem key={i}>
                      <DiscoverEventsCard
                        imgSrc={imgSrc}
                        name={name}
                        date={date}
                        location={location}
                        tags={tags}
                        actionButton={<ActionButton>View Details</ActionButton>}
                      />
                    </DiscoverEventsCarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselNavigation>Explore All Events</CarouselNavigation>
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
      className="h-10.25 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:h-10.25 md:text-sm md:leading-[1.28571]"
    >
      {children}
    </Button>
  )
}
