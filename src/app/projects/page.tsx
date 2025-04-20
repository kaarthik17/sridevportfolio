import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import OneCustomerProject from "./OneCustomerProject"
import OrderTrackingProject from "./OrderTrackingProject"

export default function ProjectsPage() {
  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <Tabs defaultValue="ordertracking" className="w-full">
        <TabsList className="mb-4 flex flex-wrap gap-2">
          <TabsTrigger value="ordertracking">Order Tracking App</TabsTrigger>
          <TabsTrigger value="onecustomer">OneCustomer App</TabsTrigger>
          <TabsTrigger value="clinical-notes">Clinical Note Summarizer</TabsTrigger>
        </TabsList>

        <TabsContent value="ordertracking">
          <OrderTrackingProject />
        </TabsContent>

        <TabsContent value="onecustomer">
          <OneCustomerProject />
        </TabsContent>

        <TabsContent value="clinical-notes">
          <div className="text-muted-foreground">
            Coming soon: ML-powered summarizer for healthcare records.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
