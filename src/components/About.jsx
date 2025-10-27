function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-emerald-600 mb-4">About Me</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          I’m a passionate Computer Engineering student who loves building functional web applications.
          I enjoy working with modern technologies like React, Django, and Tailwind CSS, and I’m always eager to learn more about design and backend systems.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["React", "Django", "Java", "C++", "Tailwind", "MySQL", "GitHub"].map((skill) => (
            <span key={skill} className="bg-emerald-100 text-emerald-500 hover:text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
export default About;
