import { useState } from "react";
import { motion } from "framer-motion";
import { X, Users, MapPin, Calendar } from "lucide-react";

interface CityPanelProps {
  city: {
    id: string;
    name: string;
    events: Record<string, {
      title: string;
      description: string;
      studentsReached: number;
      beneficiariesReached: number;
    }>;
  };
  onClose: () => void;
}

export default function CityPanel({ city, onClose }: CityPanelProps) {

  // ✅ Latest year first
  const years = Object.keys(city.events).sort((a, b) => Number(b) - Number(a));

  const [selectedYear, setSelectedYear] = useState(years[0]);
  const event = city.events[selectedYear];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 30, scale: 0.97 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="glass-card rounded-2xl overflow-hidden"
    >

      {/* HEADER */}
      <div className="relative p-6 pb-4" style={{ background: "var(--hero-gradient)" }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition"
        >
          <X className="w-4 h-4 text-primary-foreground" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <MapPin className="w-5 h-5 text-primary-foreground/80" />
          <h3 className="font-heading font-bold text-xl text-primary-foreground">
            {city.name}
          </h3>
        </div>

        <p className="text-primary-foreground/70 text-sm">
          {years.length} year{years.length > 1 ? "s" : ""} of impact
        </p>
      </div>

      {/* YEAR CHIPS */}
      <div className="px-6 pt-4 pb-2 flex gap-2 flex-wrap">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              selectedYear === year
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-primary/10"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* EVENT CONTENT */}
      {event && (
        <motion.div
          key={selectedYear}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="p-6 pt-3 space-y-4"
        >

          {/* TITLE */}
          <div>
            <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{selectedYear}</span>
            </div>

            <h4 className="font-heading font-semibold text-foreground text-lg">
              {event.title}
            </h4>
          </div>

          {/* DESCRIPTION */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {event.description}
          </p>

          {/* METRICS */}
          <div className="grid grid-cols-2 gap-3">

            {/* Students */}
            <div className="rounded-xl bg-primary/5 p-4 text-center">
              <Users className="w-5 h-5 text-primary mx-auto mb-1.5" />
              <div className="text-2xl font-bold text-foreground font-heading">
                {event.studentsReached?.toLocaleString() || "0"}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                Students Reached
              </div>
            </div>

            {/* Beneficiaries */}
            <div className="rounded-xl bg-accent/10 p-4 text-center">
              <MapPin className="w-5 h-5 text-accent mx-auto mb-1.5" />
              <div className="text-2xl font-bold text-foreground font-heading">
                {event.beneficiariesReached?.toLocaleString() || "0"}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                No. of Beneficiaries Reached
              </div>
            </div>

          </div>

        </motion.div>
      )}

    </motion.div>
  );
}