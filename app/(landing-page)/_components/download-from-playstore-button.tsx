import GooglePlay from "@/components/icons/google-play"
import Playstore from "@/components/icons/playstore"
import { Button } from "@/components/ui/button"

export default function DownloadFromPlaystoreButton() {
  return (
    <Button
      variant="download-app"
      className="flex h-10 gap-1.75 pt-1.25 pb-2 pl-2 md:pr-2.5"
    >
      <Playstore />
      <div className="space-y-0.75">
        <div className="text-[0.625rem] uppercase text-left">GET IT ON</div>
        <GooglePlay />
      </div>
    </Button>
  )
}
