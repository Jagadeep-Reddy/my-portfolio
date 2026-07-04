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
  Sparkles
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
    userChatBg: "bg-[#C5A880]/10"
  },
  obsidian: {
    name: "Obsidian Mint",
    bg: "bg-[#070A13] text-[#F1F5F9]",
    bgRaw: "#070A13",
    text: "text-[#F1F5F9]",
    textMuted: "text-[#718096]",
    accent: "text-[#10B981]", // Vibrant Mint
    accentBg: "bg-[#10B981]",
    accentBorder: "border-[#10B981]/25",
    accentBorderActive: "border-[#10B981]/60",
    accentHover: "hover:border-[#10B981]/80",
    accentText: "text-[#10B981]",
    accentBgLight: "bg-[#10B981]/5",
    footerBg: "bg-[#04060B]",
    divider: "border-[#1B2336]",
    cardBg: "bg-[#0F1322]/50 backdrop-blur-md",
    cardBorder: "border-[#1C263F]",
    cardBorderHover: "hover:border-[#10B981]/40",
    inputBg: "bg-[#0F1322]/70",
    inputBorder: "border-[#1C263F]",
    inputFocus: "focus:border-[#10B981]/60",
    chatBtn: "bg-[#10B981] text-[#070A13] shadow-[0_4px_20px_rgba(16,185,129,0.2)]",
    buttonBg: "bg-[#10B981] text-[#070A13] border border-[#10B981]",
    dotColor: "bg-[#10B981]",
    blob1: "bg-[#00F5D4]/10",
    blob2: "bg-[#10B981]/8",
    blob3: "bg-[#6366F1]/10",
    buttonText: "text-[#070A13]",
    userChatBg: "bg-[#10B981]/10"
  },
  forest: {
    name: "Botanical Sage",
    bg: "bg-[#050B08] text-[#F1F5F9]",
    bgRaw: "#050B08",
    text: "text-[#F1F5F9]",
    textMuted: "text-[#668277]",
    accent: "text-[#52D1A2]", // Mint Sage
    accentBg: "bg-[#52D1A2]",
    accentBorder: "border-[#52D1A2]/20",
    accentBorderActive: "border-[#52D1A2]/60",
    accentHover: "hover:border-[#52D1A2]/80",
    accentText: "text-[#52D1A2]",
    accentBgLight: "bg-[#52D1A2]/5",
    footerBg: "bg-[#030605]",
    divider: "border-[#15241F]",
    cardBg: "bg-[#0C1411]/50 backdrop-blur-md",
    cardBorder: "border-[#1A2E27]",
    cardBorderHover: "hover:border-[#52D1A2]/40",
    inputBg: "bg-[#0C1411]/70",
    inputBorder: "border-[#1A2E27]",
    inputFocus: "focus:border-[#52D1A2]/60",
    chatBtn: "bg-[#52D1A2] text-[#050B08] shadow-[0_4px_20px_rgba(82,209,162,0.2)]",
    buttonBg: "bg-[#52D1A2] text-[#050B08] border border-[#52D1A2]",
    dotColor: "bg-[#52D1A2]",
    blob1: "bg-[#52D1A2]/10",
    blob2: "bg-[#059669]/10",
    blob3: "bg-[#34D399]/8",
    buttonText: "text-[#050B08]",
    userChatBg: "bg-[#52D1A2]/10"
  },
  terracotta: {
    name: "Velvet Orchid",
    bg: "bg-[#0A0612] text-[#FAF8F5]",
    bgRaw: "#0A0612",
    text: "text-[#FAF8F5]",
    textMuted: "text-[#8B809E]",
    accent: "text-[#D946EF]", // Orchid Violet
    accentBg: "bg-[#D946EF]",
    accentBorder: "border-[#D946EF]/20",
    accentBorderActive: "border-[#D946EF]/60",
    accentHover: "hover:border-[#D946EF]/80",
    accentText: "text-[#D946EF]",
    accentBgLight: "bg-[#D946EF]/5",
    footerBg: "bg-[#06030B]",
    divider: "border-[#22163B]",
    cardBg: "bg-[#130D22]/50 backdrop-blur-md",
    cardBorder: "border-[#281B47]",
    cardBorderHover: "hover:border-[#D946EF]/40",
    inputBg: "bg-[#130D22]/70",
    inputBorder: "border-[#281B47]",
    inputFocus: "focus:border-[#D946EF]/60",
    chatBtn: "bg-[#D946EF] text-[#0A0612] shadow-[0_4px_20px_rgba(217,70,239,0.2)]",
    buttonBg: "bg-[#D946EF] text-[#0A0612] border border-[#D946EF]",
    dotColor: "bg-[#D946EF]",
    blob1: "bg-[#D946EF]/10",
    blob2: "bg-[#A855F7]/10",
    blob3: "bg-[#EC4899]/8",
    buttonText: "text-[#0A0612]",
    userChatBg: "bg-[#D946EF]/10"
  }
};;

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
  
  // Form submission state
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState(''); // 'sending', 'success', 'error'
  
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
      githubLink: "https://github.com/Jagadeep-Reddy",
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
    setFormStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email: formEmail, subject: formSubject, message: formMessage })
      });
      if (res.ok) {
        setFormStatus('success');
        setFormEmail('');
        setFormSubject('');
        setFormMessage('');
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 4000);
      }
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 4000);
    }
  };

  // AI Assistant Chat Config
  const AGENT_SYSTEM_PROMPT = `You are Jagadeep Reddy's personal AI portfolio agent. Answer recruiter and hiring manager questions concisely and professionally. Here is his complete profile:

IDENTITY: Jagadeep Reddy — AI Engineer transitioning from 2 years of production backend engineering at ANZ (Spring Boot, Kafka, Oracle SQL) into full-time AI/GenAI engineering. Based in Bengaluru, India. Targeting 20-25 LPA in India and Riyadh, Saudi Arabia.

KEY PROJECTS:
1. IPL AI Intelligence Platform — 5-agent LangGraph system (StatsQA, NarrativeQA, Prediction, Matchup, TeamVsTeam), hybrid RAG (BGE-M3 dense + BM25 sparse + RRF fusion + cross-encoder reranking top-8), XGBoost win-probability (AUC 0.72, Optuna-tuned), SHAP explanations, WebSocket real-time <300ms end-to-end, 200 concurrent users (Locust), RAGAS faithfulness 0.71→0.88 on 200-question golden eval set, CI gate blocks deploy below 0.75. Stack: LangGraph, FastAPI, Qdrant HNSW, PostgreSQL, Redis. GitHub: github.com/Jagadeep-Reddy/ipl-ai-platform
2. Production RAG System — Enterprise financial document Q&A, three chunking strategies (fixed-size, semantic, hierarchical parent-child), hybrid FAISS + BM25 retrieval, RRF + cross-encoder reranking (ms-marco-MiniLM-L-6-v2), self-consistency hallucination detection (3 parallel LLM responses at temp 0.4), RAGAS CI/CD gate (faithfulness <0.75 blocks deploy), 40% improvement over naive baseline on 500-question eval set. Demo: huggingface.co/spaces/Jagadeep24/RAG-System-with-Evaluation-Framework
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
    inputText('');
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
    <div className={`min-h-screen relative ${t.bg} transition-colors duration-500 font-sans antialiased selection:bg-current/10 overflow-x-hidden`}>
      
      {/* Background Ambient Glows */}
      <div className={`absolute top-[5%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0 opacity-70 transition-all duration-1000 mix-blend-screen ${t.blob1}`}></div>
      <div className={`absolute top-[35%] right-[5%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0 opacity-60 transition-all duration-1000 mix-blend-screen ${t.blob2}`}></div>
      <div className={`absolute top-[70%] left-[10%] w-[280px] md:w-[480px] h-[280px] md:h-[480px] rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0 opacity-50 transition-all duration-1000 mix-blend-screen ${t.blob3}`}></div>

      {/* Editorial Style Grid Lines (Background blueprint canvas decoration) */}
      <div className="fixed inset-0 pointer-events-none grid grid-cols-4 max-w-6xl mx-auto px-6 opacity-[0.03] z-0">
        <div className={`border-l border-r ${t.divider} h-full`}></div>
        <div className={`border-r ${t.divider} h-full`}></div>
        <div className={`border-r ${t.divider} h-full`}></div>
        <div></div>
      </div>

      {/* Header / Sticky Navbar */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? `${t.bg} bg-opacity-90 backdrop-blur-md border-b ${t.divider}`
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <div>
            <span 
              onClick={() => scrollToSection('hero')} 
              className="text-lg md:text-xl font-mono font-bold tracking-tight cursor-pointer hover:opacity-80 transition"
            >
              [~/jagadeep.reddy]
            </span>
            <div className="flex items-center gap-1.5 mt-0.5 text-[9px] uppercase tracking-widest font-mono text-zinc-500">
              <span className={`w-1.5 h-1.5 rounded-full ${t.dotColor} animate-pulse`}></span>
              system.status: active
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              <button onClick={() => scrollToSection('architecture')} className="hover:text-white transition">Architecture</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-white transition">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-white transition">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-white transition">Experience</button>
              <button onClick={() => scrollToSection('education')} className="hover:text-white transition">Academics</button>
            </nav>

            <span className="h-4 w-[1px] bg-zinc-800"></span>

            {/* Dropdown theme switcher */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className={`appearance-none bg-transparent border ${t.accentBorder} ${t.text} text-[9px] font-mono uppercase tracking-widest pl-3 pr-7 py-1 rounded focus:outline-none cursor-pointer hover:bg-white/5 transition`}
                >
                  <option value="midnight" className="bg-[#080C14] text-[#F8FAFC]">Slate Bronze</option>
                  <option value="obsidian" className="bg-[#070A13] text-[#F1F5F9]">Obsidian Mint</option>
                  <option value="forest" className="bg-[#050B08] text-[#F1F5F9]">Botanical Sage</option>
                  <option value="terracotta" className="bg-[#0A0612] text-[#FAF8F5]">Velvet Orchid</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-zinc-500">
                  <ChevronDown size={10} />
                </div>
              </div>
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-3 py-1 text-[9px] font-mono uppercase tracking-widest border border-zinc-850 hover:border-zinc-500 rounded transition duration-300`}
            >
              Connect
            </button>
          </div>

          {/* Mobile Toggler */}
          <div className="flex md:hidden items-center gap-3">
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className={`bg-transparent border ${t.accentBorder} ${t.text} text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 rounded focus:outline-none`}
            >
              <option value="midnight" className="bg-[#080C14] text-white">Slate Bronze</option>
              <option value="obsidian" className="bg-[#070A13] text-white">Obsidian Mint</option>
              <option value="forest" className="bg-[#050B08] text-white">Botanical Sage</option>
              <option value="terracotta" className="bg-[#0A0612] text-white">Velvet Orchid</option>
            </select>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 hover:opacity-75 transition text-zinc-400"
              aria-label="Toggle menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 z-50 md:hidden flex flex-col justify-center items-center gap-8 ${t.bg} bg-opacity-95 backdrop-blur-lg px-6`}>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 hover:opacity-75 transition text-zinc-400"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
          <nav className="flex flex-col gap-6 text-sm font-mono uppercase tracking-widest text-center">
            <button onClick={() => scrollToSection('architecture')} className="hover:text-white transition">Architecture</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-white transition">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-white transition">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-white transition">Experience</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-white transition">Academics</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white transition">Connect</button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-24 max-w-6xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className={`text-[10px] font-mono uppercase tracking-widest ${t.accent} px-2.5 py-0.5 border ${t.accentBorder} rounded-full ${t.accentBgLight}`}>
              System: Production Ready
            </span>
            <span className="text-[10px] font-mono tracking-widest text-zinc-500">
              [ping: 14ms // latency: low]
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif leading-[1.05] tracking-tight mb-8">
            Building AI systems that <span className={`italic ${t.accent}`}>scale beyond the demo.</span>
          </h1>

          <p className="text-base md:text-xl text-zinc-400 font-sans font-light leading-relaxed mb-10 max-w-3xl">
            I am an AI Engineer transitioning from 2 years of enterprise backend engineering at ANZ.
            I design production-grade GenAI pipelines: orchestrating specialized LangGraph agents, building hybrid RAG flows, 
            shaping millisecond-budget XGBoost win predictions, and anchoring answer validity via automated RAGAS gates.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button 
              onClick={() => scrollToSection('projects')} 
              className={`px-6 py-3 ${t.buttonBg} text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 hover:opacity-90 transition`}
            >
              Explore Logs <Terminal size={12} />
            </button>
            <button 
              onClick={() => scrollToSection('architecture')}
              className={`px-6 py-3 border border-zinc-800 hover:border-zinc-500 text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 transition`}
            >
              View System Flow
            </button>
            <a 
              href="/Jagadeep_Reddy_AI_Engineer_Resume.pdf" 
              download="Jagadeep_Reddy_AI_Engineer_Resume.pdf" 
              className="px-6 py-3 border border-zinc-800 hover:border-zinc-500 text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 transition text-zinc-400 hover:text-white"
            >
              Download CV <FileText size={12} />
            </a>
          </div>
        </div>

        {/* Hero Bottom Banner */}
        <div className={`mt-24 pt-6 border-t ${t.divider} flex flex-wrap justify-between gap-6 text-[9px] font-mono uppercase tracking-widest text-zinc-500`}>
          <div>[location] bangalore, india</div>
          <div>[focus] agentic orchestration & hybrid search</div>
          <div>[experience] software engineer at anz (2 yrs)</div>
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('architecture')}>
            [scroll.to.evolve.architecture ↓]
          </div>
        </div>
      </section>

      {/* System Architecture Section (NEW Interactive Layout) */}
      <section id="architecture" className={`py-24 px-6 max-w-6xl mx-auto relative z-10 border-t border-dashed ${t.divider}`}>
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${t.accent}`}>
              01 // PLATFORM BLUEPRINTS
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold">
              System Architecture
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl">
              Layered architectures representing production-grade AI platforms I've designed and validated.
            </p>
          </div>

          {/* Interactive Platform Tabs */}
          <div className={`flex gap-2 p-1 border ${t.cardBorder} ${t.cardBg} rounded-lg`}>
            <button
              onClick={() => setActiveArchTab('ipl')}
              className={`px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest rounded-md transition-all ${
                activeArchTab === 'ipl' 
                  ? `${t.buttonBg} font-semibold` 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ipl-intelligence-flow
            </button>
            <button
              onClick={() => setActiveArchTab('rag')}
              className={`px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest rounded-md transition-all ${
                activeArchTab === 'rag' 
                  ? `${t.buttonBg} font-semibold` 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              financial-rag-evaluation
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Vertical Diagram Blocks */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
              layered.system.view // top down flow
            </div>

            {activeArchTab === 'ipl' ? (
              // IPL Platform Layers
              <>
                <div className={`group p-5 border ${t.cardBorder} ${t.cardBg} ${t.cardBorderHover} rounded-xl transition duration-300`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 01 // INGRESS</span>
                    <span className={`w-2 h-2 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-sm font-mono font-bold tracking-tight">Ingress & Stream Router</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Receives live WebSocket BallEvents or user natural language requests. Triggers downstream routing pipeline.
                  </p>
                </div>

                <div className="flex justify-center my-1">
                  <div className="h-4 w-[1px] border-l border-dashed border-zinc-700"></div>
                </div>

                <div className={`group p-5 border ${t.cardBorder} ${t.cardBg} ${t.cardBorderHover} rounded-xl transition duration-300`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 02 // ORCHESTRATION</span>
                    <span className={`w-2 h-2 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-sm font-mono font-bold tracking-tight">LangGraph Intent Classifier (~20ms)</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Evaluates user intent (classification accuracy 71%) and routes traffic across a 5-node autonomous graph.
                  </p>
                </div>

                <div className="flex justify-center my-1">
                  <div className="h-4 w-[1px] border-l border-dashed border-zinc-700"></div>
                </div>

                <div className={`group p-5 border ${t.cardBorder} ${t.cardBg} ${t.cardBorderHover} rounded-xl transition duration-300`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 03 // INTELLIGENT AGENTS</span>
                    <span className={`w-2 h-2 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-sm font-mono font-bold tracking-tight">Specialized Agent Cluster</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Delegates tasks to domain experts: StatsQA, NarrativeQA, Matchup, Prediction, or TeamVsTeam agents.
                  </p>
                </div>

                <div className="flex justify-center my-1">
                  <div className="h-4 w-[1px] border-l border-dashed border-zinc-700"></div>
                </div>

                <div className={`group p-5 border ${t.cardBorder} ${t.cardBg} ${t.cardBorderHover} rounded-xl transition duration-300`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 04 // DATA & KNOWLEDGE RETRIEVAL</span>
                    <span className={`w-2 h-2 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-sm font-mono font-bold tracking-tight">Hybrid RAG & Statistical Models</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Performs BGE-M3 dense search (Qdrant) + BM25 sparse queries with RRF fusion. Runs XGBoost (AUC 0.72) win predictions with SHAP local explanations.
                  </p>
                </div>

                <div className="flex justify-center my-1">
                  <div className="h-4 w-[1px] border-l border-dashed border-zinc-700"></div>
                </div>

                <div className={`group p-5 border ${t.cardBorder} ${t.cardBg} ${t.cardBorderHover} rounded-xl transition duration-300`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 05 // DELIVERY LAYER</span>
                    <span className={`w-2 h-2 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-sm font-mono font-bold tracking-tight">Real-time WebSocket Push (&lt;300ms)</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Synthesizes GPT-4o-mini commentary with ML outcomes and pushes the structured updates to users with minimal delay.
                  </p>
                </div>
              </>
            ) : (
              // Financial RAG Layers
              <>
                <div className={`group p-5 border ${t.cardBorder} ${t.cardBg} ${t.cardBorderHover} rounded-xl transition duration-300`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 01 // QUERY ANALYSIS</span>
                    <span className={`w-2 h-2 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-sm font-mono font-bold tracking-tight">Multi-Hop Query Decomposer</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Breaks down complex compliance questions into parallel sub-queries to retrieve from distinct financial documents.
                  </p>
                </div>

                <div className="flex justify-center my-1">
                  <div className="h-4 w-[1px] border-l border-dashed border-zinc-700"></div>
                </div>

                <div className={`group p-5 border ${t.cardBorder} ${t.cardBg} ${t.cardBorderHover} rounded-xl transition duration-300`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 02 // SEARCH RETRIEVAL</span>
                    <span className={`w-2 h-2 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-sm font-mono font-bold tracking-tight">Hybrid FAISS & BM25 Retrieval</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Queries FAISS dense vectors and Rank-BM25 indexes. Merges score ranks using Reciprocal Rank Fusion.
                  </p>
                </div>

                <div className="flex justify-center my-1">
                  <div className="h-4 w-[1px] border-l border-dashed border-zinc-700"></div>
                </div>

                <div className={`group p-5 border ${t.cardBorder} ${t.cardBg} ${t.cardBorderHover} rounded-xl transition duration-300`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 03 // EXTRACTION & RERANK</span>
                    <span className={`w-2 h-2 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-sm font-mono font-bold tracking-tight">MiniLM Cross-Encoder & Hierarchical Chunking</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Applies parent-child aggregators to retain global document contexts. Reranks retrieved blocks using a cross-encoder model.
                  </p>
                </div>

                <div className="flex justify-center my-1">
                  <div className="h-4 w-[1px] border-l border-dashed border-zinc-700"></div>
                </div>

                <div className={`group p-5 border ${t.cardBorder} ${t.cardBg} ${t.cardBorderHover} rounded-xl transition duration-300`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 04 // SYNTHESIS & SAFEGUARD</span>
                    <span className={`w-2 h-2 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-sm font-mono font-bold tracking-tight">Self-Consistency Fact Validation</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Evaluates answer accuracy through 3 parallel generation chains, flagging factual anomalies before formatting output.
                  </p>
                </div>

                <div className="flex justify-center my-1">
                  <div className="h-4 w-[1px] border-l border-dashed border-zinc-700"></div>
                </div>

                <div className={`group p-5 border ${t.cardBorder} ${t.cardBg} ${t.cardBorderHover} rounded-xl transition duration-300`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">LAYER 05 // DELIVERY GATEWAY</span>
                    <span className={`w-2 h-2 rounded-full ${t.dotColor}`}></span>
                  </div>
                  <h4 className="text-sm font-mono font-bold tracking-tight">RAGAS-Gated GitHub Actions CI/CD</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Triggers automated validation scores. Halts deployment if RAGAS Faithfulness drops below 0.75.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Right Column: Decisions, stats & stacks */}
          <div className={`lg:col-span-5 p-6 border ${t.cardBorder} ${t.cardBg} rounded-xl space-y-6`}>
            <div>
              <span className={`text-[10px] font-mono uppercase tracking-widest ${t.accent}`}>
                [system.metadata]
              </span>
              <h3 className="text-xl font-mono font-bold mt-1">
                {activeArchTab === 'ipl' ? 'IPL Commentary Platform' : 'Financial Statement RAG'}
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Design Decisions</h4>
                <ul className="text-xs text-zinc-300 mt-2 space-y-2.5">
                  {activeArchTab === 'ipl' ? (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-500">→</span>
                        <span>Routing logic built using a 5-agent intent classifier rather than forcing all requests through a single LLM layer.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-500">→</span>
                        <span>WebSocket stream pipeline processing XGBoost prediction updates in &lt;20ms for fast UI delivery.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-500">→</span>
                        <span>Deployments locked behind RAGAS verification tests, verifying accuracy targets.</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-500">→</span>
                        <span>Parent-child hierarchical indexing selected to retain deep contextual layout structure of financial charts.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-500">→</span>
                        <span>Structured output validation utilizing 3 parallel temperature-controlled LLM synthesis passes.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-zinc-500">→</span>
                        <span>Reranking step (MiniLM) filtering search outcomes down to key target segments, optimizing tokens.</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div>
                <h4 className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Core Metrics</h4>
                <div className="grid grid-cols-2 gap-3 mt-2 text-xs font-mono">
                  {activeArchTab === 'ipl' ? (
                    <>
                      <div className="p-3 border border-zinc-900 rounded-lg">
                        <div className="text-zinc-500 text-[9px] uppercase tracking-wider">End-to-End Latency</div>
                        <div className="text-sm font-bold text-white mt-1">&lt;300ms</div>
                      </div>
                      <div className="p-3 border border-zinc-900 rounded-lg">
                        <div className="text-zinc-500 text-[9px] uppercase tracking-wider">RAGAS Faithfulness</div>
                        <div className="text-sm font-bold text-white mt-1">0.88 / 0.98</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-3 border border-zinc-900 rounded-lg">
                        <div className="text-zinc-500 text-[9px] uppercase tracking-wider">Retrieval Gain</div>
                        <div className="text-sm font-bold text-white mt-1">+40% vs Naive</div>
                      </div>
                      <div className="p-3 border border-zinc-900 rounded-lg">
                        <div className="text-zinc-500 text-[9px] uppercase tracking-wider">CI Gate Threshold</div>
                        <div className="text-sm font-bold text-white mt-1">0.75 Score</div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Target Tech Stack</h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {activeArchTab === 'ipl' ? (
                    ["LangGraph", "Qdrant", "XGBoost", "FastAPI", "Redis", "WebSockets"].map((item, idx) => (
                      <span key={idx} className={`text-[9px] font-mono uppercase px-2 py-0.5 border ${t.cardBorder} text-zinc-400 ${t.cardBg} rounded`}>
                        {item}
                      </span>
                    ))
                  ) : (
                    ["FAISS", "LangChain", "RAGAS", "Cross-encoders", "Python", "CI/CD"].map((item, idx) => (
                      <span key={idx} className={`text-[9px] font-mono uppercase px-2 py-0.5 border ${t.cardBorder} text-zinc-400 ${t.cardBg} rounded`}>
                        {item}
                      </span>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (Restructured layout) */}
      <section id="projects" className={`py-24 px-6 max-w-6xl mx-auto relative z-10 border-t border-dashed ${t.divider}`}>
        <div className="mb-16">
          <div className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${t.accent}`}>
            02 // REPOSITORIES & SYSTEMS
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            Projects
          </h2>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">
            Production systems designed to bridge traditional software architectures with advanced cognitive logic.
          </p>
        </div>

        {/* Project Navigation Switcher */}
        <div className={`flex gap-2 p-1 border ${t.cardBorder} ${t.cardBg} rounded-lg max-w-max mb-8`}>
          <button
            onClick={() => setActiveProjectTab('ipl')}
            className={`px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest rounded-md transition-all ${
              activeProjectTab === 'ipl' 
                ? `${t.buttonBg} font-semibold` 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            ipl-ai-commentary
          </button>
          <button
            onClick={() => setActiveProjectTab('rag')}
            className={`px-3 py-1.5 text-[9px] font-mono uppercase tracking-widest rounded-md transition-all ${
              activeProjectTab === 'rag' 
                ? `${t.buttonBg} font-semibold` 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            financial-qa-rag
          </button>
        </div>

        {/* Selected Project Content Panel */}
        {(() => {
          const proj = projects[activeProjectTab];
          return (
            <div className={`border ${t.cardBorder} ${t.cardBg} rounded-2xl overflow-hidden p-6 md:p-10 transition-all duration-500`}>
              <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b ${t.divider} pb-6`}>
                <div>
                  <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 border ${t.accentBorder} ${t.accentText} ${t.cardBg} rounded`}>
                    system.id // 0{proj.id}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-serif font-bold mt-2">{proj.title}</h3>
                  <p className="text-xs text-zinc-400 font-mono mt-1">{proj.tagline}</p>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3 py-1.5 border ${t.cardBorder} ${t.accentHover} rounded text-[9px] font-mono uppercase tracking-widest transition`}
                  >
                    <Github size={12} /> GitHub
                  </a>
                  <a
                    href={proj.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3 py-1.5 ${t.buttonBg} text-[9px] font-mono uppercase tracking-widest rounded hover:opacity-90 transition`}
                  >
                    <ExternalLink size={12} /> Live Demo
                  </a>
                </div>
              </div>

              {/* Grid block detailed layout */}
              <div className="grid md:grid-cols-2 gap-8 text-sm">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5">01 // Problem Statement</h4>
                    <p className="text-zinc-300 leading-relaxed font-sans">{proj.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5">02 // Core Architecture</h4>
                    <p className="text-zinc-300 leading-relaxed font-sans">{proj.architecture}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1.5">03 // System Design Details</h4>
                    <p className="text-zinc-300 leading-relaxed font-sans">{proj.systemDesign}</p>
                  </div>
                </div>

                <div className={`space-y-6 md:border-l md:border-dashed ${t.divider} md:pl-8`}>
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3">04 // Challenges & Tradeoffs (△)</h4>
                    <ul className="space-y-3">
                      {proj.challenges.map((c, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-orange-500 text-xs mt-0.5">△</span>
                          <span className="text-zinc-300 leading-relaxed font-sans text-xs">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3">05 // Quantitative Results (✓)</h4>
                    <ul className="space-y-3">
                      {proj.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className={`text-emerald-500 text-xs mt-0.5`}>✓</span>
                          <span className="text-zinc-300 leading-relaxed font-sans text-xs">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`flex flex-wrap gap-2 mt-8 pt-6 border-t ${t.divider}`}>
                <span className="text-[9px] font-mono uppercase text-zinc-500 py-1.5 pr-2">Technologies used:</span>
                {proj.tech.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className={`text-[9px] font-mono uppercase px-2.5 py-1 ${t.cardBg} border ${t.cardBorder} text-zinc-400 rounded`}
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
                      className={`text-[10px] font-mono px-2.5 py-1 border ${t.cardBorder} text-zinc-300 ${t.cardBg} rounded flex items-center gap-1.5`}
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
                  <li key={i} className="text-xs text-zinc-300 font-sans flex items-start gap-2.5">
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
                    className={`text-[8px] font-mono uppercase px-2 py-0.5 border ${t.cardBorder} text-zinc-400 ${t.cardBg} rounded`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications (Double Column Layout) */}
      <section id="education" className={`py-24 px-6 max-w-6xl mx-auto relative z-10 border-t border-dashed ${t.divider}`}>
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Education column */}
          <div>
            <div className="mb-10">
              <div className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${t.accent}`}>
                05.A // ACADEMICS
              </div>
              <h2 className="text-3xl font-serif font-bold">Education</h2>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className={`p-5 border ${t.cardBorder} ${t.cardBg} rounded-xl`}>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div>
                      <h3 className="text-base font-serif font-bold">{edu.institution}</h3>
                      <p className={`text-[10px] font-mono uppercase tracking-widest ${t.accentText} mt-0.5`}>
                        {edu.degree}
                      </p>
                    </div>
                    <span className={`text-[9px] font-mono text-zinc-500 px-2 py-0.5 border ${t.cardBorder} ${t.cardBg} rounded`}>
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed mt-3">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications column */}
          <div>
            <div className="mb-10">
              <div className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${t.accent}`}>
                05.B // VERIFICATIONS
              </div>
              <h2 className="text-3xl font-serif font-bold">Certifications</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => {
                const isInProgress = cert.status === 'In Progress';
                return (
                  <div 
                    key={idx} 
                    className={`p-4 border ${t.cardBg} rounded-xl flex flex-col justify-between ${
                      isInProgress ? `${t.accentBorder} bg-opacity-35` : t.cardBorder
                    }`}
                  >
                    <div>
                      <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
                        {cert.badge}
                      </span>
                      <h3 className="text-xs font-mono font-bold text-white mt-1 leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-[9px] font-sans text-zinc-500 mt-1">{cert.issuer}</p>
                    </div>
                    <div className={`mt-4 pt-3 border-t ${t.divider} flex justify-between items-center`}>
                      <span className={`text-[8px] font-mono uppercase tracking-widest ${
                        isInProgress ? 'text-amber-500' : 'text-emerald-500'
                      }`}>
                        {cert.status}
                      </span>
                      {isInProgress && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={`py-24 px-6 max-w-6xl mx-auto relative z-10 border-t border-dashed ${t.divider}`}>
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${t.accent}`}>
            06 // ENGINEERING BELIEFS
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            Development Philosophy
          </h2>
          <p className="text-zinc-400 text-xs font-mono mt-2 uppercase tracking-wide">
            [principles.config : values guiding implementation]
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={`p-5 border ${t.cardBorder} ${t.cardBg} rounded-xl ${t.cardBorderHover} transition`}>
            <span className={`text-xs font-mono ${t.accentText}`}>01 / DESIGN FIRST</span>
            <h3 className="text-base font-serif font-bold mt-2 text-white">System blueprints</h3>
            <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
              Every implementation begins with schema models, data diagrams, and latencies. Code ships only after pipelines are established.
            </p>
          </div>

          <div className={`p-5 border ${t.cardBorder} ${t.cardBg} rounded-xl ${t.cardBorderHover} transition`}>
            <span className={`text-xs font-mono ${t.accentText}`}>02 / SPECIALIZATION</span>
            <h3 className="text-base font-serif font-bold mt-2 text-white">Agents with purpose</h3>
            <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
              Multi-agent systems demand clear scopes—routing, predicting, and formatting. Naive chains yield unpredictable outcomes.
            </p>
          </div>

          <div className={`p-5 border ${t.cardBorder} ${t.cardBg} rounded-xl ${t.cardBorderHover} transition`}>
            <span className={`text-xs font-mono ${t.accentText}`}>03 / RETRIEVAL QUALITY</span>
            <h3 className="text-base font-serif font-bold mt-2 text-white">Asserting context</h3>
            <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
              In cognitive pipelines, context rules. Hybrid vector search, parent-child trees, and reranking are essential for production.
            </p>
          </div>

          <div className={`p-5 border ${t.cardBorder} ${t.cardBg} rounded-xl ${t.cardBorderHover} transition`}>
            <span className={`text-xs font-mono ${t.accentText}`}>04 / MEASURED DEPLOY</span>
            <h3 className="text-base font-serif font-bold mt-2 text-white">Automated eval gates</h3>
            <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
              Deployments require automated tests. RAGAS scores tied to CI gates block deviations before they reach production.
            </p>
          </div>
        </div>
      </section>

      {/* Connect & Contact Form Section */}
      <section id="contact" className={`py-24 px-6 max-w-6xl mx-auto relative z-10 border-t border-dashed ${t.divider}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Details */}
          <div>
            <div className={`text-[10px] font-mono uppercase tracking-widest mb-2 ${t.accent}`}>
              07 // CONNECTION PORT
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Let's build something <span className={`italic ${t.accent}`}>scalable.</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-md font-sans">
              Currently open to full-time roles in Bangalore and Riyadh, remote collaborations, and ML/RAG pipelines integration consultancies.
            </p>

            {/* Direct details grid */}
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className={`w-9 h-9 border ${t.cardBorder} rounded-lg flex items-center justify-center text-zinc-400 flex-shrink-0`}>
                  <Mail size={15} />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">EMAIL</div>
                  <a href="mailto:jagadeepreddy3638@gmail.com" className="text-xs font-mono text-zinc-300 hover:text-white transition">
                    jagadeepreddy3638@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className={`w-9 h-9 border ${t.cardBorder} rounded-lg flex items-center justify-center text-zinc-400 flex-shrink-0`}>
                  <MapPin size={15} />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">LOCATION</div>
                  <div className="text-xs font-mono text-zinc-300">Bengaluru, Karnataka, India</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className={`w-9 h-9 border ${t.cardBorder} rounded-lg flex items-center justify-center text-zinc-400 flex-shrink-0`}>
                  <Linkedin size={15} />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">LINKEDIN</div>
                  <a 
                    href="https://www.linkedin.com/in/buthuru-jagadeep-reddy-a522961a1/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-1 transition"
                  >
                    linkedin/buthuru-jagadeep-reddy <ArrowUpRight size={10} />
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className={`w-9 h-9 border ${t.cardBorder} rounded-lg flex items-center justify-center text-zinc-400 flex-shrink-0`}>
                  <Github size={15} />
                </div>
                <div>
                  <div className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">GITHUB</div>
                  <a 
                    href="https://github.com/Jagadeep-Reddy" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-1 transition"
                  >
                    github/Jagadeep-Reddy <ArrowUpRight size={10} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form card (Modified layout) */}
          <div className={`p-6 md:p-8 border ${t.cardBorder} ${t.cardBg} rounded-2xl`}>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              
              <div>
                <label className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                  [client.email]
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded ${t.inputBg} border ${t.inputBorder} ${t.text} text-xs focus:outline-none ${t.inputFocus} transition font-mono`}
                />
              </div>

              <div>
                <label className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                  [message.subject]
                </label>
                <input
                  type="text"
                  required
                  placeholder="Integration, recruitment, or consulting"
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded ${t.inputBg} border ${t.inputBorder} ${t.text} text-xs focus:outline-none ${t.inputFocus} transition font-mono`}
                />
              </div>

              <div>
                <label className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">
                  [message.payload]
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline project specs, salary budgets, or pipeline goals..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded ${t.inputBg} border ${t.inputBorder} ${t.text} text-xs focus:outline-none ${t.inputFocus} transition resize-none font-mono`}
                />
              </div>

              {/* Status notifications */}
              {formStatus === 'success' && (
                <div className="p-3 text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded">
                  [status: success] // Message submitted. Response expected within 24 hrs.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="p-3 text-[11px] font-mono bg-red-500/10 border border-red-500/20 text-red-400 rounded">
                  [status: failed] // Connection failure. Re-route to: jagadeepreddy3638@gmail.com
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className={`w-full py-3.5 ${t.buttonBg} text-xs font-mono uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5 cursor-pointer hover:opacity-90 transition`}
              >
                {formStatus === 'sending' ? 'TRANSMITTING...' : 'INITIATE_CONTACT_COMMAND →'}
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* Footer (Replicated Terminal Dashboard metadata style) */}
      <footer className={`${t.footerBg} py-16 px-6 relative z-10 border-t border-dashed ${t.divider}`}>
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            
            {/* Column 1: identity */}
            <div>
              <h3 className="text-xl font-mono font-bold tracking-tight text-white mb-2">
                JAGADEEP REDDY
              </h3>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wide mb-4">
                [role] ai_engineer // backend_architect
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xs font-sans">
                Focused on deploying verifiable cognitive pipelines, LangGraph graph architectures, and hybrid retrieval networks.
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <div className="text-[8px] font-mono uppercase tracking-widest text-zinc-600 mb-4">
                // SYSTEM_MAP
              </div>
              <ul className="grid grid-cols-2 gap-2 text-[10px] font-mono uppercase">
                <li><button onClick={() => scrollToSection('hero')} className="text-zinc-400 hover:text-white text-left transition">Hero</button></li>
                <li><button onClick={() => scrollToSection('architecture')} className="text-zinc-400 hover:text-white text-left transition">Architecture</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="text-zinc-400 hover:text-white text-left transition">Projects</button></li>
                <li><button onClick={() => scrollToSection('skills')} className="text-zinc-400 hover:text-white text-left transition">Skills</button></li>
                <li><button onClick={() => scrollToSection('experience')} className="text-zinc-400 hover:text-white text-left transition">Experience</button></li>
                <li><button onClick={() => scrollToSection('education')} className="text-zinc-400 hover:text-white text-left transition">Education</button></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <div className="text-[8px] font-mono uppercase tracking-widest text-zinc-600 mb-4">
                // ACTIVE_PINGS
              </div>
              <ul className="space-y-1.5 text-[10px] font-mono text-zinc-400">
                <li>location: bangalore_india</li>
                <li>email: jagadeepreddy3638@gmail.com</li>
                <li>github: github/Jagadeep-Reddy</li>
                <li className="flex items-center gap-1">
                  status: <span className="text-emerald-500">available_from_july_14_2026</span>
                </li>
              </ul>
            </div>
          </div>

          <hr className={`my-8 ${t.divider}`} />

          {/* Terminal Dashboard bottom line */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-mono uppercase tracking-widest text-zinc-500">
            <span>© 2026 JAGADEEP REDDY // ALL RIGHTS RESERVED</span>
            <div className="flex gap-4">
              <span>system.version: 4.2.1</span>
              <span>theme: {theme}</span>
              <span>built.via: tailwind.vite.react</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Action Elements (Scroll Top & Chat Button) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        
        {/* Scroll Top Button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`w-10 h-10 rounded-lg border ${t.cardBorder} flex items-center justify-center ${t.cardBg} text-zinc-400 hover:text-white ${t.cardBorderHover} transition cursor-pointer`}
            aria-label="Scroll to top"
          >
            <ChevronUp size={16} />
          </button>
        )}

        {/* Pulsing AI Agent Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition cursor-pointer relative ${t.chatBtn}`}
          aria-label="Ask my AI Assistant"
        >
          {chatOpen ? <X size={18} /> : <MessageSquare size={18} />}
          
          {!chatOpen && (
            <span className="absolute -inset-1 rounded-lg border border-zinc-550 animate-pulse opacity-25"></span>
          )}
        </button>
      </div>

      {/* AI Agent Chat Drawer Panel */}
      {chatOpen && (
        <div className={`fixed bottom-22 right-6 w-[350px] md:w-[380px] h-[480px] border ${t.cardBorder} rounded-xl shadow-2xl flex flex-col overflow-hidden z-50 transition-all duration-300 ${t.cardBg} backdrop-blur-xl ${t.text}`}>
          
          {/* Header */}
          <div className={`p-4 border-b ${t.cardBorder} flex justify-between items-center ${t.cardBg}`}>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping absolute"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 relative"></span>
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider">Recruiter Agent</h4>
                <p className="text-[9px] text-zinc-500 font-mono">portfolio.query.engine : v1.0</p>
              </div>
            </div>
            <button 
              onClick={() => setChatOpen(false)}
              className="p-1 text-zinc-500 hover:text-white transition"
            >
              <X size={16} />
            </button>
          </div>

          {/* Conversation Area */}
          <div className={`flex-grow p-4 overflow-y-auto space-y-4 ${t.cardBg}`}>
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] rounded-lg px-3 py-2 text-xs leading-relaxed font-sans ${
                  msg.sender === 'user'
                    ? `${t.userChatBg} text-white border ${t.accentBorder} rounded-tr-none`
                    : `${t.cardBg} text-zinc-300 border ${t.cardBorder} rounded-tl-none`
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Typing simulator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className={`rounded-lg px-3.5 py-2 border ${t.cardBorder} ${t.cardBg} flex items-center gap-1.5`}>
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-150"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Quick recommendations */}
          <div className={`px-4 py-2 border-t border-dashed ${t.divider} ${t.cardBg}`}>
            <p className="text-[8px] font-mono uppercase tracking-wider text-zinc-500 mb-1.5">Suggested Queries:</p>
            <div className="flex flex-wrap gap-1">
              <button 
                onClick={() => handleQuickAction("Summarize Jagadeep's expertise")} 
                className={`text-[9px] font-mono px-2 py-0.5 border ${t.cardBorder} text-zinc-400 hover:text-white ${t.cardBorderHover} ${t.cardBg} rounded`}
              >
                Expertise
              </button>
              <button 
                onClick={() => handleQuickAction("About the IPL AI Platform")} 
                className={`text-[9px] font-mono px-2 py-0.5 border ${t.cardBorder} text-zinc-400 hover:text-white ${t.cardBorderHover} ${t.cardBg} rounded`}
              >
                IPL Platform
              </button>
              <button 
                onClick={() => handleQuickAction("Tell me about his RAG experience")} 
                className={`text-[9px] font-mono px-2 py-0.5 border ${t.cardBorder} text-zinc-400 hover:text-white ${t.cardBorderHover} ${t.cardBg} rounded`}
              >
                RAG Stack
              </button>
              <button 
                onClick={() => handleQuickAction("Is he open to full-time remote roles?")} 
                className={`text-[9px] font-mono px-2 py-0.5 border ${t.cardBorder} text-zinc-400 hover:text-white ${t.cardBorderHover} ${t.cardBg} rounded`}
              >
                Remote?
              </button>
            </div>
          </div>

          {/* Text Input Row */}
          <div className={`p-3 border-t ${t.cardBorder} flex gap-2 ${t.cardBg}`}>
            <input
              type="text"
              placeholder="Query portfolio database..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className={`flex-grow px-3 py-1.5 rounded border ${t.inputBorder} ${t.inputBg} ${t.text} text-xs font-mono focus:outline-none ${t.inputFocus}`}
            />
            <button
              onClick={handleSendMessage}
              className={`px-3 rounded flex items-center justify-center cursor-pointer transition ${t.chatBtn}`}
              aria-label="Send"
            >
              <Send size={12} />
            </button>
          </div>
        </div>
      )}

      {/* Global CSS Styles */}
      <style>{`
        .delay-150 { animation-delay: 150ms; }
        .delay-300 { animation-delay: 300ms; }
        .rotate-185 { transform: rotate(180deg); }
      `}</style>

    </div>
  );
}
