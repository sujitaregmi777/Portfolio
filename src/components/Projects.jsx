import { motion } from "framer-motion";

const projects = [
  {
    title: "Healthcare App",
    image: "https://plus.unsplash.com/premium_photo-1699387204388-120141c76d51?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    desc: "A system for managing patient details, appointments, and healthcare records efficiently.",
    link: "https://github.com/sujitaregmi777/Healthcare-app",
  },
  {
    title: "Interior Design Website",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    desc: "A modern interior design platform displaying creative layouts and design inspirations.",
    link: "https://github.com/sujitaregmi777/Interior-Design",
  },
  {
    title: "Payroll System",
    image: "https://images.unsplash.com/photo-1732896066042-89c92a60421b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBheXJvbGwlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    desc: "Payroll management system built with efficient data handling and clean UI.",
    link: "https://github.com/aakritigharti/Payrollsytem",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-emerald-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-emerald-600 mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-2xl overflow-hidden"
            >
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover text-black" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-black">{p.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-medium hover:underline">
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
