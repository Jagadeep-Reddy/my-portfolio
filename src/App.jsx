import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  Github, Linkedin, Mail, ArrowUpRight, Send, Check,
  Copy, Menu, X, Download, ExternalLink, ChevronDown,
  Zap, Brain, Database, Code2, Cloud, Award,
} from 'lucide-react';

/* ══════════════════════════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════════════════════════ */

const PROJECTS = [
  {
    num: '01',
    title: 'IPL AI Intelligence Platform',
    category: 'Multi-Agent System',
    year: '2024',
    accent: '#7c3aed',
    accentB: '#06b6d4',
    emoji: '🏏',
    description:
      'A 5-agent LangGraph platform orchestrating hybrid search, XGBoost win-probability predictions, and real-time WebSocket pipelines — serving live cricket commentary in under 300 ms.',
    highlights: [
      '5-agent LangGraph orchestration with specialized agent routing',
      'Sub-300 ms real-time WebSocket delivery pipeline',
      'XGBoost match win-probability model trained on historical data',
      'Hybrid BM25 + Qdrant vector search with cross-encoder reranking',
    ],
    tech: ['LangGraph', 'Qdrant', 'XGBoost', 'FastAPI', 'WebSocket', 'Python'],
    github: 'https://github.com/Jagadeep-Reddy/IPL-AI-Platform',
    live: null,
    stat: { label: 'Latency', value: '<300ms' },
  },
  {
    num: '02',
    title: 'RAG Evaluation Framework',
    category: 'Enterprise Q&A',
    year: '2025',
    accent: '#06b6d4',
    accentB: '#10b981',
    emoji: '🧠',
    description:
      'Production-grade RAG system with self-consistency hallucination filters, cross-encoder reranking, and automated RAGAS quality gates in CI/CD — achieving 0.981 faithfulness at Microsoft AI Skills Fest.',
    highlights: [
      '0.981 RAGAS faithfulness score at Microsoft AI Skills Fest Hackathon',
      'Self-consistency hallucination filter applied at inference time',
      'FAISS + MiniLM-L6 cross-encoder hierarchical reranking pipeline',
      'Automated quality gates block merges below faithfulness thresholds',
    ],
    tech: ['LangChain', 'FAISS', 'RAGAS', 'Azure AI Foundry', 'LangSmith', 'Python'],
    github: 'https://github.com/Jagadeep-Reddy/RAG-System-with-Evaluation-Framework',
    live: 'https://huggingface.co/spaces/Jagadeep24/RAG-System-with-Evaluation-Framework',
    stat: { label: 'Faithfulness', value: '98.1%' },
  },
];

const SKILL_GROUPS = [
  {
    icon: Brain,
    label: 'AI Orchestration',
    color: '#7c3aed',
    items: ['LangGraph', 'LangChain', 'Multi-Agent Systems', 'RAG Architectures', 'Prompt Engineering', 'Agentic Workflows'],
  },
  {
    icon: Zap,
    label: 'ML & Evaluation',
    color: '#f59e0b',
    items: ['XGBoost', 'Scikit-learn', 'RAGAS', 'LangSmith', 'Hugging Face', 'Azure AI Foundry', 'Statistical Modeling'],
  },
  {
    icon: Database,
    label: 'Vector & Retrieval',
    color: '#06b6d4',
    items: ['Qdrant', 'FAISS', 'ChromaDB', 'BM25', 'Hybrid Search', 'Cross-Encoder Reranking', 'Semantic Chunking'],
  },
  {
    icon: Code2,
    label: 'Backend & APIs',
    color: '#10b981',
    items: ['Python', 'FastAPI', 'PostgreSQL', 'REST APIs', 'WebSocket', 'SQL', 'Pandas', 'NumPy'],
  },
  {
    icon: Cloud,
    label: 'Cloud & DevOps',
    color: '#818cf8',
    items: ['Azure ML', 'Azure AI Foundry', 'GitHub Actions', 'CI/CD Pipelines', 'Docker'],
  },
];

const EXPERIENCE = [
  {
    role: 'Freelance AI Engineer',
    company: 'Independent Consulting',
    period: 'July 2024 — Present',
    current: true,
    bullets: [
      'Architected a 5-agent LangGraph platform (IPL AI Intelligence) with hybrid BM25/Qdrant retrieval and real-time WebSocket commentary pipelines achieving <300 ms latency',
      'Built enterprise-grade financial statement RAG with hierarchical parent-child indexing, cross-encoder reranking, and self-consistency hallucination filtering at inference time',
      'Implemented automated RAGAS quality gates in GitHub Actions CI — any merge that drops faithfulness below threshold is automatically blocked',
      'Competed in Microsoft AI Skills Fest Hackathon, deploying Azure AI Foundry integrations with a final RAGAS faithfulness score of 0.981',
    ],
    tech: ['LangGraph', 'LangChain', 'Qdrant', 'FAISS', 'RAGAS', 'XGBoost', 'FastAPI', 'CI/CD'],
  },
  {
    role: 'Software Engineer',
    company: 'ANZ Bank',
    period: 'June 2022 — June 2024',
    current: false,
    bullets: [
      'Designed and maintained enterprise payment processing microservices handling high-volume transactions with 99.99% uptime SLAs',
      'Reduced batch processing latency by 40% through SQL query optimization and strategic caching layers for reporting pipelines',
      'Led cross-team API integration initiatives, aligning 4 backend services under a unified REST contract and improving developer experience',
      'Mentored 2 junior engineers on coding standards, system design principles, and test-driven development practices',
    ],
    tech: ['Python', 'SQL', 'PostgreSQL', 'REST APIs', 'Microservices', 'Git'],
  },
];

const EDUCATION = [
  {
    degree: 'PGP in Data Science',
    institution: 'University of Texas at Austin',
    period: '2024 — 2025',
    detail: 'Specialized in machine learning systems, statistical modeling, and production ML engineering. Capstone focus on RAG architectures and evaluation frameworks.',
    icon: '🎓',
  },
  {
    degree: 'B.Tech — Information Science Engineering',
    institution: 'BMS Institute of Management and Technology',
    period: '2018 — 2022',
    detail: 'Core CS and IS fundamentals covering algorithms, data structures, database systems, operating systems, and software engineering principles.',
    icon: '💻',
  },
];

const CERTS = [
  { name: 'AWS Solutions Architect', org: 'Amazon Web Services', code: 'SAA-C03', done: false },
  { name: 'Azure AI Apps and Agents Developer Associate', org: 'Microsoft', code: 'AI-103', done: false },
];

const MARQUEE_ITEMS = [
  'AI Engineer', 'RAG Systems', 'LangGraph', 'Multi-Agent', 'XGBoost',
  'Vector Search', 'RAGAS', 'FastAPI', 'Production ML', 'Azure AI', 'Python',
];

const STATS = [
  { value: '2+', label: 'Years Engineering', color: '#7c3aed' },
  { value: '5+', label: 'AI Projects', color: '#06b6d4' },
  { value: '98.1%', label: 'RAG Faithfulness', color: '#10b981' },
  { value: '300ms', label: 'Latency Target', color: '#f59e0b' },
];

const TYPEWRITER_PHRASES = [
  'Multi-Agent LangGraph Systems',
  'Enterprise RAG Pipelines',
  'Real-time ML Architecture',
  'XGBoost Win Predictions',
  'Vector Search Engineering',
];

/* ══════════════════════════════════════════════════════════════════════════════
   HOOKS
══════════════════════════════════════════════════════════════════════════════ */

function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useTypewriter(phrases, speed = 60, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2.2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx(p => (p + 1) % phrases.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, speed, pause]);

  return display;
}

/* ══════════════════════════════════════════════════════════════════════════════
   PARTICLE CANVAS
══════════════════════════════════════════════════════════════════════════════ */

function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    let mouse = { x: W / 2, y: H / 2 };
    let animId;

    const NUM = Math.min(Math.floor((W * H) / 14000), 80);
    const particles = Array.from({ length: NUM }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      hue: Math.random() < 0.6 ? 270 : (Math.random() < 0.5 ? 200 : 160),
    }));

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    const onMove = e => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove, { passive: true });

    function draw() {
      ctx.clearRect(0, 0, W, H);
      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124,58,237,${0.08 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        // mouse interaction
        const mdx = particles[i].x - mouse.x;
        const mdy = particles[i].y - mouse.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 120) {
          const force = (120 - md) / 120 * 0.008;
          particles[i].vx += (mdx / md) * force;
          particles[i].vy += (mdy / md) * force;
        }
      }
      // draw particles
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        p.vx *= 0.998; p.vy *= 0.998;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},80%,70%,${p.alpha})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
      aria-hidden
    />
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   REVEAL WRAPPER
══════════════════════════════════════════════════════════════════════════════ */

function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, visible] = useReveal();
  const initial = {
    up:    'translateY(36px)',
    down:  'translateY(-36px)',
    left:  'translateX(-36px)',
    right: 'translateX(36px)',
    none:  'translateY(0)',
  }[direction];

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0)' : initial,
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECTION HEADER
══════════════════════════════════════════════════════════════════════════════ */

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-20">
      <span className="section-eyebrow">✦ {eyebrow}</span>
      <h2
        className="font-display font-bold text-white leading-[1.05] mb-4"
        style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-500 text-lg max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </Reveal>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   PROJECT CARD
══════════════════════════════════════════════════════════════════════════════ */

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, gx: 50, gy: 50 });
  const [hovering, setHovering] = useState(false);

  const onMouseMove = useCallback((e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top)  / rect.height;
    setTilt({
      x: (px - 0.5) * 16,
      y: -(py - 0.5) * 16,
      gx: px * 100,
      gy: py * 100,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setHovering(false);
    setTilt({ x: 0, y: 0, gx: 50, gy: 50 });
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-card"
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={onMouseLeave}
      style={{
        transform: hovering
          ? `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) translateY(-6px)`
          : 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)',
        transition: hovering ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
      }}
    >
      {/* Mouse-tracked gradient glow */}
      <div
        className="absolute inset-0 rounded-[20px] pointer-events-none transition-opacity duration-500"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, ${project.accent}18 0%, transparent 60%)`,
        }}
      />

      {/* Accent top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[20px]"
        style={{
          background: `linear-gradient(90deg, ${project.accent}, ${project.accentB})`,
          opacity: hovering ? 1 : 0.4,
          transition: 'opacity 0.3s ease',
        }}
      />

      <div className="relative p-8 md:p-10">
        {/* Header row */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-[9px] font-mono uppercase tracking-[0.28em]"
                style={{ color: project.accent }}
              >
                {project.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span className="text-[9px] font-mono text-zinc-600 tracking-wider">{project.year}</span>
            </div>
            <h3 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(20px,2.4vw,26px)' }}>
              {project.emoji} {project.title}
            </h3>
          </div>

          {/* Stat badge */}
          <div
            className="flex-shrink-0 ml-4 text-center px-4 py-2.5 rounded-xl hidden sm:block"
            style={{
              background: `${project.accent}14`,
              border: `1px solid ${project.accent}30`,
            }}
          >
            <div className="font-mono font-bold text-sm" style={{ color: project.accent }}>
              {project.stat.value}
            </div>
            <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider mt-0.5">
              {project.stat.label}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-2.5 mb-7">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-xs text-zinc-500 leading-relaxed">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[5px]"
                style={{ background: project.accent }}
              />
              {h}
            </li>
          ))}
        </ul>

        {/* Footer row */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map(t => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-500 hover:text-white border border-zinc-800 hover:border-zinc-600 transition-all"
              >
                <Github size={13} /> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-500 hover:text-white border border-zinc-800 hover:border-zinc-600 transition-all"
              >
                <ExternalLink size={13} /> Live
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Big number decoration */}
      <div
        className="absolute bottom-4 right-6 font-display font-bold leading-none select-none pointer-events-none"
        style={{ fontSize: '120px', color: `${project.accent}08` }}
      >
        {project.num}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SKILL GROUP
══════════════════════════════════════════════════════════════════════════════ */

function SkillGroup({ group, delay }) {
  const [ref, visible] = useReveal();
  const IconComponent = group.icon;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
      className="group"
    >
      <div
        className="relative rounded-2xl p-6 overflow-hidden border transition-colors duration-300"
        style={{
          background: `${group.color}06`,
          borderColor: `${group.color}20`,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${group.color}45`;
          e.currentTarget.style.background = `${group.color}0b`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = `${group.color}20`;
          e.currentTarget.style.background = `${group.color}06`;
        }}
      >
        {/* Label row */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `${group.color}18`, color: group.color }}
          >
            <IconComponent size={16} />
          </div>
          <span
            className="text-[10px] font-mono uppercase tracking-[0.2em] font-semibold"
            style={{ color: group.color }}
          >
            {group.label}
          </span>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap gap-2">
          {group.items.map(item => (
            <span
              key={item}
              className="text-xs text-zinc-300 px-3 py-1.5 rounded-lg border border-zinc-800/80 hover:border-zinc-600 hover:text-white bg-zinc-900/60 hover:bg-zinc-800/60 transition-all duration-200 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   EXPERIENCE ITEM
══════════════════════════════════════════════════════════════════════════════ */

function ExperienceItem({ exp, index, isLast }) {
  const [open, setOpen] = useState(index === 0);
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-20px)',
        transition: `all 0.85s cubic-bezier(0.16,1,0.3,1) ${index * 120}ms`,
      }}
      className="flex gap-6 md:gap-8"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        <div className={`timeline-node ${exp.current ? 'active' : 'inactive'}`} />
        {!isLast && (
          <div
            className="w-px flex-1 mt-3"
            style={{
              background: exp.current
                ? 'linear-gradient(to bottom, rgba(124,58,237,0.4), rgba(124,58,237,0.05))'
                : 'rgba(255,255,255,0.06)',
              minHeight: '60px',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 pb-12 ${isLast ? '' : ''}`}>
        <button
          className="w-full text-left group"
          onClick={() => setOpen(o => !o)}
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <div className="flex items-center flex-wrap gap-3 mb-1">
                <h3 className="font-display font-bold text-white text-xl md:text-2xl">{exp.role}</h3>
                {exp.current && (
                  <span
                    className="text-[9px] font-mono uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(124,58,237,0.12)',
                      color: '#a78bfa',
                      border: '1px solid rgba(124,58,237,0.3)',
                    }}
                  >
                    Current
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <span>{exp.company}</span>
                <span className="text-zinc-700 font-mono text-[11px]">· {exp.period}</span>
              </div>
            </div>
            <div
              className="w-7 h-7 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-600 group-hover:text-zinc-300 group-hover:border-zinc-600 transition-all flex-shrink-0 mt-1"
              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.35s ease' }}
            >
              <ChevronDown size={14} />
            </div>
          </div>
        </button>

        <div
          style={{
            maxHeight: open ? '600px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.55s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <ul className="space-y-3 mb-5 mt-2">
            {exp.bullets.map((b, j) => (
              <li key={j} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px]"
                  style={{ background: exp.current ? '#7c3aed' : '#3f3f5a' }}
                />
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map(t => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   MAIN APP
══════════════════════════════════════════════════════════════════════════════ */

export default function App() {
  const [scrolled,      setScrolled]      = useState(false);
  const [scrollPct,     setScrollPct]     = useState(0);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [copied,        setCopied]        = useState(null);
  const [formData,      setFormData]      = useState({ email: '', message: '' });
  const [formStatus,    setFormStatus]    = useState('idle');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const typed = useTypewriter(TYPEWRITER_PHRASES, 55, 1600);

  /* ── scroll + cursor ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setShowScrollTop(y > 700);
      const doc = document.documentElement;
      setScrollPct(doc.scrollHeight > doc.clientHeight ? (y / (doc.scrollHeight - doc.clientHeight)) * 100 : 0);

      // active section detection
      const sections = ['hero','projects','skills','experience','education','contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 140 <= y) { setActiveSection(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  /* ── helpers ── */
  const goto = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  }, []);

  const copyText = useCallback(async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2200);
    } catch (_) {}
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xwvdqlwd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: formData.email, message: formData.message }),
      });
      setFormStatus(res.ok ? 'success' : 'error');
    } catch { setFormStatus('error'); }
  };

  const navItems = ['projects','skills','experience','contact'];

  /* ════════════════════════════════════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════════════════════════════════════ */
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: 'var(--c-bg)' }}>

      {/* ── SCROLL PROGRESS ───────────────────────────────────────────────────── */}
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} aria-hidden />

      {/* ══════════════════════════════════════════════════════════════════════
          NAVIGATION
      ══════════════════════════════════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-white/[0.05]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => goto('hero')}
            className="relative group flex items-center gap-2"
            aria-label="Go to top"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-mono font-bold transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                boxShadow: 'var(--glow-v) 0 4px 14px',
              }}
            >
              JR
            </div>
            <span className="hidden sm:block text-sm font-display font-semibold text-zinc-400 group-hover:text-white transition-colors">
              Jagadeep Reddy
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(s => (
              <button
                key={s}
                id={`nav-${s}`}
                onClick={() => goto(s)}
                className="relative px-4 py-2 rounded-lg text-[11px] font-mono uppercase tracking-[0.18em] transition-all duration-200"
                style={{
                  color: activeSection === s ? '#a78bfa' : 'rgba(161,161,170,0.8)',
                  background: activeSection === s ? 'rgba(124,58,237,0.1)' : 'transparent',
                }}
              >
                {s}
                {activeSection === s && (
                  <span
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: '#7c3aed' }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="nav-resume"
              href="/Jagadeep_Reddy_Resume.pdf"
              download
              className="btn-shine flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.15em] text-white px-4 py-2.5 rounded-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #4338ca)',
                boxShadow: '0 4px 16px rgba(124,58,237,0.35)',
              }}
            >
              Resume <Download size={12} />
            </a>
          </div>

          {/* Hamburger */}
          <button
            id="nav-menu-toggle"
            className="md:hidden w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(3,3,8,0.97)', backdropFilter: 'blur(24px)' }}
      >
        <button
          id="mobile-menu-close"
          className="absolute top-6 right-6 w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400"
          onClick={() => setMenuOpen(false)}
        >
          <X size={18} />
        </button>
        {navItems.map((s, i) => (
          <button
            key={s}
            id={`mobile-nav-${s}`}
            onClick={() => goto(s)}
            className="text-4xl font-display font-bold capitalize text-zinc-300 hover:text-white transition-colors"
            style={{
              animation: menuOpen ? `fade-up 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 70}ms both` : 'none',
            }}
          >
            {s}
          </button>
        ))}
        <a
          href="/Jagadeep_Reddy_Resume.pdf"
          download
          className="flex items-center gap-2 text-sm font-mono text-zinc-400 border border-zinc-700 px-6 py-3 rounded-xl mt-4"
        >
          Resume <Download size={14} />
        </a>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Particle canvas */}
        <ParticleCanvas />

        {/* Grid background */}
        <div className="absolute inset-0 grid-bg opacity-100" aria-hidden />

        {/* Aurora blobs */}
        <div
          aria-hidden
          className="aurora-1 absolute -top-40 -right-32 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.28) 0%, transparent 65%)' }}
        />
        <div
          aria-hidden
          className="aurora-2 absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 65%)' }}
        />
        <div
          aria-hidden
          className="aurora-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(67,56,202,0.12) 0%, transparent 70%)' }}
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 z-10">

          {/* Status + Location row */}
          <div className="flex flex-wrap items-center gap-3 mb-10 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="status-badge">
              <span className="status-dot" />
              Available for opportunities
            </div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-[0.18em]"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(161,161,170,0.8)',
              }}
            >
              📍 Bengaluru, India &nbsp;·&nbsp; Open to Relocation (US / Saudi Arabia)
            </div>
          </div>

          {/* Name + Typewriter */}
          <div className="animate-fade-up" style={{ animationDelay: '220ms' }}>
            <h1
              className="font-display font-bold leading-[0.88] mb-6 tracking-tight"
              style={{ fontSize: 'clamp(56px, 10vw, 144px)' }}
            >
              <span className="block text-white">Jagadeep</span>
              <span className="block gradient-text">Reddy</span>
            </h1>

            <div
              className="flex items-center gap-3 mb-2"
              style={{ minHeight: '36px' }}
            >
              <span className="text-zinc-600 font-mono text-sm">&gt;_</span>
              <span
                className="text-lg md:text-xl font-mono text-zinc-300 typewriter-cursor"
                aria-label="Current focus"
              >
                {typed}
              </span>
            </div>
          </div>

          {/* Tagline + CTAs */}
          <div
            className="flex flex-col md:flex-row md:items-end justify-between gap-10 mt-12 animate-fade-up"
            style={{ animationDelay: '380ms' }}
          >
            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl font-light">
              AI Engineer building production-grade intelligent systems — from{' '}
              <span className="text-zinc-200">multi-agent LangGraph orchestration</span> to{' '}
              <span className="text-zinc-200">enterprise RAG pipelines</span> that actually pass evaluation.
            </p>

            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                id="hero-cta-work"
                onClick={() => goto('projects')}
                className="btn-shine px-7 py-3.5 text-white text-sm font-medium rounded-xl flex items-center gap-2 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #4338ca)',
                  boxShadow: '0 6px 20px rgba(124,58,237,0.4)',
                }}
              >
                View Work <ArrowUpRight size={16} />
              </button>
              <button
                id="hero-cta-contact"
                onClick={() => goto('contact')}
                className="px-7 py-3.5 border text-zinc-300 hover:text-white text-sm font-medium rounded-xl transition-all duration-300 hover:border-zinc-500 hover:bg-white/[0.03]"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-14 animate-fade-up"
            style={{
              animationDelay: '520ms',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {STATS.map(({ value, label, color }) => (
              <div key={label} className="group">
                <div
                  className="font-display font-bold text-3xl md:text-4xl mb-1.5 transition-all duration-300"
                  style={{ color }}
                >
                  {value}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-700 animate-fade-up z-10"
          style={{ animationDelay: '900ms' }}
          aria-hidden
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-zinc-600 to-transparent" />
          <span className="text-[8px] font-mono uppercase tracking-[0.4em]">Scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MARQUEE STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        className="overflow-hidden py-4 relative z-10"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)', background: 'rgba(10,10,20,0.6)' }}
        aria-hidden
      >
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-5 px-6 text-[10px] font-mono uppercase tracking-[0.22em] whitespace-nowrap"
              style={{ color: 'rgba(124,58,237,0.55)' }}
            >
              {item}
              <span style={{ color: 'rgba(6,182,212,0.4)' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          PROJECTS
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="projects" className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-20">
          <Reveal>
            <span className="section-eyebrow">✦ Selected Work</span>
            <h2
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
            >
              Projects
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <a
              id="projects-github-link"
              href="https://github.com/Jagadeep-Reddy"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-sm text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 px-4 py-2.5 rounded-xl transition-all"
            >
              All on GitHub <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((proj, i) => (
            <Reveal key={proj.num} delay={i * 150}>
              <ProjectCard project={proj} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Quote */}
        <Reveal delay={200} className="mt-20">
          <div
            className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.07), rgba(6,182,212,0.04))',
              border: '1px solid rgba(124,58,237,0.15)',
            }}
          >
            <div
              className="absolute top-4 left-6 font-display text-[120px] leading-none text-zinc-800 select-none"
              aria-hidden
            >
              "
            </div>
            <blockquote className="relative text-2xl md:text-3xl font-display italic text-zinc-400 leading-relaxed max-w-2xl">
              Every system I build is designed to{' '}
              <span className="text-white not-italic">survive production</span>,
              not just impress a demo.
            </blockquote>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SKILLS
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="skills"
        className="py-32"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Technical Expertise"
            title="Skills"
            subtitle="A full-stack AI engineering toolkit — from orchestration layers to cloud deployment."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILL_GROUPS.map((group, i) => (
              <SkillGroup key={group.label} group={group} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          EXPERIENCE
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="experience"
        className="py-32"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            eyebrow="Work History"
            title="Experience"
            subtitle="From enterprise banking systems to cutting-edge AI orchestration."
          />

          <div>
            {EXPERIENCE.map((exp, i) => (
              <ExperienceItem
                key={i}
                exp={exp}
                index={i}
                isLast={i === EXPERIENCE.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          EDUCATION + CERTS
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="education"
        className="py-32"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Academic Background"
            title="Education"
          />

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {EDUCATION.map((edu, i) => (
              <Reveal key={i} delay={i * 120}>
                <div
                  id={`edu-card-${i}`}
                  className="relative rounded-2xl p-8 overflow-hidden group transition-all duration-300"
                  style={{
                    background: 'var(--c-elevated)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)' }}
                  />
                  <div className="text-4xl mb-5">{edu.icon}</div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-violet-400/70 mb-3">
                    {edu.period}
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">{edu.degree}</h3>
                  <div className="text-zinc-400 text-sm mb-4">{edu.institution}</div>
                  <p className="text-zinc-500 text-sm leading-relaxed">{edu.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Certifications */}
          <Reveal delay={200}>
            <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-600 mb-5 flex items-center gap-3">
              <Award size={13} className="text-zinc-700" />
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {CERTS.map((cert, i) => (
                <div key={i} id={`cert-${i}`} className={`cert-card ${cert.done ? 'done' : ''}`}>
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{
                      background: cert.done ? '#10b981' : '#f59e0b',
                      boxShadow: cert.done ? '0 0 8px rgba(16,185,129,0.5)' : '0 0 8px rgba(245,158,11,0.5)',
                      animation: 'pulse-glow 2.5s ease infinite',
                      '--glow-v': cert.done ? 'rgba(16,185,129,0.4)' : 'rgba(245,158,11,0.4)',
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate">{cert.name}</div>
                    <div className="text-[11px] font-mono text-zinc-500 mt-0.5">{cert.org} · {cert.code}</div>
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider flex-shrink-0"
                    style={{ color: cert.done ? '#34d399' : '#fbbf24' }}>
                    {cert.done ? 'Certified' : 'In Progress'}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="py-32 relative overflow-hidden"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        {/* Background blobs */}
        <div
          aria-hidden
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 65%)' }}
        />
        <div
          aria-hidden
          className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 65%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Headline */}
          <Reveal className="mb-16">
            <span className="section-eyebrow">✦ Get In Touch</span>
            <h2
              className="font-display font-bold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(38px, 6vw, 88px)' }}
            >
              Let's build something<br />
              <span className="gradient-text">extraordinary.</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
              Open to full-time AI Engineering roles, ML consulting, and remote collaboration.
              Based in Bengaluru, India — happy to work across time zones.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left: channels */}
            <Reveal delay={120}>
              <div className="space-y-3 mb-8">
                {[
                  {
                    id: 'contact-email', icon: Mail, label: 'Email',
                    display: 'jagadeepreddy3638@gmail.com',
                    href: 'mailto:jagadeepreddy3638@gmail.com',
                    copyValue: 'jagadeepreddy3638@gmail.com', key: 'email',
                  },
                  {
                    id: 'contact-linkedin', icon: Linkedin, label: 'LinkedIn',
                    display: '/buthuru-jagadeep-reddy',
                    href: 'https://www.linkedin.com/in/buthuru-jagadeep-reddy-a522961a1/',
                    copyValue: 'https://www.linkedin.com/in/buthuru-jagadeep-reddy-a522961a1/', key: 'linkedin',
                  },
                  {
                    id: 'contact-github', icon: Github, label: 'GitHub',
                    display: '/Jagadeep-Reddy',
                    href: 'https://github.com/Jagadeep-Reddy',
                    copyValue: 'https://github.com/Jagadeep-Reddy', key: 'github',
                  },
                ].map(({ id, icon: Icon, label, display, href, copyValue, key }) => (
                  <div key={key} id={id} className="contact-channel group">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(124,58,237,0.12)', color: '#a78bfa' }}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-600 mb-0.5">{label}</div>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-300 hover:text-white transition-colors truncate block"
                      >
                        {display}
                      </a>
                    </div>
                    <button
                      id={`copy-${key}`}
                      onClick={() => copyText(copyValue, key)}
                      aria-label={`Copy ${label}`}
                      className="p-2 rounded-lg text-zinc-700 hover:text-zinc-300 transition-all opacity-0 group-hover:opacity-100"
                    >
                      {copied === key
                        ? <Check size={14} className="text-emerald-400" />
                        : <Copy size={14} />
                      }
                    </button>
                  </div>
                ))}
              </div>

              <p className="text-xs font-mono text-zinc-700 pl-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Typical response time: &lt; 24 hours
              </p>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={260}>
              {formStatus === 'success' ? (
                <div
                  id="form-success"
                  className="rounded-2xl p-14 text-center"
                  style={{
                    background: 'rgba(16,185,129,0.06)',
                    border: '1px solid rgba(16,185,129,0.2)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}
                  >
                    <Check size={30} className="text-emerald-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl mb-2">Message sent!</h3>
                  <p className="text-zinc-400 text-sm">I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form
                  id="contact-form"
                  onSubmit={submitForm}
                  className="space-y-4"
                  style={{
                    background: 'rgba(10,10,22,0.6)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '20px',
                    padding: '32px',
                  }}
                >
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-500 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      placeholder="you@company.com"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="form-message"
                      className="block text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-500 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="form-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      placeholder="Tell me about your project, role, or idea..."
                      className="form-input resize-none"
                    />
                  </div>
                  {formStatus === 'error' && (
                    <p className="text-xs text-red-400 font-mono">
                      Something went wrong. Please email me directly.
                    </p>
                  )}
                  <button
                    id="form-submit"
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="btn-shine w-full py-4 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed, #4338ca)',
                      boxShadow: '0 6px 20px rgba(124,58,237,0.35)',
                    }}
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════════════════ */}
      <footer
        className="py-10"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(3,3,8,0.8)' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-mono font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
            >
              JR
            </div>
            <span className="text-xs font-mono text-zinc-600">© 2026 Jagadeep Reddy</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="ml-1">All systems operational</span>
          </div>

          <div className="flex items-center gap-5">
            {[
              { href: 'https://github.com/Jagadeep-Reddy', icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/buthuru-jagadeep-reddy-a522961a1/', icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:jagadeepreddy3638@gmail.com', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-zinc-600 hover:text-white transition-colors hover:scale-110 inline-flex"
                style={{ transition: 'color 0.2s ease, transform 0.2s ease' }}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── SCROLL TO TOP ───────────────────────────────────────────────────── */}
      <button
        id="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-400 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{
          background: 'rgba(15,15,30,0.85)',
          border: '1px solid rgba(124,58,237,0.3)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
        }}
      >
        <ChevronDown size={16} className="rotate-180 text-violet-400" />
      </button>

    </div>
  );
}
