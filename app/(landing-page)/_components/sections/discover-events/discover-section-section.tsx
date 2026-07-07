import { TypographyH2 } from "@/components/ui/typography"
import SectionContainer from "../../section-container"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import DiscoverEventsCard from "./discover-events-card"

export default function DiscoverEventsSection() {
  return (
    <section id="discover-events">
      <SectionContainer className="gap-6 pt-6 pb-8 md:gap-8">
        <TypographyH2>
          Discover Events for Healthcare Professionals & Patients
        </TypographyH2>
        <Tabs defaultValue="ongoing">
          <TabsList className="md:self-center">
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming </TabsTrigger>
          </TabsList>
          <TabsContent
            value="ongoing"
            className="peer-data-[variant=default]:pt-8"
          >
            <Carousel className="flex w-full flex-col gap-5 md:gap-8">
              <CarouselContent>
                <CarouselItem>
                  <DiscoverEventsCard
                    imgSrc="/assets/events/event.png"
                    name="International Cardiology Summit 2026"
                    date="Sep 16, 2026 "
                    location="Bengaluru, Karnataka"
                    tags={["Category", "Tag"]}
                    actionButton={
                      <Button
                        variant="secondary"
                        className="h-9.75 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:h-10.25 md:text-sm md:leading-[1.28571]"
                      >
                        View Details
                      </Button>
                    }
                  />
                </CarouselItem>
                <CarouselItem>
                  <DiscoverEventsCard
                    imgSrc="/assets/events/event.png"
                    name="International Cardiology Summit 2026"
                    date="Sep 16, 2026 "
                    location="Bengaluru, Karnataka"
                    tags={["Category", "Tag"]}
                    actionButton={
                      <Button
                        variant="secondary"
                        className="h-9.75 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:h-10.25 md:text-sm md:leading-[1.28571]"
                      >
                        View Details
                      </Button>
                    }
                  />
                </CarouselItem>
                <CarouselItem>
                  <DiscoverEventsCard
                    imgSrc="/assets/events/event.png"
                    name="International Cardiology Summit 2026"
                    date="Sep 16, 2026 "
                    location="Bengaluru, Karnataka"
                    tags={["Category", "Tag"]}
                    actionButton={
                      <Button
                        variant="secondary"
                        className="h-9.75 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:h-10.25 md:text-sm md:leading-[1.28571]"
                      >
                        View Details
                      </Button>
                    }
                  />
                </CarouselItem>
                <CarouselItem>
                  <DiscoverEventsCard
                    imgSrc="/assets/events/event.png"
                    name="International Cardiology Summit 2026"
                    date="Sep 16, 2026 "
                    location="Bengaluru, Karnataka"
                    tags={["Category", "Tag"]}
                    actionButton={
                      <Button
                        variant="secondary"
                        className="h-9.75 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:h-10.25 md:text-sm md:leading-[1.28571]"
                      >
                        View Details
                      </Button>
                    }
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselNavigation>Explore All Events</CarouselNavigation>
            </Carousel>
          </TabsContent>
          <TabsContent
            value="upcoming"
            className="peer-data-[variant=default]:pt-5"
          >
            Upcoming
          </TabsContent>
        </Tabs>
      </SectionContainer>
    </section>
  )
}
