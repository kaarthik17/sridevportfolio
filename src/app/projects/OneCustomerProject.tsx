export default function OneCustomerProject() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">OneCustomer Enterprise Application</h2>

      <p>
        A secure, scalable customer portal built on Azure AKS for a global chemical manufacturer.
        Clients like McDonald’s can track <strong>Total Value Delivered (TVD)</strong> and view projected opportunities.
        The platform uses Azure AD B2C for secure access and presents real-time insights through a responsive Angular dashboard,
        backed by a microservices-based <strong>Java Spring Boot</strong> API layer.
        Data flows from SAP, CRM, and support systems into Cosmos DB/SQL via Azure Data Factory pipelines.
        Elastic APM ensures deep observability across services for an enterprise-grade experience.
      </p>

      {/* Business Context */}
      <div>
        <h3 className="font-semibold text-lg">Business Context</h3>
        <ul className="list-disc ml-5 text-sm text-muted-foreground">
          <li>Customers needed visibility into realized and potential value delivered</li>
          <li>Data was fragmented across SAP, CRM, and support tools</li>
          <li>Customer representatives required secure, tailored access to insights</li>
        </ul>
      </div>

      {/* Key Technologies */}
      <div>
        <h3 className="font-semibold text-lg">Key Technologies</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="bg-gray-700 px-2 py-1 rounded">Java</span>
          <span className="bg-gray-700 px-2 py-1 rounded">Spring Boot</span>
          <span className="bg-gray-700 px-2 py-1 rounded">Angular</span>
          <span className="bg-gray-700 px-2 py-1 rounded">Azure AKS</span>
          <span className="bg-gray-700 px-2 py-1 rounded">Azure AD B2C</span>
          <span className="bg-gray-700 px-2 py-1 rounded">Cosmos DB</span>
          <span className="bg-gray-700 px-2 py-1 rounded">Azure Data Factory</span>
          <span className="bg-gray-700 px-2 py-1 rounded">Elastic APM</span>
          <span className="bg-gray-700 px-2 py-1 rounded">Redis</span>
        </div>
      </div>

      {/* Architecture Highlights */}
      <div>
        <h3 className="font-semibold text-lg">Architecture Highlights</h3>
        <ul className="list-disc ml-5 text-sm text-muted-foreground">
          <li>Azure Data Factory pipelines ingest data from SAP, CRM, and support tools</li>
          <li>Microservices deployed on AKS for scalability and resilience</li>
          <li>Cosmos DB and SQL handle structured storage; Blob stores unstructured data</li>
          <li>Azure AD B2C secures customer authentication and authorization</li>
          <li>Elastic APM integrated into CI/CD for service-level observability</li>
        </ul>
      </div>

      {/* Outcomes */}
      <div>
        <h3 className="font-semibold text-lg">Outcomes</h3>
        <ul className="list-disc ml-5 text-sm text-muted-foreground">
          <li>📈 Strengthened customer relationships through transparent value delivery</li>
          <li>🛡️ Fine-grained access control boosted security for client-facing data</li>
          <li>⚡ Real-time insights enabled proactive client conversations</li>
        </ul>
      </div>

      {/* My Role */}
      <div>
        <h3 className="font-semibold text-lg">My Role</h3>
        <ul className="list-disc ml-5 text-sm text-muted-foreground">
          <li>Led system design, Azure architecture, and multi-cloud deployment strategy</li>
          <li>Developed secure Java Spring Boot APIs, Angular dashboards, and B2C auth flows</li>
          <li>Built ingestion pipelines and integrated Elastic APM into CI/CD workflows</li>
        </ul>
      </div>
    </div>
  );
}
