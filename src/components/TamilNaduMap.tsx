import { useState, useRef, useEffect } from "react";
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
    beneficiariesReached: number; // ✅ UPDATED
  }>;
}

const cities: City[] = [

  {
    id: "chennai",
    name: "Chennai",
    x: 82,
    y: 17,
    events: {
      "2025": { title: "Chennai Program", description: "Chennai & Chengalpattu", studentsReached: 8000, beneficiariesReached: 30000 },
      "2024": { title: "Chennai Program", description: "Chennai & Chengalpattu", studentsReached: 8000, beneficiariesReached: 28000 },
      "2023": { title: "Chennai Program", description: "Chennai & Chengalpattu", studentsReached: 7500, beneficiariesReached: 25000 },
      "2022": { title: "Chennai Program", description: "Chennai & Chengalpattu", studentsReached: 7500, beneficiariesReached: 20000 }
    }
  },

  {
    id: "madurai1",
    name: "Madurai",
    x: 44,
    y: 56,
    events: {
      "2025": { title: "Madurai Event", description: "Regional program", studentsReached: 2800, beneficiariesReached: 10000 },
      "2024": { title: "Madurai Event", description: "Regional program", studentsReached: 2400, beneficiariesReached: 8000 },
      "2023": { title: "Madurai Event", description: "Regional program", studentsReached: 2200, beneficiariesReached: 6000 },
      "2022": { title: "Madurai Event", description: "Regional program", studentsReached: 2000, beneficiariesReached: 5500 }
    }
  },

  {
    id: "dindigul",
    name: "Dindigul",
    x: 30,
    y: 51,
    events: {
      "2025": { title: "Dindigul Drive", description: "Rural connect", studentsReached: 900, beneficiariesReached: 4000 },
      "2024": { title: "Dindigul Drive", description: "Rural connect", studentsReached: 750, beneficiariesReached: 3800 },
      "2023": { title: "Dindigul Drive", description: "Rural connect", studentsReached: 750, beneficiariesReached: 3500 },
      "2022": { title: "Dindigul Drive", description: "Rural connect", studentsReached: 700, beneficiariesReached: 3300 }
    }
  },

  {
    id: "viluppuram1",
    name: "Viluppuram",
    x: 61,
    y: 51,
    events: {
      "2025": { title: "Viluppuram Program", description: "Viluppuram & Thirukovilur", studentsReached: 1400, beneficiariesReached: 5000 },
      "2024": { title: "Viluppuram Program", description: "Viluppuram & Thirukovilur", studentsReached: 1200, beneficiariesReached: 4800 },
      "2023": { title: "Viluppuram Program", description: "Viluppuram & Thirukovilur", studentsReached: 900, beneficiariesReached: 4700 },
      "2022": { title: "Viluppuram Program", description: "Viluppuram & Thirukovilur", studentsReached: 850, beneficiariesReached: 4400 }
    }
  },

  {
    id: "tiruvannamalai1",
    name: "Tiruvannamalai",
    x: 65,
    y: 38,
    events: {
      "2025": { title: "Tiruvannamalai Program", description: "Career guidance", studentsReached: 1200, beneficiariesReached: 4000 }
    }
  },

  {
    id: "coimbatore1",
    name: "Coimbatore",
    x: 31,
    y: 42,
    events: {
      "2025": { title: "Coimbatore Program", description: "Tech sessions", studentsReached: 1500, beneficiariesReached: 5000 }
    }
  },

  {
    id: "salem",
    name: "Salem",
    x: 42,
    y: 37,
    events: {
      "2025": { title: "Salem Event", description: "Industry connect", studentsReached: 800, beneficiariesReached: 5000 },
      "2024": { title: "Salem Event", description: "Industry connect", studentsReached: 750, beneficiariesReached: 4500 }
    }
  },

  {
    id: "cuddalore",
    name: "Cuddalore",
    x: 70,
    y: 45,
    events: {
      "2025": { title: "Cuddalore Program", description: "Coastal outreach", studentsReached: 1300, beneficiariesReached: 5000 }
    }
  }

];

export default function TamilNaduMap() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">

      <div className="section-container relative z-10">

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
                    alt="Adutha Ilakku Program"
                    className="w-full h-100 object-cover"
                  />

                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Adutha Ilakku
                    </h3>

                    <p className="text-gray-600 text-sm">
                      Empowering students across Tamil Nadu through career guidance,
                      mentorship, and real-world exposure.
                    </p>

                    <p className="mt-4 text-blue-600 font-semibold">
                      Click on a hotspot to explore impact →
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* GALLERY */}
        <div className="mt-16 w-full">
          <h3 className="text-2xl font-bold text-center mb-6">
            Gallery
          </h3>

          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-black flex items-center justify-center">

            {[
              "/gallery/gg1.jpg",
              "/gallery/gg2.jpg",
              "/gallery/gg3.jpg",
              "/gallery/g4.jpg",
              "/gallery/g5.jpg",
              "/gallery/g6.jpg"
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="gallery"
                className={`w-full h-auto object-contain transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0 absolute top-0 left-0"
                }`}
              />
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}