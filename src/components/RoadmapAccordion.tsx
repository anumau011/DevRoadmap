import { useState } from 'react';
import { RoadmapYear } from '@/data/roadmapData';
import { ChevronDown, ExternalLink } from 'lucide-react';

interface RoadmapAccordionProps {
  data: RoadmapYear[];
}

export const RoadmapAccordion = ({ data }: RoadmapAccordionProps) => {
  const [openYear, setOpenYear] = useState<string | null>(null);

  const toggleYear = (year: string) => {
    setOpenYear(openYear === year ? null : year);
  };



  return (
    <div className="space-y-6">
      <div className="max-w-4xl mx-auto space-y-4">
        {data.map((yearData) => (
          <div key={yearData.year} className="cyber-card">
            <button
              onClick={() => toggleYear(yearData.year)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/20 transition-colors rounded-lg"
            >
              <div className="flex-1">
                <h3 className="text-xl font-heading font-semibold text-neon-cyan">
                  {yearData.year}: {yearData.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {yearData.steps.length} steps to master
                </p>
              </div>
              <ChevronDown 
                className={`w-6 h-6 text-neon-purple transition-transform duration-300 ${
                  openYear === yearData.year ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              openYear === yearData.year ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-4 pb-4 space-y-3">
                {yearData.steps.map((step, index) => (
                  <div key={index} className="roadmap-step">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{step.topic}</h4>
                        <p className="text-sm text-accent">{step.duration}</p>
                      </div>
                      <a
                        href={`/resources/${step.resourceId}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-neon-purple/20 border border-neon-purple rounded-lg hover:bg-neon-purple hover:text-primary-foreground transition-all duration-200 text-sm"
                      >
                        Resources<ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};