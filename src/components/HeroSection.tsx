import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* COUNT ANIMATION FUNCTION */
function useCountUp(end: number, duration = 10000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function HeroSection() {
  const students = useCountUp(100000);
  const careers = useCountUp(100);
  const districts = useCountUp(23);
  const resources = useCountUp(72);

  return (
    <section className="relative bg-[#f8fafc] text-[#0f172a] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-200/40 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10">

        {/* TRUST BAR */}
        <div className="flex justify-between items-center border-b border-slate-200 pb-6 mb-16">
          
          <div className="text-center">
            <p className="text-xs text-slate-500 mb-2">Initiative by</p>
            <img src="/logos/lmes.png" className="h-12 md:h-14 mx-auto object-contain" />
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 mb-2">Supported by</p>
            <img src="/logos/sairam.png" className="h-12 md:h-14 mx-auto object-contain" />
          </div>

          <div className="text-center">
            <p className="text-xs text-slate-500 mb-2">Presented by</p>
            <img src="/logos/pickmycareer.webp" className="h-12 md:h-14 mx-auto object-contain" />
          </div>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            

            <p className="text-cyan-600 text-sm tracking-widest uppercase mb-4 font-medium">
              Free Career Guidance Program
            </p>

            <div className="mb-5">
              <img src="/logos/adutha-ilakku.png" className="h-22 md:h-22 object-contain" />
            </div>

            <p className="text-xl text-slate-600 mb-6 max-w-xl">
              Helping students from Class 9–12 discover the right career path 
              with expert guidance and structured planning.
            </p>

            <p className="text-slate-500 max-w-lg mb-10">
              A mission-driven initiative to eliminate confusion and build a clear,
              long-term roadmap for every student’s future.
            </p>

            <div className="flex gap-4">
              <button
  onClick={() => {
    const section = document.getElementById("program-section");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-lg text-white shadow-md"
>
  Explore Careers
</button>
              <button
  onClick={() => {
    const section = document.getElementById("about-program");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="border border-slate-300 px-6 py-3 rounded-lg"
>
  About
</button>
            </div>
          </motion.div>

       <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="space-y-6"
>

  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">

  <video
    src="/videos/hero.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-[320px] object-cover"
  />

  {/* SOUND BUTTON */}
  <button
    onClick={(e) => {
      const video = e.currentTarget.previousElementSibling as HTMLVideoElement;
      video.muted = !video.muted;
    }}
    className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full hover:bg-black/80 transition"
  >
    🔊 Sound
  </button>

</div>

  {/* 📊 IMPACT STRIP (CLEAN) */}
  <div className="bg-white border border-slate-200 rounded-2xl shadow-lg px-6 py-5">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

      <div>
        <p className="text-2xl font-bold text-slate-900">
          {students.toLocaleString()}+
        </p>
        <p className="text-xs text-slate-500 mt-1">Students</p>
      </div>

      <div>
        <p className="text-2xl font-bold text-slate-900">
          {careers}+
        </p>
        <p className="text-xs text-slate-500 mt-1">Careers</p>
      </div>

      <div>
        <p className="text-2xl font-bold text-slate-900">
          {districts}
        </p>
        <p className="text-xs text-slate-500 mt-1">Districts</p>
      </div>

      <div>
        <p className="text-2xl font-bold text-slate-900">
          {resources.toLocaleString()}%
        </p>
        <p className="text-xs text-slate-500 mt-1">beneficiary</p>
      </div>

    </div>

  </div>

</motion.div>

        </div>
      </div>
    </section>
  );
}