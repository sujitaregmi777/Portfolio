import { motion } from "framer-motion";

export default function Home() {
  const words = ["Hi,", "I'm", "Sujita", "Regmi"];

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 
                 bg-gradient-to-b from-white to-emerald-50 
                 dark:from-gray-900 dark:to-gray-800"
    >

      <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 leading-tight">
        <motion.img src="/IMG_8942.jpg" 
        alt="profile" className="w-40 h-40 rounded-full shadow-lg mb-4 object-cover" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} />
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.25,
              type: "spring",
              stiffness: 120,
            }}
            className="inline-block mr-2 bg-clip-text text-transparent 
                       bg-gradient-to-r from-blue-700 to-emerald-600 
                       drop-shadow-sm"
          >
            {word}
          </motion.span>
        ))}
      </div>

      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-xl"
      >
        Computer Engineering Student 
      </motion.p>

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-8 flex gap-5"
      >
        <a
          href="#contact"
          className="px-6 py-2.5 rounded-xl text-white font-medium
                    bg-emerald-600 hover:bg-emerald-500 
                    transition shadow-md hover:shadow-lg active:scale-95"
        >
          Contact Me
        </a>
        <a
          href="/Resume.pdf"
          download
          className="px-6 py-2.5 rounded-xl font-medium border
                     border-emerald-600 text-emerald-700
                     hover:bg-emerald-50 dark:hover:bg-gray-700
                     transition shadow-sm hover:shadow-md active:scale-95"
        >
          Download Resume
        </a>
      </motion.div>
    </motion.section>
  );
}
