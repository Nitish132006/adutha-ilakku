import { motion } from "framer-motion";

const leaders = [
  {
    name: "Dr. Sai Prakash LeoMuthu",
    role: "Chairman & CEO, Sairam Institutions",
    image: "/leaders/s1.jpg", // 👈 add your image path
    description:
      "Dr. Sai Prakash Leo Muthu is a distinguished academician and visionary leader who has dedicated his career to advancing educational excellence. As Chairman, he provides strategic direction and institutional leadership, ensuring impactful transformation in education.",
  },
  {
    name: "Mr. S. Prem Anand",
    role: "Founder, Lmes Academy",
    image: "/leaders/s2.jpg", // 👈 add your image path
    description:
      "Mr. S. Prem Anand is the visionary behind Pick My Career and the driving force behind Adutha Ilakku. His mission is to make career guidance accessible to every student, empowering them with clarity, confidence, and direction.",
  },
  {
  name: "Mr. R. Ashok Kumar",
  role: "Career Consultant, Pick My Career",
  image: "/leaders/s4.jpg",
  description:
    "Mr. R. Ashok Kumar plays a key role in executing and coordinating the Adutha Ilakku initiatives across various districts. His dedication ensures smooth implementation of programs, reaching students effectively and creating meaningful impact at the grassroots level.",
},
];

export default function AboutProgram() {
  return (
    <section className="bg-white pt-32 pb-24 px-6 lg:px-12">
      <div id="about-program" className="max-w-5xl mx-auto text-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <p className="text-cyan-600 text-sm tracking-widest uppercase mb-3">
            About the Program
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ADUTHA ILAKKU
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transforming Aspirations into Achievements
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-8 text-slate-600 leading-relaxed text-lg"
        >
          <p>
            Education is not just about learning from textbooks; it is about discovering one’s purpose and confidently stepping into the future. With this vision, the Whats Next? Career Guidance Program, in association with Sairam Institutions, has been shaping young minds since 2018.
          </p>

<div className="mt-20 mb-24">

  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10"
  >
    Our Impact
  </motion.h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

    {/* CARD 1 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl border border-slate-200 text-center shadow-sm"
    >
      <h3 className="text-3xl font-bold text-slate-900">23+</h3>
      <p className="text-slate-500 mt-2">Districts Covered</p>
    </motion.div>

    {/* CARD 2 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl border border-slate-200 text-center shadow-sm"
    >
      <h3 className="text-3xl font-bold text-slate-900">1,00,000+</h3>
      <p className="text-slate-500 mt-2">Students Impacted</p>
    </motion.div>

    {/* CARD 3 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl border border-slate-200 text-center shadow-sm"
    >
      <h3 className="text-3xl font-bold text-slate-900">Since 2018</h3>
      <p className="text-slate-500 mt-2">Growing Initiative</p>
    </motion.div>

  </div>
</div>
          <p>
            What began as a humble initiative across two districts has now grown into a powerful movement spanning multiple districts, reaching thousands of students and families.
          </p>

          <p>
            Led by the visionary Chairman{" "}
            <span className="font-semibold text-slate-900">
              Dr. Sai Prakash Leo Muthu
            </span>
            , Sairam Institutions are committed to shaping the nation through education that inspires and transforms lives.
          </p>

          <p>
            Joining hands with this mission,{" "}
            <span className="font-semibold text-slate-900">
              Mr. Prem Anand
            </span>
            , Founder of Pick My Career, empowers students to grow into confident individuals and responsible citizens.
          </p>

          <p>
            The program focuses on students from 9th standard onwards, guiding them through one of the most crucial phases of their lives — choosing the right career path.
          </p>

          <p>
            Beyond information, the program builds emotional connections. For many students, especially from underserved communities, it becomes a source of hope.
          </p>

          <p>
            Parents too benefit by understanding modern career opportunities, helping bridge the gap between traditional expectations and emerging career paths.
          </p>
        </motion.div>

        {/* 🔥 LEADERSHIP */}
        <div className="mt-28">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Leadership
          </h2>

          <p className="text-slate-500 mb-12">
            Visionaries driving this mission forward
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">

  {leaders.map((leader, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      className="bg-slate-50 rounded-2xl p-8 shadow-md text-center max-w-sm w-full"
    >
      <img
        src={leader.image}
        alt={leader.name}
        className="w-28 h-28 object-cover rounded-full mx-auto mb-5 shadow-lg"
      />

      <h3 className="text-xl font-bold text-slate-900">
        {leader.name}
      </h3>

      <p className="text-cyan-600 text-sm font-medium mb-4">
        {leader.role}
      </p>

      <p className="text-sm text-slate-600 leading-relaxed">
        {leader.description}
      </p>
    </motion.div>
  ))}

</div>
        </div>

        {/* CLOSING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 max-w-3xl mx-auto"
        >
          <p className="text-lg text-slate-700 font-medium leading-relaxed">
            This is not just a career guidance program — it is a mission to ignite dreams, guide decisions, and build a generation that dares to dream and is prepared to achieve.
          </p>
        </motion.div>

      </div>
    </section>
  );
}