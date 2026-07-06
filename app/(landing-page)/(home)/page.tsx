import Banner from "../_components/sections/banner/banner"
import DownloadAppBannerSection from "../_components/sections/download-app-banner/download-app-banner-section"
import FindDoctorsSection from "../_components/sections/find-doctors/find-doctors-section"
import GrowYourHealthPresenceSection from "../_components/sections/grow-your-health-presence/grow-your-health-presence-section"

export default function HomePage() {
  return (
    <main>
      <Banner />
      <FindDoctorsSection />
      <GrowYourHealthPresenceSection />
      <DownloadAppBannerSection />
    </main>
  )
}
