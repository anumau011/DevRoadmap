import React from 'react'
import { Link } from 'react-router-dom'

function DsaNavBar() {
  return (
    <div>
      <div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-neon-purple">Recommended Languages</h2>
                  <ul className="flex gap-6 justify-center">
                  <Link to="cpp">
                    <li className="cyber-card px-6 py-3 rounded-lg text-lg font-semibold text-neon-purple bg-card/70 shadow-md hover:scale-105 transition-transform cursor-pointer">
                    C++
                    </li>
                  </Link>
                  <Link to="java">
                    <li className="cyber-card px-6 py-3 rounded-lg text-lg font-semibold text-neon-cyan bg-card/70 shadow-md hover:scale-105 transition-transform cursor-pointer">
                    Java
                    </li>
                  </Link>
                  <Link to="python">
                    <li className="cyber-card px-6 py-3 rounded-lg text-lg font-semibold text-neon-pink bg-card/70 shadow-md hover:scale-105 transition-transform cursor-pointer">
                    Python
                    </li>
                  </Link>
                  </ul>
                </div>
              </div>
    </div>
  )
}

export default DsaNavBar
