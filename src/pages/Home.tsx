import React, { ReactElement } from 'react'
import { useState } from 'react';
import { Link,Outlet,Route, useNavigate } from 'react-router-dom';
import { RoadmapAccordion } from '@/components/RoadmapAccordion';
import { Code, Database, HouseIcon, BookOpen } from 'lucide-react';

type ViewType = 'home' | 'dsa' | 'development';

function Home():ReactElement {
    const navigate = useNavigate();
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
          <div id="home-view" className="max-w-6xl mx-auto mt-12">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-heading font-bold mb-6 cyber-gradient bg-clip-text text-transparent">
                Your Journey to Developer Excellence
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Choose your path and embark on a structured learning journey. 
                Each roadmap is carefully crafted with realistic timelines and connects directly to curated resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {/* DSA Path Card */}
              <div 
              onClick={() => navigate('dsa')}
              className="cyber-card group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center">
                <Database className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-neon-purple mb-4">
                Data Structures & Algorithms
                </h3>
                <p className="text-muted-foreground mb-6">
                Master the fundamentals of computer science. Build problem-solving skills 
                and prepare for technical interviews with a structured 4-year plan.
                </p>
                <div className="flex flex-col sm:flex-row justify-between text-sm text-accent gap-2 sm:gap-0">
                <span>4 Year Journey</span>
                <span>500+ Problems</span>
                <span>Interview Ready</span>
                </div>
              </div>
              </div>

              {/* Development Path Card */}
              <div 
              onClick={() => navigate('development')}
              className="cyber-card group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-full flex items-center justify-center">
                <Code className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-neon-cyan mb-4">
                Full-Stack Development
                </h3>
                <p className="text-muted-foreground mb-6">
                Become a versatile developer. Learn frontend, backend, databases, 
                and deployment in this comprehensive development roadmap.
                </p>
                <div className="flex flex-col sm:flex-row justify-between text-sm text-accent gap-2 sm:gap-0">
                <span>4 Year Plan</span>
                <span>Multiple Projects</span>
                <span>Industry Ready</span>
                </div>
              </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="mt-20 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-neon-purple/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-neon-purple">Structured Learning</h3>
                <p className="text-muted-foreground text-sm">
                  Year-by-year breakdown with realistic timelines and clear milestones
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-neon-cyan/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-neon-cyan">Direct Resource Links</h3>
                <p className="text-muted-foreground text-sm">
                  Each step connects to curated learning materials and practice platforms
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-neon-pink/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-neon-pink">Progressive Difficulty</h3>
                <p className="text-muted-foreground text-sm">
                  Gradually increase complexity as you build confidence and skills
                </p>
              </div>
            </div>
          </div>
  )
}

export default Home
