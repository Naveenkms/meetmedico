import {
  BriefcaseMedical,
  FlaskConical,
  HeartPlus,
  Hospital,
  PillBottle,
  Tablets,
  TestTubes,
} from "lucide-react"

import PAGE_LINKS from "./page-links"

const NAVIGATION_MENU_CONTENT = {
  professionals: [
    {
      title: "Doctors",
      description: "Explore certified doctors across cities.",
      href: PAGE_LINKS.professionals.doctors,
      icon: BriefcaseMedical,
    },
    {
      title: "Therapists",
      description: "Discover skilled therapists near you.",
      href: PAGE_LINKS.professionals.therapists,
      icon: HeartPlus,
    },
    {
      title: "Pharamcists",
      description: "Access verified pharmacists in multiple cities.",
      href: PAGE_LINKS.professionals.pharamacists,
      icon: PillBottle,
    },
    {
      title: "Lab Technicians",
      description: "Choose trained technicians for accurate diagnostics.",
      href: PAGE_LINKS.professionals.labTechnicians,
      icon: FlaskConical,
    },
  ],
  healthServices: [
    {
      title: "Hospitals",
      description: "Top hospitals offering trusted healthcare.",
      href: PAGE_LINKS.healthServices.hospitals,
      icon: Hospital,
    },
    {
      title: "Pharmacies",
      description: "Verified pharmacies near you.",
      href: PAGE_LINKS.healthServices.pharmacies,
      icon: Tablets,
    },
    {
      title: "Laborataries",
      description: "Reliable labs for accurate diagnostics testing.",
      href: PAGE_LINKS.healthServices.laborataries,
      icon: TestTubes,
    },
  ],
}

export default NAVIGATION_MENU_CONTENT
