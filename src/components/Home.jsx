import { motion } from "framer-motion";

function Home() {

  const words = ["Hi,", "I'm", "Sujita", "Regmi"];
  return (
    <section id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-white to-emerald-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* <motion.img
        src=""
        alt="profile"
        className="w-40 h-40 rounded-full shadow-lg mb-4 object-cover"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      /> */}
      { words.map((word , index) => (
        <motion.span
        key = { index }
        initial = {{ opacity : 0, y: -20 }}
        animate = {{ opacity:1, y: 0 }}
            transition={{
              delay: index * 0.4,
            }}
        className=" inline-block mr-2 font-bold text-blue-900"
        >
          { word } 
        </motion.span>
      )
      ) }
      <p className="text-gray-600 dark:text-gray-200 mt-2">
        Computer Engineering Student | Web Developer
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="#contact"
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-500 transition"
        >
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          download
          className="border border-emerald-600 text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-700 transition"
        >Download Resume</a>
      </div>
    </section>
  );
}
export default Home;
