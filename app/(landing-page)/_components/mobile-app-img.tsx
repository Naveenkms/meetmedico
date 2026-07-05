import Image from "next/image";

export default function MobileAppImg() {
  return (
    <Image
      priority
      src="/assets/mobile-app-img.png"
      width={320}
      height={320}
      alt="mobile app"
    />
  )
}
