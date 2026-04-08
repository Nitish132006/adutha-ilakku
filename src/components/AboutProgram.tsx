import { motion } from "framer-motion";

export default function AboutProgram() {
  return (
    <section className="bg-white py-20 px-6 lg:px-12">
      <div  id="about-program" className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-600 text-sm font-medium tracking-widest uppercase mb-3">
            About the Program
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ADUTHA ILAKKU?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transforming Aspirations into Achievements
          </p>
        </motion.div>

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-slate-600 leading-relaxed">
            Education is not just about learning from textbooks; it is about discovering 
            one’s purpose and confidently stepping into the future. With this vision, 
            the Whats Next? Career Guidance Program, in association with Sairam 
            Institutions, has been shaping young minds since 2018.
          </p>
        </motion.div>

        {/* HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900">23+</h3>
            <p className="text-slate-500 text-sm mt-2">Districts Covered</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900">1,00,000+</h3>
            <p className="text-slate-500 text-sm mt-2">Students Impacted</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900">Since 2018</h3>
            <p className="text-slate-500 text-sm mt-2">Growing Initiative</p>
          </motion.div>

        </div>

        {/* MAIN CONTENT */}
        <div className="space-y-10 max-w-4xl mx-auto text-slate-600 leading-relaxed">

          <p>
            What began as a humble initiative across two districts has now grown 
            into a powerful movement spanning multiple districts, reaching thousands 
            of students and families.
          </p>

          <p>
            Led by the visionary Chairman{" "}
            <span className="font-semibold text-slate-800">
              Dr. Sai Prakash Leo Muthu
            </span>
            , Sairam Institutions are committed to shaping the nation through 
            education that inspires and transforms lives. Their focus goes beyond 
            academics, nurturing responsible and capable leaders.
          </p>

          <p>
            Joining hands with this mission,{" "}
            <span className="font-semibold text-slate-800">
              Mr. Prem Anand
            </span>
            , Founder of Pick My Career, empowers students to grow into confident 
            individuals and responsible citizens.
          </p>

          <p>
            The program focuses on students from 9th standard onwards, guiding them 
            through one of the most crucial phases of their lives — choosing the right 
            career path. Through interactive sessions, expert talks, and real-world 
            insights, students gain clarity, confidence, and direction.
          </p>

          <p>
            Beyond information, the program builds emotional connections. For many 
            students, especially from underserved communities, it becomes a source 
            of hope — answering unspoken questions and opening doors to possibilities 
            they had never imagined.
          </p>

          <p>
            Parents too benefit by understanding modern career opportunities, helping 
            bridge the gap between traditional expectations and emerging career paths.
          </p>

        </div>

        {/* CLOSING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mt-20"
        >
          <p className="text-lg text-slate-700 font-medium leading-relaxed">
            This is not just a career guidance program — it is a mission to ignite dreams, 
            guide decisions, and build a generation that dares to dream and is prepared to achieve.
          </p>
        </motion.div>

      </div>
    </section>
  );
}