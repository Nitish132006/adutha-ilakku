import { motion } from "framer-motion";
import {
  Target, Building2, Rocket, Cpu, BookMarked,
  BookOpen, Lightbulb, Stethoscope, TrendingUp,
} from "lucide-react";

/* =========================
   DATA (UNCHANGED CONTENT)
========================= */

const highlights = [
  { icon: Target, title: "Personalized Course Selection", desc: "Find the perfect course aligned with your aptitude, interests, and career goals." },
  { icon: Building2, title: "Top Colleges & High-Paying Careers", desc: "Discover the best colleges and career paths that maximize your earning potential." },
  { icon: Rocket, title: "Future-Ready Careers", desc: "Explore emerging career fields in AI, data science, green energy, and more." },
  { icon: Cpu, title: "AI & The Future of Work", desc: "Understand how AI is reshaping industries and how to stay ahead of the curve." },
  { icon: BookMarked, title: "Premium Career Handbooks", desc: "Access career handbooks worth ₹5000+ absolutely free at every event." },
];

/* ✅ UPDATED ONLY UI (IMAGES ADDED, CONTENT SAME) */
const attendees = [
  {
    image: "/images/student.jpg", 
    title: "Class 9 to 12 Students",
    desc: "Get clarity on stream selection, course options, and career planning before it's too late.",
  },
  {
    image: "/images/parent.jpg", 
    title: "Parents",
    desc: "Support your child's career decisions with data-driven insights and expert guidance.",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Career Seekers",
    desc: "Explore unconventional and high-demand career paths beyond the traditional choices.",
  },
];


const gains = [
  { icon: BookOpen, title: "100+ Scholarships Handbook", desc: "Save up to ₹5 lakhs with curated scholarship opportunities.", color: "bg-yellow-100 text-yellow-600" },
  { icon: Lightbulb, title: "Super Engineer Handbook", desc: "Complete guide to engineering careers, branches, and top colleges.", color: "bg-green-100 text-green-600" },
  { icon: TrendingUp, title: "Beyond CA: 100 Careers in Commerce", desc: "Discover lucrative commerce careers beyond traditional chartered accountancy.", color: "bg-purple-100 text-purple-600" },
  { icon: Stethoscope, title: "Beyond NEET: 100 Biology Careers", desc: "Explore 100+ biology career paths that don't require NEET.", color: "bg-rose-100 text-rose-600" },
];

/* =========================
   ANIMATION
========================= */

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

/* =========================
   COMPONENT
========================= */

export default function ProgramSection() {
  return (
    <div id="program-section" className="space-y-20 py-16 lg:py-24">

      {/* =========================
         KEY HIGHLIGHTS
      ========================= */}
      <section className="section-container">
        <SectionHeader badge="Key Highlights" title="What Makes Adutha Ilakku Special" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {highlights.map((h, i) => (
            <motion.div key={i} variants={item} className="glass-card rounded-xl p-6 group">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <h.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{h.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =========================
         WHO SHOULD ATTEND (UPDATED)
      ========================= */}
      <section className="section-container">
        <SectionHeader badge="Who Should Attend" title="This Program is for You" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {attendees.map((a, i) => (
            <motion.div
              key={i}
              variants={item}
              className="relative rounded-2xl overflow-hidden group shadow-lg"
            >
              {/* IMAGE */}
              <img
                src={a.image}
                alt={a.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />

              {/* TEXT */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}

/* =========================
   HEADER COMPONENT
========================= */

function SectionHeader({ badge, title }: { badge: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-10"
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
        {badge}
      </span>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
        {title}
      </h2>
    </motion.div>
  );
}