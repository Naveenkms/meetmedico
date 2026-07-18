import { Separator } from "@/components/ui/separator"
import BannerSection from "../_components/sections/banner/banner-section"
import DownloadAppBannerSection from "../_components/sections/download-app-banner/download-app-banner-section"
import FindDoctorsSection from "../_components/sections/find-doctors/find-doctors-section"
import GrowYourHealthPresenceSection from "../_components/sections/grow-your-health-presence/grow-your-health-presence-section"
import FindProfessionalsSection from "../_components/sections/find-professionals/find-professionals-section"
import FindHealthServicesSection from "../_components/sections/find-health-services/find-health-services-section"
import DiscoverEventsSection from "../_components/sections/discover-events/discover-events-section"
import ExploreMedicalNetworkSection from "../_components/sections/explore-medical-network/explore-medical-network-section"

export default function HomePage() {
  return (
    <main>
      <BannerSection />
      <Separator className="hidden bg-primary/5 md:block" />
      <FindProfessionalsSection />
      <Separator />
      <FindDoctorsSection />
      <Separator />
      <FindHealthServicesSection />
      <Separator />
      <GrowYourHealthPresenceSection />
      <Separator />
      <DiscoverEventsSection />
      <Separator />
      <ExploreMedicalNetworkSection />
      <Separator />
      <DownloadAppBannerSection />
    </main>
  )
}
