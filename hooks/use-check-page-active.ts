import { usePathname } from "next/navigation"

export default function useCheckPageActive() {
  const pathName = usePathname()
  const checkIsPageActive = (targetPath: string) =>
    targetPath === "/" ? pathName === "/" : pathName.startsWith(targetPath)

  return { checkIsPageActive }
}
