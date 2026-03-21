/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Typewriter from 'typewriter-effect';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Layout, 
  Search, 
  Award, 
  ChevronRight, 
  Download, 
  Menu, 
  X,
  Phone,
  MessageSquare,
  Terminal,
  Database,
  Layers,
  Wrench,
  BrainCircuit
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-dark-navy/80 backdrop-blur-md border-b border-glass-border py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold neon-text tracking-tighter">
          Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-neon-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://drive.google.com/file/d/1XQWMptDhiXAKzlfVKWaemQlOUSrEUs_9/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-neon text-xs py-2 px-5 flex items-center gap-2"
          >
            <Download size={14} /> Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark-navy border-b border-glass-border p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium hover:text-neon-blue"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://drive.google.com/file/d/1XQWMptDhiXAKzlfVKWaemQlOUSrEUs_9/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-neon text-center flex items-center justify-center gap-2"
            >
              <Download size={18} /> Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-neon-blue/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-neon-blue p-2 relative z-10">
              <img 
                src="https://picsum.photos/seed/jahnavi/400/400" 
                alt="Duggapu Jahnavi" 
                className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-neon-blue font-medium mb-2">Hello, I'm</h4>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight whitespace-nowrap">
            Duggapu Jahnavi
          </h1>
          <div className="text-xl md:text-2xl text-gray-400 mb-6 h-12">
            <Typewriter
              options={{
                strings: [
                  'AI Developer', 
                  'Data Analyst', 
                  'Web Developer', 
                  'Generative AI Enthusiast'
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "neon-text font-semibold"
              }}
            />
          </div>
          <p className="text-gray-400 max-w-lg mb-8 leading-relaxed">
            Aspiring AI Developer exploring Generative AI and building impactful solutions. 
            Driven by curiosity for innovation and emerging applications.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#contact" className="btn-neon-filled">Hire Me</a>
            <a href="#contact" className="btn-neon">Contact Me</a>
          </div>

          <div className="flex gap-5">
            {[
              { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/duggapu-jahnavi-957a74379" },
              { icon: <Github size={20} />, href: "https://github.com/jahnaviio" },
              { icon: <Mail size={20} />, href: "mailto:jahnaviduggapu1901@gmail.com" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#00f2ff' }}
                className="w-10 h-10 glass-card flex items-center justify-center text-gray-400 hover:border-neon-blue transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Experience', value: 'Fresher' },
    { label: 'Projects (Learning)', value: '3+' },
    { label: 'Technologies Explored', value: '10+' },
    { label: 'Hackathons', value: '2+' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 text-center hover:border-neon-blue/50 group"
          >
            <h3 className="text-4xl font-bold neon-text mb-2 group-hover:scale-110 transition-transform">
              {stat.value}
            </h3>
            <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-neon-blue font-semibold mb-2 uppercase tracking-widest">About Me</h2>
          <h3 className="text-3xl font-bold mb-6">AI Enthusiast & Developer</h3>
          <p className="text-gray-400 leading-relaxed mb-8 text-lg">
            Driven by curiosity for AI and innovation, I specialize in generative AI, basic programming, 
            and emerging applications in farm engineering. With hands-on internship experience and 
            strong communication skills, I focus on building creative, efficient, and impactful 
            solutions while growing as a future AI professional.
          </p>
          <a 
            href="https://drive.google.com/file/d/1XQWMptDhiXAKzlfVKWaemQlOUSrEUs_9/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-neon-filled inline-flex items-center gap-2"
          >
            <Download size={18} /> View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="text-neon-blue" />,
      skills: ['HTML', 'CSS', 'Responsive Design']
    },
    {
      title: 'Backend (Basic)',
      icon: <Database className="text-neon-blue" />,
      skills: ['APIs Understanding', 'Server-side Concepts']
    },
    {
      title: 'Programming',
      icon: <Terminal className="text-neon-blue" />,
      skills: ['Python', 'Java', 'C']
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="text-neon-blue" />,
      skills: ['GitHub', 'VS Code', 'Google Colab', 'ChatGPT', 'Jupyter Notebook', 'Canva']
    },
    {
      title: 'AI & Technologies',
      icon: <BrainCircuit className="text-neon-blue" />,
      skills: ['Generative AI', 'Machine Learning (Basics)', 'Prompt Engineering', 'NLP Basics', 'AI Tools Usage']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neon-blue font-semibold mb-2 uppercase tracking-widest">My Expertise</h2>
          <h3 className="text-4xl font-bold">Technical Skills</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 hover:border-neon-blue/50 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-neon-blue/10 rounded-xl group-hover:bg-neon-blue/20 transition-colors">
                  {cat.icon}
                </div>
                <h4 className="text-xl font-bold">{cat.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span 
                    key={j} 
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-neon-blue/50 hover:text-neon-blue transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'AI Exploration & Integration',
      desc: 'Working with AI tools and Generative AI to explore practical use cases and build simple intelligent solutions.',
      icon: <Cpu size={32} />
    },
    {
      title: 'Basic Web Development',
      desc: 'Creating responsive web pages using HTML and CSS with clean UI design.',
      icon: <Globe size={32} />
    },
    {
      title: 'Prompt Engineering',
      desc: 'Designing optimized prompts for better AI outputs across use cases.',
      icon: <MessageSquare size={32} />
    },
    {
      title: 'Research & Problem Solving',
      desc: 'Analyzing problems and finding AI-driven innovative solutions.',
      icon: <Search size={32} />
    },
    {
      title: 'Basic UI Design',
      desc: 'Designing simple, user-friendly and clean interfaces.',
      icon: <Layout size={32} />
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neon-blue font-semibold mb-2 uppercase tracking-widest">What I Offer</h2>
          <h3 className="text-4xl font-bold">Services</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 group hover:border-neon-blue relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-neon-blue/5 rounded-bl-full -mr-12 -mt-12 group-hover:bg-neon-blue/10 transition-colors"></div>
              <div className="text-neon-blue mb-6 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-400 mb-8 leading-relaxed">{service.desc}</p>
              <button className="flex items-center gap-2 text-neon-blue font-medium group-hover:gap-4 transition-all">
                Read More <ChevronRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: 'AI Project Coming Soon', type: 'AI / GenAI' },
    { title: 'Web Project Coming Soon', type: 'Web Development' },
    { title: 'Data Project Coming Soon', type: 'Data Analysis' },
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neon-blue font-semibold mb-2 uppercase tracking-widest">My Work</h2>
          <h3 className="text-4xl font-bold">Latest Projects</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group overflow-hidden"
            >
              <div className="h-48 bg-white/5 relative overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/project${i}/600/400`} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-dark-navy/60 backdrop-blur-sm">
                   <a 
                    href="https://github.com/jahnaviio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-neon text-sm"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-neon-blue font-semibold uppercase tracking-wider">{project.type}</span>
                <h4 className="text-xl font-bold mt-2 mb-3">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4">Currently working on exciting projects. Stay tuned!</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  const achievements = [
    "Smart India Hackathon Participant",
    "Supersus Hackathon Participant",
    "AI Agents Intensive Course (Google)",
    "Data Engineering Virtual Internship (AICTE, EduSkills, AWS)",
    "Infosys Certification",
    "Cisco Networking/Cybersecurity Certification",
    "Prompt Engineering Certifications"
  ];

  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neon-blue font-semibold mb-2 uppercase tracking-widest">Milestones</h2>
          <h3 className="text-4xl font-bold">Achievements & Certifications</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex items-center gap-4 hover:border-neon-blue/50 group"
            >
              <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-dark-navy transition-all">
                <Award size={24} />
              </div>
              <p className="font-medium text-gray-200">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const mailtoUrl = `mailto:jahnaviduggapu1901@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neon-blue font-semibold mb-2 uppercase tracking-widest">Get In Touch</h2>
          <h3 className="text-4xl font-bold">Contact Me</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Name</label>
                  <input name="name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue outline-none transition-all" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue outline-none transition-all" placeholder="Your Email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Subject</label>
                <input name="subject" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue outline-none transition-all" placeholder="Subject" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea name="message" rows={5} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue outline-none transition-all resize-none" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn-neon-filled w-full py-4 text-lg">Send Message</button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-8"
          >
            {[
              { icon: <Mail />, title: "Email", value: "jahnaviduggapu1901@gmail.com", href: "mailto:jahnaviduggapu1901@gmail.com" },
              { icon: <Phone />, title: "Phone", value: "9848135669", href: "tel:9848135669" },
              { icon: <Linkedin />, title: "LinkedIn", value: "duggapu-jahnavi", href: "https://www.linkedin.com/in/duggapu-jahnavi-957a74379" },
              { icon: <Github />, title: "GitHub", value: "jahnaviio", href: "https://github.com/jahnaviio" },
            ].map((contact, i) => (
              <a 
                key={i} 
                href={contact.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-6 flex items-center gap-6 hover:border-neon-blue/50 group"
              >
                <div className="w-14 h-14 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-dark-navy transition-all">
                  {contact.icon}
                </div>
                <div>
                  <h5 className="text-sm text-gray-400">{contact.title}</h5>
                  <p className="text-lg font-semibold text-gray-200">{contact.value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-glass-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-bold neon-text tracking-tighter mb-2 block">
            Portfolio
          </a>
          <p className="text-gray-500 text-sm">© 2026 Duggapu Jahnavi | AI Developer Portfolio</p>
        </div>

        <div className="flex gap-6">
          {[
            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/duggapu-jahnavi-957a74379" },
            { icon: <Github size={20} />, href: "https://github.com/jahnaviio" },
            { icon: <Mail size={20} />, href: "mailto:jahnaviduggapu1901@gmail.com" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-neon-blue transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
