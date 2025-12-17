import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  Smartphone, 
  Globe, 
  Terminal, 
  Cpu, 
  Menu, 
  X,
  ChevronDown,
  Send
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Data from CV
  const personalInfo = {
    name: "Deneth Perera",
    role: "Full Stack Developer",
    email: "deneth676@gmail.com",
    phone: "0757983152",
    location: "No-27 St.annes road, Palagathura, Kochchikade",
    linkedin: "https://www.linkedin.com/in/deneth-perera-687575256t",
    github: "https://github.com/VinthagePerera",
    // UPDATED: Changed from student to graduate
    summary: "I am a dedicated and enthusiastic Software Engineering Graduate with a strong foundation in programming, problem-solving, and software development principles. I have a keen interest in building efficient, user-friendly applications and continuously improving my technical skills."
  };

  const skills = [
    { category: "Languages", items: ["JavaScript", "Java", "HTML", "CSS", "PHP", "Dart"] },
    { category: "Frameworks & Libs", items: ["React", "React Native", "Node.js", "Express.js", "Tailwind CSS", "Redux", "Flutter"] },
    { category: "Databases", items: ["MongoDB", "MySQL"] },
    { category: "Tools & Concepts", items: ["Git", "Problem Solving", "Team Collaboration", "Cloudinary"] }
  ];

  // UPDATED: Projects List
  const projects = [
    {
      title: "Choco-Luxe",
      desc: "A modern web application offering a premium visual experience for a chocolate brand. Built to demonstrate high-fidelity UI implementation.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      link: "https://chocoluxe.vercel.app/",
      github: "https://github.com/DenethPerera/chocoluxe.git",
      type: "Web App"
    },
    {
      title: "Nilanka Tours",
      desc: "A comprehensive Personal Tour Guide Booking platform. Allows users to explore destinations and book personalized tour guides.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      link: "https://nilanka-tours.vercel.app/",
      // No github link provided in prompt, logic handles this automatically
      type: "Web App"
    },
    {
      title: "RentMyRide",
      desc: "A comprehensive vehicle rental platform built with the MERN stack. Features user authentication, vehicle listings, and image management via Cloudinary.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
      link: "https://auto-rent-x.vercel.app/",
      github: "https://github.com/DenethPerera/AutoRentX.git",
      type: "Web App"
    },
    {
      title: "Tour Guide App",
      desc: "A mobile application for tourists to find guides and locations. Implements Redux for state management and a robust backend.",
      tech: ["React Native", "MongoDB", "Node.js", "Redux"],
      github: "https://github.com/VinthagePerera/Tour-Guide-App.git",
      type: "Mobile App"
    },
    {
      title: "Vehicle Service App",
      desc: "Cross-platform mobile application for managing vehicle services and appointments.",
      tech: ["Flutter", "Dart"],
      github: "https://github.com/VinthagePerera/Vehicle-service-App.git",
      type: "Mobile App"
    },
    {
      title: "Veterinary Management System",
      desc: "A web-based system for veterinary clinics to manage patients and appointments.",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
      type: "Web System"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "University of Plymouth",
      // UPDATED: Changed date to reflect graduation
      period: "Graduated 2025",
      desc: "Completed undergraduate studies focusing on software development principles."
    },
    {
      degree: "GCE Advanced Level",
      institution: "Loyola College",
      period: "2021",
      desc: "Commerce Stream"
    },
    {
      degree: "GCE Ordinary Level",
      institution: "Loyola College Negombo",
      period: "2018",
      desc: ""
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                DP.
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-teal-400 ${
                    activeSection === item.toLowerCase() ? 'text-teal-400' : 'text-slate-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-slate-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-700">
            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-teal-400 hover:bg-slate-700 rounded-md"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
          <div className="mb-4 inline-block p-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-sm font-medium animate-fade-in-up">
            Available for Hire
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight animate-fade-in-up animation-delay-100">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">{personalInfo.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            {personalInfo.role} turning ideas into functional, user-friendly digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 rounded-full bg-teal-500 text-white font-bold hover:bg-teal-600 transition-all shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2"
            >
              View Work <ChevronDown size={18} />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-full bg-slate-800 text-white font-bold border border-slate-700 hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
            >
              Contact Me <Mail size={18} />
            </button>
          </div>

          <div className="mt-12 flex space-x-6 text-slate-400 animate-fade-in-up animation-delay-400">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-teal-400 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-900 rounded-lg p-8 h-full border border-slate-800">
                <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {personalInfo.summary}
                </p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                      <h3 className="text-teal-400 font-bold text-xl mb-1">3+</h3>
                      <p className="text-sm text-slate-400">Years Studying</p>
                   </div>
                   <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                      <h3 className="text-blue-400 font-bold text-xl mb-1">10+</h3>
                      <p className="text-sm text-slate-400">Projects Built</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
               <h3 className="text-2xl font-bold text-white">Why work with me?</h3>
               <div className="space-y-4">
                  {[
                    { icon: <Code2 className="text-teal-400" />, title: "Clean Code", desc: "I write maintainable, scalable, and efficient code." },
                    { icon: <Smartphone className="text-blue-400" />, title: "Responsive Design", desc: "Applications that look great on any device." },
                    { icon: <Database className="text-purple-400" />, title: "Full Stack Ready", desc: "Comfortable with both frontend and backend technologies." }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-800 transition-colors">
                       <div className="mt-1 p-2 bg-slate-800 rounded-lg border border-slate-700">
                          {feature.icon}
                       </div>
                       <div>
                          <h4 className="font-bold text-white text-lg">{feature.title}</h4>
                          <p className="text-slate-400 text-sm mt-1">{feature.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">My technical toolkit includes a wide range of languages, frameworks, and tools.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-colors hover:shadow-lg hover:shadow-teal-500/10">
                <div className="flex items-center gap-3 mb-6">
                   {idx === 0 && <Terminal className="text-teal-400" />}
                   {idx === 1 && <Globe className="text-blue-400" />}
                   {idx === 2 && <Database className="text-purple-400" />}
                   {idx === 3 && <Cpu className="text-pink-400" />}
                   <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 bg-slate-900 rounded-md text-sm text-slate-300 border border-slate-700 flex items-center gap-1 hover:text-white hover:border-slate-500 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-slate-400">A selection of my recent work.</p>
            </div>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors mt-4 md:mt-0">
              View Github <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1">
                {/* Project Header / Placeholder Image Area */}
                <div className="h-48 bg-slate-700 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                   <div className="z-10 text-center p-4">
                      <div className="inline-block p-3 rounded-full bg-slate-800/50 backdrop-blur-sm mb-2">
                        {project.type === "Mobile App" ? <Smartphone size={24} className="text-teal-400" /> : <Globe size={24} className="text-blue-400" />}
                      </div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                   </div>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, tIdx) => (
                      <span key={tIdx} className="text-xs font-medium px-2 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto pt-4 border-t border-slate-700">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-teal-400 transition-colors">
                        <Github size={16} /> Source
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-teal-400 transition-colors">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
              View All Projects on Github <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
          </div>

          <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-teal-500 ring-4 ring-slate-900"></div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <span className="text-sm font-medium text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-slate-300 mb-2">{edu.institution}</h4>
                  {edu.desc && <p className="text-slate-400 text-sm">{edu.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
              <p className="text-slate-400 mb-8 text-lg">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-teal-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-white transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-blue-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <a href={`tel:${personalInfo.phone}`} className="text-slate-400 hover:text-white transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-800 rounded-lg text-purple-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Location</h3>
                    <p className="text-slate-400">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                 <h3 className="text-white font-medium mb-4">Connect with me</h3>
                 <div className="flex gap-4">
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-teal-500 hover:text-white text-slate-400 transition-all duration-300">
                       <Linkedin size={20} />
                    </a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-teal-500 hover:text-white text-slate-400 transition-all duration-300">
                       <Github size={20} />
                    </a>
                 </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('This is a demo form. Please email directly!'); }}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                    <input type="text" id="name" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                    <input type="email" id="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                  <input type="text" id="subject" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all" placeholder="Project Inquiry" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                  <textarea id="message" rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-slate-800 text-center">
        <p className="text-slate-500">
          © {new Date().getFullYear()} Deneth Perera. Built with React & Tailwind CSS.
        </p>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
};

export default Portfolio;