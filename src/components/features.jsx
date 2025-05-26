import React from "react";

export const Features = (props) => {
  // Updated Features data with related icons
  const featuresData = [
    {
      title: <strong>Visual Workflow Customization Tool</strong>,
      icon: "fa fa-sitemap", // Represents structured flow/workflow
      text: "A drag-and-drop interface powered by React and GoJS, allowing non-technical users to design and deploy custom workflows using an intuitive Domain-Specific Language (DSL).",
    },
    {
      title: <strong>Plugin-Based Microkernel Architecture</strong>,
      icon: "fa fa-cubes", // Represents modular plugin structure
      text: "Each stage of the supply chain (e.g., grading, washing, drying) runs as an isolated, containerized plugin, enabling dynamic updates, fault isolation, and seamless scalability via K3s.",
    },
    {
      title: <strong>Real-Time IoT Integration</strong>,
      icon: "fa fa-plug",
      text: "ESP32-based sensors monitor EC levels, moisture, and more, triggering automated actions within workflows through MQTT communication, ensuring responsive, data-driven decisions.",
    },
    {
      title: <strong>Blockchain-Backed Traceability</strong>,
      icon: "fa fa-link", // Represents blockchain/immutable chain
      text: "Optimized Ethereum smart contracts log critical events (e.g., grading approval, shipment creation) on-chain, ensuring tamper-proof, verifiable audit trails for compliance and trust.",
    },
    {
      title: <strong>Gas-Optimized Smart Contracts</strong>,
      icon: "fa fa-compress", // Represents optimization and compression
      text: "Implemented Factory, Registry, and State Machine patterns with gas-saving techniques like variable packing and mapping simplification, achieving up to 19% deployment cost reduction.",
    },
    {
      title: <strong>DSL-to-Plugin Automation</strong>,
      icon: "fa fa-code", // Represents code generation from DSL
      text: "Workflows designed in the visual editor are automatically converted into Go-based plugin configurations, registered and executed without developer involvement or system downtime.",
    },
    {
      title: <strong>Real-Time Monitoring and Feedback</strong>,
      icon: "fa fa-tachometer", // Represents dashboards and performance monitoring
      text: "Prometheus and Grafana dashboards provide live system metrics, plugin health checks, and performance analytics to ensure operational transparency and quick diagnostics.",
    },
    {
      title: <strong>Seamless Error Recovery and Versioning</strong>,
      icon: "fa fa-history", // Represents version control and recovery
      text: "Plugins support hot-swapping, rollback, and recovery through container orchestration, minimizing downtime and allowing agile updates in production environments.",
    },
  ];

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {featuresData.map((d, i) => (
            <div
              key={`${i}`}
              className="col-xs-6 col-md-3"
            >
              <i className={d.icon} style={{ fontSize: "2em", marginBottom: "10px" }}></i>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
