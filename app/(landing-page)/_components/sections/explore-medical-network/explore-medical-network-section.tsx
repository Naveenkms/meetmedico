import { TypographyH2 } from "@/components/ui/typography"
import SectionContainer from "../../section-container"
import { Tabs, TabsContent, TabsIndicator, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  ExploreMedicalNetworkCard,
  ExploreMedicalNetworkCardHeader,
  ExploreMedicalNetworkCardContent,
  ExploreMedicalNetworkCardLink,
} from "./explore-medical-networks-card"

export default function ExploreMedicalNetworkSection() {
  return (
    <section id="explore-the-medical-network">
      <SectionContainer className="gap-8 py-8">
        <TypographyH2>Explore the Medical Network</TypographyH2>
        <Tabs defaultValue="by-specialist-professionals">
          <TabsList className="md:self-center">
            <TabsTrigger value="by-specialist-professionals">
              By Specialist Professionals
            </TabsTrigger>
            <TabsTrigger value="by-healthcare-services">
              By Healthcare Services
            </TabsTrigger>
            <TabsTrigger value="by-symptom">By Symptom</TabsTrigger>
            <TabsIndicator />
          </TabsList>
          <TabsContent
            value="by-specialist-professionals"
            className="peer-data-[variant=default]:pt-8 md:peer-data-[variant=default]:pt-8"
          >
            <Carousel className="flex flex-col gap-8">
              <CarouselContent className="-ml-10">
                <CarouselItem className="basis-auto pl-10 md:basis-1/4">
                  <ExploreMedicalNetworkCard>
                    <ExploreMedicalNetworkCardHeader>
                      Internal Medicine
                    </ExploreMedicalNetworkCardHeader>

                    <ExploreMedicalNetworkCardContent>
                      <ExploreMedicalNetworkCardLink href="">
                        Cardiologists Near Me
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Neurology Consultants
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Gastroenterology Centers
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Endocrinology Doctors
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Oncology Treatment Units
                      </ExploreMedicalNetworkCardLink>
                    </ExploreMedicalNetworkCardContent>
                  </ExploreMedicalNetworkCard>
                </CarouselItem>
                <CarouselItem className="basis-auto pl-10 md:basis-1/4">
                  <ExploreMedicalNetworkCard>
                    <ExploreMedicalNetworkCardHeader>
                      Family Medicine
                    </ExploreMedicalNetworkCardHeader>

                    <ExploreMedicalNetworkCardContent>
                      <ExploreMedicalNetworkCardLink href="">
                        Pediatric General Practice
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Dermatology Skin Clinics
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Geriatric Wellness Teams
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        General Health Checkups
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Immunization Centers
                      </ExploreMedicalNetworkCardLink>
                    </ExploreMedicalNetworkCardContent>
                  </ExploreMedicalNetworkCard>
                </CarouselItem>
                <CarouselItem className="basis-auto pl-10 md:basis-1/4">
                  <ExploreMedicalNetworkCard>
                    <ExploreMedicalNetworkCardHeader>
                      Surgical Specialists
                    </ExploreMedicalNetworkCardHeader>

                    <ExploreMedicalNetworkCardContent>
                      <ExploreMedicalNetworkCardLink href="">
                        Orthopedic Surgeons
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Ophthalmology Laser Care
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Otolaryngology (ENT) Labs
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Urology Operative Centers
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Plastic Surgery Units
                      </ExploreMedicalNetworkCardLink>
                    </ExploreMedicalNetworkCardContent>
                  </ExploreMedicalNetworkCard>
                </CarouselItem>
                <CarouselItem className="basis-auto pl-10 md:basis-1/4">
                  <ExploreMedicalNetworkCard>
                    <ExploreMedicalNetworkCardHeader>
                      Therapeutics & Rehab
                    </ExploreMedicalNetworkCardHeader>

                    <ExploreMedicalNetworkCardContent>
                      <ExploreMedicalNetworkCardLink href="">
                        Physical Therapy Clinics
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Mental Health Counselors
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Speech Language Therapy
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Chiropractic Adjustment
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Dietary Plan Specialists
                      </ExploreMedicalNetworkCardLink>
                    </ExploreMedicalNetworkCardContent>
                  </ExploreMedicalNetworkCard>
                </CarouselItem>
                <CarouselItem className="basis-auto pl-10 md:basis-1/4">
                  <ExploreMedicalNetworkCard>
                    <ExploreMedicalNetworkCardHeader>
                      Family Medicine
                    </ExploreMedicalNetworkCardHeader>

                    <ExploreMedicalNetworkCardContent>
                      <ExploreMedicalNetworkCardLink href="">
                        Pediatric General Practice
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Dermatology Skin Clinics
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Geriatric Wellness Teams
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        General Health Checkups
                      </ExploreMedicalNetworkCardLink>
                      <ExploreMedicalNetworkCardLink href="">
                        Immunization Centers
                      </ExploreMedicalNetworkCardLink>
                    </ExploreMedicalNetworkCardContent>
                  </ExploreMedicalNetworkCard>
                </CarouselItem>
              </CarouselContent>
              <div className="flex items-center justify-center gap-4">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </TabsContent>
          <TabsContent
            value="by-healthcare-services"
            className="peer-data-[variant=default]:pt-8"
          >
            Healthcare Services
          </TabsContent>
          <TabsContent
            value="by-symptom"
            className="peer-data-[variant=default]:pt-8"
          >
            Symptom
          </TabsContent>
        </Tabs>
      </SectionContainer>
    </section>
  )
}
