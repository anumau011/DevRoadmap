import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

import { RoadmapAccordion } from "./components/RoadmapAccordion";

import { cppdsa, javadsa, mernData, pythonData, pythondsa, springbootData } from "./data/roadmapData";
import NavLayout from "./Layout/NavLayout";
import Home from "./pages/Home";
import DSA from "./Layout/DsaNav";
import DEV from "./Layout/DevNav";
import CollegeRes from "./pages/CollegeRes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavLayout/>}>
            <Route index element={<Home/>} />
            <Route path="dsa" element={<DSA/>} >
              <Route index
              element={<RoadmapAccordion data={cppdsa} />} 
              />
              <Route path="cpp"
              element={<RoadmapAccordion data={cppdsa} />} 
              />
              <Route path="java" 
              element={<RoadmapAccordion data={javadsa} />} 
              />
              <Route
                path="python"
                element={<RoadmapAccordion data={pythondsa} />}
              />
            </Route>

            <Route path="development" element={<DEV />}>
              <Route
              index
              element={<RoadmapAccordion data={springbootData} />}
              />
              <Route
              path="devspring"
              element={<RoadmapAccordion data={springbootData} />}
              />
              <Route
              path="devjs"
              element={<RoadmapAccordion data={mernData} />}
              />
              <Route
              path="devpython"
              element={<RoadmapAccordion data={pythonData} />}
              />
            </Route>
            <Route path="resources/:topic" element={<Resources />} />
            <Route path="college-resources" element={<CollegeRes/>}/>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
