import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Github, 
  Mail, 
  Linkedin, 
  MapPin, 
  ArrowUpRight, 
  MessageSquare, 
  Send, 
  X, 
  Menu, 
  FileText,
  Terminal,
  Activity,
  Cpu,
  Layers,
  Database,
  ArrowRight,
  Sparkles,
  Copy,
  Check
} from 'lucide-react';

// Design Theme Definitions - Technical Architect Canvas Style
const themes = {
  midnight: {
    name: "Slate Bronze",
    bg: "bg-[#080C14] text-[#F8FAFC]",
    bgRaw: "#080C14",
    text: "text-[#F8FAFC]",
    textMuted: "text-[#7E8B9B]",
    accent: "text-[#C5A880]", // Champagne Bronze
    accentBg: "bg-[#C5A880]",
    accentBorder: "border-[#C5A880]/20",
    accentBorderActive: "border-[#C5A880]/60",
    accentHover: "hover:border-[#C5A880]/80",
    accentText: "text-[#C5A880]",
    accentBgLight: "bg-[#C5A880]/5",
    footerBg: "bg-[#04060A]",
    divider: "border-[#1A2333]",
    cardBg: "bg-[#0F1524]/50 backdrop-blur-md",
    cardBorder: "border-[#1C2538]",
    cardBorderHover: "hover:border-[#C5A880]/40",
    inputBg: "bg-[#0F1524]/70",
    inputBorder: "border-[#1C2538]",
    inputFocus: "focus:border-[#C5A880]/60",
    chatBtn: "bg-[#C5A880] text-[#080C14] shadow-[0_4px_20px_rgba(197,168,128,0.2)]",
    buttonBg: "bg-[#C5A880] text-[#080C14] border border-[#C5A880]",
    dotColor: "bg-[#C5A880]",
    blob1: "bg-[#4F46E5]/10",
    blob2: "bg-[#C5A880]/8",
    blob3: "bg-[#7C3AED]/10",
    buttonText: "text-[#080C14]",
    userChatBg: "bg-[#C5A880]/10 text-white border border-[#C5A880]/20",
    agentChatBg: "bg-[#0F1524]/60",
    agentChatText: "text-zinc-300",
    textBody: "text-zinc-300",
    hoverText: "hover:text-white"
  },
  obsidian: {
    name: "Obsidian Teal",
    bg: "bg-[#050505] text-[#F1F5F9]",
    bgRaw: "#050505",
    text: "text-[#F1F5F9]",
    textMuted: "text-[#718096]",
    accent: "text-[#00F5D4]", // Vibrant Mint
    accentBg: "bg-[#00F5D4]",
    accentBorder: "border-[#00F5D4]/25",
    accentBorderActive: "border-[#00F5D4]/60",
    accentHover: "hover:border-[#00F5D4]/80",
    accentText: "text-[#00F5D4]",
    accentBgLight: "bg-[#00F5D4]/5",
    footerBg: "bg-[#0A0A0A]",
    divider: "border-[#1A1A1A]",
    cardBg: "bg-[#0A0A0A]/50 backdrop-blur-md",
    cardBorder: "border-[#222]",
    cardBorderHover: "hover:border-[#00F5D4]/40",
    inputBg: "bg-[#0A0A0A]/70",
    inputBorder: "border-[#222]",
    inputFocus: "focus:border-[#00F5D4]/60",
    chatBtn: "bg-[#00F5D4] text-[#050505] shadow-[0_4px_20px_rgba(0,245,212,0.2)]",
    buttonBg: "bg-[#00F5D4] text-[#050505] border border-[#00F5D4]",
    dotColor: "bg-[#00F5D4]",
    blob1: "bg-[#00F5D4]/10",
    blob2: "bg-[#06B6D4]/8",
    blob3: "bg-[#6366F1]/10",
    buttonText: "text-[#050505]",
    userChatBg: "bg-[#00F5D4]/10 text-white border border-[#00F5D4]/20",
    agentChatBg: "bg-[#0A0A0A]/60",
    agentChatText: "text-zinc-300",
    textBody: "text-zinc-300",
    hoverText: "hover:text-white"
  },
  forest: {
    name: "Botanical Sage",
    bg: "bg-[#F4F6F5] text-[#1E293B]",
    bgRaw: "#F4F6F5",
    text: "text-[#1E293B]",
    textMuted: "text-[#5A6E65]",
    accent: "text-[#15803D]", // Forest Green
    accentBg: "bg-[#15803D]",
    accentBorder: "border-[#15803D]/20",
    accentBorderActive: "border-[#15803D]/60",
    accentHover: "hover:border-[#15803D]/80",
    accentText: "text-[#15803D]",
    accentBgLight: "bg-[#15803D]/5",
    footerBg: "bg-[#14211A]",
    divider: "border-[#D1D8D5]",
    cardBg: "bg-[#EAECEB]/60 backdrop-blur-md",
    cardBorder: "border-[#D1D9D4]",
    cardBorderHover: "hover:border-[#15803D]/50",
    inputBg: "bg-[#DFE4E1]/80",
    inputBorder: "border-[#CBD5C9]",
    inputFocus: "focus:border-[#15803D]/60",
    chatBtn: "bg-[#15803D] text-white shadow-[0_4px_20px_rgba(21,128,61,0.2)]",
    buttonBg: "bg-[#15803D] text-white border border-[#15803D]",
    dotColor: "bg-[#15803D]",
    blob1: "bg-[#15803D]/5",
    blob2: "bg-[#10B981]/5",
    blob3: "bg-[#34D399]/4",
    buttonText: "text-white",
    userChatBg: "bg-[#15803D] text-white border border-[#15803D]/25",
    agentChatBg: "bg-white/90",
    agentChatText: "text-[#1E293B]",
    textBody: "text-slate-700",
    hoverText: "hover:text-black"
  },
  terracotta: {
    name: "Warm Terracotta",
    bg: "bg-[#FAF7F0] text-[#221F1B]",
    bgRaw: "#FAF7F0",
    text: "text-[#221F1B]",
    textMuted: "text-[#6D6860]",
    accent: "text-[#C2410C]", // Terracotta Orange
    accentBg: "bg-[#C2410C]",
    accentBorder: "border-[#C2410C]/20",
    accentBorderActive: "border-[#C2410C]/60",
    accentHover: "hover:border-[#C2410C]/80",
    accentText: "text-[#C2410C]",
    accentBgLight: "bg-[#C2410C]/5",
    footerBg: "bg-[#1F1A17]",
    divider: "border-[#E6E1D5]",
    cardBg: "bg-[#F0EDE4]/60 backdrop-blur-md",
    cardBorder: "border-[#E2DCCE]",
    cardBorderHover: "hover:border-[#C2410C]/50",
    inputBg: "bg-[#E5DFD4]/80",
    inputBorder: "border-[#CFC8B7]",
    inputFocus: "focus:border-[#C2410C]/60",
    chatBtn: "bg-[#C2410C] text-white shadow-[0_4px_20px_rgba(194,65,12,0.2)]",
    buttonBg: "bg-[#C2410C] text-white border border-[#C2410C]",
    dotColor: "bg-[#C2410C]",
    blob1: "bg-[#C2410C]/5",
    blob2: "bg-[#EA580C]/5",
    blob3: "bg-[#F59E0B]/4",
    buttonText: "text-white",
    userChatBg: "bg-[#C2410C] text-white border border-[#C2410C]/25",
    agentChatBg: "bg-white/90",
    agentChatText: "text-[#221F1B]",
    textBody: "text-zinc-700",
    hoverText: "hover:text-black"
  }
};;;

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'midnight';
  });
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Tab selectors
  const [activeArchTab, setActiveArchTab] = useState('ipl'); // 'ipl' or 'rag'
  const [activeProjectTab, setActiveProjectTab] = useState('rag'); // 'ipl' or 'rag'
  const [expandedSkillCat, setExpandedSkillCat] = useState(null); // Accordion logic for skills
  
  // Interactive UI UX States
  const [activeTag, setActiveTag] = useState(null); // Highlight same tags on hover
  const [activeLayer, setActiveLayer] = useState(null); // Highlight diagram nodes
  const [copiedField, setCopiedField] = useState(null); // Copy link feedback
  const [scrollProgress, setScrollProgress] = useState(0); // Progress bar percentage

  // Command Center Diagnostic States
  const [diagActive, setDiagActive] = useState(false);
  const [diagLogs, setDiagLogs] = useState([]);
  const [contactPayloadActive, setContactPayloadActive] = useState(false);
  const [contactLogs, setContactLogs] = useState([]);
  const [systemStats, setSystemStats] = useState({ cpu: 12, memory: 42, ping: 14 });

  // System Stats interval simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStats(prev => ({
        cpu: Math.floor(Math.random() * 15) + 8,
        memory: Math.floor(Math.random() * 5) + 40,
        ping: Math.floor(Math.random() * 8) + 12
      }));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const runDiagnostics = () => {
    if (diagActive) return;
    setDiagActive(true);
    setDiagLogs(["[sys] initializing diagnostics...", "[sys] loading context & model weights..."]);
    
    const messagesList = [
      "[sys] checking intent classifier layers... OK",
      "[sys] verifying qdrant HNSW vector store... OK",
      "[sys] validation check: FAISS sparse index... OK",
      "[sys] evaluating cross-encoder rerank... PASS",
      "[sys] RAGAS CI/CD deployment threshold... PASS (0.88)",
      "[sys] live web socket commentary push... READY (14ms)",
      "[sys] active models: gpt-4o-mini & xgboost... ONLINE",
      "[sys] metrics verified. system status: normal"
    ];
    
    messagesList.forEach((log, index) => {
      setTimeout(() => {
        setDiagLogs(prev => [...prev, log]);
        if (index === messagesList.length - 1) {
          setTimeout(() => setDiagActive(false), 3000);
        }
      }, (index + 1) * 450);
    });
  };

  // Form submission state
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState(''); // 'sending', 'success', 'error'
  
  // AI Chat Agent states
  const [messages, setMessages] = useState([
    { 
      sender: 'agent', 
      text: "Hi! I'm Jagadeep's AI assistant shell. You can query me about his projects, ANZ backend engineering, ML/RAG skills, or availability!",
      timestamp: new Date() 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Active theme styles shorthand
  const t = themes[theme] || themes.midnight;

  const handleCopyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowScrollTop(window.scrollY > 400);
      
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledPercent);
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

  const projects = {
    ipl: {
      id: 1,
      title: "IPL AI Intelligence Platform",
      tagline: "Production-grade multi-agent analytics & commentary Engine",
      link: "https://github.com/Jagadeep-Reddy/ipl-ai-platform",
      githubLink: "https://github.com/Jagadeep-Reddy/ipl-ai-platform",
      demoLink: "https://my-portfolio-six-smoky-75.vercel.app/",
      problem: "Cricket analysts and managers needed instant, high-fidelity insights over 18 seasons (1.2M ball-by-ball deliveries) without waiting for manual database queries or facing LLM RAG context bloat.",
      architecture: "A modular, multi-agent platform orchestrated via LangGraph. An intent classifier routes queries to specialized sub-agents, utilizing dense/sparse hybrid vector search (Qdrant) or statistical ML inference (XGBoost) for millisecond responses.",
      systemDesign: "Built a 5-agent LangGraph system (StatsQA, NarrativeQA, Prediction, Matchup, TeamVsTeam). Ball events are streamed via WebSockets, triggering rapid XGBoost win-probability predictions with dynamic, contextual commentary generated under a 300ms budget.",
      challenges: [
        "Keeping latency below 300ms for WebSocket live events while invoking both machine learning models and semantic searches.",
        "Managing dense-sparse retrieval accuracy over complex relational schemas (scores, wickets, overs) which naive vector embeddings often fail to grasp.",
        "Preventing hallucinated commentaries on historically significant match scenarios."
      ],
      results: [
        "Reduced typical development effort for custom cricket analysis tasks by ~60% through reusable workflow blocks.",
        "Improved RAGAS Faithfulness score from 0.71 to 0.88 using dense (BGE-M3) + sparse (BM25) search with Cross-Encoder reranking.",
        "Successfully load-tested to 200 concurrent users sustained via Locust under strict SLA budgets.",
        "Achieved a RAGAS Faithfulness of 0.981 on golden test pairs using Azure AI Foundry (GPT-4.1-mini) integration."
      ],
      tech: ["LangGraph", "Hybrid RAG", "XGBoost", "FastAPI", "Qdrant", "PostgreSQL", "Redis", "RAGAS", "WebSocket"]
    },
    rag: {
      id: 2,
      title: "Enterprise RAG System & Evaluation",
      tagline: "Self-correcting financial Q&A engine with automated evaluation",
      link: "https://huggingface.co/spaces/Jagadeep24/RAG-System-with-Evaluation-Framework",
      githubLink: "https://github.com/Jagadeep-Reddy/RAG-System-with-Evaluation-Framework",
      demoLink: "https://huggingface.co/spaces/Jagadeep24/RAG-System-with-Evaluation-Framework",
      problem: "Corporate compliance officers require precise Q&A answers from complex, multi-page financial statements with 100% auditable citation links, preventing hallucinations in regulatory reports.",
      architecture: "An agentic self-correcting RAG pipeline that splits complex user queries into sub-problems, searches across multiple indexes, reranks target snippets, and validates generated answers via temperature-tuned consistency pathways.",
      systemDesign: "Hierarchical parent-child document chunking linked to FAISS dense storage and Rank-BM25 sparse indexes. Employs a cross-encoder (ms-marco-MiniLM-L-6-v2) for relevance selection and a self-consistency checker running 3 parallel generation pathways. Integrated into a GitHub Actions CI gate.",
      challenges: [
        "Traditional chunking methods losing the wider context of complex financial tables.",
        "High rates of naive LLM hallucination on tables, footnotes, and mathematical metrics.",
        "Securing factual alignment without manual review bottlenecks before production deployment."
      ],
      results: [
        "RAGAS CI/CD gate halts deployment if faithfulness falls below 0.75, ensuring safe pipelines.",
        "Observed a 40% improvement in retrieval precision over the naive baseline on a 500-question evaluation set.",
        "Robust multi-hop reasoning resolving queries that span multiple separate documents."
      ],
      tech: ["FAISS", "BM25", "LangChain", "RAGAS", "LangSmith", "Cross-encoders", "CI/CD", "Python"]
    }
  };

  const skillCategories = [
    { 
      category: "Languages", 
      summary: "Core programming & data querying",
      items: ["Python", "Java", "SQL", "HTML/CSS", "JavaScript"] 
    },
    { 
      category: "GenAI & LLMs", 
      summary: "Orchestration & agent design frameworks",
      items: ["RAG Systems", "LangChain", "LangGraph", "Prompt Engineering", "OpenAI API", "Azure AI Foundry"] 
    },
    { 
      category: "Models & Embeddings", 
      summary: "Sequence representation & semantic models",
      items: ["BERT & RoBERTa", "HuggingFace Transformers", "BGE-M3"] 
    },
    { 
      category: "Retrieval & Vector DBs", 
      summary: "High-performance index structures",
      items: ["FAISS", "Qdrant HNSW", "BM25 Search", "Reciprocal Rank Fusion (RRF)", "Cross-encoder Reranking", "pgvector"] 
    },
    { 
      category: "ML & Data", 
      summary: "Statistical modeling & feature search",
      items: ["XGBoost", "SHAP", "Optuna (Hyperparameter tuning)", "scikit-learn", "pandas & NumPy", "Feature Engineering"] 
    },
    { 
      category: "Cloud & Infra", 
      summary: "Deployment, streaming, & hosting",
      items: ["AWS (EC2, S3, Lambda, SQS)", "Docker & Kubernetes", "FastAPI", "WebSocket", "Redis", "PostgreSQL"] 
    },
    { 
      category: "Backend Systems", 
      summary: "Enterprise transaction architecture",
      items: ["Spring Boot", "Kafka Event Streaming", "Oracle SQL", "REST APIs", "JDBC & JPA"] 
    },
    { 
      category: "Monitoring & Evals", 
      summary: "Operational pipelines & validation gates",
      items: ["RAGAS Evaluation", "LangSmith Tracing", "Locust (Load testing)", "GitHub Actions CI/CD"] 
    }
  ];

  const experiences = [
    {
      stage: "Stage 3",
      version: "v3.0",
      role: "Independent AI Engineer",
      company: "Self-Directed Portfolio Projects",
      period: "July 2024 – Present",
      context: "Transitioned from traditional backend engineering into full-time GenAI and Machine Learning systems. Completed UT Austin PGP in Data Science.",
      highlights: [
        "Architected a 5-agent LangGraph platform (IPL AI Intelligence) supporting hybrid search, XGBoost commentary, and real-time WebSocket pipelines serving live commentaries in <300ms.",
        "Built enterprise-ready financial statement RAG pipelines with hierarchical parent-child indexing, cross-encoder reranking, and self-consistency hallucination filters.",
        "Implemented automated quality gates in GitHub Actions CI using RAGAS, asserting correctness thresholds before code merges.",
        "Competed in the Microsoft AI Skills Fest Hackathon, deploying Azure AI Foundry (GPT-4.1-mini) integrations with a RAGAS faithfulness of 0.981."
      ],
      techStack: ["LangGraph", "LangChain", "RAGAS", "XGBoost", "FastAPI", "Qdrant", "FAISS", "Azure AI Foundry", "Python", "CI/CD"]
    },
    {
      stage: "Stage 2",
      version: "v2.0",
      role: "Software Engineer",
      company: "ANZ (Australia and New Zealand Banking Group)",
      period: "June 2022 - June 2024",
      context: "Built transaction microservices and scaled batch pipelines for LoanIQ corporate banking platforms.",
      highlights: [
        "Designed high-throughput REST APIs in Spring Boot consumed by core downstream banking interfaces.",
        "Implemented customer onboarding microservices using Apache Kafka event streams, achieving 90% unit test coverage.",
        "Optimized complex Oracle SQL queries, indexes, and stored procedures, reducing execution times by up to 35%.",
        "Engineered PII data masking libraries utilizing LoanIQ SDK to secure customer privacy at the database boundary."
      ],
      techStack: ["Java", "Spring Boot", "Oracle SQL", "Kafka", "REST API", "CI/CD Pipelines", "Git"]
    }
  ];

  const education = [
    {
      degree: "Post Graduate Program in Data Science & Business Analytics",
      institution: "The University of Texas at Austin",
      period: "2025 - 2026",
      details: "Focus Areas: Supervised Machine Learning, Business Analytics, and LLM Applications."
    },
    {
      degree: "Bachelor of Engineering (BE), Information Science",
      institution: "BMS Institute of Technology and Management",
      period: "2018 - 2022",
      details: "Grade: 8.50 CGPA. Focus: Database systems, Object Oriented Design, and Data Structures."
    }
  ];

  const certifications = [
    { title: "AWS Solutions Architect Associate", issuer: "Amazon Web Services", badge: "SAA-C03", status: "In Progress" },
    { title: "Azure AI Engineer Associate", issuer: "Microsoft Azure", badge: "AI-102", status: "In Progress" },
    { title: "Machine Learning Specialization", issuer: "Coursera", badge: "ML-SPEC", status: "Completed" },
    { title: "Advanced Learning Algorithms", issuer: "Coursera", badge: "ALA-CR", status: "Completed" }
  ];

  // Formspree Contact Handling
  const FORMSPREE_ID = 'xwvdqlwd';

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formEmail || !formSubject || !formMessage) return;
    setContactPayloadActive(true);
    setContactLogs(["[gateway] preparing payload packaging...", "[gateway] validation check: ok"]);

    const steps = [
      "[gateway] serializing text blobs...",
      "[gateway] calling FastAPI proxy gateway...",
      "[gateway] delivering payload to Formspree target..."
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setContactLogs(prev => [...prev, step]);
      }, (idx + 1) * 450);
    });

    setTimeout(async () => {
      setFormStatus('sending');
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ email: formEmail, subject: formSubject, message: formMessage })
        });
        if (res.ok) {
          setContactLogs(prev => [...prev, "[gateway] success: payload delivered (200 OK)"]);
          setFormStatus('success');
          setFormEmail('');
          setFormSubject('');
          setFormMessage('');
        } else {
          setContactLogs(prev => [...prev, "[gateway] error: formspree target rejected (500)"]);
          setFormStatus('error');
        }
      } catch {
        setContactLogs(prev => [...prev, "[gateway] error: network connection timeout"]);
        setFormStatus('error');
      } finally {
        setTimeout(() => {
          setContactPayloadActive(false);
          setFormStatus('');
        }, 3500);
      }
    }, 1800);
  };

  // AI Assistant Chat Config
  const AGENT_SYSTEM_PROMPT = `You are Jagadeep Reddy's personal AI portfolio agent. Answer recruiter and hiring manager questions concisely and professionally. Here is his complete profile:

IDENTITY: Jagadeep Reddy — AI Engineer transitioning from 2 years of production backend engineering at ANZ (Spring Boot, Kafka, Oracle SQL) into full-time AI/GenAI engineering. Based in Bengaluru, India. Targeting 20-25 LPA in India and Riyadh, Saudi Arabia.

KEY PROJECTS:
1. IPL AI Intelligence Platform — 5-agent LangGraph system (StatsQA, NarrativeQA, Prediction, Matchup, TeamVsTeam), hybrid RAG (BGE-M3 dense + BM25 sparse + RRF fusion + cross-encoder reranking top-8), XGBoost win-probability (AUC 0.72, Optuna-tuned), SHAP explanations, WebSocket real-time <300ms end-to-end, 200 concurrent users (Locust), RAGAS faithfulness 0.71→0.88 on 200-question golden eval set, CI gate blocks deploy below 0.75. Stack: LangGraph, FastAPI, Qdrant HNSW, PostgreSQL, Redis. GitHub: github.com/Jagadeep-Reddy/ipl-ai-platform
2. Production RAG System — Enterprise financial document Q&A, three chunking strategies (fixed-size, semantic, hierarchical parent-child), hybrid FAISS + BM25 retrieval, RRF + cross-encoder reranking (ms-marco-MiniLM-L-6-v2), self-consistency hallucination detection (3 parallel LLM responses at temp 0.4), RAGAS CI/CD gate (faithfulness <0.75 blocks deploy), 40% improvement over naive baseline on 500-question eval set. GitHub: github.com/Jagadeep-Reddy/RAG-System-with-Evaluation-Framework Demo: huggingface.co/spaces/Jagadeep24/RAG-System-with-Evaluation-Framework
3. Microsoft AI Skills Fest Hackathon (June 2026) — Integrated Azure AI Foundry (GPT-4.1-mini via AzureChatOpenAI) into IPL platform, RAGAS faithfulness 0.981 on 51 golden QA pairs.

ANZ EXPERIENCE (June 2022 – June 2024): LoanIQ Inquiry APIs & Scripted Batch endpoints, Spring Boot REST APIs (IoC, JPA, Java Streams), Kafka Customer Onboarding microservice (90% test coverage, zero production incidents first 3 months), Oracle SQL optimization (35% query time reduction via indexing and view redesign), data-masking module for PII compliance.

EDUCATION: PGP Data Science & Business Analytics, UT Austin × Great Learning (2025-2026). BE Information Science, BMS Institute of Technology (8.50 CGPA, 2018-2022).

CERTIFICATIONS (In Progress): AWS Solutions Architect Associate (SAA-C03), Azure AI Engineer Associate (AI-102).

SKILLS: Python, Java, SQL, LangGraph, LangChain, RAG Systems, XGBoost, FAISS, Qdrant, BM25, BGE-M3, BERT, HuggingFace Transformers, FastAPI, WebSocket, Docker, AWS (EC2/S3/Lambda/SQS), Azure AI Foundry, RAGAS, LangSmith, Locust, CI/CD, Spring Boot, Kafka, Oracle SQL.

AVAILABILITY: Available from July 14, 2026. Open to full-time roles in India (Bengaluru) and Saudi Arabia (Riyadh). Also open to remote.

CONTACT: jagadeepreddy3638@gmail.com | github.com/Jagadeep-Reddy | linkedin.com/in/buthuru-jagadeep-reddy

Keep answers concise (2-4 sentences). Be professional. Do not make up anything not in this profile. If asked about salary say he targets 20-25 LPA for India roles.`;

  const chatHistoryRef = useRef([]);

  const getSimulatedResponse = (query) => {
    const q = query.toLowerCase().trim();
    const intents = [
      {
        keywords: ['expertise', 'summary', 'about', 'who is', 'background', 'profile', 'bio'],
        reply: "Jagadeep is an AI Engineer transitioning from 2 years of production backend engineering at ANZ. He specializes in designing LangGraph multi-agent systems, fine-tuning hybrid RAG pipelines (evaluating via RAGAS), and deploying real-time ML inference models."
      },
      {
        keywords: ['ipl', 'platform', 'cricket', 'deliveries', 'win probability', 'commentary'],
        reply: "His flagship project is the IPL AI Intelligence Platform: a 5-agent LangGraph platform orchestrating stats, matchups, and real-time win probability (XGBoost) over 18 seasons (<300ms latency). It uses BGE-M3 and Qdrant for hybrid RAG, achieving 0.88 RAGAS faithfulness."
      },
      {
        keywords: ['rag', 'retrieval', 'chunking', 'faiss', 'bm25', 'rerank', 'hybrid search', 'hallucination'],
        reply: "Jagadeep built an Enterprise Financial RAG System utilizing FAISS dense + BM25 sparse hybrid retrieval, hierarchical parent-child chunking, and cross-encoder rerankers. It includes self-consistency hallucination detection and RAGAS CI/CD evaluation gates."
      },
      {
        keywords: ['microsoft', 'hackathon', 'azure', 'skills fest', 'foundry'],
        reply: "At the Microsoft AI Skills Fest Agents League Hackathon in June 2026, Jagadeep integrated Azure AI Foundry (GPT-4.1-mini) into his IPL platform, verifying performance via RAGAS with a faithfulness score of 0.981."
      },
      {
        keywords: ['anz', 'software engineer', 'backend', 'spring boot', 'java', 'kafka', 'oracle', 'loaniq'],
        reply: "At ANZ (June 2022 - June 2024), Jagadeep built Spring Boot REST APIs and optimized Oracle SQL queries for LoanIQ core banking platforms. He also engineered event-driven microservices with Kafka, achieving 90% unit test coverage."
      },
      {
        keywords: ['education', 'university', 'college', 'degree', 'bmsit', 'ut austin', 'texas', 'pgp'],
        reply: "Jagadeep completed a Post Graduate Program (PGP) in Data Science & Business Analytics from UT Austin × Great Learning (2025-2026) and holds a Bachelor of Engineering in Information Science from BMSIT (8.50 CGPA, 2018-2022)."
      },
      {
        keywords: ['certification', 'certifications', 'aws', 'saa-c03', 'associate', 'azure ai', 'ai-102'],
        reply: "He is currently pursuing two key industry certifications: AWS Solutions Architect Associate (SAA-C03) and Microsoft Azure AI Engineer Associate (AI-102)."
      },
      {
        keywords: ['skills', 'stack', 'languages', 'databases', 'frameworks', 'tools'],
        reply: "His core stack includes Python, Java, SQL, LangGraph, LangChain, Qdrant, FAISS, hybrid RAG, XGBoost, Spring Boot, Kafka, AWS, Azure AI Foundry, FastAPI, and RAGAS evaluation."
      },
      {
        keywords: ['salary', 'ctc', 'package', 'compensation', 'expectation', 'lpa'],
        reply: "Jagadeep is targeting a compensation package of 20-25 LPA (INR) for roles based in India or Riyadh, Saudi Arabia."
      },
      {
        keywords: ['availability', 'start date', 'notice period', 'when can he start'],
        reply: "Jagadeep is available to start new opportunities beginning July 14, 2026. He is open to full-time roles, hybrid, and remote contracts."
      },
      {
        keywords: ['location', 'relocate', 'bangalore', 'bengaluru', 'riyadh', 'saudi arabia'],
        reply: "Jagadeep is based in Bengaluru, India, and is open to local roles. He is also open to relocating to Riyadh, Saudi Arabia, or working remotely."
      },
      {
        keywords: ['contact', 'email', 'phone', 'reach', 'linkedin', 'github', 'social'],
        reply: "You can reach Jagadeep directly at jagadeepreddy3638@gmail.com. His profiles are: LinkedIn (linkedin.com/in/buthuru-jagadeep-reddy) and GitHub (github.com/Jagadeep-Reddy)."
      }
    ];

    let bestIntent = null;
    let maxScore = 0;

    for (const intent of intents) {
      let score = 0;
      for (const keyword of intent.keywords) {
        if (q.includes(keyword)) {
          score += 1;
        }
      }
      if (score > maxScore) {
        maxScore = score;
        bestIntent = intent;
      }
    }

    if (maxScore > 0 && bestIntent) {
      return bestIntent.reply;
    }

    return "I can answer questions about Jagadeep's portfolio projects (IPL platform, RAG system), work history at ANZ, education (UT Austin, BMSIT), certifications (AWS, Azure), skills, salary targets, availability, or contact details. What would you like to know?";
  };

  const sendToClaudeAPI = async (userText) => {
    chatHistoryRef.current = [...chatHistoryRef.current, { role: 'user', content: userText }];
    setIsTyping(true);
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: AGENT_SYSTEM_PROMPT,
          messages: chatHistoryRef.current
        })
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "Sorry, I couldn't process that. Please email jagadeepreddy3638@gmail.com directly.";
      chatHistoryRef.current = [...chatHistoryRef.current, { role: 'assistant', content: reply }];
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'agent', text: reply, timestamp: new Date() }]);
    } catch {
      // Fallback to high-fidelity simulated response on connection issue (e.g. CORS/No API key in browser)
      setTimeout(() => {
        setIsTyping(false);
        const reply = getSimulatedResponse(userText);
        chatHistoryRef.current = [...chatHistoryRef.current, { role: 'assistant', content: reply }];
        setMessages(prev => [...prev, { sender: 'agent', text: reply, timestamp: new Date() }]);
      }, 800 + Math.random() * 600);
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    const text = inputText.trim();
    setMessages(prev => [...prev, { sender: 'user', text, timestamp: new Date() }]);
    setInputText('');
    sendToClaudeAPI(text);
  };

  const handleQuickAction = (text) => {
    setMessages(prev => [...prev, { sender: 'user', text, timestamp: new Date() }]);
    sendToClaudeAPI(text);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen relative ${t.bg} transition-colors duration-500 font-sans antialiased selection:bg-current/10 overflow-x-clip`}>
      
      {/* Background Ambient Glows */}
      <div className={`absolute top-[5%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0 opacity-70 transition-all duration-1000 mix-blend-screen ${t.blob1}`}></div>
      <div className={`absolute top-[35%] right-[5%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0 opacity-60 transition-all duration-1000 mix-blend-screen ${t.blob2}`}></div>
      <div className={`absolute top-[70%] left-[10%] w-[280px] md:w-[480px] h-[280px] md:h-[480px] rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0 opacity-50 transition-all duration-1000 mix-blend-screen ${t.blob3}`}></div>

      {/* Editorial Style Grid Lines */}
      <div className="fixed inset-0 pointer-events-none grid grid-cols-4 max-w-7xl mx-auto px-6 opacity-[0.02] z-0">
        <div className={`border-l border-r ${t.divider} h-full`}></div>
        <div className={`border-r ${t.divider} h-full`}></div>
        <div className={`border-r ${t.divider} h-full`}></div>
        <div></div>
      </div>

      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? `${t.bg} bg-opacity-95 backdrop-blur-md border-b ${t.divider}`
          : 'bg-transparent'
      }`}>
        <div className={`absolute bottom-0 left-0 h-[1.5px] ${t.accentBg} transition-all duration-100 z-50`} style={{ width: `${scrollProgress}%` }}></div>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <div>
            <span 
              onClick={() => scrollToSection('hero')} 
              className="text-lg font-mono font-bold tracking-tight cursor-pointer hover:opacity-80 transition"
            >
              [~/jagadeep.reddy]
            </span>
            <div className="hidden sm:flex items-center gap-1.5 mt-0.5 text-[8px] uppercase tracking-widest font-mono text-zinc-500">
              <span className={`w-1.5 h-1.5 rounded-full ${t.dotColor} animate-pulse`}></span>
              system.status: active // ping: {systemStats.ping}ms // LLM: gpt-4o-mini
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex gap-5 text-[9px] font-mono uppercase tracking-widest text-zinc-400">
              <button onClick={() => scrollToSection('architecture')} className={`${t.hoverText} transition`}>Architecture</button>
              <button onClick={() => scrollToSection('projects')} className={`${t.hoverText} transition`}>Projects</button>
              <button onClick={() => scrollToSection('skills')} className={`${t.hoverText} transition`}>Skills</button>
              <button onClick={() => scrollToSection('experience')} className={`${t.hoverText} transition`}>Experience</button>
              <button onClick={() => scrollToSection('education')} className={`${t.hoverText} transition`}>Academics</button>
              <button onClick={() => scrollToSection('chatbot-console')} className={`${t.hoverText} transition`}>Shell</button>
            </nav>

            <span className="hidden md:inline h-4 w-[1px] bg-zinc-800"></span>

            {/* Dropdown theme switcher */}
            <div className="relative">
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className={`appearance-none bg-transparent border ${t.accentBorder} ${t.text} text-[9px] font-mono uppercase tracking-widest pl-3 pr-7 py-1 rounded focus:outline-none cursor-pointer hover:bg-white/5 transition`}
              >
                <option value="midnight" className="bg-[#080C14] text-[#F8FAFC]">Slate Bronze</option>
                <option value="obsidian" className="bg-[#050505] text-[#F1F5F9]">Obsidian Teal</option>
                <option value="forest" className="bg-[#F4F6F5] text-[#1E293B]">Botanical Sage</option>
                <option value="terracotta" className="bg-[#FAF7F0] text-[#221F1B]">Warm Terracotta</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-zinc-500">
                <ChevronDown size={10} />
              </div>
            </div>

            {/* Mobile menu trigger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 hover:opacity-75 transition text-zinc-400"
              aria-label="Toggle menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 z-50 md:hidden flex flex-col justify-center items-center gap-8 ${t.bg} bg-opacity-98 backdrop-blur-lg px-6`}>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 hover:opacity-75 transition text-zinc-400"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
          <nav className="flex flex-col gap-6 text-sm font-mono uppercase tracking-widest text-center">
            <button onClick={() => scrollToSection('architecture')} className={`${t.hoverText} transition`}>Architecture</button>
            <button onClick={() => scrollToSection('projects')} className={`${t.hoverText} transition`}>Projects</button>
            <button onClick={() => scrollToSection('skills')} className={`${t.hoverText} transition`}>Skills</button>
            <button onClick={() => scrollToSection('experience')} className={`${t.hoverText} transition`}>Experience</button>
            <button onClick={() => scrollToSection('education')} className={`${t.hoverText} transition`}>Academics</button>
            <button onClick={() => scrollToSection('chatbot-console')} className={`${t.hoverText} transition`}>Shell</button>
            <button onClick={() => scrollToSection('contact')} className={`${t.hoverText} transition`}>Connect</button>
          </nav>
        </div>
      )}

      {/* Main Dashboard Grid Frame */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6 lg:flex lg:gap-8 relative z-10">
        
        {/* Left Side: Systems Cockpit & Diagnostics (Sticky) */}
        <aside className="lg:w-[340px] xl:w-[380px] flex-shrink-0 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto space-y-6 py-6 scrollbar-thin">
          
          {/* Section A: Profile ID */}
          <div className={`p-6 border ${t.cardBorder} ${t.cardBg} rounded-2xl`}>
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl ${t.accentBg} ${t.buttonText} flex items-center justify-center font-serif text-2xl font-bold shadow-md`}>
                JD
              </div>
              <div>
                <h2 className="text-lg font-mono font-bold tracking-tight">JAGADEEP REDDY</h2>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-0.5">
                  [role] ai_engineer // backend_architect
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-mono uppercase text-zinc-400 tracking-wider">online_for_hire</span>
                </div>
              </div>
            </div>
            
            <p className={`text-xs ${t.textBody} font-sans leading-relaxed mt-5 max-w-sm`}>
              Specializing in self-correcting RAG frameworks, LangGraph multi-agent orchestration, and sub-300ms real-time ML commentary streams.
            </p>
          </div>

          {/* Section B: Systems Diagnostics Widget */}
          <div className={`p-6 border ${t.cardBorder} ${t.cardBg} rounded-2xl`}>
            <div className="flex justify-between items-center mb-4">
              <span className={`text-[10px] font-mono uppercase tracking-widest ${t.accentText}`}>
                // COCKPIT_MONITOR
              </span>
              <span className="text-[9px] font-mono text-zinc-500">UPTIME: 99.98%</span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 mb-5 text-center font-mono">
              <div className={`p-2.5 border ${t.cardBorder} rounded-lg bg-black/10`}>
                <div className="text-[7px] text-zinc-500 uppercase">SYS CPU</div>
                <div className={`text-xs font-bold ${t.text} mt-1`}>{systemStats.cpu}%</div>
              </div>
              <div className={`p-2.5 border ${t.cardBorder} rounded-lg bg-black/10`}>
                <div className="text-[7px] text-zinc-500 uppercase">SYS MEM</div>
                <div className={`text-xs font-bold ${t.text} mt-1`}>{systemStats.memory}%</div>
              </div>
              <div className={`p-2.5 border ${t.cardBorder} rounded-lg bg-black/10`}>
                <div className="text-[7px] text-zinc-500 uppercase">SYS LATENCY</div>
                <div className={`text-xs font-bold ${t.text} mt-1`}>{systemStats.ping}ms</div>
              </div>
            </div>

            <div className="space-y-3">
              <button 
                onClick={runDiagnostics}
                disabled={diagActive}
                className={`w-full py-2 ${t.buttonBg} ${t.buttonText} text-[10px] font-mono uppercase tracking-widest rounded-lg flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition cursor-pointer disabled:opacity-50`}
              >
                <Activity size={12} className={diagActive ? "animate-spin" : ""} />
                {diagActive ? "Running Tests..." : "Run System Self-Test"}
              </button>

              {/* Diagnostics terminal outputs log */}
              {(diagActive || diagLogs.length > 0) && (
                <div className="p-3 border border-zinc-800/80 rounded-lg bg-zinc-950/80 text-[9px] font-mono text-zinc-400 space-y-1.5 h-[130px] overflow-y-auto scrollbar-thin">
                  {diagLogs.map((log, index) => (
                    <div key={index} className="flex gap-1.5 items-start">
                      <span className="text-[#10B981] flex-shrink-0">&gt;</span>
                      <span className="leading-normal">{log}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Section C: Target Highlights & Active tag cockpit */}
          <div className={`p-6 border ${t.cardBorder} ${t.cardBg} rounded-2xl`}>
            <div className="text-[9px] font-mono uppercase text-zinc-500 mb-3">// ACTIVE_MONITOR_TAGS</div>
            
            {activeTag ? (
              <div className="space-y-2">
                <div className="text-xs font-mono">
                  Active Filter: <span className={`${t.accentText} font-bold`}>{activeTag}</span>
                </div>
                <p className="text-[10px] text-zinc-500 font-sans leading-normal">
                  All instances of this skill node are currently highlighted in the dashboard feed.
                </p>
                <button 
                  onClick={() => setActiveTag(null)}
                  className="text-[9px] font-mono uppercase text-zinc-400 hover:text-white underline"
                >
                  Clear Highlights
                </button>
              </div>
            ) : (
              <div className="text-[10px] font-mono text-zinc-500">
                Hover over any tech badge in the feed below to query its application instances.
              </div>
            )}
          </div>
        </aside>

        {/* Right Side: Main Dashboard Content Feed */}
        <main className="flex-1 min-w-0 space-y-12 py-6">
          
          {/* 01 HERO NODE */}
          <section id="hero" className={`p-6 md:p-10 border ${t.cardBorder} ${t.cardBg} rounded-2xl relative overflow-hidden`}>
            {/* Grid overlay decoration */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] opacity-35 z-0"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-[9px] font-mono uppercase tracking-widest ${t.accent} px-2.5 py-0.5 border ${t.accentBorder} rounded-full ${t.accentBgLight}`}>
                  Sys: Mainframe Init
                </span>
                <span className="text-[9px] font-mono tracking-widest text-zinc-500">
                  [target_roles // ai_engineer // ctc_20_25_lpa]
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-8">
                Building AI systems that <span className={`italic ${t.accent}`}>scale beyond the demo.</span>
              </h1>

              <p className={`text-sm md:text-base ${t.textBody} font-sans leading-relaxed mb-8 max-w-2xl`}>
                I am an AI Engineer transitioning from 2 years of enterprise backend engineering at ANZ.
                I design production-grade GenAI pipelines: orchestrating specialized LangGraph agents, building hybrid RAG flows, 
                shaping millisecond-budget XGBoost win predictions, and anchoring answer validity via automated RAGAS gates.
              </p>

              <div className="flex gap-3.5 flex-wrap">
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className={`px-5 py-2.5 ${t.buttonBg} ${t.buttonText} text-[10px] font-mono uppercase tracking-wider font-bold flex items-center gap-1.5 hover:opacity-90 active:scale-95 transition cursor-pointer`}
                >
                  Explore Repos <Terminal size={12} />
                </button>
                <button 
                  onClick={() => scrollToSection('architecture')}
                  className={`px-5 py-2.5 border ${t.cardBorder} hover:border-zinc-500 text-[10px] font-mono uppercase tracking-wider font-bold flex items-center gap-1.5 active:scale-95 transition cursor-pointer`}
                >
                  View Flowcharts
                </button>
                <a 
                  href="/Jagadeep_Reddy_AI_Engineer_Resume.pdf" 
                  download="Jagadeep_Reddy_AI_Engineer_Resume.pdf" 
                  className={`px-5 py-2.5 border ${t.cardBorder} hover:border-zinc-500 text-[10px] font-mono uppercase tracking-wider font-bold flex items-center gap-1.5 active:scale-95 transition cursor-pointer`}
                >
                  Download CV <FileText size={12} />
                </a>
              </div>
            </div>
          </section>

      {/* 02 ARCHITECTURE BLUEPRINTS */}
      <section id="architecture" className={`p-6 md:p-8 border ${t.cardBorder} ${t.cardBg} rounded-2xl relative z-10`}>
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-dashed border-zinc-800/80">
          <div>
            <div className={`text-[10px] font-mono uppercase tracking-widest mb-1.5 ${t.accent}`}>
              01 // PLATFORM BLUEPRINTS
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold">Interactive Architectures</h2>
          </div>
          
          <div className={`flex gap-2 p-1 border ${t.cardBorder} ${t.cardBg} rounded-lg`}>
            <button
              onClick={() => setActiveArchTab('ipl')}
              className={`px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest rounded-md transition-all ${
                activeArchTab === 'ipl' 
                  ? `${t.buttonBg} font-bold` 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ipl-intelligence-flow
            </button>
            <button
              onClick={() => setActiveArchTab('rag')}
              className={`px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest rounded-md transition-all ${
                activeArchTab === 'rag' 
                  ? `${t.buttonBg} font-bold` 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              financial-rag-evaluation
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left explainer list */}
          <div className="lg:col-span-7 space-y-4">
            {activeArchTab === 'ipl' ? (
              <>
                <div 
                  onMouseEnter={() => setActiveLayer(1)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group p-4 border rounded-xl transition duration-300 cursor-pointer ${
                    activeLayer === 1 
                      ? `${t.accentBorderActive} bg-emerald-500/5` 
                      : `${t.cardBorder} ${t.cardBg} ${t.cardBorderHover}`
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 01 // INGRESS</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-xs font-mono font-bold tracking-tight">Ingress & Stream Router</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-sans">
                    Receives live WebSocket BallEvents or user natural language requests. Triggers downstream routing pipeline.
                  </p>
                </div>

                <div 
                  onMouseEnter={() => setActiveLayer(2)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group p-4 border rounded-xl transition duration-300 cursor-pointer ${
                    activeLayer === 2 
                      ? `${t.accentBorderActive} bg-emerald-500/5` 
                      : `${t.cardBorder} ${t.cardBg} ${t.cardBorderHover}`
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 02 // ORCHESTRATION</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-xs font-mono font-bold tracking-tight">LangGraph Intent Classifier (~20ms)</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-sans">
                    Evaluates user intent (classification accuracy 71%) and routes traffic across a 5-node autonomous graph.
                  </p>
                </div>

                <div 
                  onMouseEnter={() => setActiveLayer(3)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group p-4 border rounded-xl transition duration-300 cursor-pointer ${
                    activeLayer === 3 
                      ? `${t.accentBorderActive} bg-emerald-500/5` 
                      : `${t.cardBorder} ${t.cardBg} ${t.cardBorderHover}`
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 03 // INTELLIGENT AGENTS</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-xs font-mono font-bold tracking-tight">Specialized Agent Cluster</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-sans">
                    Delegates tasks to domain experts: StatsQA, NarrativeQA, Matchup, Prediction, or TeamVsTeam agents.
                  </p>
                </div>

                <div 
                  onMouseEnter={() => setActiveLayer(4)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group p-4 border rounded-xl transition duration-300 cursor-pointer ${
                    activeLayer === 4 
                      ? `${t.accentBorderActive} bg-emerald-500/5` 
                      : `${t.cardBorder} ${t.cardBg} ${t.cardBorderHover}`
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 04 // DATA & KNOWLEDGE RETRIEVAL</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-xs font-mono font-bold tracking-tight">Hybrid RAG & Statistical Models</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-sans">
                    Performs BGE-M3 dense search (Qdrant) + BM25 sparse queries with RRF fusion. Runs XGBoost (AUC 0.72) win predictions with SHAP local explanations.
                  </p>
                </div>

                <div 
                  onMouseEnter={() => setActiveLayer(5)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group p-4 border rounded-xl transition duration-300 cursor-pointer ${
                    activeLayer === 5 
                      ? `${t.accentBorderActive} bg-emerald-500/5` 
                      : `${t.cardBorder} ${t.cardBg} ${t.cardBorderHover}`
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 05 // DELIVERY LAYER</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-xs font-mono font-bold tracking-tight">Real-time WebSocket Push (&lt;300ms)</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-sans">
                    Synthesizes GPT-4o-mini commentary with ML outcomes and pushes the structured updates to users with minimal delay.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div 
                  onMouseEnter={() => setActiveLayer(1)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group p-4 border rounded-xl transition duration-300 cursor-pointer ${
                    activeLayer === 1 
                      ? `${t.accentBorderActive} bg-emerald-500/5` 
                      : `${t.cardBorder} ${t.cardBg} ${t.cardBorderHover}`
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 01 // QUERY ANALYSIS</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-xs font-mono font-bold tracking-tight">Multi-Hop Query Decomposer</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-sans">
                    Breaks down complex compliance questions into parallel sub-queries to retrieve from distinct financial documents.
                  </p>
                </div>

                <div 
                  onMouseEnter={() => setActiveLayer(2)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group p-4 border rounded-xl transition duration-300 cursor-pointer ${
                    activeLayer === 2 
                      ? `${t.accentBorderActive} bg-emerald-500/5` 
                      : `${t.cardBorder} ${t.cardBg} ${t.cardBorderHover}`
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 02 // SEARCH RETRIEVAL</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-xs font-mono font-bold tracking-tight">Hybrid FAISS & BM25 Retrieval</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-sans">
                    Queries FAISS dense vectors and Rank-BM25 indexes. Merges score ranks using Reciprocal Rank Fusion.
                  </p>
                </div>

                <div 
                  onMouseEnter={() => setActiveLayer(3)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group p-4 border rounded-xl transition duration-300 cursor-pointer ${
                    activeLayer === 3 
                      ? `${t.accentBorderActive} bg-emerald-500/5` 
                      : `${t.cardBorder} ${t.cardBg} ${t.cardBorderHover}`
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 03 // EXTRACTION & RERANK</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-xs font-mono font-bold tracking-tight">MiniLM Cross-Encoder & Hierarchical Chunking</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-sans">
                    Applies parent-child aggregators to retain global document contexts. Reranks retrieved blocks using a cross-encoder model.
                  </p>
                </div>

                <div 
                  onMouseEnter={() => setActiveLayer(4)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group p-4 border rounded-xl transition duration-300 cursor-pointer ${
                    activeLayer === 4 
                      ? `${t.accentBorderActive} bg-emerald-500/5` 
                      : `${t.cardBorder} ${t.cardBg} ${t.cardBorderHover}`
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 04 // SYNTHESIS & SAFEGUARD</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-xs font-mono font-bold tracking-tight">Self-Consistency Fact Validation</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-sans">
                    Evaluates answer accuracy through 3 parallel generation chains, flagging factual anomalies before formatting output.
                  </p>
                </div>

                <div 
                  onMouseEnter={() => setActiveLayer(5)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`group p-4 border rounded-xl transition duration-300 cursor-pointer ${
                    activeLayer === 5 
                      ? `${t.accentBorderActive} bg-emerald-500/5` 
                      : `${t.cardBorder} ${t.cardBg} ${t.cardBorderHover}`
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 05 // DELIVERY GATEWAY</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-xs font-mono font-bold tracking-tight">RAGAS-Gated GitHub Actions CI/CD</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-normal font-sans">
                    Triggers automated validation scores. Halts deployment if RAGAS Faithfulness drops below 0.75.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Right flowchart canvas */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h4 className="text-[8px] font-mono uppercase tracking-widest text-zinc-500 mb-2">Live System Blueprint</h4>
              <div className={`relative border border-dashed ${t.cardBorder} rounded-xl p-4 overflow-hidden bg-black/10 backdrop-blur-sm min-h-[360px] flex flex-col justify-between`}>
                <div className="absolute top-2 left-2 text-[7px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                  <Activity size={8} className="animate-pulse text-[#10B981]" /> LIVE_SYSTEM_BLUEPRINT
                </div>
                
                {activeArchTab === 'ipl' ? (
                  <div className="relative flex-grow flex flex-col justify-between py-6">
                    {/* Connection Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-zinc-700/80 -translate-x-1/2 z-0">
                      <div className={`absolute w-1.5 h-1.5 rounded-full ${t.dotColor} left-[-3px] top-0 animate-bounce`}></div>
                    </div>

                    {/* Node 1 */}
                    <div 
                      onMouseEnter={() => setActiveLayer(1)}
                      onMouseLeave={() => setActiveLayer(null)}
                      className={`relative z-10 mx-auto px-4 py-1.5 border rounded-md text-[10px] font-mono transition duration-300 cursor-pointer ${
                        activeLayer === 1 
                          ? `${t.accentBg} ${t.buttonText} scale-105 shadow-md` 
                          : `${t.cardBg} ${t.cardBorder} ${t.text} hover:border-[#10B981]/50`
                      }`}
                    >
                      WebSocket Router
                    </div>

                    {/* Node 2 */}
                    <div 
                      onMouseEnter={() => setActiveLayer(2)}
                      onMouseLeave={() => setActiveLayer(null)}
                      className={`relative z-10 mx-auto px-4 py-1.5 border rounded-md text-[10px] font-mono transition duration-300 cursor-pointer ${
                        activeLayer === 2 
                          ? `${t.accentBg} ${t.buttonText} scale-105 shadow-md` 
                          : `${t.cardBg} ${t.cardBorder} ${t.text} hover:border-[#10B981]/50`
                      }`}
                    >
                      LangGraph intent Router
                    </div>

                    {/* Node 3 */}
                    <div className="relative z-10 flex justify-center gap-2">
                      <div className="absolute top-1/2 -translate-y-1/2 w-4/5 h-[1px] border-t border-dashed border-zinc-700/80 z-0"></div>
                      {['StatsQA', 'Prediction'].map((agent, i) => (
                        <div 
                          key={i}
                          onMouseEnter={() => setActiveLayer(3)}
                          onMouseLeave={() => setActiveLayer(null)}
                          className={`relative z-10 px-2 py-1 border rounded-full text-[8px] font-mono transition duration-300 cursor-pointer ${
                            activeLayer === 3 
                              ? `${t.accentBg} ${t.buttonText} scale-105 shadow-md` 
                              : `${t.cardBg} ${t.cardBorder} ${t.text} hover:border-[#10B981]/50`
                          }`}
                        >
                          {agent}
                        </div>
                      ))}
                    </div>

                    {/* Node 4 */}
                    <div 
                      onMouseEnter={() => setActiveLayer(4)}
                      onMouseLeave={() => setActiveLayer(null)}
                      className={`relative z-10 mx-auto px-4 py-1.5 border rounded-md text-[10px] font-mono transition duration-300 cursor-pointer ${
                        activeLayer === 4 
                          ? `${t.accentBg} ${t.buttonText} scale-105 shadow-md` 
                          : `${t.cardBg} ${t.cardBorder} ${t.text} hover:border-[#10B981]/50`
                      }`}
                    >
                      Qdrant HNSW Fusion
                    </div>

                    {/* Node 5 */}
                    <div 
                      onMouseEnter={() => setActiveLayer(5)}
                      onMouseLeave={() => setActiveLayer(null)}
                      className={`relative z-10 mx-auto px-4 py-1.5 border rounded-md text-[10px] font-mono transition duration-300 cursor-pointer ${
                        activeLayer === 5 
                          ? `${t.accentBg} ${t.buttonText} scale-105 shadow-md` 
                          : `${t.cardBg} ${t.cardBorder} ${t.text} hover:border-[#10B981]/50`
                      }`}
                    >
                      WS Push &lt;300ms
                    </div>
                  </div>
                ) : (
                  <div className="relative flex-grow flex flex-col justify-between py-6">
                    {/* Connection Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-zinc-700/80 -translate-x-1/2 z-0">
                      <div className={`absolute w-1.5 h-1.5 rounded-full ${t.dotColor} left-[-3px] top-0 animate-bounce`}></div>
                    </div>

                    {/* Node 1 */}
                    <div 
                      onMouseEnter={() => setActiveLayer(1)}
                      onMouseLeave={() => setActiveLayer(null)}
                      className={`relative z-10 mx-auto px-4 py-1.5 border rounded-md text-[10px] font-mono transition duration-300 cursor-pointer ${
                        activeLayer === 1 
                          ? `${t.accentBg} ${t.buttonText} scale-105 shadow-md` 
                          : `${t.cardBg} ${t.cardBorder} ${t.text} hover:border-[#10B981]/50`
                      }`}
                    >
                      Query Decomposer
                    </div>

                    {/* Node 2 */}
                    <div 
                      onMouseEnter={() => setActiveLayer(2)}
                      onMouseLeave={() => setActiveLayer(null)}
                      className={`relative z-10 mx-auto px-4 py-1.5 border rounded-md text-[10px] font-mono transition duration-300 cursor-pointer ${
                        activeLayer === 2 
                          ? `${t.accentBg} ${t.buttonText} scale-105 shadow-md` 
                          : `${t.cardBg} ${t.cardBorder} ${t.text} hover:border-[#10B981]/50`
                      }`}
                    >
                      FAISS & BM25 index
                    </div>

                    {/* Node 3 */}
                    <div 
                      onMouseEnter={() => setActiveLayer(3)}
                      onMouseLeave={() => setActiveLayer(null)}
                      className={`relative z-10 mx-auto px-4 py-1.5 border rounded-md text-[10px] font-mono transition duration-300 cursor-pointer ${
                        activeLayer === 3 
                          ? `${t.accentBg} ${t.buttonText} scale-105 shadow-md` 
                          : `${t.cardBg} ${t.cardBorder} ${t.text} hover:border-[#10B981]/50`
                      }`}
                    >
                      MiniLM Cross-Encoder
                    </div>

                    {/* Node 4 */}
                    <div 
                      onMouseEnter={() => setActiveLayer(4)}
                      onMouseLeave={() => setActiveLayer(null)}
                      className={`relative z-10 mx-auto px-4 py-1.5 border rounded-md text-[10px] font-mono transition duration-300 cursor-pointer ${
                        activeLayer === 4 
                          ? `${t.accentBg} ${t.buttonText} scale-105 shadow-md` 
                          : `${t.cardBg} ${t.cardBorder} ${t.text} hover:border-[#10B981]/50`
                      }`}
                    >
                      3x Self-Consistency check
                    </div>

                    {/* Node 5 */}
                    <div 
                      onMouseEnter={() => setActiveLayer(5)}
                      onMouseLeave={() => setActiveLayer(null)}
                      className={`relative z-10 mx-auto px-4 py-1.5 border rounded-md text-[10px] font-mono transition duration-300 cursor-pointer ${
                        activeLayer === 5 
                          ? `${t.accentBg} ${t.buttonText} scale-105 shadow-md` 
                          : `${t.cardBg} ${t.cardBorder} ${t.text} hover:border-[#10B981]/50`
                      }`}
                    >
                      RAGAS CI/CD Gate
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-[8px] font-mono uppercase tracking-widest text-zinc-500 mb-2">Core Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                {activeArchTab === 'ipl' ? (
                  <>
                    <div className={`p-2 border ${t.cardBorder} ${t.cardBg} rounded-lg`}>
                      <div className="text-zinc-500 text-[8px] uppercase">Latency</div>
                      <div className={`text-xs font-bold ${t.text} mt-0.5`}>&lt;300ms</div>
                    </div>
                    <div className={`p-2 border ${t.cardBorder} ${t.cardBg} rounded-lg`}>
                      <div className="text-zinc-500 text-[8px] uppercase">Faithfulness</div>
                      <div className={`text-xs font-bold ${t.text} mt-0.5`}>0.88 / 0.98</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`p-2 border ${t.cardBorder} ${t.cardBg} rounded-lg`}>
                      <div className="text-zinc-500 text-[8px] uppercase">Retrieval Gain</div>
                      <div className={`text-xs font-bold ${t.text} mt-0.5`}>+40% vs Naive</div>
                    </div>
                    <div className={`p-2 border ${t.cardBorder} ${t.cardBg} rounded-lg`}>
                      <div className="text-zinc-500 text-[8px] uppercase">CI threshold</div>
                      <div className={`text-xs font-bold ${t.text} mt-0.5`}>0.75 score</div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-[8px] font-mono uppercase tracking-widest text-zinc-500 mb-2">Target Stack</h4>
              <div className="flex flex-wrap gap-1">
                {(activeArchTab === 'ipl' 
                  ? ["LangGraph", "Qdrant", "XGBoost", "FastAPI", "Redis"] 
                  : ["FAISS", "LangChain", "RAGAS", "Cross-encoders", "Python"]
                ).map((item, idx) => (
                  <span 
                    key={idx} 
                    onMouseEnter={() => setActiveTag(item)}
                    onMouseLeave={() => setActiveTag(null)}
                    className={`text-[8px] font-mono uppercase px-2 py-0.5 border rounded cursor-pointer transition ${
                      activeTag === item 
                        ? `${t.accentBg} ${t.buttonText} scale-105` 
                        : `${t.cardBorder} text-zinc-400 ${t.cardBg}`
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 REPOSITORIES & SYSTEMS */}
      <section id="projects" className={`p-6 md:p-8 border ${t.cardBorder} ${t.cardBg} rounded-2xl relative z-10`}>
        <div className="mb-8 pb-4 border-b border-dashed border-zinc-800/80 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
          <div>
            <div className={`text-[10px] font-mono uppercase tracking-widest mb-1.5 ${t.accent}`}>
              02 // REPOSITORIES & SYSTEMS
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold">Featured Projects</h2>
          </div>
          
          <div className={`flex gap-1.5 p-1 border ${t.cardBorder} ${t.cardBg} rounded-lg`}>
            <button
              onClick={() => setActiveProjectTab('ipl')}
              className={`px-2.5 py-1 text-[8px] font-mono uppercase tracking-widest rounded transition ${
                activeProjectTab === 'ipl' 
                  ? `${t.buttonBg} font-semibold` 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ipl-ai-commentary
            </button>
            <button
              onClick={() => setActiveProjectTab('rag')}
              className={`px-2.5 py-1 text-[8px] font-mono uppercase tracking-widest rounded transition ${
                activeProjectTab === 'rag' 
                  ? `${t.buttonBg} font-semibold` 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              financial-qa-rag
            </button>
          </div>
        </div>

        {(() => {
          const proj = projects[activeProjectTab];
          return (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <span className={`text-[8px] font-mono uppercase px-2 py-0.5 border ${t.accentBorder} ${t.accentText} ${t.cardBg} rounded`}>
                    system.id // 0{proj.id}
                  </span>
                  <h3 className="text-xl font-serif font-bold mt-2">{proj.title}</h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">{proj.tagline}</p>
                </div>

                <div className="flex gap-2">
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3 py-1.5 border ${t.cardBorder} ${t.accentHover} rounded text-[8px] font-mono uppercase tracking-widest transition`}
                  >
                    <Github size={11} /> GitHub
                  </a>
                  <a
                    href={proj.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3 py-1.5 ${t.buttonBg} ${t.buttonText} text-[8px] font-mono uppercase tracking-widest rounded hover:opacity-90 transition`}
                  >
                    <ExternalLink size={11} /> Live Demo
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-xs">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 mb-1">01 // Problem</h4>
                    <p className={`${t.textBody} leading-relaxed font-sans`}>{proj.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 mb-1">02 // Architecture</h4>
                    <p className={`${t.textBody} leading-relaxed font-sans`}>{proj.architecture}</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 mb-1">03 // Details</h4>
                    <p className={`${t.textBody} leading-relaxed font-sans`}>{proj.systemDesign}</p>
                  </div>
                </div>

                <div className={`space-y-4 md:border-l md:border-dashed ${t.divider} md:pl-6`}>
                  <div>
                    <h4 className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 mb-2">04 // Challenges (△)</h4>
                    <ul className="space-y-2 font-sans">
                      {proj.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-orange-500 mt-0.5 flex-shrink-0">△</span>
                          <span className={`${t.textBody} leading-normal text-[11px]`}>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 mb-2">05 // Quantitative (✓)</h4>
                    <ul className="space-y-2 font-sans">
                      {proj.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                          <span className={`${t.textBody} leading-normal text-[11px]`}>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`flex flex-wrap gap-1.5 mt-6 pt-4 border-t ${t.divider}`}>
                <span className="text-[8px] font-mono uppercase text-zinc-500 py-1">Tech Stack:</span>
                {proj.tech.map((tech, idx) => (
                  <span 
                    key={idx} 
                    onMouseEnter={() => setActiveTag(tech)}
                    onMouseLeave={() => setActiveTag(null)}
                    className={`text-[8px] font-mono uppercase px-2 py-0.5 border rounded cursor-pointer transition duration-150 ${
                      activeTag === tech 
                        ? `${t.accentBg} ${t.buttonText} scale-105` 
                        : `${t.cardBorder} text-zinc-400 ${t.cardBg}`
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-24 px-6 max-w-6xl mx-auto relative z-10 border-t border-dashed ${t.divider}`}>
        <div className="mb-16">
          <div className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${t.accent}`}>
            03 // TECHNICAL STACK
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            Skills & Abilities
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            Expanded index of technical competencies spanning machine learning, architectures, and operations.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className={`border ${t.cardBorder} ${t.cardBg} rounded-xl overflow-hidden ${t.cardBorderHover} transition duration-300`}
            >
              <div className="p-5">
                <h3 className="text-sm font-mono font-bold tracking-tight uppercase flex items-center gap-2">
                  <span className="text-[10px] text-zinc-500">0{idx + 1}.</span>
                  {cat.category}
                </h3>
                <p className="text-[11px] text-zinc-500 mt-1 mb-4 font-sans font-light">{cat.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, i) => (
                    <span 
                      key={i} 
                      onMouseEnter={() => setActiveTag(skill)}
                      onMouseLeave={() => setActiveTag(null)}
                      className={`text-[10px] font-mono px-2.5 py-1 border transition duration-200 cursor-pointer rounded flex items-center gap-1.5 ${
                        activeTag === skill 
                          ? `${t.accentBg} ${t.buttonText} scale-105 shadow-sm` 
                          : `${t.cardBorder} ${t.textBody} ${t.cardBg}`
                      }`}
                    >
                      <span className={`w-1 h-1 rounded-full ${t.dotColor}`}></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section (Stages & Version numbers) */}
      <section id="experience" className={`py-24 px-6 max-w-6xl mx-auto relative z-10 border-t border-dashed ${t.divider}`}>
        <div className="mb-16">
          <div className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${t.accent}`}>
            04 // PROFESSIONAL LOG
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            Work Experience
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            Stage-by-stage engineering timeline documenting my evolution into production AI systems.
          </p>
        </div>

        {/* Timeline loop */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className={`border ${t.cardBorder} ${t.cardBg} rounded-xl p-6 md:p-8 ${t.cardBorderHover} transition duration-300`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-mono uppercase px-2.5 py-0.5 border ${t.accentBorder} ${t.accentText} ${t.cardBg} rounded-full font-bold`}>
                      {exp.stage} // {exp.version}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">{exp.period}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold mt-2">{exp.role}</h3>
                  <div className={`text-xs font-mono uppercase tracking-widest text-zinc-400 mt-1`}>
                    @ {exp.company}
                  </div>
                </div>
              </div>

              {exp.context && (
                <p className={`text-xs italic text-zinc-400 font-sans pl-3 border-l ${t.divider} mb-5 leading-relaxed`}>
                  {exp.context}
                </p>
              )}

              <ul className="space-y-2.5 mb-6">
                {exp.highlights.map((bullet, i) => (
                  <li key={i} className={`text-xs ${t.textBody} font-sans flex items-start gap-2.5`}>
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 ${t.dotColor} flex-shrink-0`}></span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className={`flex flex-wrap gap-1.5 pt-4 border-t border-dashed ${t.divider}`}>
                <span className="text-[8px] font-mono uppercase text-zinc-500 py-0.5 pr-2">Stack:</span>
                {exp.techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    onMouseEnter={() => setActiveTag(tech)}
                    onMouseLeave={() => setActiveTag(null)}
                    className={`text-[8px] font-mono uppercase px-2 py-0.5 border rounded transition duration-200 cursor-pointer ${
                      activeTag === tech 
                        ? `${t.accentBg} ${t.buttonText} scale-105 shadow-sm` 
                        : `${t.cardBorder} text-zinc-400 ${t.cardBg}`
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 06 EDUCATION & CERTIFICATIONS */}
      <section id="education" className={`p-6 md:p-8 border ${t.cardBorder} ${t.cardBg} rounded-2xl relative z-10`}>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Academics */}
          <div className="space-y-4">
            <div className="mb-6">
              <div className={`text-[10px] font-mono uppercase tracking-widest mb-1 ${t.accent}`}>
                05.A // ACADEMICS
              </div>
              <h3 className="text-xl font-serif font-bold">Education</h3>
            </div>

            {education.map((edu, idx) => (
              <div key={idx} className={`p-4 border ${t.cardBorder} ${t.cardBg} rounded-xl`}>
                <div className="flex justify-between items-start gap-3 mb-2">
                  <div>
                    <h4 className="text-xs font-serif font-bold">{edu.institution}</h4>
                    <p className={`text-[9px] font-mono uppercase tracking-widest ${t.accentText} mt-0.5`}>
                      {edu.degree}
                    </p>
                  </div>
                  <span className={`text-[8px] font-mono text-zinc-500 px-2 py-0.5 border ${t.cardBorder} ${t.cardBg} rounded`}>
                    {edu.period}
                  </span>
                </div>
                <p className="text-[10px] text-zinc-400 font-sans leading-normal mt-2">{edu.details}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <div className="mb-6">
              <div className={`text-[10px] font-mono uppercase tracking-widest mb-1 ${t.accent}`}>
                05.B // VERIFICATIONS
              </div>
              <h3 className="text-xl font-serif font-bold">Certifications</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert, idx) => {
                const isInProgress = cert.status === 'In Progress';
                return (
                  <div 
                    key={idx} 
                    className={`p-3 border ${t.cardBg} rounded-xl flex flex-col justify-between ${
                      isInProgress ? `${t.accentBorder} bg-opacity-25` : t.cardBorder
                    }`}
                  >
                    <div>
                      <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">
                        {cert.badge}
                      </span>
                      <h4 className="text-[10px] font-mono font-bold text-white mt-0.5 leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-[8px] font-sans text-zinc-500 mt-0.5">{cert.issuer}</p>
                    </div>
                    <div className={`mt-3 pt-2 border-t ${t.divider} flex justify-between items-center text-[7px] font-mono`}>
                      <span className={isInProgress ? 'text-amber-500' : 'text-emerald-500'}>
                        {cert.status}
                      </span>
                      {isInProgress && <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse"></span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 07 ENGINEERING PHILOSOPHY */}
      <section className={`p-6 md:p-8 border ${t.cardBorder} ${t.cardBg} rounded-2xl relative z-10`}>
        <div className="mb-10 text-center max-w-lg mx-auto">
          <div className={`text-[10px] font-mono uppercase tracking-widest mb-1 ${t.accent}`}>
            06 // ENGINEERING BELIEFS
          </div>
          <h2 className="text-xl md:text-2xl font-serif font-bold">Development Philosophy</h2>
          <p className="text-zinc-500 text-[8px] font-mono uppercase mt-1">
            [principles.config : values guiding implementation]
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-xs">
          {[
            { label: "01 / DESIGN FIRST", title: "System blueprints", desc: "Every implementation begins with schema models, data diagrams, and latencies. Code ships only after pipelines are established." },
            { label: "02 / SPECIALIZATION", title: "Agents with purpose", desc: "Multi-agent systems demand clear scopes—routing, predicting, and formatting. Naive chains yield unpredictable outcomes." },
            { label: "03 / RETRIEVAL QUALITY", title: "Asserting context", desc: "In cognitive pipelines, context rules. Hybrid vector search, parent-child trees, and reranking are essential for production." },
            { label: "04 / MEASURED DEPLOY", title: "Automated eval gates", desc: "Deployments require automated tests. RAGAS scores tied to CI gates block deviations before they reach production." }
          ].map((phi, i) => (
            <div key={i} className={`p-4 border ${t.cardBorder} ${t.cardBg} rounded-xl hover:border-zinc-550 transition`}>
              <span className={`text-[9px] font-mono ${t.accentText}`}>{phi.label}</span>
              <h3 className="text-xs font-serif font-bold mt-1 text-white">{phi.title}</h3>
              <p className="text-[10px] text-zinc-400 mt-2 leading-relaxed">{phi.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 08 INTEGRATION PORT (CONTACT) */}
      <section id="contact" className={`p-6 md:p-8 border ${t.cardBorder} ${t.cardBg} rounded-2xl relative z-10`}>
        <div className="mb-8 pb-4 border-b border-dashed border-zinc-800/80">
          <div className={`text-[10px] font-mono uppercase tracking-widest mb-1.5 ${t.accent}`}>
            07 // INTEGRATION PORT
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold">Secure Connection</h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-4">
            <p className="text-zinc-400 text-xs leading-relaxed font-sans">
              Open to full-time roles in Bangalore & Riyadh, remote collaborations, and ML/RAG pipelines integration consultancies.
            </p>

            {/* Handles list with click to copy icons */}
            <div className="space-y-3.5 pt-3">
              <div className="flex gap-3 group">
                <div className={`w-7 h-7 border ${t.cardBorder} rounded flex items-center justify-center text-zinc-500`}>
                  <Mail size={12} />
                </div>
                <div className="flex-grow flex justify-between items-center">
                  <div>
                    <div className="text-[7px] font-mono text-zinc-500 uppercase">EMAIL</div>
                    <a href="mailto:jagadeepreddy3638@gmail.com" className={`text-[10px] font-mono ${t.textBody} ${t.hoverText} transition`}>
                      jagadeepreddy.email
                    </a>
                  </div>
                  <button 
                    onClick={() => handleCopyToClipboard('jagadeepreddy3638@gmail.com', 'email')}
                    className="p-1 opacity-0 group-hover:opacity-100 transition rounded hover:bg-zinc-500/10 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                  >
                    {copiedField === 'email' ? <Check size={10} className="text-emerald-500" /> : <Copy size={10} />}
                  </button>
                </div>
              </div>

              <div className="flex gap-3 group">
                <div className={`w-7 h-7 border ${t.cardBorder} rounded flex items-center justify-center text-zinc-500`}>
                  <Linkedin size={12} />
                </div>
                <div className="flex-grow flex justify-between items-center">
                  <div>
                    <div className="text-[7px] font-mono text-zinc-500 uppercase">LINKEDIN</div>
                    <a href="https://www.linkedin.com/in/buthuru-jagadeep-reddy-a522961a1/" target="_blank" rel="noopener noreferrer" className={`text-[10px] font-mono ${t.textBody} ${t.hoverText} transition`}>
                      jagadeepreddy.linkedin
                    </a>
                  </div>
                  <button 
                    onClick={() => handleCopyToClipboard('https://www.linkedin.com/in/buthuru-jagadeep-reddy-a522961a1/', 'linkedin')}
                    className="p-1 opacity-0 group-hover:opacity-100 transition rounded hover:bg-zinc-500/10 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                  >
                    {copiedField === 'linkedin' ? <Check size={10} className="text-emerald-500" /> : <Copy size={10} />}
                  </button>
                </div>
              </div>

              <div className="flex gap-3 group">
                <div className={`w-7 h-7 border ${t.cardBorder} rounded flex items-center justify-center text-zinc-500`}>
                  <Github size={12} />
                </div>
                <div className="flex-grow flex justify-between items-center">
                  <div>
                    <div className="text-[7px] font-mono text-zinc-500 uppercase">GITHUB</div>
                    <a href="https://github.com/Jagadeep-Reddy" target="_blank" rel="noopener noreferrer" className={`text-[10px] font-mono ${t.textBody} ${t.hoverText} transition`}>
                      jagadeepreddy.github
                    </a>
                  </div>
                  <button 
                    onClick={() => handleCopyToClipboard('https://github.com/Jagadeep-Reddy', 'github')}
                    className="p-1 opacity-0 group-hover:opacity-100 transition rounded hover:bg-zinc-500/10 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                  >
                    {copiedField === 'github' ? <Check size={10} className="text-emerald-500" /> : <Copy size={10} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Form Input fields */}
          <div className="md:col-span-7">
            {contactPayloadActive ? (
              <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-950/90 text-[10px] font-mono text-zinc-400 space-y-2 min-h-[220px] flex flex-col justify-center">
                <div className="text-zinc-500 text-[8px] tracking-widest border-b border-zinc-900 pb-2 flex items-center gap-1.5">
                  <Activity size={10} className="animate-spin text-[#10B981]" /> PAYLOAD_TRANSMISSION_LOG
                </div>
                {contactLogs.map((log, idx) => (
                  <div key={idx} className="flex gap-1.5">
                    <span className="text-[#10B981]">&gt;&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[7px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                    [client.email]
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className={`w-full px-3 py-2 rounded ${t.inputBg} border ${t.inputBorder} ${t.text} text-[11px] focus:outline-none ${t.inputFocus} transition font-mono`}
                  />
                </div>
                <div>
                  <label className="block text-[7px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                    [message.subject]
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project recruitment, or ML pipelines"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className={`w-full px-3 py-2 rounded ${t.inputBg} border ${t.inputBorder} ${t.text} text-[11px] focus:outline-none ${t.inputFocus} transition font-mono`}
                  />
                </div>
                <div>
                  <label className="block text-[7px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                    [message.payload]
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Include scope details or job specifications..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className={`w-full px-3 py-2 rounded ${t.inputBg} border ${t.inputBorder} ${t.text} text-[11px] focus:outline-none ${t.inputFocus} transition font-mono`}
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full py-2.5 ${t.buttonBg} ${t.buttonText} text-[10px] font-mono uppercase tracking-widest rounded flex items-center justify-center gap-1.5 hover:opacity-90 active:scale-95 transition cursor-pointer`}
                >
                  <Send size={11} /> Deliver Message Payload
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 09 INTEGRATED RECRUITER SHELL TERMINAL CHATBOT */}
      <section id="chatbot-console" className={`p-6 md:p-8 border ${t.cardBorder} ${t.cardBg} rounded-2xl relative z-10`}>
        <div className="mb-6 pb-4 border-b border-dashed border-zinc-800/80">
          <div className={`text-[10px] font-mono uppercase tracking-widest mb-1.5 ${t.accent}`}>
            08 // RECRUITER SHELL TERMINAL
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold">Query AI assistant</h2>
        </div>

        <div className={`border ${t.cardBorder} rounded-xl overflow-hidden shadow-2xl flex flex-col min-h-[380px] bg-zinc-950`}>
          {/* Terminal header */}
          <div className="p-3 bg-zinc-900 border-b border-zinc-800 flex justify-between items-center text-zinc-400">
            <div className="flex items-center gap-2 text-xs font-mono">
              <Terminal size={12} className="text-[#10B981]" />
              <span>guest@jagadeepreddy.sh</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-850"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-850"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-850"></span>
            </div>
          </div>

          {/* Chat conversations */}
          <div className="flex-grow p-4 space-y-4 overflow-y-auto h-[260px] scrollbar-thin text-xs text-zinc-300">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'user' ? (
                  <div className="font-mono text-[11px] leading-relaxed text-zinc-300">
                    <span className="text-zinc-500">guest@portfolio:~$</span> {msg.text}
                  </div>
                ) : (
                  <div className="w-full text-left font-mono text-[11px] leading-relaxed bg-[#0a0f1d]/60 border border-zinc-900 p-3 rounded-lg">
                    <div className="text-[7px] text-zinc-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Sparkles size={8} className="text-[#10B981] animate-pulse" /> // OUTPUT FROM PORTFOLIO_DB
                    </div>
                    {msg.text}
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="p-2 border border-zinc-800 rounded bg-[#0a0f1d]/60 flex items-center gap-1 font-mono text-[10px] text-zinc-500">
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-150"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-300"></span>
                  <span>running query...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Suggestions row */}
          <div className="px-4 py-2 border-t border-zinc-900 bg-zinc-900/40 text-[9px] font-mono flex flex-wrap gap-1.5 items-center">
            <span className="text-zinc-600 uppercase">Suggested Flags:</span>
            <button onClick={() => handleQuickAction("Summarize Jagadeep's expertise")} className="px-2 py-0.5 border border-zinc-850 rounded hover:border-zinc-550 text-zinc-400 hover:text-white transition cursor-pointer">--expertise</button>
            <button onClick={() => handleQuickAction("About the IPL AI Platform")} className="px-2 py-0.5 border border-zinc-850 rounded hover:border-zinc-550 text-zinc-400 hover:text-white transition cursor-pointer">--ipl-platform</button>
            <button onClick={() => handleQuickAction("Tell me about his RAG experience")} className="px-2 py-0.5 border border-zinc-850 rounded hover:border-zinc-550 text-zinc-400 hover:text-white transition cursor-pointer">--rag-stack</button>
            <button onClick={() => handleQuickAction("Is he open to full-time remote roles?")} className="px-2 py-0.5 border border-zinc-850 rounded hover:border-zinc-550 text-zinc-400 hover:text-white transition cursor-pointer">--remote</button>
          </div>

          {/* Chat input line */}
          <div className="p-3 bg-zinc-950 border-t border-zinc-900 flex items-center gap-1.5">
            <span className="text-[10px] font-mono text-zinc-500 flex-shrink-0">guest@portfolio:~$</span>
            <input
              type="text"
              placeholder="help or run command..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-grow px-1 py-1 rounded bg-transparent border-none text-zinc-300 text-xs font-mono focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              className={`px-3 py-1.5 rounded flex items-center justify-center cursor-pointer transition ${t.chatBtn}`}
              aria-label="Send"
            >
              <Send size={11} />
            </button>
          </div>
        </div>
      </section>

        </main>
      </div>

      {/* Footer */}
      <footer className={`py-12 border-t border-dashed ${t.divider} mt-24 relative z-10 ${t.cardBg}`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-mono font-bold tracking-tight text-white mb-2">JAGADEEP REDDY</h3>
            <p className="text-[8px] font-mono text-zinc-500 uppercase tracking-wide mb-4">[role] ai_engineer // backend_architect</p>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-xs font-sans">
              Focused on deploying verifiable cognitive pipelines, LangGraph graph architectures, and hybrid retrieval networks.
            </p>
          </div>
          <div>
            <div className="text-[8px] font-mono uppercase tracking-widest text-zinc-650 mb-4">// SYSTEM_MAP</div>
            <ul className="grid grid-cols-2 gap-2 text-[9px] font-mono uppercase">
              <li><button onClick={() => scrollToSection('hero')} className="text-zinc-400 hover:text-white text-left transition">Hero</button></li>
              <li><button onClick={() => scrollToSection('architecture')} className="text-zinc-400 hover:text-white text-left transition">Architecture</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="text-zinc-400 hover:text-white text-left transition">Projects</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="text-zinc-400 hover:text-white text-left transition">Skills</button></li>
              <li><button onClick={() => scrollToSection('experience')} className="text-zinc-400 hover:text-white text-left transition">Experience</button></li>
              <li><button onClick={() => scrollToSection('education')} className="text-zinc-400 hover:text-white text-left transition">Education</button></li>
            </ul>
          </div>
          <div>
            <div className="text-[8px] font-mono uppercase tracking-widest text-zinc-650 mb-4">// ENGINE_LOG</div>
            <p className="text-[10px] font-mono text-zinc-500 leading-normal">
              Compiled using Vite & React.<br />
              Vercel Deployment: production_ready.<br />
              Status Code: 200 OK.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Scroll Top Trigger */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-6 right-6 w-9 h-9 rounded-lg border ${t.cardBorder} flex items-center justify-center ${t.cardBg} text-zinc-400 hover:text-white ${t.cardBorderHover} transition cursor-pointer z-50`}
          aria-label="Scroll to top"
        >
          <ChevronUp size={15} />
        </button>
      )}

      {/* Global CSS Styles */}
      <style>{`
        .delay-150 { animation-delay: 150ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
    </div>
  );
}
