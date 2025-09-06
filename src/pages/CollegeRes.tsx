import React from "react";
import { Clock, Rocket } from "lucide-react";

export default function CollegeRes() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-gray-900 to-black text-white px-6">
      <div className="text-center space-y-6">
        <div className="flex justify-center gap-4">
          <Rocket className="w-12 h-12 text-indigo-400 animate-bounce" />
          <Clock className="w-12 h-12 text-indigo-300 animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Coming Soon...
        </h1>
        <p className="text-lg text-slate-300 max-w-lg mx-auto">
          We're working hard to launch something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
}
