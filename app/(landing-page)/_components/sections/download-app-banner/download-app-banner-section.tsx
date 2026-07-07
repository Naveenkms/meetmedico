import SectionContainer from "../../section-container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import MobileAppImg from "../../mobile-app-img"
import DownloadFromApplestoreButton from "../../download-from-applestore-button"
import DownloadFromPlaystoreButton from "../../download-from-playstore-button"
import { FloatingLabelInput } from "@/components/ui/floating-label-input"
import SearchDoctorByPhoneNumberForm from "@/features/doctor/components/search-doctor-by-phone-number-form"

const BADGES: string[] = ["Top Doctors", "Top Hospitals", "Medical Events"]

export default function DownloadAppBannerSection() {
  return (
    <section id="download-app-banner">
      <SectionContainer className="pt-0 pb-4">
        <div className="flex w-full flex-col overflow-hidden rounded-lg border border-primary/20 bg-primary/20 backdrop-blur-[7.5px] md:flex-row md:gap-15">
          <div className="flex flex-1 flex-col gap-8 p-4 md:py-10 md:pl-10">
            <div className="space-y-4">
              <h2 className="text-center text-[1.875rem] leading-[1.3333] font-bold tracking-[0%] md:text-left md:text-[2.5rem]">
                Download the MeetMedico app
              </h2>
              <div className="flex gap-3 capitalize">
                {BADGES.map((label, i) => (
                  <Badge key={i} variant="dark">
                    {label}
                  </Badge>
                ))}
              </div>
            </div>
            <SearchDoctorByPhoneNumberForm />
            <div className="flex flex-wrap gap-2.5 font-league-spartan *:flex-1 md:flex-nowrap md:*:flex-0">
              <DownloadFromApplestoreButton />
              <DownloadFromPlaystoreButton />
            </div>
          </div>
          <MobileAppImg />
        </div>
      </SectionContainer>
    </section>
  )
}
