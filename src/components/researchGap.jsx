import React from 'react'

export const ResearchGap = (props) => {
    return (
        <div id="researchGap" className="text-center">
            <div className="container">
                <div className="col-md-8 col-md-offset-2 section-title">
                    <h2>Research Gap</h2>
                    <p>
                        The research highlights several gaps in the current landscape of agricultural supply chain automation, including the lack of customizable workflows, real-time plugin management, IoT-driven decision-making, and efficient blockchain traceability
                    </p>
                </div>

                <div className="col-md-12 gap-container">
                    <div className="gap-card">
                        <div className='gaptopic'>
                            Visual Workflow Customization Tool
                        </div>
                        <p>
                            Existing systems were too technical and rigid, preventing non-technical users from configuring or adjusting workflows. This component introduced a drag-and-drop visual builder with DSL, empowering exporters and factory supervisors to create workflows without coding.
                        </p>
                    </div>

                    <div className="gap-card">
                        <div className='gaptopic'>
                            Microkernel-Based Core System and Plugin Orchestration
                        </div>
                        <p>
                            Traditional systems lacked dynamic plugin lifecycle management, failover, and scalability. This core system introduced runtime plugin registration, containerized orchestration via K3s, and fault isolation—enabling modular execution and seamless recovery.
                        </p>
                    </div>

                    <div className="gap-card">
                        <div className='gaptopic'>
                            IoT Sensor Integration and Real-Time Automation
                        </div>
                        <p>
                            Many systems couldn’t use real-time sensor data to drive workflow transitions. This module allowed sensors like EC and moisture readers to trigger plugin actions via MQTT, turning passive data into active decision-making triggers.


                        </p>
                    </div>

                    <div className="gap-card">
                        <div className='gaptopic'>
                            Blockchain-Based Smart Contract Layer with Gas Optimization
                        </div>
                        <p>
                        Prior blockchain integrations lacked dynamic logging, retry mechanisms, and were costly due to unoptimized contracts. This layer introduced optimized Solidity contracts with real-time event logging, reduced gas usage, and improved traceability.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
