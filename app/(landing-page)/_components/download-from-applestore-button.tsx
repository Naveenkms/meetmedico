import Apple from "@/components/icons/apple"
import { Button } from "@/components/ui/button"

export default function DownloadFromApplestoreButton() {
  return (
    <Button
      variant="download-app"
      className="flex h-10 gap-2 py-[0.40625rem] pl-2 transition-all hover:opacity-85 md:w-30 md:pr-1.5"
    >
      <Apple />
      <div>
        <div className="text-left text-[0.5625rem] leading-none font-medium tracking-normal">
          Download on the
        </div>
        <div className="text-[1.125rem] leading-[100%] font-medium tracking-[-0.47px]">
          App Store
        </div>
      </div>
    </Button>
  )
}
