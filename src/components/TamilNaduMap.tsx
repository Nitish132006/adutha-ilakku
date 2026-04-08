import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CityPanel from "./CityPanel";

interface City {
  id: string;
  name: string;
  x: number;
  y: number;
  events: Record<string, {
    title: string;
    description: string;
    studentsReached: number;
    districtsCovered: number;
  }>;
}

const cities: City[] = [
  { id: "chennai", name: "Chennai", x: 82, y: 12, events: { "2024": { title: "Chennai Mega Event", description: "Flagship program", studentsReached: 25000, districtsCovered: 8 } } },

  { id: "vellore", name: "Vellore", x: 60, y: 22, events: { "2023": { title: "Vellore Program", description: "Career awareness", studentsReached: 5000, districtsCovered: 2 } } },

  { id: "krishnagiri", name: "Krishnagiri", x: 78, y: 25, events: { "2023": { title: "Krishnagiri Event", description: "Guidance session", studentsReached: 4000, districtsCovered: 2 } } },

  { id: "dharmapuri", name: "Dharmapuri", x: 52, y: 30, events: { "2023": { title: "Dharmapuri Camp", description: "Local outreach", studentsReached: 3000, districtsCovered: 2 } } },

  { id: "tiruvannamalai1", name: "Tiruvannamalai", x: 62, y: 38, events: { "2023": { title: "Tiruvannamalai Session", description: "Student guidance", studentsReached: 3500, districtsCovered: 2 } } },

  { id: "cuddalore", name: "Cuddalore", x: 78, y: 45, events: { "2023": { title: "Cuddalore Program", description: "Coastal outreach", studentsReached: 3200, districtsCovered: 2 } } },

  { id: "salem", name: "Salem", x: 50, y: 45, events: { "2023": { title: "Salem Event", description: "Industry connect", studentsReached: 4500, districtsCovered: 3 } } },

  { id: "coimbatore1", name: "Coimbatore", x: 28, y: 52, events: { "2023": { title: "Coimbatore Tech Fest", description: "Startup focus", studentsReached: 11000, districtsCovered: 5 } } },

  { id: "coimbatore2", name: "Coimbatore", x: 30, y: 60, events: { "2023": { title: "Coimbatore Outreach", description: "Student connect", studentsReached: 6000, districtsCovered: 3 } } },

  { id: "dindigul", name: "Dindigul", x: 45, y: 65, events: { "2023": { title: "Dindigul Drive", description: "Rural connect", studentsReached: 2800, districtsCovered: 2 } } },

  { id: "madurai1", name: "Madurai", x: 55, y: 60, events: { "2023": { title: "Madurai Event", description: "Regional fair", studentsReached: 8500, districtsCovered: 5 } } },

  { id: "madurai2", name: "Madurai", x: 55, y: 72, events: { "2024": { title: "Madurai Expansion", description: "South expansion", studentsReached: 7000, districtsCovered: 4 } } },

  { id: "viluppuram1", name: "Viluppuram", x: 65, y: 55, events: { "2023": { title: "Viluppuram Program", description: "Awareness drive", studentsReached: 3000, districtsCovered: 2 } } },

  { id: "viluppuram2", name: "Viluppuram", x: 55, y: 78, events: { "2024": { title: "Viluppuram South", description: "Extended reach", studentsReached: 3500, districtsCovered: 2 } } },

  { id: "kumbakonam", name: "Kumbakonam", x: 75, y: 75, events: { "2023": { title: "Kumbakonam Session", description: "Temple city program", studentsReached: 2700, districtsCovered: 2 } } },

  { id: "tirunelveli", name: "Tirunelveli", x: 52, y: 88, events: { "2024": { title: "Tirunelveli Summit", description: "South TN summit", studentsReached: 5500, districtsCovered: 3 } } },

  { id: "nagercoil", name: "Nagercoil", x: 52, y: 96, events: { "2024": { title: "Nagercoil Outreach", description: "Final reach", studentsReached: 3200, districtsCovered: 2 } } },
];

export default function TamilNaduMap() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">

      <div className="section-container relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">
            Tamil Nadu Impact Map
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* ✅ MAP IMAGE + HOTSPOTS */}
          <motion.div
            ref={mapRef}
            className="relative w-full lg:w-3/5 mx-auto"
          >
            <div className="relative bg-white rounded-2xl shadow p-6">

              {/* 🔥 YOUR EXACT MAP IMAGE */}
              <img
                src="/maps/tamilnadu.png"
                alt="Tamil Nadu Map"
                className="w-full rounded-xl"
              />

              {/* HOTSPOTS */}
              {cities.map((city) => (
                <div
                  key={city.id}
                  className="absolute cursor-pointer group"
                  style={{
                    top: `${city.y}%`,
                    left: `${city.x}%`,
                    transform: "translate(-50%, -50%)"
                  }}
                  onClick={() =>
                    setSelectedCity(selectedCity?.id === city.id ? null : city)
                  }
                  onMouseEnter={() => setHoveredCity(city.id)}
                  onMouseLeave={() => setHoveredCity(null)}
                >
                  {/* PULSE */}
                  <span className="absolute inline-flex h-5 w-5 rounded-full bg-teal-400 opacity-75 animate-ping"></span>

                  {/* DOT */}
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-teal-600"></span>

                  {/* TOOLTIP */}
                  {hoveredCity === city.id && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">
                      {city.name}
                    </div>
                  )}
                </div>
              ))}

            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <div className="w-full lg:w-2/5">
            <AnimatePresence mode="wait">
              {selectedCity ? (
                <CityPanel
                  key={selectedCity.id}
                  city={selectedCity}
                  onClose={() => setSelectedCity(null)}
                />
              ) : (
                <div className="bg-gray-100 p-6 rounded-xl text-center">
                  <p>Select a city on the map</p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}