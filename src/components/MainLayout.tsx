import { useState } from "react";
import { AnimatePresence, motion} from "framer-motion";
import RadialMenu from "./RadialMenu";
import Home from "./sections/Home";
import ProjectsSimplified from "./sections/ProjectsSimplified";
import ProjectDetailVR from "./sections/ProjectDetailVR";
import ProjectDetailBlandy from "./sections/ProjectDetailBlandy";
import Process from "./sections/Process";
import Repository from "./sections/Repository";
import Team from "./sections/Team";

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [processStep, setProcessStep] = useState(1);

  
  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  const handleGoUp = () => {
    setActiveSection("home");
  };

  const handleProcessStepChange = (step: number) => {
    setProcessStep(step);
  };

  const sections: Record<string, JSX.Element> = {
    home: <Home />,
    projects: <ProjectsSimplified />,
    'project-vr': <ProjectDetailVR />,
    'project-blandy': <ProjectDetailBlandy/>,
    process: (
      <Process activeStep={processStep} onStepChange={handleProcessStepChange} />
    ),
    repository: <Repository />,
    team: <Team />,
  };

  return (
    <div id="main-content" className="relative min-h-screen flex">
      {/*  (25%) */}
      <div className="w-1/4 relative">
        <RadialMenu
          activeSection={activeSection}
          onNavigate={handleNavigate}
          showGoUp={activeSection !== "home"}
          onGoUp={handleGoUp}
          processStep={processStep}
          onProcessStepChange={handleProcessStepChange}
        />
      </div>

      {/* (75%) */}
      <div className="w-3/4 px-8 py-12 flex items-center justify-center">
        <div className="max-w-5xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              {sections[activeSection]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
