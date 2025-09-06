import React from "react";
import { Link } from "react-router-dom";

function DevNavBar() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-neon-purple">
        Recommended Languages
      </h2>
      <ul className="flex gap-6 justify-center">
        <Link to="devspring">
          <li className="cyber-card px-6 py-3 rounded-lg text-lg font-semibold text-neon-purple bg-card/70 shadow-md hover:scale-105 transition-transform cursor-pointer">
            SPRING BOOT
          </li>
        </Link>
        <Link to="devjs">
          <li className="cyber-card px-6 py-3 rounded-lg text-lg font-semibold text-neon-cyan bg-card/70 shadow-md hover:scale-105 transition-transform cursor-pointer">
            MERN
          </li>
        </Link>
        <Link to="devpython">
          <li className="cyber-card px-6 py-3 rounded-lg text-lg font-semibold text-neon-pink bg-card/70 shadow-md hover:scale-105 transition-transform cursor-pointer">
            PYTHON
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default DevNavBar;
