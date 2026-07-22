"use client"
import dynamic from "next/dynamic"

const LazyHamburgerMenu = dynamic(() => import("./hamburger-menu"), {
  ssr: false,
})

export default LazyHamburgerMenu
