export default function OneCustomerProject() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">OneCustomer Enterprise Application</h2>
  
        <p>
          A secure, scalable customer-facing portal built on Azure AKS for a global chemical manufacturing company.
          The platform allows clients like McDonald’s to track the <strong>Total Value Delivered (TVD)</strong> and view
          the projected opportunity pipeline. It leverages Azure AD B2C for secure partner access and presents
          consolidated insights via a responsive Angular dashboard, backed by a microservices-based .NET API layer.
          Data is ingested from SAP, CRM, and other internal systems into Cosmos DB/SQL via Azure Data Factory pipelines.
          Elastic APM enables deep observability across services, and the system ensures high availability and compliance
          for an enterprise-grade experience.
        </p>
  
        {/* Business Context */}
        <div>
          <h3 className="font-semibold text-lg">Business Context</h3>
          <ul className="list-disc ml-5 text-sm text-muted-foreground">
            <li>Customers wanted visibility into realized and potential value delivered</li>
            <li>Data was fragmented across SAP, CRM, and Support tools</li>
            <li>Customer reps needed secure, tailored access to relevant insights</li>
          </ul>
        </div>
  
        {/* Technologies */}
        <div>
          <h3 className="font-semibold text-lg">Key Technologies</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-gray-700 px-2 py-1 rounded">.NET</span>
            <span className="bg-gray-700 px-2 py-1 rounded">Angular</span>
            <span className="bg-gray-700 px-2 py-1 rounded">Azure AKS</span>
            <span className="bg-gray-700 px-2 py-1 rounded">Azure B2C</span>
            <span className="bg-gray-700 px-2 py-1 rounded">Cosmos DB</span>
            <span className="bg-gray-700 px-2 py-1 rounded">Azure Data Factory</span>
            <span className="bg-gray-700 px-2 py-1 rounded">Elastic APM</span>
            <span className="bg-gray-700 px-2 py-1 rounded">Redis</span>
          </div>
        </div>
  
        {/* Architecture */}
        <div>
          <h3 className="font-semibold text-lg">Architecture Highlights</h3>
          <ul className="list-disc ml-5 text-sm text-muted-foreground">
            <li>Azure Data Factory ingests data from SAP, CRM, and Support systems</li>
            <li>Microservices deployed in AKS for scalability and separation of concerns</li>
            <li>Cosmos DB & SQL for structured storage; Blob for unstructured data</li>
            <li>Azure B2C controls access for external customer representatives</li>
            <li>Elastic APM integrated into CI/CD for deep observability</li>
          </ul>
        </div>
  
        {/* Outcomes */}
        <div>
          <h3 className="font-semibold text-lg">Outcomes</h3>
          <ul className="list-disc ml-5 text-sm text-muted-foreground">
            <li>📈 Strengthened customer relationships through visible value delivery</li>
            <li>🛡️ Granular access control increased security for client-facing data</li>
            <li>⚡ Real-time insights enabled more proactive client conversations</li>
          </ul>
        </div>
  
        {/* Your Role */}
        <div>
          <h3 className="font-semibold text-lg">My Role</h3>
          <ul className="list-disc ml-5 text-sm text-muted-foreground">
            <li>Led system design, Azure architecture, and multi-cloud deployment strategy</li>
            <li>Implemented secure .NET APIs, Angular dashboards, and B2C auth flows</li>
            <li>Built ingestion pipelines and integrated Elastic into CI/CD workflows</li>
          </ul>
        </div>
      </div>
    )
  }
  