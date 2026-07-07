import { Separator } from "@/components/ui/separator"
import Banner from "../_components/sections/banner/banner"
import DownloadAppBannerSection from "../_components/sections/download-app-banner/download-app-banner-section"
import FindDoctorsSection from "../_components/sections/find-doctors/find-doctors-section"
import GrowYourHealthPresenceSection from "../_components/sections/grow-your-health-presence/grow-your-health-presence-section"
import FindProfessionalsSection from "../_components/sections/find-professionals/find-professionals-section"
import FIndHealthServicesSection from "../_components/sections/find-health-services/find-health-services-section"

export default function HomePage() {
  return (
    <main>
      <Banner />
      <Separator className="bg-primary/5" />
      <FindProfessionalsSection />
      <Separator />
      <FindDoctorsSection />
      <Separator />
      <FIndHealthServicesSection />
      <GrowYourHealthPresenceSection />
      <DownloadAppBannerSection />
    </main>
  )
}
