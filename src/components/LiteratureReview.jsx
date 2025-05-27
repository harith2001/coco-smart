import React from "react";

export const LiteratureReview = () => {
  return (
    <div id="literature-review">
      <div className="container">
        <div className="section-title text-center">
          <h2>Literature Review</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>
              This research builds on proven microkernel architecture principles,
              which focus on keeping the system core minimal and extending functionality
              through modular plugins. Studies show that this design improves fault
              tolerance, scalability, and adaptability key factors in modern supply
              chains.
            </p>
            <p>
              Microkernel systems have been successfully applied in areas like distributed
              computing, robotics, and industrial IoT, validating their robustness and
              flexibility. They enable dynamic workflow changes, real-time monitoring,
              and efficient resource management, all of which are essential for complex,
              fast evolving supply chains.
            </p>
            <p>
              By integrating technologies such as IoT, blockchain, and container
              orchestration, this approach delivers a high-performing, transparent, and
              adaptable supply chain management solution addressing inefficiencies
              found in traditional systems and paving the way for scalable,
              data-driven industry solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
