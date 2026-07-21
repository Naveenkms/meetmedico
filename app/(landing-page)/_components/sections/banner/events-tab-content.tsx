import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsIndicator,
} from "@/components/ui/tabs"
import SearchEventsForm from "@/features/events/components/search-events-form"

export default function EvetnsTabContent() {
  return (
    <Tabs defaultValue="upcoming">
      <TabsList className="">
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="ongoing">Ongoing </TabsTrigger>
        <TabsIndicator />
      </TabsList>
      <TabsContent value="upcoming" className="pt-6! md:pt-6.5!">
        <SearchEventsForm eventType="upcoming" />
      </TabsContent>
      <TabsContent value="ongoing" className="pt-6! md:pt-6.5!">
        <SearchEventsForm eventType="ongoing" />
      </TabsContent>
    </Tabs>
  )
}
