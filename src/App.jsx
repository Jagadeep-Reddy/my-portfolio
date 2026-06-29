import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Github, 
  Mail, 
  Linkedin, 
  MapPin, 
  Phone, 
  ArrowUpRight, 
  MessageSquare, 
  Send, 
  X, 
  Menu, 
  Sun, 
  Moon, 
  FileText 
} from 'lucide-react';

// Design Theme Definitions
const themes = {
  midnight: {
    name: "Midnight Gold",
    bg: "bg-[#0A0F1D] text-[#F8FAFC]",
    bgRaw: "#0A0F1D",
    text: "text-[#F8FAFC]",
    textMuted: "text-[#94A3B8]",
    accent: "text-[#D4AF37]", // Gold
    accentBg: "bg-[#D4AF37]",
    accentBorder: "border-[#D4AF37]/30",
    accentHover: "hover:border-[#D4AF37]/80",
    accentText: "text-[#D4AF37]",
    footerBg: "bg-[#060911] text-[#CBD5E1]",
    footerText: "text-[#94A3B8]",
    cardBg: "bg-[#111827]/40",
    cardBorder: "border-slate-800",
    cardBorderHover: "hover:border-[#D4AF37]/50",
    inputBg: "bg-[#111827]/40",
    inputBorder: "border-slate-800",
    inputFocus: "focus:border-[#D4AF37]/60",
    divider: "border-slate-800",
    chatBtn: "bg-[#D4AF37] text-[#0A0F1D] shadow-[0_4px_20px_rgba(212,175,55,0.25)]",
    progressBg: "bg-slate-800",
    progressFill: "bg-[#D4AF37]",
  },
  obsidian: {
    name: "Obsidian Teal",
    bg: "bg-[#0B0D0F] text-[#F1F5F9]",
    bgRaw: "#0B0D0F",
    text: "text-[#F1F5F9]",
    textMuted: "text-[#8A99AD]",
    accent: "text-[#00D2C4]", // Teal
    accentBg: "bg-[#00D2C4]",
    accentBorder: "border-[#00D2C4]/30",
    accentHover: "hover:border-[#00D2C4]/80",
    accentText: "text-[#00D2C4]",
    footerBg: "bg-[#12151A] text-[#E2E8F0]",
    footerText: "text-[#8A99AD]",
    cardBg: "bg-[#171B21]/50",
    cardBorder: "border-slate-800/80",
    cardBorderHover: "hover:border-[#00D2C4]/50",
    inputBg: "bg-[#171B21]/50",
    inputBorder: "border-slate-800",
    inputFocus: "focus:border-[#00D2C4]/60",
    divider: "border-slate-800",
    chatBtn: "bg-[#00D2C4] text-[#0B0D0F] shadow-[0_4px_20px_rgba(0,210,196,0.25)]",
    progressBg: "bg-slate-800",
    progressFill: "bg-[#00D2C4]",
  },
  green: {
    name: "Forest Green",
    bg: "bg-[#F5F7F6] text-[#1E293B]",
    bgRaw: "#F5F7F6",
    text: "text-[#1E293B]",
    textMuted: "text-[#4B655A]",
    accent: "text-[#2C5E43]", // Forest Green
    accentBg: "bg-[#2C5E43]",
    accentBorder: "border-[#2C5E43]/20",
    accentHover: "hover:border-[#2C5E43]/60",
    accentText: "text-[#2C5E43]",
    footerBg: "bg-[#1B2A22] text-[#E6EDF2]",
    footerText: "text-[#8BA396]",
    cardBg: "bg-[#E6EDF2]/40",
    cardBorder: "border-slate-200",
    cardBorderHover: "hover:border-[#2C5E43]/40",
    inputBg: "bg-white",
    inputBorder: "border-[#2C5E43]/20",
    inputFocus: "focus:border-[#2C5E43]/60",
    divider: "border-[#2C5E43]/10",
    chatBtn: "bg-[#2C5E43] text-white shadow-[0_4px_20px_rgba(44,94,67,0.25)]",
    progressBg: "bg-slate-200",
    progressFill: "bg-[#2C5E43]",
  },
  terracotta: {
    name: "Classic Terracotta", // Exact replication of the screenshot colors
    bg: "bg-[#F5F2EB] text-[#202020]",
    bgRaw: "#F5F2EB",
    text: "text-[#202020]",
    textMuted: "text-[#55524B]",
    accent: "text-[#C85A32]", // Muted orange-brown
    accentBg: "bg-[#C85A32]",
    accentBorder: "border-[#C85A32]/20",
    accentHover: "hover:border-[#C85A32]/60",
    accentText: "text-[#C85A32]",
    footerBg: "bg-[#221F1C] text-[#FAF8F5]",
    footerText: "text-[#A8A296]",
    cardBg: "bg-[#FAF8F5]/60",
    cardBorder: "border-[#D6D2C4]",
    cardBorderHover: "hover:border-[#C85A32]/40",
    inputBg: "bg-[#FAF8F5]/80",
    inputBorder: "border-[#D6D2C4]",
    inputFocus: "focus:border-[#C85A32]/60",
    divider: "border-[#E1DDD0]",
    chatBtn: "bg-[#C85A32] text-white shadow-[0_4px_20px_rgba(200,90,50,0.25)]",
    progressBg: "bg-[#E1DDD0]",
    progressFill: "bg-[#202020]",
  }
};

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'midnight';
  });
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Form submission state
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState(''); // 'sending', 'success', ''
  
  // AI Chat Agent states
  const [messages, setMessages] = useState([
    { 
      sender: 'agent', 
      text: "Hi! I'm Jagadeep's AI agent. Ask me anything about his skills, experience, projects, or availability!",
      timestamp: new Date() 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Active theme styles shorthand
  const t = themes[theme] || themes.midnight;

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll chatbot window
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const projects = [
    {
      id: 1,
      title: "IPL AI Intelligence Platform",
      description: "Production-grade multi-agent AI analytics over 18 seasons / 1.2M ball-by-ball IPL deliveries with real-time ML inference under a 300ms budget.",
      highlights: [
        "Production-grade multi-agent AI analytics over 18 seasons / 1.2M ball-by-ball IPL deliveries with real-time ML inference under a 300ms budget.",
        "Built 5-agent LangGraph orchestration (StatsQA, NarrativeQA, Prediction, Matchup, TeamVsTeam) with intent-based routing — each agent uses the right backend (SQL, RAG, or XGBoost+SHAP) rather than forcing all queries through a single LLM call.",
        "Hybrid retrieval: BGE-M3 dense (Qdrant HNSW) + BM25 sparse → RRF fusion → cross-encoder rerank (top-8) — RAGAS faithfulness 0.71 → 0.88 on 200-question golden eval set; CI gate blocks deploy if score drops below threshold.",
        "XGBoost win-probability model (AUC 0.72, Optuna-tuned) with SHAP explanations in natural language; intent classifier (71% acc, 4-class) routes live ball events in ~20ms.",
        "WebSocket real-time path: BallEvent → XGBoost intent (~20ms) + RAG context (~50ms) → GPT-4o-mini commentary — <300ms end-to-end, load-tested to 200 concurrent users (Locust, 60s sustained)."
      ],
      tech: ["LangGraph", "Hybrid RAG", "XGBoost", "FastAPI", "Qdrant", "PostgreSQL", "Redis", "RAGAS", "WebSocket"],
      link: "https://github.com/Jagadeep-Reddy/ipl-ai-platform"
    },
    {
      id: 2,
      title: "Production RAG System & Evaluation",
      description: "Enterprise Q&A over SEC 10-K filings with a full retrieval evaluation framework covering dense, sparse, and hybrid retrieval strategies.",
      highlights: [
        "Enterprise Q&A over SEC 10-K filings with a full retrieval evaluation framework covering dense, sparse, and hybrid retrieval strategies.",
        "Implemented three chunking strategies (fixed-size, semantic, hierarchical parent-child) to benchmark retrieval quality; hierarchical chunking improved context precision by retaining full parent context during generation.",
        "Built hybrid dense (FAISS IVF) + sparse (BM25/Rank-BM25) retrieval with RRF fusion and cross-encoder reranking (ms-marco-MiniLM-L-6-v2); enforced chain-of-thought prompting with strict citation injection to reduce hallucinations.",
        "Self-consistency hallucination detection: 3 parallel LLM responses at temperature 0.4 with automated flag on factual deviation; agentic multi-hop query decomposition with parallel sub-query retrieval and synthesis.",
        "RAGAS metrics (faithfulness, answer relevancy, context precision/recall) tied to GitHub Actions CI/CD gate — fails if faithfulness < 0.75; 40% improvement vs naive baseline on 500-question SEC eval set."
      ],
      tech: ["FAISS", "BM25", "LangChain", "RAGAS", "LangSmith", "Cross-encoders", "CI/CD"],
      link: "https://rag-system-with-evaluation-framewor.vercel.app"
    }
  ];

  const skillCategories = [
    { category: "Languages", items: ["Python", "Java", "SQL"] },
    { category: "GenAI & LLMs", items: ["RAG Systems", "LangChain", "LangGraph", "Fine-tuning (LoRA/QLoRA/DPO)", "Prompt Engineering", "OpenAI API"] },
    { category: "Models", items: ["Mistral & Llama", "BERT & RoBERTa", "HuggingFace TRL", "vLLM", "BGE-M3"] },
    { category: "Retrieval", items: ["FAISS & Qdrant", "BM25", "Reciprocal Rank Fusion", "Cross-encoder Reranking", "pgvector"] },
    { category: "Deep Learning", items: ["PyTorch", "TensorFlow", "Transformers"] },
    { category: "Cloud & Infra", items: ["AWS (EC2, S3, Lambda, SQS)", "Docker & Kubernetes", "CI/CD Pipelines", "FastAPI & Flask", "Redis & Kafka"] },
    { category: "Data & ML", items: ["pandas & NumPy", "XGBoost", "SHAP & Optuna", "Feature Engineering", "matplotlib & seaborn"] },
    { category: "Monitoring & Evals", items: ["Datadog", "LangSmith", "RAGAS"] }
  ];

  const experiences = [
    {
      role: "Independent AI Engineer",
      company: "Self-Directed",
      period: "July 2024 – Present",
      highlights: [
        "Architected and deployed a production-grade 5-agent LangGraph platform (IPL AI Intelligence Platform) with hybrid RAG retrieval (BGE-M3 + BM25 + RRF fusion), XGBoost win-probability modeling (AUC 0.72), and WebSocket real-time inference under 300ms — load-tested to 200 concurrent users via Locust.",
        "Built an enterprise SEC 10-K Q&A RAG system with FAISS dense + BM25 sparse hybrid retrieval, cross-encoder reranking, and RAGAS evaluation gates in GitHub Actions CI/CD — achieved 40% retrieval improvement over naive baseline on a 500-question eval set.",
        "Submitted to Microsoft AI Skills Fest Agents League Hackathon (June 2026) — integrated Azure AI Foundry (GPT-4.1-mini) into the IPL platform, completing RAGAS evaluation on 51 golden QA pairs (faithfulness 0.981).",
        "Completed PGP in Data Science & Business Analytics (UT Austin × Great Learning); currently pursuing AWS Solutions Architect Associate and Azure AI Engineer Associate certifications."
      ],
      techStack: ["LangGraph", "LangChain", "RAGAS", "XGBoost", "FastAPI", "Qdrant", "FAISS", "Azure AI Foundry", "Python", "CI/CD"]
    },
    {
      role: "Software Engineer",
      company: "ANZ",
      period: "June 2022 - June 2024",
      highlights: [
        "Built and optimized LoanIQ Inquiry APIs and Scripted Batch endpoints, cutting interface error rates and improving processing reliability for a core banking platform serving millions of accounts.",
        "Designed production REST APIs in Spring Boot (IoC, JPA, Java Streams) consumed by downstream banking interfaces — directly applicable to the ML model-serving APIs I build today.",
        "Engineered a daily batch scoring pipeline for accrual cycles — scheduling, DB writes via JDBC, and ResultSet management — handling high-volume financial transaction data end to end.",
        "Shipped a Customer Onboarding microservice with Kafka event streaming — achieved 90% unit test coverage and zero production incidents in the first 3 months of deployment.",
        "Optimized Oracle SQL queries (complex joins, correlated subqueries, stored procedures) for the LoanIQ platform — reduced query execution time by up to 35% through indexing and view redesign.",
        "Implemented a data-masking module using LoanIQ SDK + JDBC to handle customer PII in XML — masked sensitive fields at query level, improving compliance with ANZ data governance policies."
      ],
      techStack: ["Java", "Spring Boot", "Oracle SQL", "Kafka", "REST API", "CI/CD Pipelines", "Git"]
    }
  ];

  const education = [
    {
      degree: "Post Graduate Program in Data Science & Business Analytics",
      institution: "The University of Texas at Austin",
      period: "2025 - 2026",
      highlights: [
        "Focus Areas: Business Analytics, Data Science, and Machine Learning Systems."
      ]
    },
    {
      degree: "Bachelor of Engineering (BE), Information Science",
      institution: "BMS Institute of Technology and Management",
      period: "2018 - 2022",
      highlights: [
        "Grade: 8.50 CGPA",
        "Key Leadership: Student Placement Coordinator, Placement Volunteer."
      ]
    }
  ];

  const certifications = [
    "Advanced Learning Algorithms (Coursera)",
    "Machine Learning Specialization (Coursera)",
    "Supervised Machine Learning: Regression and Classification (Coursera)",
    "Fundamentals of Java Programming (Coursera)",
    "Linear Algebra for Machine Learning and Data Science (Coursera)",
    "SQL Essential Training (LinkedIn Learning)"
  ];

  // Contact Form Mock Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formEmail || !formSubject || !formMessage) return;
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormEmail('');
      setFormSubject('');
      setFormMessage('');
      setTimeout(() => setFormStatus(''), 4000);
    }, 1200);
  };

  // AI Agent responding simulation
  const simulateAgentResponse = (userQuery) => {
    setIsTyping(true);
    let reply = "";
    const q = userQuery.toLowerCase();

    if (q.includes("expertise") || q.includes("skills") || q.includes("background") || q.includes("what does")) {
      reply = "Jagadeep is an AI Engineer specializing in production GenAI architectures. He builds multi-agent systems with LangGraph, highly calibrated RAG pipelines (achieving 0.88 RAGAS faithfulness), and optimized ML pipelines. He spent 2 years at ANZ engineering robust backend APIs and streaming systems.";
    } else if (q.includes("ipl") || q.includes("platform") || q.includes("project")) {
      reply = "His flagship project is the IPL AI Platform: a production-grade 5-agent LangGraph platform running ball-by-ball ML win probability and LLM commentary over 18 seasons (<300ms budget) using FastAPI, XGBoost, and Qdrant.";
    } else if (q.includes("rag") || q.includes("retrieval") || q.includes("eval")) {
      reply = "Jagadeep has advanced expertise in RAG. He designed an SEC 10-K Q&A engine with hybrid dense/sparse search, reranking, and continuous RAGAS evaluation tied to CI/CD pipelines to guard against regression.";
    } else if (q.includes("hire") || q.includes("open") || q.includes("job") || q.includes("role") || q.includes("opportunity")) {
      reply = "Yes! Jagadeep is actively seeking full-time AI / GenAI Engineer roles, freelance consulting contracts, and technical advisory roles. He overlaps heavily with US EST/PST timezones and is located in Bangalore, India.";
    } else if (q.includes("contact") || q.includes("reach") || q.includes("email") || q.includes("talk")) {
      reply = "You can reach Jagadeep directly at jagadeepreddy3638@gmail.com, connect via his LinkedIn, or use the form at the bottom of this page. He will reply shortly!";
    } else if (q.includes("resume") || q.includes("cv") || q.includes("download")) {
      reply = "You can download his resume by clicking the 'Download Resume' button at the top of the page. Or email him at jagadeepreddy3638@gmail.com to get his latest CV!";
    } else {
      reply = "That's an interesting question! I am Jagadeep's simulated AI Assistant. You can read his detailed experience and projects right here on the portfolio, or drop him an email to set up a chat.";
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'agent', text: reply, timestamp: new Date() }]);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    const text = inputText.trim();
    setMessages(prev => [...prev, { sender: 'user', text, timestamp: new Date() }]);
    setInputText('');
    simulateAgentResponse(text);
  };

  const handleQuickAction = (text) => {
    setMessages(prev => [...prev, { sender: 'user', text, timestamp: new Date() }]);
    simulateAgentResponse(text);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${t.bg} transition-colors duration-500 font-sans selection:bg-current/10`}>
      
      {/* Editorial Style Grid Lines (Background decoration) */}
      <div className="fixed inset-0 pointer-events-none grid grid-cols-4 max-w-6xl mx-auto px-6 opacity-3">
        <div className={`border-l border-r ${t.divider} h-full`}></div>
        <div className={`border-r ${t.divider} h-full`}></div>
        <div className={`border-r ${t.divider} h-full`}></div>
        <div></div>
      </div>

      {/* Header / Navbar */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? `${theme === 'green' || theme === 'terracotta' ? 'bg-white/80' : 'bg-[#0A0F1D]/80'} backdrop-blur-md border-b ${t.divider}`
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <span 
              onClick={() => scrollToSection('hero')} 
              className="text-xl md:text-2xl font-serif font-semibold tracking-tight cursor-pointer hover:opacity-80 transition"
            >
              JAGADEEP REDDY
            </span>
            <div className={`text-[10px] uppercase tracking-widest font-semibold ${t.accent} mt-0.5`}>
              AI Engineer
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6 text-xs uppercase tracking-widest font-semibold">
              <button onClick={() => scrollToSection('projects')} className="hover:opacity-75 transition">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="hover:opacity-75 transition">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="hover:opacity-75 transition">Experience</button>
              <button onClick={() => scrollToSection('education')} className="hover:opacity-75 transition">Education</button>
              <button onClick={() => scrollToSection('contact')} className="hover:opacity-75 transition">Contact</button>
            </nav>

            <span className={`h-4 w-[1px] ${t.divider}`}></span>

            {/* Premium Theme Selector */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Theme:</span>
              <div className="relative">
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className={`appearance-none bg-transparent border ${t.accentBorder} ${t.text} text-[10px] uppercase tracking-widest font-bold pl-3 pr-8 py-1.5 rounded-md focus:outline-none cursor-pointer hover:bg-current/5 transition`}
                >
                  <option value="midnight" className="bg-[#0A0F1D] text-white">Midnight Gold</option>
                  <option value="obsidian" className="bg-[#0B0D0F] text-white">Obsidian Teal</option>
                  <option value="green" className="bg-[#F5F7F6] text-[#1E293B]">Forest Green</option>
                  <option value="terracotta" className="bg-[#F5F2EB] text-[#202020]">Terracotta</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-current opacity-70">
                  <ChevronDown size={12} />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className={`bg-transparent border ${t.accentBorder} ${t.text} text-[9px] uppercase tracking-widest font-bold px-2 py-1 rounded focus:outline-none`}
            >
              <option value="midnight" className="bg-[#0A0F1D] text-white">Midnight</option>
              <option value="obsidian" className="bg-[#0B0D0F] text-white">Obsidian</option>
              <option value="green" className="bg-[#F5F7F6] text-[#1E293B]">Forest</option>
              <option value="terracotta" className="bg-[#F5F2EB] text-[#202020]">Terracotta</option>
            </select>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 hover:opacity-75 transition"
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 z-50 md:hidden flex flex-col justify-center items-center gap-8 ${
          theme === 'green' || theme === 'terracotta' ? 'bg-[#FAF8F5]' : 'bg-[#0B0D0F]'
        } px-6`}>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 hover:opacity-75 transition"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col gap-6 text-lg uppercase tracking-widest font-semibold text-center">
            <button onClick={() => scrollToSection('projects')} className="hover:opacity-75 transition">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="hover:opacity-75 transition">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="hover:opacity-75 transition">Experience</button>
            <button onClick={() => scrollToSection('education')} className="hover:opacity-75 transition">Education</button>
            <button onClick={() => scrollToSection('contact')} className="hover:opacity-75 transition">Contact</button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-24 max-w-6xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <div className={`text-xs md:text-sm uppercase tracking-widest font-bold mb-4 ${t.accent} flex items-center gap-2`}>
            <span>PORTFOLIO / AI ENGINEER</span>
            <span className={`h-[1px] w-12 ${t.accentBg} inline-block`}></span>
          </div>

          <h1 className="text-5xl md:text-8xl font-serif leading-[1.05] tracking-tight mb-8">
            Building AI systems that <span className={`italic ${t.accent}`}>scale beyond the demo.</span>
          </h1>

          <p className="text-lg md:text-2xl opacity-80 leading-relaxed font-light mb-12 max-w-3xl">
            I am an AI Engineer transitioning from 2 years of production backend engineering at ANZ. 
            I bring hands-on experience building production-grade GenAI systems—from hybrid RAG pipelines with 
            measurable RAGAS evals and autonomous multi-agent systems with LangGraph, to fine-tuned LLMs 
            (LoRA/QLoRA/DPO) and real-time ML inference under strict latency budgets.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button 
              onClick={() => scrollToSection('projects')} 
              className={`px-8 py-4 bg-current ${theme === 'green' || theme === 'terracotta' ? 'text-white bg-[#202020]' : 'text-black bg-white'} font-semibold uppercase tracking-wider text-xs flex items-center gap-3 hover:opacity-90 transition`}
            >
              Explore projects <ArrowUpRight size={14} />
            </button>
            <a 
              href="/Jagadeep_Reddy_AI_Engineer_Resume.pdf" 
              download="Jagadeep_Reddy_AI_Engineer_Resume.pdf" 
              className={`px-8 py-4 border ${t.accentBorder} ${t.accentHover} font-semibold uppercase tracking-wider text-xs flex items-center gap-3 transition`}
            >
              Download Resume <FileText size={14} />
            </a>
          </div>
        </div>

        {/* Floating details banner */}
        <div className={`mt-24 pt-6 border-t ${t.divider} flex flex-wrap justify-between gap-6 text-[10px] uppercase tracking-widest font-bold ${t.textMuted}`}>
          <div>LOCATION: Bangalore, India</div>
          <div>FOCUS: Agentic Orchestration & RAG</div>
          <div>PREVIOUS: Software Engineer at ANZ</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 max-w-6xl mx-auto relative z-10 border-t border-dashed border-current/10">
        <div className="mb-16">
          <div className={`text-xs uppercase tracking-widest font-bold mb-2 ${t.accent}`}>SELECTED WORK</div>
          <h2 className="text-4xl md:text-6xl font-serif">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              className={`group flex flex-col justify-between p-8 bg-current/3 border ${t.cardBorder} ${t.cardBorderHover} rounded-xl transition-all duration-300 relative overflow-hidden`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 border ${t.accentBorder} rounded-full`}>
                    Project {index + 1}
                  </span>
                  <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>

                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 group-hover:underline decoration-1 decoration-current/30">
                  {project.title}
                </h3>
                <p className={`text-sm md:text-base ${t.textMuted} mb-6 leading-relaxed`}>
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="space-y-2 mb-8">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs md:text-sm flex items-start gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 ${t.accentBg} flex-shrink-0`}></span>
                        <span className="opacity-80 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-dashed border-current/10">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 bg-current/5 border border-current/10 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 max-w-6xl mx-auto relative z-10 border-t border-dashed border-current/10">
        
        {/* Skill lists (Full layout width) */}
        <div>
          <div className="mb-12 text-center md:text-left">
            <div className={`text-xs uppercase tracking-widest font-bold mb-2 ${t.accent}`}>ABILITIES</div>
            <h2 className="text-4xl md:text-6xl font-serif">Skills & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="p-6 border border-current/5 bg-current/2 rounded-xl">
                <h3 className={`text-xs uppercase tracking-widest font-extrabold mb-4 ${t.accent}`}>
                  {cat.category}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-sm opacity-90 flex items-center gap-2">
                      <span className="w-1 h-1 bg-current opacity-40 rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 max-w-6xl mx-auto relative z-10 border-t border-dashed border-current/10">
        <div className="mb-16">
          <div className={`text-xs uppercase tracking-widest font-bold mb-2 ${t.accent}`}>TIMELINE</div>
          <h2 className="text-4xl md:text-6xl font-serif">Work Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="p-8 border border-current/10 rounded-xl bg-current/2">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold">{exp.company}</h3>
                  <div className={`text-xs uppercase tracking-widest font-bold ${t.accent} mt-1`}>
                    {exp.role}
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-current/5 border border-current/10 rounded">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3.5 mb-8 max-w-4xl">
                {exp.highlights.map((bullet, i) => (
                  <li key={i} className="text-sm md:text-base opacity-80 flex items-start gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full mt-2 ${t.accentBg} flex-shrink-0`}></span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dashed border-current/10">
                {exp.techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 bg-current/5 border border-current/10 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-32 px-6 max-w-6xl mx-auto relative z-10 border-t border-dashed border-current/10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Education */}
          <div>
            <div className="mb-12">
              <div className={`text-xs uppercase tracking-widest font-bold mb-2 ${t.accent}`}>ACADEMICS</div>
              <h2 className="text-4xl md:text-5xl font-serif">Education</h2>
            </div>

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="p-6 border border-current/10 rounded-xl bg-current/2">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif font-bold">{edu.institution}</h3>
                      <div className={`text-xs uppercase tracking-widest font-bold ${t.accent} mt-1`}>
                        {edu.degree}
                      </div>
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 bg-current/5 border border-current/10 rounded flex-shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {edu.highlights.map((bullet, i) => (
                      <li key={i} className="text-xs md:text-sm opacity-80 flex items-start gap-2">
                        <span className={`w-1 h-1 rounded-full mt-2 ${t.accentBg} flex-shrink-0`}></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-12">
              <div className={`text-xs uppercase tracking-widest font-bold mb-2 ${t.accent}`}>VERIFICATIONS</div>
              <h2 className="text-4xl md:text-5xl font-serif">Certifications</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => {
                const parts = cert.split(' (');
                const title = parts[0];
                const issuer = parts[1] ? parts[1].replace(')', '') : '';
                return (
                  <div key={idx} className="p-5 border border-current/5 bg-current/2 rounded-xl hover:border-current/20 transition">
                    <h3 className="text-sm md:text-base font-serif font-bold leading-tight mb-1">{title}</h3>
                    {issuer && <p className={`text-[10px] uppercase tracking-wider font-extrabold ${t.accent}`}>{issuer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section (EXACTLY replicates Screenshot 1, 3, 5 layout & style) */}
      <section id="contact" className="py-32 px-6 max-w-6xl mx-auto relative z-10 border-t border-dashed border-current/10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Get In Touch Details (Excatly replicates Screenshot 5) */}
          <div>
            <div className={`text-xs uppercase tracking-widest font-extrabold mb-4 ${t.accent}`}>
              GET IN TOUCH
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              Let's build something <span className={`italic ${t.accent}`}>great together.</span>
            </h2>

            <p className={`text-sm md:text-base ${t.textMuted} mb-12 max-w-md leading-relaxed`}>
              Open to full-time roles, freelance projects, and collaborations in Agentic AI, LLMOps, RAG systems, or agent design.
            </p>

            {/* List of contact details with label uppercase + value underneath */}
            <div className="space-y-8">
              
              <div className="flex gap-4">
                <div className={`w-10 h-10 border border-current/10 rounded-lg flex items-center justify-center flex-shrink-0 ${t.accent}`}>
                  <Mail size={18} />
                </div>
                <div>
                  <div className={`text-[10px] uppercase tracking-widest font-extrabold ${t.accent} mb-0.5`}>EMAIL</div>
                  <a href="mailto:jagadeepreddy3638@gmail.com" className="text-sm md:text-md font-serif font-semibold hover:underline">
                    jagadeepreddy3638@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className={`w-10 h-10 border border-current/10 rounded-lg flex items-center justify-center flex-shrink-0 ${t.accent}`}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div className={`text-[10px] uppercase tracking-widest font-extrabold ${t.accent} mb-0.5`}>LOCATION</div>
                  <div className="text-sm md:text-md font-serif font-semibold">
                    Bangalore, India
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className={`w-10 h-10 border border-current/10 rounded-lg flex items-center justify-center flex-shrink-0 ${t.accent}`}>
                  <Linkedin size={18} />
                </div>
                <div>
                  <div className={`text-[10px] uppercase tracking-widest font-extrabold ${t.accent} mb-0.5`}>LINKEDIN</div>
                  <a 
                    href="https://www.linkedin.com/in/buthuru-jagadeep-reddy-a522961a1/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm md:text-md font-serif font-semibold flex items-center gap-1 hover:underline"
                  >
                    linkedin/buthuru-jagadeep-reddy <ArrowUpRight size={12} className="inline" />
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className={`w-10 h-10 border border-current/10 rounded-lg flex items-center justify-center flex-shrink-0 ${t.accent}`}>
                  <Github size={18} />
                </div>
                <div>
                  <div className={`text-[10px] uppercase tracking-widest font-extrabold ${t.accent} mb-0.5`}>GITHUB</div>
                  <a 
                    href="https://github.com/Jagadeep-Reddy" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm md:text-md font-serif font-semibold flex items-center gap-1 hover:underline"
                  >
                    github/Jagadeep-Reddy <ArrowUpRight size={12} className="inline" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form (Exactly replicates form layout in Screenshot 1/5) */}
          <div className="p-8 border border-current/10 bg-current/2 rounded-2xl">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              <div>
                <label className={`block text-[10px] uppercase tracking-widest font-extrabold ${t.accent} mb-2`}>
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="rahul@company.com"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${t.inputBorder} ${t.inputBg} ${t.text} text-sm focus:outline-none ${t.inputFocus} transition`}
                />
              </div>

              <div>
                <label className={`block text-[10px] uppercase tracking-widest font-extrabold ${t.accent} mb-2`}>
                  SUBJECT
                </label>
                <input
                  type="text"
                  required
                  placeholder="RAG pipeline for our product"
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${t.inputBorder} ${t.inputBg} ${t.text} text-sm focus:outline-none ${t.inputFocus} transition`}
                />
              </div>

              <div>
                <label className={`block text-[10px] uppercase tracking-widest font-extrabold ${t.accent} mb-2`}>
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border ${t.inputBorder} ${t.inputBg} ${t.text} text-sm focus:outline-none ${t.inputFocus} transition resize-none`}
                />
              </div>

              {/* Form Submission status alert */}
              {formStatus === 'success' && (
                <div className="p-3 text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-lg">
                  ✓ Message sent successfully! Jagadeep will contact you soon.
                </div>
              )}

              {/* Exact button replication: SEND MESSAGE with arrow */}
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className={`w-full py-4 text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition ${
                  theme === 'green' || theme === 'terracotta' 
                    ? 'bg-[#202020] text-white hover:bg-black' 
                    : 'bg-white text-black hover:opacity-90'
                }`}
              >
                {formStatus === 'sending' ? 'SENDING...' : 'SEND MESSAGE →'}
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* Footer Section (Exactly replicates screenshot 4/footer styling) */}
      <footer className={`${t.footerBg} py-20 px-6 relative z-10 border-t ${t.divider}`}>
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            
            {/* Logo/Identity */}
            <div>
              <h3 className="text-3xl font-serif font-semibold tracking-tight text-white mb-2">
                Jagadeep Reddy
              </h3>
              <p className={`text-xs ${t.footerText} max-w-xs font-light leading-relaxed`}>
                AI Engineer specializing in production-grade Agentic AI and LLMOps.
              </p>
            </div>

            {/* Navigation vertical list */}
            <div>
              <div className="text-[10px] uppercase tracking-widest font-extrabold text-white opacity-40 mb-4">
                NAVIGATION
              </div>
              <ul className="grid grid-cols-2 gap-2 text-xs font-semibold uppercase tracking-wider">
                <li><button onClick={() => scrollToSection('hero')} className={`hover:text-white ${t.footerText} transition`}>About</button></li>
                <li><button onClick={() => scrollToSection('projects')} className={`hover:text-white ${t.footerText} transition`}>Projects</button></li>
                <li><button onClick={() => scrollToSection('experience')} className={`hover:text-white ${t.footerText} transition`}>Experience</button></li>
                <li><button onClick={() => scrollToSection('education')} className={`hover:text-white ${t.footerText} transition`}>Education</button></li>
                <li><button onClick={() => scrollToSection('skills')} className={`hover:text-white ${t.footerText} transition`}>Stack</button></li>
                <li><button onClick={() => scrollToSection('skills')} className={`hover:text-white ${t.footerText} transition`}>Skills</button></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <div className="text-[10px] uppercase tracking-widest font-extrabold text-white opacity-40 mb-4">
                CONTACT
              </div>
              <ul className={`space-y-2 text-xs font-semibold ${t.footerText}`}>
                <li>Email: jagadeepreddy3638@gmail.com</li>
                <li>Location: Bangalore, India</li>
                <li>Github: github/Jagadeep-Reddy</li>
              </ul>
            </div>

          </div>

          <hr className={`my-8 opacity-10 ${t.divider}`} />

          {/* Copyright section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
            <span className={t.footerText}>
              © 2026 JAGADEEP REDDY
            </span>
            <span className={t.footerText}>
              AGENTIC AI & LLMOPS
            </span>
          </div>

        </div>
      </footer>

      {/* Floating Action Buttons (Exact matching Screenshot 3/4) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        
        {/* Scroll To Top button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`w-12 h-12 rounded-full border border-current/10 flex items-center justify-center shadow-lg hover:scale-105 transition cursor-pointer ${
              theme === 'green' || theme === 'terracotta' ? 'bg-[#202020] text-white' : 'bg-white text-black'
            }`}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        )}

        {/* Orange chat button (Pulsing ring indicator) */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition cursor-pointer relative ${t.chatBtn}`}
          aria-label="Ask my AI Assistant"
        >
          {chatOpen ? <X size={22} /> : <MessageSquare size={22} />}
          
          {/* Pulsing ring animation for notification effect */}
          {!chatOpen && (
            <span className="absolute -inset-1 rounded-full border-2 border-current animate-pulse opacity-25"></span>
          )}
        </button>

      </div>

      {/* Simulated AI Agent Drawer */}
      {chatOpen && (
        <div className={`fixed bottom-24 right-6 w-[360px] md:w-[400px] h-[500px] border border-current/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 transition-transform duration-300 ${
          theme === 'green' || theme === 'terracotta' ? 'bg-[#FAF8F5] text-[#202020]' : 'bg-[#0F1116] text-[#F8FAFC]'
        }`}>
          {/* Drawer Header */}
          <div className="p-4 border-b border-current/10 flex justify-between items-center bg-current/2">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative"></span>
              <div>
                <h4 className="text-sm font-bold tracking-wide uppercase font-sans">Recruiter AI Agent</h4>
                <p className="text-[10px] opacity-60">Ask about Jagadeep's expertise</p>
              </div>
            </div>
            <button 
              onClick={() => setChatOpen(false)}
              className="p-1.5 hover:opacity-75 transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] rounded-xl px-4 py-2.5 text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-current/10 text-current rounded-tr-none'
                    : theme === 'green' || theme === 'terracotta'
                      ? 'bg-white text-slate-700 border border-slate-200/80 rounded-tl-none'
                      : 'bg-[#181A20] text-slate-300 border border-slate-800 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Agent Typing Simulator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className={`rounded-xl px-4 py-3 rounded-tl-none flex items-center gap-1.5 ${
                  theme === 'green' || theme === 'terracotta' ? 'bg-white border border-slate-200' : 'bg-[#181A20] border border-slate-800'
                }`}>
                  <span className="w-1.5 h-1.5 bg-current opacity-40 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-current opacity-60 rounded-full animate-bounce delay-150"></span>
                  <span className="w-1.5 h-1.5 bg-current opacity-80 rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Recruiter Quick suggestions */}
          <div className="px-4 py-2 border-t border-dashed border-current/10 bg-current/2">
            <p className="text-[9px] uppercase tracking-wider font-extrabold opacity-55 mb-2">Suggested Prompts:</p>
            <div className="flex flex-wrap gap-1.5">
              <button 
                onClick={() => handleQuickAction("Summarize Jagadeep's expertise")} 
                className="text-[10px] px-2.5 py-1 border border-current/10 rounded-full hover:border-current/30 hover:bg-current/5 transition"
              >
                Summarize Expertise
              </button>
              <button 
                onClick={() => handleQuickAction("About the IPL AI Platform")} 
                className="text-[10px] px-2.5 py-1 border border-current/10 rounded-full hover:border-current/30 hover:bg-current/5 transition"
              >
                IPL Platform
              </button>
              <button 
                onClick={() => handleQuickAction("Tell me about his RAG experience")} 
                className="text-[10px] px-2.5 py-1 border border-current/10 rounded-full hover:border-current/30 hover:bg-current/5 transition"
              >
                RAG Experience
              </button>
              <button 
                onClick={() => handleQuickAction("Is he open to full-time remote roles?")} 
                className="text-[10px] px-2.5 py-1 border border-current/10 rounded-full hover:border-current/30 hover:bg-current/5 transition"
              >
                Are you hiring?
              </button>
            </div>
          </div>

          {/* Typing Form */}
          <div className="p-3 border-t border-current/10 flex gap-2">
            <input
              type="text"
              placeholder="Ask anything..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className={`flex-grow px-3 py-2 rounded-lg border text-xs focus:outline-none ${
                theme === 'green' || theme === 'terracotta'
                  ? 'border-slate-200 bg-white focus:border-slate-400'
                  : 'border-slate-800 bg-[#16181D] focus:border-slate-600'
              }`}
            />
            <button
              onClick={handleSendMessage}
              className={`p-2 rounded-lg flex items-center justify-center cursor-pointer transition ${t.chatBtn}`}
              aria-label="Send"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Global CSS Inject */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.25; }
          50% { transform: scale(1.1); opacity: 0.45; }
        }
        .delay-150 { animation-delay: 150ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>

    </div>
  );
}
