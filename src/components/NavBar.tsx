import React, { ReactElement } from "react";
import { useState } from 'react';
import { Link, Outlet, Route, NavLink } from 'react-router-dom';
import { RoadmapAccordion } from '@/components/RoadmapAccordion';
import { Code, Database, Home, BookOpen } from 'lucide-react';

type ViewType = 'home' | 'dsa' | 'development';

function NavBar() {
  // Remove activeView state, NavLink will handle active styling
      const ViewButton = ({ view, icon: Icon, children }: { 
    view: ViewType; 
    icon: any; 
    children: React.ReactNode;
  }) => {
    let to = "/";
    if (view === "dsa") to = "/dsa";
    else if (view === "development") to = "/development";
    // Home defaults to "/"
    return (
      <NavLink
        to={to}
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
      >
        <Icon className="w-5 h-5 mr-2" />
        {children}
      </NavLink>
    );
  };
  return (
    <>
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          {/* Head */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link to={"/"}>
            <h1 className="text-2xl font-heading font-bold ">
              Developer Roadmaps
            </h1>
            </Link>
            <div className="flex flex-wrap gap-3">
              {/* Home */}
              <ViewButton view="home" icon={Home}>Home</ViewButton>
              {/* dsa */}
              <ViewButton view="dsa" icon={Database}>DSA</ViewButton>
              {/* development */}
              <ViewButton view="development" icon={Code}>Development</ViewButton>
              {/* resourcse */}
              <Link 
                to="/college-resources"
                className="nav-link flex items-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                College Resources
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
