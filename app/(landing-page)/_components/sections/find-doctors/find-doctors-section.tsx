import { TypographyH2 } from "@/components/ui/typography"
import SectionContainer from "../../section-container"
import { Button } from "@/components/ui/button"
import Kidney from "@/components/illustrations/kidney"
import FindDoctorsCard from "./find-doctors-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/ui/carousel"
import Stomach from "@/components/illustrations/stomach"
import Heart from "@/components/illustrations/heart"
import Shield from "@/components/illustrations/shield"
import Psychiatry from "@/components/illustrations/psychiatry"

export default function FindDoctorsSection() {
  return (
    <section id="find-doctors">
      <SectionContainer className="gap-3 pt-16">
        <TypographyH2>Find Doctors by Specialities/Symptoms</TypographyH2>
        <Carousel className="flex w-full flex-col gap-5 md:gap-8">
          <CarouselContent>
            <CarouselItem className="">
              <FindDoctorsCard
                icon={Stomach}
                title="Stomach & Digestion"
                description="32+ Doctors"
                actionButton={
                  <Button
                    variant="secondary"
                    className="h-9.75 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:h-10.25 md:text-sm md:leading-[1.28571]"
                  >
                    View Doctors
                  </Button>
                }
              />
            </CarouselItem>
            <CarouselItem className="">
              <FindDoctorsCard
                icon={Heart}
                title="Cardiac Care"
                description="9+ Doctors"
                actionButton={
                  <Button
                    variant="secondary"
                    className="h-9.75 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:h-10.25 md:text-sm md:leading-[1.28571]"
                  >
                    View Doctors
                  </Button>
                }
              />
            </CarouselItem>
            <CarouselItem className="">
              <FindDoctorsCard
                icon={Kidney}
                title="Urology"
                description="3+ Doctors"
                actionButton={
                  <Button
                    variant="secondary"
                    className="h-9.75 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] md:h-10.25 md:text-sm md:leading-[1.28571]"
                  >
                    View Doctors
                  </Button>
                }
              />
            </CarouselItem>
            <CarouselItem className="">
              <FindDoctorsCard
                icon={Shield}
                title="Cold & Immunity"
                description="96+ Doctors"
                actionButton={
                  <Button
                    variant="secondary"
                    className="h-9.75 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:h-10.25 md:text-sm md:leading-[1.28571]"
                  >
                    View Doctors
                  </Button>
                }
              />
            </CarouselItem>
            <CarouselItem className="">
              <FindDoctorsCard
                icon={Psychiatry}
                title="Psychiatry"
                description="2+ Doctors"
                actionButton={
                  <Button
                    variant="secondary"
                    className="h-9.75 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:h-10.25 md:text-sm md:leading-[1.28571]"
                  >
                    View Doctors
                  </Button>
                }
              />
            </CarouselItem>
            <CarouselItem className="">
              <FindDoctorsCard
                icon={Kidney}
                title="Stomach & Digestion"
                description="32+ Doctors"
                actionButton={
                  <Button
                    variant="secondary"
                    className="h-9.75 w-full rounded-sm px-5 py-3 text-xs leading-[1.3333] text-primary md:h-10.25 md:text-sm md:leading-[1.28571]"
                  >
                    View Doctors
                  </Button>
                }
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNavigation>
            Explore All Specialities/Symptoms
          </CarouselNavigation>
        </Carousel>
      </SectionContainer>
    </section>
  )
}
