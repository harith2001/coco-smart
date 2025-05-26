import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Milestones } from "./components/milestones";
import { Documents } from "./components/documents";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { ProposalDocument } from "./components/proposalDocument";
//import { StatusDocI } from "./components/statusDocI";
//import { StatusDocII } from "./components/statusDocII";
import { FinalReport } from "./components/finalReport";
import { ResearchGap } from "./components/researchGap";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <ResearchGap />
      <Features data={landingPageData.Features} />
      {/* <About data={landingPageData.About} /> */}
      <Milestones data={landingPageData.Milestones}/>
      <Documents data={landingPageData.Documents}/>
      <ProposalDocument data={landingPageData.ProposalDocument}/>
      {/* <StatusDocI data={landingPageData.StatusDocI}/>
      <StatusDocII data={landingPageData.StatusDocII}/> */}
      <FinalReport data={landingPageData.FinalReport}/>
      {/* <Services data={landingPageData.Services} /> */}
      {/* <Gallery data={landingPageData.Gallery} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
