 import { Mail, Github, Linkedin } from "lucide-react"; // importing logo

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-emerald-600 mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-6">Feel free to reach out if you’d like to collaborate or just say hi!</p>
      <div className="flex justify-center gap-6">
        <a href="mailto:sujitaregmi189@gmail.com" className=" dark:text-black hover:text-emerald-600 dark:hover:text-emerald-600"><Mail /></a>
        <a href="https://github.com/sujitaregmi777" target="_blank" className=" dark:text-black hover:text-emerald-600 dark:hover:text-emerald-600"><Github /></a>
        <a href="https://www.linkedin.com/in/sujita-regmi-618b382a7/" target="_blank" className="dark:text-black hover:text-emerald-600 dark:hover:text-emerald-600"><Linkedin /></a>
      </div>
    </section>
  );
}
