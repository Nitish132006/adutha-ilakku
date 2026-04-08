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
    images: string[]; // ✅ added
  }>;
}

const cities: City[] = [
  {
    id: "chennai",
    name: "Chennai",
    x: 82,
    y: 17,
    events: {
      "2024": {
        title: "Chennai Mega Event",
        description: "Flagship program",
        studentsReached: 25000,
        districtsCovered: 8,
        images: [
          "/gallery/chennai1.jpg",
          "/gallery/chennai2.jpg",
          "/gallery/chennai3.jpg"
        ]
      }
    }
  },

  {
    id: "vellore",
    name: "Vellore",
    x: 55,
    y: 22,
    events: {
      "2023": {
        title: "Vellore Program",
        description: "Career awareness",
        studentsReached: 5000,
        districtsCovered: 2,
        images: [
          "/gallery/vellore1.jpg",
          "/gallery/vellore2.jpg"
        ]
      }
    }
  },

  {
    id: "coimbatore",
    name: "Coimbatore",
    x: 31,
    y: 42,
    events: {
      "2023": {
        title: "Coimbatore Tech Fest",
        description: "Startup focus",
        studentsReached: 11000,
        districtsCovered: 5,
        images: [
          "/gallery/coimbatore1.jpg",
          "/gallery/coimbatore2.jpg"
        ]
      }
    }
  }
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

          {/* MAP */}
          <motion.div
            ref={mapRef}
            className="relative w-full lg:w-3/5 mx-auto"
          >
            <div className="relative bg-white rounded-2xl shadow p-6">

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
                  <span className="absolute inline-flex h-5 w-5 rounded-full bg-teal-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-teal-600"></span>

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
                <motion.div
                  key="default"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white shadow-xl rounded-2xl overflow-hidden"
                >
                  <img
                    src="/images/default-map.png"
                    alt="Program"
                    className="w-full h-100 object-cover"
                  />

                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Adutha Ilakku
                    </h3>

                    <p className="text-gray-600 text-sm">
                      Empowering students across Tamil Nadu through career guidance.
                    </p>

                    <p className="mt-4 text-blue-600 font-semibold">
                      Click on a hotspot →
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      {/* 🔥 IMAGE SLIDER */}
<div className="mt-16">
  <h3 className="text-2xl font-bold text-center mb-6">
    {selectedCity ? `${selectedCity.name} Highlights` : "Gallery"}
  </h3>

  <div className="relative">

    {/* SLIDER */}
    <div className="flex overflow-x-auto gap-4 px-4 scroll-smooth scrollbar-hide">
      {(selectedCity
        ? Object.values(selectedCity.events)[0].images
        : [
            "/gallery/g1.jpg",
            "/gallery/g2.webp",
            "/gallery/g3.webp",
            "/gallery/g4.jpg",
            "/gallery/g5.jpg",
            "/gallery/g6.jpg",
          ]
      ).map((img, index) => (
        <div
          key={index}
          className="min-w-[250px] md:min-w-[300px] lg:min-w-[350px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={img}
            alt="gallery"
            className="w-full h-52 object-cover"
          />
        </div>
      ))}
    </div>

  </div>
</div>

      </div>
    </section>
  );
}