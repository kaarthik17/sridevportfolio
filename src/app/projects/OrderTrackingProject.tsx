export default function OrderTrackingProject() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Order Tracking Portal</h2>

      <p>
        A high-performance internal portal designed for sales representatives to track the status of customer orders —
        from chemicals and cleaning supplies to agricultural equipment. Built on <strong>NestJS</strong> for the API layer and 
        <strong> React</strong> for the frontend, the system leverages <strong>Redis</strong> for in-memory caching to support fast,
        responsive updates. Real-time shipping and fulfillment updates are fetched from <strong>SAP HANA</strong> via 
        <strong> MuleSoft</strong>. Hosted on <strong>Azure</strong>, the solution enables accurate, up-to-the-minute order visibility.
      </p>

      {/* Business Context */}
      <div>
        <h3 className="font-semibold text-lg">Business Context</h3>
        <ul className="list-disc ml-5 text-sm text-muted-foreground">
          <li>Sales reps needed up-to-date order tracking without relying on manual status checks</li>
          <li>Order data spanned multiple categories with distinct fulfillment processes</li>
          <li>Real-time shipment updates from SAP HANA were critical for customer communication</li>
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h3 className="font-semibold text-lg">Key Technologies</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="bg-gray-700 px-2 py-1 rounded">NestJS</span>
          <span className="bg-gray-700 px-2 py-1 rounded">React</span>
          <span className="bg-gray-700 px-2 py-1 rounded">Redis</span>
          <span className="bg-gray-700 px-2 py-1 rounded">MuleSoft</span>
          <span className="bg-gray-700 px-2 py-1 rounded">SAP HANA</span>
          <span className="bg-gray-700 px-2 py-1 rounded">Azure App Services</span>
          <span className="bg-gray-700 px-2 py-1 rounded">Azure Monitor</span>
          <span className="bg-gray-700 px-2 py-1 rounded">PostgreSQL</span>
        </div>
      </div>

      {/* Architecture */}
      <div>
        <h3 className="font-semibold text-lg">Architecture Highlights</h3>
        <ul className="list-disc ml-5 text-sm text-muted-foreground">
          <li>NestJS API orchestrates order data from internal ERP and fulfillment systems</li>
          <li>Redis cache ensures near-instant load times for frequently accessed orders</li>
          <li>React frontend shows real-time order status and shipping milestones</li>
          <li>MuleSoft fetches and transforms shipping updates from SAP HANA into API-ready payloads</li>
          <li>Azure App Services hosts backend and frontend for simplicity and scalability</li>
          <li>Azure Monitor provides performance and usage telemetry across services</li>
        </ul>
      </div>

      {/* Outcomes */}
      <div>
        <h3 className="font-semibold text-lg">Outcomes</h3>
        <ul className="list-disc ml-5 text-sm text-muted-foreground">
          <li>🚚 80% faster access to order tracking information</li>
          <li>📉 Reduced support escalations by 65% due to increased visibility</li>
          <li>📦 Improved sales efficiency and customer satisfaction through real-time updates</li>
        </ul>
      </div>

      {/* Your Role */}
      <div>
        <h3 className="font-semibold text-lg">My Role</h3>
        <ul className="list-disc ml-5 text-sm text-muted-foreground">
          <li>Designed end-to-end architecture using NestJS, React, and Redis on Azure</li>
          <li>Integrated real-time shipping data from SAP HANA via MuleSoft</li>
          <li>Developed API modules, caching layers, and order tracking views</li>
          <li>Implemented monitoring and performance dashboards in Azure</li>
        </ul>
      </div>
    </div>
  )
}
