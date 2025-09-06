import { useState } from 'react';
import { Link,Outlet,Route } from 'react-router-dom';
import { RoadmapAccordion } from '@/components/RoadmapAccordion';
import { Code, Database, Home, BookOpen } from 'lucide-react';

type ViewType = 'home' | 'dsa' | 'development';

const Index = () => {
  const [activeView, setActiveView] = useState<ViewType>('home');

  const ViewButton = ({ view, icon: Icon, children }: { 
    view: ViewType; 
    icon: any; 
    children: React.ReactNode;
  }) => (
    <button
      onClick={() => setActiveView(view)}
      className={`nav-link ${activeView === view ? 'active' : ''}`}
    >
      <Icon className="w-5 h-5 mr-2" />
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}


      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        
        {/* Home View */}


        {/* DSA View */}
        {activeView === 'dsa' && (
<div>Hello</div>
        )}

        {/* Development View */}
        {activeView === 'development' && (
                    <div>
          </div>
        )}
      </main>

      {/* Footer */}

    </div>
  );
};

export default Index;
