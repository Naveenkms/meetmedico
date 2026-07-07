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
import FindHealthServicesCard from "./find-health-services-card"

export default function FIndHealthServicesSection() {
  return (
    <section id="find-health-services">
      <SectionContainer className="gap-3">
        <TypographyH2>Find Health Services by Specialities</TypographyH2>
        <Tabs defaultValue="hospitals">
          <TabsList className="md:self-center">
            <TabsTrigger value="hospitals">Hospitals</TabsTrigger>
            <TabsTrigger value="pharmacies">Pharmacies </TabsTrigger>
            <TabsTrigger value="laboratories">Laboratories</TabsTrigger>
          </TabsList>
          <TabsContent
            value="hospitals"
            className="peer-data-[variant=default]:pt-7.25 md:pt-8"
          >
            <Carousel className="flex w-full flex-col gap-7.25 md:gap-8">
              <CarouselContent>
                <CarouselItem>
                  <FindHealthServicesCard
                    imgSrc="/assets/healthcare/secure-hospital-care.png"
                    name="SGK Hospital & Research Centre"
                    designation="Multi-Speciality Hospital"
                    location="Jaipur, Rajasthan,"
                    actionButton={
                      <Button
                        variant="secondary"
                        className="h-9.75 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:h-10.25 md:text-sm md:leading-[1.28571]"
                      >
                        View Profile
                      </Button>
                    }
                  />
                </CarouselItem>
                <CarouselItem>
                  <FindHealthServicesCard
                    imgSrc="/assets/healthcare/secure-hospital-care.png"
                    name="SGK Hospital & Research Centre"
                    designation="Multi-Speciality Hospital"
                    location="Jaipur, Rajasthan,"
                    actionButton={
                      <Button
                        variant="secondary"
                        className="h-9.75 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:h-10.25 md:text-sm md:leading-[1.28571]"
                      >
                        View Profile
                      </Button>
                    }
                  />
                </CarouselItem>
                <CarouselItem>
                  <FindHealthServicesCard
                    imgSrc="/assets/healthcare/secure-hospital-care.png"
                    name="SGK Hospital & Research Centre"
                    designation="Multi-Speciality Hospital"
                    location="Jaipur, Rajasthan,"
                    actionButton={
                      <Button
                        variant="secondary"
                        className="h-9.75 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:h-10.25 md:text-sm md:leading-[1.28571]"
                      >
                        View Profile
                      </Button>
                    }
                  />
                </CarouselItem>
                <CarouselItem>
                  <FindHealthServicesCard
                    imgSrc="/assets/healthcare/secure-hospital-care.png"
                    name="SGK Hospital & Research Centre"
                    designation="Multi-Speciality Hospital"
                    location="Jaipur, Rajasthan,"
                    actionButton={
                      <Button
                        variant="secondary"
                        className="h-9.75 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:h-10.25 md:text-sm md:leading-[1.28571]"
                      >
                        View Profile
                      </Button>
                    }
                  />
                </CarouselItem>
                <CarouselItem>
                  <FindHealthServicesCard
                    imgSrc="/assets/healthcare/secure-hospital-care.png"
                    name="SGK Hospital & Research Centre"
                    designation="Multi-Speciality Hospital"
                    location="Jaipur, Rajasthan,"
                    actionButton={
                      <Button
                        variant="secondary"
                        className="h-9.75 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:h-10.25 md:text-sm md:leading-[1.28571]"
                      >
                        View Profile
                      </Button>
                    }
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselNavigation>Explore All Hospitals</CarouselNavigation>
            </Carousel>
          </TabsContent>
          <TabsContent
            value="pharmacies"
            className="peer-data-[variant=default]:pt-7.25 md:pt-8"
          >
            pharmacies
          </TabsContent>
          <TabsContent
            value="laboratories"
            className="peer-data-[variant=default]:pt-7.25 md:pt-8"
          >
            Laboratories
          </TabsContent>
        </Tabs>
      </SectionContainer>
    </section>
  )
}
