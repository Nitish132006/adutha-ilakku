import { motion } from "framer-motion";

const speakers = [
  { name: "Dr. Sai Prakash LeoMuthu", role: "Chairman & CEO,  Sairam Institutions", image: "/speakers/s1.jpg" },
  { name: "Mr. S. Premanand", role: "Founder | LMES Academy", image: "/speakers/s2.jpg" },
  { name: "S.Sugal Esan ", role: "Former Sub Lieutenant - Indian Navy", image: "/speakers/s3.jpg" },
  { name: "Mr. R. Ashok Kumar", role: "Career Consultant", image: "/speakers/s4.jpg" },
  { name: "Mr.A.Nandha Kumar", role: "Entrepreneur | A2D Channel", image: "/speakers/s5.jpg" },
  { name: "Dr. N. Vijayan", role: "Founder - ChairmanZion & Alwin Group of Schools", image: "/speakers/s6.jpg" },
  { name: "Dr. K. Karthik Velu", role: "Psychological Life Skill Trainer", image: "/speakers/s7.jpg" },
  { name: "Mr.Kalaimani Karunanithi", role: "Career Advisor", image: "/speakers/s8.jpg" },
  { name: "Er.R.Ashwin", role: "Career Guidance Expert & Analyst", image: "/speakers/s9.jpg" },
  { name: "Mr. Rajmohan Arumugam", role: "Motivational Speaker", image: "/speakers/s11.jpg" },
  { name: "Mr.S. Ramakrishnan", role: "Motivational Speaker", image: "/speakers/s12.jpg" },
  { name: "Mr. P. Suthahar", role: "Career Counselor", image: "/speakers/s13.jpg" },
  { name: "Mr.R. Sambasivam", role: "Career Consultant", image: "/speakers/s14.jpg" },
];

export default function SpeakersSection() {
  return (
    <section className="py-20 bg-[#f8fafc] overflow-hidden">

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-14 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Learn from the Best Minds
        </h2>

        <p className="text-slate-600 text-lg leading-relaxed">
          Our sessions are led by experienced educators, industry leaders, and career experts 
          who bring real-world insights to help students make informed and confident decisions 
          about their future.
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative">

        <motion.div
          className="flex gap-8 px-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
        >
          {[...speakers, ...speakers].map((speaker, i) => (
            <div
  key={i}
  className="min-w-[200px] bg-white rounded-2xl shadow-lg overflow-hidden group"
>
  {/* IMAGE */}
  <div className="overflow-hidden">
    <img
      src={speaker.image}
      alt={speaker.name}
      className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
    />
  </div>

  {/* CONTENT */}
  <div className="p-3 text-center">
    <h3 className="font-semibold text-slate-900 text-sm">
      {speaker.name}
    </h3>
    <p className="text-xs text-slate-500 mt-1">
      {speaker.role}
    </p>
  </div>
</div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}