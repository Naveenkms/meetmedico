import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsIndicator,
} from "@/components/ui/tabs"
import SearchHospitalsForm from "@/features/health-services/hospitals/components/search-hospitals-form"
import SearchPharmaciesForm from "@/features/health-services/pharmacies/components/search-pharmacies-form"
import SearchLaboratariesForm from "@/features/health-services/laborataries/components/search-laborataries-form"

export default function HealthServicesTabContent() {
  return (
    <Tabs defaultValue="hospitals">
      <TabsList className="">
        <TabsTrigger value="hospitals">Hospitals</TabsTrigger>
        <TabsTrigger value="pharmacies">Pharmacies </TabsTrigger>
        <TabsTrigger value="laborataries">Laborataries</TabsTrigger>
        <TabsIndicator />
      </TabsList>
      <TabsContent value="hospitals" className="pt-6! md:pt-6.5!">
        <SearchHospitalsForm />
      </TabsContent>
      <TabsContent value="pharmacies" className="pt-6! md:pt-6.5!">
        <SearchPharmaciesForm />
      </TabsContent>
      <TabsContent value="laborataries" className="pt-6! md:pt-6.5!">
        <SearchLaboratariesForm />
      </TabsContent>
    </Tabs>
  )
}
