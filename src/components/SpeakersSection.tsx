import { motion } from "framer-motion";

const speakers = [
  { name: "Dr. Sai Prakash LeoMuthu", role: "Chairman & CEO, Sairam Institutions", image: "/speakers/s1.jpg" },
  { name: "Mr. S. Premanand", role: "Founder | LMES Academy", image: "/speakers/s2.jpg" },
  { name: "S. Sugal Esan", role: "Former Sub Lieutenant - Indian Navy", image: "/speakers/s3.jpg" },
  { name: "Mr. R. Ashok Kumar", role: "Career Consultant", image: "/speakers/s4.jpg" },
  { name: "Mr. A. Nandha Kumar", role: "Entrepreneur | A2D Channel", image: "/speakers/s5.jpg" },
  { name: "Dr. N. Vijayan", role: "Founder - Chairman Zion & Alwin Group of Schools", image: "/speakers/s6.jpg" },
  { name: "Dr. K. Karthik Velu", role: "Psychological Life Skill Trainer", image: "/speakers/s7.jpg" },
  { name: "Mr. Kalaimani Karunanithi", role: "Career Advisor", image: "/speakers/s8.jpg" },
  { name: "Er. R. Ashwin", role: "Career Guidance Expert & Analyst", image: "/speakers/s9.jpg" },
  { name: "Mr. Rajmohan Arumugam", role: "Motivational Speaker", image: "/speakers/s11.jpg" },
  { name: "Mr. S. Ramakrishnan", role: "Motivational Speaker", image: "/speakers/s12.jpg" },
  { name: "Mr. P. Suthahar", role: "Career Counselor", image: "/speakers/s13.jpg" },
  { name: "Mr. R. Sambasivam", role: "Career Consultant", image: "/speakers/s14.jpg" },
];

export default function SpeakersSection() {
  return (
    <section className="bg-white pt-32 pb-20 px-6 lg:px-12">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Learn from the Best Minds
        </h2>

        <p className="text-slate-600 text-lg leading-relaxed">
          Our sessions are led by experienced educators, industry leaders, and career experts 
          who bring real-world insights to help students make informed and confident decisions 
          about their future.
        </p>
      </div>

      {/* WHY SPEAKERS */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <p className="text-slate-600 text-lg leading-relaxed">
          Each speaker brings a unique perspective—from academic excellence to industry expertise—ensuring 
          that students are exposed to diverse career paths, practical insights, and future-ready skills.
        </p>
      </div>

      {/* BENEFITS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">

        <div className="bg-slate-50 p-6 rounded-xl text-center border">
          <h3 className="font-bold text-lg text-slate-900">Real-World Insights</h3>
          <p className="text-sm text-slate-500 mt-2">
            Learn directly from professionals who have real experience in their fields.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl text-center border">
          <h3 className="font-bold text-lg text-slate-900">Career Clarity</h3>
          <p className="text-sm text-slate-500 mt-2">
            Understand career paths, opportunities, and what suits your strengths.
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl text-center border">
          <h3 className="font-bold text-lg text-slate-900">Motivation & Confidence</h3>
          <p className="text-sm text-slate-500 mt-2">
            Gain inspiration and confidence to take the next step in your journey.
          </p>
        </div>

      </div>

      {/* WHAT STUDENTS GAIN */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">
          What Students Gain
        </h3>

        <div className="grid md:grid-cols-2 gap-6 text-left text-slate-600">
          <p>✔ Exposure to multiple career opportunities</p>
          <p>✔ Guidance from experienced mentors</p>
          <p>✔ Better decision-making skills</p>
          <p>✔ Understanding of industry trends</p>
        </div>
      </div>

      {/* SLIDER (UNCHANGED) */}
      <div className="relative overflow-hidden">

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