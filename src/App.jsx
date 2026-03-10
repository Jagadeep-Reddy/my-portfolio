import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Github, Mail, Linkedin } from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Credit Risk Prediction",
      description: "XGBoost-powered risk assessment with production Flask API and real-time predictions",
      stars: "100+",
      tech: ["XGBoost", "scikit-learn", "Flask", "PostgreSQL"],
      image: "bg-gradient-to-br from-cyan-500 to-blue-600",
      link: "#"
    },
    {
      id: 2,
      title: "Sentiment Analysis Dashboard",
      description: "Real-time sentiment analysis using BERT with interactive Streamlit dashboard",
      stars: "120+",
      tech: ["BERT", "Transformers", "Streamlit", "PyTorch"],
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      link: "#"
    },
    {
      id: 3,
      title: "RAG System - Q&A Engine",
      description: "LangChain-based Retrieval-Augmented Generation with vector database and semantic search",
      stars: "130+",
      tech: ["LangChain", "Vector DB", "OpenAI API", "Streamlit"],
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      link: "#"
    },
    {
      id: 4,
      title: "Multi-Tool AI Agent",
      description: "Autonomous agent orchestrating multiple tools with memory and reasoning capabilities",
      stars: "150+",
      tech: ["LangChain", "Tool Integration", "Streamlit", "GPT-4"],
      image: "bg-gradient-to-br from-green-500 to-emerald-600",
      link: "#"
    },
    {
      id: 5,
      title: "Fine-Tuned Domain LLM",
      description: "Custom language model fine-tuned with LoRA/PEFT for specialized domain knowledge",
      stars: "100+",
      tech: ["LoRA", "PEFT", "HuggingFace", "Fine-tuning"],
      image: "bg-gradient-to-br from-indigo-500 to-cyan-600",
      link: "#"
    }
  ];

  const skills = [
    { category: "Machine Learning", items: ["XGBoost", "scikit-learn", "TensorFlow", "Classification & Ensembles"] },
    { category: "Deep Learning", items: ["BERT", "Transformers", "PyTorch", "Transfer Learning"] },
    { category: "GenAI & LLMs", items: ["RAG Systems", "LangChain", "Fine-tuning", "Prompt Engineering", "LoRA/PEFT"] },
    { category: "Tools & Platforms", items: ["Flask APIs", "Streamlit", "Vector DB", "OpenAI API", "HuggingFace"] }
  ];

  const experiences = [
    {
      role: "Software Engineer",
      company: "ANZ",
      period: "June 2022 - June 2024",
      highlights: [
        "Implemented LoanIQ APIs such as Inquiry APIs and LoanIQ Scripted Batch, delivered solutions within the Loan IQ platform, and troubleshot various interfaces to enhance performance.",
        "Utilized Spring Boot, Inversion of Control, and JPA while integrating Java Streams and Lambdas in designed modules, and created REST APIs for interfaces.",
        "Developed a Scripted Batch with complete access to business object logic, executed a batch for accrual cycles using a combination of HashMap and ArrayList to store and retrieve RIDs; employed JDBC to execute queries and store results in ResultSet, and scheduled daily batch execution.",
        "Designed, developed, and deployed modules in a Customer Onboarding interface utilizing Microservices architecture and Kafka as a message queue, achieving 90% code coverage in test cases, and effectively consumed filtered messages.",
        "Managed Oracle database objects for LoanIQ using SQL, constructed complex queries with joins and correlated subqueries to address diverse business needs, and enhanced query efficiency through planned, designed, and implemented stored procedures and views.",
        "Created a module with LoanIQ SDK programming to handle customer details in XML format, extracted customer IDs, invoked UDFs with JDBC for DB connections, and ran SQL queries to retrieve masked customer names, thereby enhancing data security.",
        "Executed batch multilegging for Loan IQ 7.6.4.0 Upgrade, added new group numbers and jobs based on specific conditions, developed database scripts, and leveraged UDeploy to create and deploy components and jars across various environments."
      ],
      techStack: ["Java", "Spring Boot", "MySQL", "REST API", "CI/CD Pipelines", "Git"]
    }
  ];

  const education = [
    {
      degree: "Post Graduate Program in Data Science & Business Analytics",
      institution: "The University of Texas at Austin",
      period: "2025 - 2026",
      highlights: [
        "Focus Areas: Business Analytics, Data Science, and AI."
      ]
    },
    {
      degree: "Bachelor of Engineering (BE), Information Science and Engineering",
      institution: "BMS Institute of Technology and Management",
      period: "2018 - 2022",
      highlights: [
        "Grade: 8.50 CGPA",
        "Notable Roles: Student Placement Coordinator, Student Volunteer."
      ]
    }
  ];

  const certifications = [
    {
      title: "Advanced Learning Algorithms",
      issuer: "Coursera",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera",
    },
    {
      title: "Fundamentals of Java Programming",
      issuer: "Coursera",
    },
    {
      title: "Linear Algebra for Machine Learning and Data Science",
      issuer: "Coursera",
    },
    {
      title: "SQL Essential Training",
      issuer: "LinkedIn Learning",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <a href="https://github.com/Jagadeep-Reddy" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition">
            JR.
          </a>
          <div className="flex gap-8 items-center">
            <a href="#projects" className="text-sm text-gray-300 hover:text-white transition">Projects</a>
            <a href="#skills" className="text-sm text-gray-300 hover:text-white transition">Skills</a>
            <a href="#experience" className="text-sm text-gray-300 hover:text-white transition">Experience</a>
            <a href="#education" className="text-sm text-gray-300 hover:text-white transition">Education</a>
            <a href="#certifications" className="text-sm text-gray-300 hover:text-white transition">Certifications</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
            ML & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">GenAI</span> Engineer
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Building intelligent systems with Machine Learning and Generative AI. Specialized in RAG systems, LLM fine-tuning, AI agents, and production ML APIs.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/50" size={32} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-4">Featured Projects</h2>
          <p className="text-gray-400 mb-16 text-lg">Production-grade ML and GenAI projects built with cutting-edge technologies</p>

          {/* Project carousel */}
          <div className="grid md:grid-cols-2 gap-8" onMouseLeave={() => setActiveProject(null)}>
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-500 ${activeProject !== null && activeProject !== idx ? 'opacity-40 scale-[0.98] blur-[1px]' : 'opacity-100'}`}
                onMouseEnter={() => setActiveProject(idx)}
              >
                <div className={`${project.image} rounded-2xl h-64 mb-6 relative overflow-hidden transition duration-500 transform group-hover:scale-105`}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <ExternalLink size={48} className="text-white mb-2" />
                    <span className="text-lg font-bold">{project.stars}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 text-sm rounded-full text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gradient-to-b from-white/5 to-transparent relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillSet, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-white/10 hover:border-cyan-500/50 transition bg-white/5 hover:bg-white/10">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{skillSet.category}</h3>
                <ul className="space-y-2">
                  {skillSet.items.map((skill, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Work Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-8 bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-white/10 transition duration-300">
                <div className="lg:w-1/4 flex-shrink-0">
                  <h3 className="text-3xl font-bold text-white mb-2">{exp.company}</h3>
                  <p className="text-cyan-400 font-semibold text-lg">{exp.role}</p>
                  <p className="text-gray-500 text-sm mt-2 font-medium bg-black/50 inline-block px-3 py-1 rounded-full">{exp.period}</p>
                </div>
                <div className="lg:w-3/4">
                  <ul className="space-y-4 mb-6">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                        <span className="leading-relaxed text-md">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.techStack && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-semibold rounded-full text-cyan-300 hover:bg-white/10 transition duration-300 cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-gradient-to-b from-transparent to-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Education</h2>
          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-8 bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 hover:bg-white/10 transition duration-300">
                <div className="lg:w-1/4 flex-shrink-0">
                  <h3 className="text-3xl font-bold text-white mb-2">{edu.institution}</h3>
                  <p className="text-cyan-400 font-semibold text-lg">{edu.degree}</p>
                  <p className="text-gray-500 text-sm mt-2 font-medium bg-black/50 inline-block px-3 py-1 rounded-full">{edu.period}</p>
                </div>
                <div className="lg:w-3/4 flex flex-col justify-center">
                  <ul className="space-y-4">
                    {edu.highlights.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                        <span className="leading-relaxed text-md">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6 bg-gradient-to-t from-transparent to-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 hover:bg-white/10 transition duration-300 flex flex-col justify-between group">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">{cert.title}</h3>
                  <p className="text-gray-400 text-sm font-medium">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">Let's Build the Future</h2>
          <p className="text-xl text-gray-400 mb-12">Open to opportunities in ML Engineering, GenAI, and RAG systems. Based in Bangalore, India.</p>

          <div className="flex gap-8 justify-center mb-12 flex-wrap">
            <a href="mailto:jagadeepreddy3638@gmail.com" className="flex items-center gap-3 px-6 py-3 border border-white/30 rounded-lg hover:border-cyan-500 hover:bg-white/5 transition">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="https://github.com/Jagadeep-Reddy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 border border-white/30 rounded-lg hover:border-cyan-500 hover:bg-white/5 transition">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/buthuru-jagadeep-reddy-a522961a1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 border border-white/30 rounded-lg hover:border-cyan-500 hover:bg-white/5 transition">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          <p className="text-sm text-gray-500">© 2024 Jagadeep Reddy | ML & GenAI Engineer</p>
        </div>
      </section>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
