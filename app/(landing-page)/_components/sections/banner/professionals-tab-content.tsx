import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsIndicator,
} from "@/components/ui/tabs"
import SearchDoctorsForm from "@/features/professionals/doctors/components/search-doctors-form"
import SearchTherapistssForm from "@/features/professionals/therapists/components/search-therapists-form"
import SearchPharmacistsForm from "@/features/professionals/pharmacists/components/search-pharmacists.form"
import SearchLabTechniciansForm from "@/features/professionals/lab-technicians/components/search-pharmacists-form"

export default function ProfessionalsTabContent() {
  return (
    <Tabs defaultValue="doctors">
      <TabsList className="">
        <TabsTrigger value="doctors">Doctors</TabsTrigger>
        <TabsTrigger value="therapists">Therapists </TabsTrigger>
        <TabsTrigger value="pharmacists">Pharmacists</TabsTrigger>
        <TabsTrigger value="lab-technicians">Lab Technicians</TabsTrigger>
        <TabsIndicator />
      </TabsList>
      <TabsContent value="doctors" className="pt-6! md:pt-6.5!">
        <SearchDoctorsForm />
      </TabsContent>
      <TabsContent value="therapists" className="pt-6! md:pt-6.5!">
        <SearchTherapistssForm />
      </TabsContent>
      <TabsContent value="pharmacists" className="pt-6! md:pt-6.5!">
        <SearchPharmacistsForm />
      </TabsContent>
      <TabsContent value="lab-technicians" className="pt-6! md:pt-6.5!">
        <SearchLabTechniciansForm />
      </TabsContent>
    </Tabs>
  )
}
