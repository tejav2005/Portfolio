import { useState, useEffect, useRef } from "react";
import profilePhoto from "./assets/profile.jpeg";
import resumePDF from "./assets/resume.pdf";

const data = {
  name: "Voggu Teja V",
  title: "Software",
  title2: "Engineer.",
  subtitle: "B.Tech Information Technology · RMK Engineering College, Chennai",
  email: "tejav86818@gmail.com",
  phone: "+91-8681866999",
  linkedin: "https://linkedin.com/in/voggu-teja-v",
  github: "https://github.com/tejav2005",
  summary: "Motivated and detail-oriented IT student with a strong foundation in full-stack development and a passion for creating innovative, user-focused applications. Experienced in team projects, problem-solving, and continuous learning in emerging technologies.",
  skills: {
    "Languages":   { items: ["Java"], color: "#ff6b6b", icon: "⚙" },
    "Frontend":    { items: ["React JS", "Next JS", "React Native"], color: "#4ecdc4", icon: "◈" },
    "Backend":     { items: ["Node JS", "Spring Boot"], color: "#a8e063", icon: "◉" },
    "Databases":   { items: ["MySQL", "MongoDB"], color: "#f7971e", icon: "▣" },
    "Soft Skills": { items: ["Leadership", "Communication", "Teamwork"], color: "#c471ed", icon: "◆" },
  },
  education: [
    { institution: "R.M.K. Engineering College", degree: "B.Tech Information Technology", grade: "7.57 CGPA", year: "2023 – 2027", short: "RMK" },
    { institution: "Velankanni Matric Hr Sec School", degree: "Senior Secondary (12th)", grade: "83.33%", year: "2023", short: "VMH" },
    { institution: "Velankanni Matric Hr Sec School", degree: "Secondary (10th)", grade: "100%", year: "2021", short: "VMH" },
  ],
  projects: [
    { title: "AI PDF Notes Generator", year: "2025", tools: ["Next.js","Convex","Clerk"], accent: "#4ecdc4", num: "01", description: "AI-powered PDF notes generation app. Users upload PDFs and get structured notes automatically, with Clerk authentication and Convex real-time backend." },
    { title: "SmartRail-Docs", year: "2026", tools: ["React Native","Node.js","MongoDB"], accent: "#a8e063", num: "02", description: "AI document management system for railway operations. Gemini-based summarization with department-based access control for secure document sharing." },
    { title: "Chat Application", year: "2025", tools: ["React Native","Node.js","MongoDB"], accent: "#ff6b6b", num: "03", description: "Cross-platform real-time messaging app with secure authentication, user management, and conversation history via MongoDB." },
    { title: "Expense Tracker", year: "2025", tools: ["Spring Boot","React","MySQL"], accent: "#f7971e", num: "04", description: "Full-stack expense tracker with RESTful API, React UI, CRUD operations, expense filtering and analytics backed by MySQL." },
  ],
  experience: [
    { company: "Retetch Solutions Pvt. Ltd.", role: "AI Intern", period: "Jun 2025 – Jul 2025", location: "Chennai", description: "Gained hands-on experience on real-world AI applications. Improved problem-solving, technical, and teamwork skills in an industry environment." },
  ],
  achievements: [{ title: "ENVISION 2026 Hackathon", rank: "2nd Place", desc: "24-hour hackathon by IEEE Computer Society SSN Student Branch at SSN College of Engineering." }],
  publications: [{ title: "Interactive Recipe Recommendation Using AI and ML", venue: "ISTE National Conference (RMKRASEFT-25)" }],
};

const stats = [["4+","Projects"],["2nd","Hackathon"],["1","Publication"],["83.33%","12th Grade"]];

function useTypewriter(text, speed = 45, start = true) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    if (!start) return;
    let i = 0; setDisplay("");
    const t = setInterval(() => {
      if (i < text.length) { setDisplay(text.slice(0, i + 1)); i++; }
      else clearInterval(t);
    }, speed);
    return () => clearInterval(t);
  }, [text, speed, start]);
  return display;
}

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

function RevealSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)", transition: `opacity .7s ${delay}s ease, transform .7s ${delay}s ease` }}>
      {children}
    </div>
  );
}

function ProfilePhoto() {
  return (
    <div style={{ width: "100%", maxWidth: 280, height: 340, overflow: "hidden", position: "relative", filter: "grayscale(15%) contrast(1.08)" }}>
      <img src={profilePhoto} alt="Voggu Teja V" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #050810 0%, transparent 45%)" }} />
      <div style={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: 2, color: "#4ecdc4", marginBottom: 4 }}>{data.name.toUpperCase()}</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 8, color: "#8892a4", letterSpacing: 1 }}>SOFTWARE ENG · CHENNAI</div>
      </div>
    </div>
  );
}

function ResumeDownload() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 20px", border: "1px solid #a8e06350", background: "#a8e06306" }}>
      <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
        <rect x="1" y="1" width="26" height="30" rx="2" stroke="#a8e063" strokeWidth="1.5"/>
        <path d="M7 8h10M7 13h14M7 18h10" stroke="#a8e063" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
        <rect x="7" y="22" width="6" height="1.5" rx=".75" fill="#a8e063"/>
      </svg>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, letterSpacing: 2, color: "#5a6478", textTransform: "uppercase", marginBottom: 3 }}>Resume / CV</div>
        <div style={{ fontSize: 13, color: "#e8eaf0" }}>Voggu_Teja_V_Resume.pdf</div>
      </div>
      <a href={resumePDF} target="_blank" rel="noreferrer"
        style={{ padding: "8px 18px", background: "#a8e063", color: "#050810", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", textDecoration: "none", fontWeight: 600, flexShrink: 0 }}>
        View
      </a>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive]   = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [heroReady, setHeroReady] = useState(false);

  const nav = ["home","about","skills","projects","experience","contact"];
  const navLabels = { home:"Home", about:"About", skills:"Skills", projects:"Projects", experience:"Experience", contact:"Contact" };

  useEffect(() => {
    const lf = document.createElement("link"); lf.rel = "stylesheet";
    lf.href = "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700;800&display=swap";
    document.head.appendChild(lf);
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const cur = nav.find(id => { const el = document.getElementById(id); if (!el) return false; const r = el.getBoundingClientRect(); return r.top <= 130 && r.bottom >= 130; });
      if (cur) setActive(cur);
    };
    const onMouse = e => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse);
    setTimeout(() => setHeroReady(true), 300);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("mousemove", onMouse); };
  }, []);

  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const heroTitle  = useTypewriter(data.title, 60, heroReady);
  const heroTitle2 = useTypewriter(data.title2, 60, heroTitle.length >= data.title.length);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: "#050810", color: "#e8eaf0", overflowX: "hidden", cursor: "none" }}>
      <div style={{ position:"fixed", left:cursorPos.x-8, top:cursorPos.y-8, width:16, height:16, borderRadius:"50%", background:"#4ecdc4", zIndex:9999, pointerEvents:"none", mixBlendMode:"difference" }} />
      <div style={{ position:"fixed", left:cursorPos.x-24, top:cursorPos.y-24, width:48, height:48, borderRadius:"50%", border:"1px solid #4ecdc440", zIndex:9998, pointerEvents:"none", transition:"left .12s ease, top .12s ease" }} />

      <style>{`
        * { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        ::selection { background:#4ecdc440; color:#4ecdc4; }
        @keyframes fadeUp    { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scanline  { 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
        @keyframes floatY    { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-14px)} }
        @keyframes glitch1   { 0%,95%{clip-path:inset(0)} 96%{clip-path:inset(30% 0 40% 0);transform:translateX(-4px)} 97%{clip-path:inset(60% 0 10% 0);transform:translateX(4px)} 98%,100%{clip-path:inset(0);transform:none} }
        @keyframes pulseBorder{ 0%,100%{border-color:#4ecdc430} 50%{border-color:#4ecdc490} }
        @keyframes blink     { 0%,49%{opacity:1} 50%,99%{opacity:0} }
        @keyframes slideInLeft{ from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:translateX(0)} }
        .caret { display:inline-block; animation:blink 1s step-start infinite; }
        .nav-btn { background:none; border:none; cursor:none; font-family:'DM Mono',monospace; font-size:12px; letter-spacing:1.5px; text-transform:uppercase; padding:8px 16px; border-radius:4px; transition:all .2s; }
        .nav-btn:hover { background:#4ecdc415; }
        .proj-card { background:#080d1a; border:1px solid #1a2240; transition:all .3s; overflow:hidden; position:relative; }
        .proj-card:hover { border-color:var(--accent); transform:translateY(-5px); box-shadow:0 24px 60px rgba(0,0,0,.5); }
        .proj-card::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:var(--accent); transform:scaleX(0); transform-origin:left; transition:transform .3s; }
        .proj-card:hover::before { transform:scaleX(1); }
        .skill-tag { border:1px solid var(--col); color:var(--col); background:transparent; padding:6px 14px; font-size:12px; font-family:'DM Mono',monospace; letter-spacing:.5px; transition:all .2s; display:inline-block; }
        .skill-tag:hover { background:var(--col); color:#050810; }
        .tool-tag { font-size:11px; font-family:'DM Mono',monospace; letter-spacing:.5px; padding:3px 10px; background:var(--accent-bg); color:var(--accent); border:1px solid var(--accent); }
        .glitch { animation:glitch1 8s ease infinite; }
        .contact-link { display:flex; align-items:center; gap:16px; padding:18px 24px; border:1px solid #1a2240; background:#080d1a; text-decoration:none; transition:all .25s; position:relative; overflow:hidden; }
        .contact-link::after { content:''; position:absolute; inset:0; background:linear-gradient(90deg,transparent,#4ecdc408,transparent); transform:translateX(-100%); transition:transform .4s; }
        .contact-link:hover { border-color:#4ecdc460; transform:translateX(6px); }
        .contact-link:hover::after { transform:translateX(100%); }
        .edu-row { display:flex; gap:20px; padding:24px 0; border-bottom:1px solid #1a2240; transition:all .2s; }
        .edu-row:hover { padding-left:8px; }
        .edu-row:last-child { border-bottom:none; }
        .section-label { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:4px; text-transform:uppercase; color:#4ecdc4; margin-bottom:12px; display:flex; align-items:center; gap:12px; }
        .section-label::after { content:''; flex:1; height:1px; background:#4ecdc430; max-width:60px; }
        .big-title { font-family:'Bebas Neue',sans-serif; letter-spacing:2px; line-height:.95; color:#e8eaf0; }
        @media(max-width:768px){
          .hide-mob{display:none !important}
          .show-mob{display:flex !important}
          .hero-inner{grid-template-columns:1fr !important; gap:40px !important}
          .hero-photo{order:-1; justify-content:center !important}
          .grid-2{grid-template-columns:1fr !important}
          .stats-grid{grid-template-columns:repeat(2,1fr) !important}
          .stats-grid>div{border-right:none !important; border-bottom:1px solid #1a2240; padding-bottom:20px !important}
          .stats-grid>div:nth-child(odd){border-right:1px solid #1a2240 !important}
          .stats-grid>div:nth-last-child(-n+2){border-bottom:none !important}
          .proj-grid{grid-template-columns:1fr !important}
        }
        @media(hover:none){
          *{cursor:auto !important}
          .nav-btn{cursor:pointer !important}
          button{cursor:pointer !important}
          a{cursor:pointer !important}
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, background:scrolled?"rgba(5,8,16,.95)":"transparent", backdropFilter:scrolled?"blur(20px)":"none", borderBottom:scrolled?"1px solid #1a2240":"none", transition:"all .3s" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px", height:68, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <button onClick={() => scrollTo("home")} style={{ background:"none", border:"none", cursor:"none", fontFamily:"'Bebas Neue',sans-serif", fontSize:26, letterSpacing:3, color:"#e8eaf0" }}>
            <span style={{ color:"#4ecdc4" }}>TV</span><span style={{ color:"#4ecdc430", fontSize:18 }}> /</span>
          </button>
          <div className="hide-mob" style={{ display:"flex", gap:0, alignItems:"center" }}>
            {nav.slice(1).map(s => (
              <button key={s} onClick={() => scrollTo(s)} className="nav-btn" style={{ color:active===s?"#4ecdc4":"#8892a4" }}>
                {active===s && <span style={{ color:"#4ecdc4", marginRight:6 }}>›</span>}
                {navLabels[s]}
              </button>
            ))}
            <a href={resumePDF} target="_blank" rel="noreferrer" style={{ marginLeft:16, padding:"8px 22px", border:"1px solid #a8e063", color:"#a8e063", fontFamily:"'DM Mono',monospace", fontSize:11, letterSpacing:1.5, textTransform:"uppercase", textDecoration:"none", transition:"all .2s" }}
              onMouseEnter={e=>{e.target.style.background="#a8e063";e.target.style.color="#050810";}}
              onMouseLeave={e=>{e.target.style.background="transparent";e.target.style.color="#a8e063";}}>
              Resume ↗
            </a>
            <a href={`mailto:${data.email}`} style={{ marginLeft:8, padding:"8px 22px", border:"1px solid #4ecdc4", color:"#4ecdc4", fontFamily:"'DM Mono',monospace", fontSize:11, letterSpacing:1.5, textTransform:"uppercase", textDecoration:"none", transition:"all .2s" }}
              onMouseEnter={e=>{e.target.style.background="#4ecdc4";e.target.style.color="#050810";}}
              onMouseLeave={e=>{e.target.style.background="transparent";e.target.style.color="#4ecdc4";}}>
              Hire Me
            </a>
          </div>
          <button className="show-mob" onClick={() => setMenuOpen(!menuOpen)} style={{ display:"none", background:"none", border:"none", cursor:"none", fontSize:20, color:"#e8eaf0", padding:4 }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div style={{ background:"#080d1a", borderTop:"1px solid #1a2240", padding:"16px 32px" }}>
            {nav.slice(1).map(s => (
              <button key={s} onClick={() => scrollTo(s)} style={{ display:"block", width:"100%", background:"none", border:"none", cursor:"none", fontFamily:"'DM Mono',monospace", fontSize:13, color:active===s?"#4ecdc4":"#8892a4", padding:"14px 0", textAlign:"left", borderBottom:"1px solid #1a2240", letterSpacing:1.5, textTransform:"uppercase" }}>
                {navLabels[s]}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden", paddingTop:68 }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(#1a224015 1px,transparent 1px),linear-gradient(90deg,#1a224015 1px,transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:0, right:"28%", width:1, height:"100%", background:"linear-gradient(to bottom,transparent,#4ecdc425,transparent)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:120, background:"linear-gradient(to top,#050810,transparent)", pointerEvents:"none", zIndex:2 }} />
        <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none", opacity:.04 }}>
          <div style={{ position:"absolute", left:0, right:0, height:"30%", background:"linear-gradient(to bottom,transparent,#4ecdc4,transparent)", animation:"scanline 6s linear infinite" }} />
        </div>
        <div style={{ position:"absolute", top:"10%", right:"5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,#4ecdc415 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"20%", left:"0%", width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle,#ff6b6b0d 0%,transparent 70%)", pointerEvents:"none" }} />

        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px", width:"100%", position:"relative", zIndex:1 }}>
          <div className="hero-inner" style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:80, alignItems:"center" }}>
            <div>
              <div style={{ opacity:heroReady?1:0, animation:heroReady?"slideInLeft .7s ease both":"none" }}>
                <p style={{ fontFamily:"'DM Mono',monospace", fontSize:11, letterSpacing:4, color:"#4ecdc4", textTransform:"uppercase", marginBottom:24 }}>
                  <span style={{ color:"#4ecdc440" }}>// </span>available for hire
                </p>
              </div>
              <div className="big-title glitch" style={{ fontSize:"clamp(62px,8vw,110px)", marginBottom:0, opacity:heroReady?1:0, animation:heroReady?"slideInLeft .7s .1s ease both":"none" }}>
                {heroTitle}<span className="caret" style={{ color:"#4ecdc4" }}>_</span>
              </div>
              <div className="big-title" style={{ fontSize:"clamp(62px,8vw,110px)", color:"#4ecdc4", opacity:heroReady?1:0, animation:heroReady?"slideInLeft .7s .15s ease both":"none" }}>
                {heroTitle2}
              </div>
              <p style={{ fontSize:15, color:"#8892a4", fontWeight:400, lineHeight:1.7, maxWidth:480, marginTop:28, opacity:heroReady?1:0, animation:heroReady?"slideInLeft .7s .4s ease both":"none" }}>
                {data.subtitle}
              </p>
              <div style={{ display:"flex", gap:14, marginTop:40, flexWrap:"wrap", opacity:heroReady?1:0, animation:heroReady?"slideInLeft .7s .55s ease both":"none" }}>
                <button onClick={() => scrollTo("projects")} style={{ padding:"13px 32px", background:"#4ecdc4", color:"#050810", border:"none", fontFamily:"'DM Mono',monospace", fontSize:12, letterSpacing:2, textTransform:"uppercase", cursor:"none", fontWeight:500, transition:"all .2s" }}
                  onMouseEnter={e=>{e.target.style.background="#38b2ac";e.target.style.transform="translateY(-2px)";}}
                  onMouseLeave={e=>{e.target.style.background="#4ecdc4";e.target.style.transform="none";}}>
                  View Projects
                </button>
                <a href={resumePDF} target="_blank" rel="noreferrer" style={{ padding:"13px 32px", border:"1px solid #a8e06360", color:"#a8e063", fontFamily:"'DM Mono',monospace", fontSize:12, letterSpacing:2, textTransform:"uppercase", textDecoration:"none", transition:"all .2s" }}
                  onMouseEnter={e=>{e.currentTarget.style.background="#a8e06315";e.currentTarget.style.borderColor="#a8e063";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.borderColor="#a8e06360";}}>
                  Resume ↗
                </a>
              </div>
            </div>

            {/* Photo uploader */}
            <div className="hero-photo" style={{ display:"flex", justifyContent:"flex-end", position:"relative", animation:"floatY 6s ease-in-out infinite", opacity:heroReady?1:0, transition:"opacity .8s .6s ease" }}>
              <div style={{ position:"absolute", top:-20, right:-20, width:"calc(100% + 40px)", height:"calc(100% + 40px)", border:"1px solid #4ecdc415", pointerEvents:"none", animation:"pulseBorder 4s ease infinite" }} />
              <div style={{ position:"absolute", top:10, right:10, width:"calc(100% - 20px)", height:"calc(100% - 20px)", border:"1px solid #4ecdc420", pointerEvents:"none" }} />
              {[{t:0,l:0,bt:"2px solid #4ecdc4",bb:"none",bl:"2px solid #4ecdc4",br:"none"},{t:0,r:0,bt:"2px solid #4ecdc4",bb:"none",bl:"none",br:"2px solid #4ecdc4"},{b:0,l:0,bt:"none",bb:"2px solid #4ecdc4",bl:"2px solid #4ecdc4",br:"none"},{b:0,r:0,bt:"none",bb:"2px solid #4ecdc4",bl:"none",br:"2px solid #4ecdc4"}].map((s,i)=>(
                <div key={i} style={{ position:"absolute", width:20, height:20, top:s.t, bottom:s.b, left:s.l, right:s.r, borderTop:s.bt, borderBottom:s.bb, borderLeft:s.bl, borderRight:s.br, pointerEvents:"none", zIndex:2 }} />
              ))}
              <ProfilePhoto />
            </div>
          </div>

          {/* Stats */}
          <div className="stats-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:0, marginTop:80, borderTop:"1px solid #1a2240", paddingTop:40, opacity:heroReady?1:0, animation:heroReady?"fadeUp .8s .8s ease both":"none" }}>
            {stats.map(([n,l],i) => (
              <div key={l} style={{ textAlign:"center", padding:"0 20px", borderRight:i<3?"1px solid #1a2240":"none" }}>
                <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:48, letterSpacing:2, color:"#4ecdc4", lineHeight:1 }}>{n}</div>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:2, color:"#8892a4", textTransform:"uppercase", marginTop:6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding:"120px 0", background:"#070b16" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px" }}>
          <RevealSection>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1.1fr", gap:80, alignItems:"start" }} className="grid-2">
              <div>
                <div className="section-label">About Me</div>
                <h2 className="big-title" style={{ fontSize:"clamp(36px,5vw,60px)", marginBottom:28 }}>
                  Building the<br /><span style={{ color:"#4ecdc4" }}>future</span>, one<br />commit at a time.
                </h2>
                <p style={{ fontSize:15, color:"#8892a4", lineHeight:1.9, marginBottom:20 }}>{data.summary}</p>
                <p style={{ fontSize:14, color:"#5a6478", lineHeight:1.85 }}>
                  Pursuing B.Tech IT at RMK Engineering College, graduating 2027. I love building full-stack products from AI-powered tools to real-time apps — always pushing boundaries with emerging tech.
                </p>
                <div style={{ marginTop:36 }}>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:3, color:"#8892a4", textTransform:"uppercase", marginBottom:14 }}>// Resume / CV</div>
                  <ResumeDownload />
                </div>
              </div>
              <div>
                <div style={{ background:"#080d1a", border:"1px solid #1a2240", padding:"32px" }}>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:3, color:"#4ecdc4", marginBottom:24, textTransform:"uppercase" }}>// info</div>
                  {[
                    ["name",     data.name],
                    ["role",     "Software Engineer"],
                    ["email",    data.email],
                    ["phone",    data.phone],
                    ["github",   "tejav2005"],
                    ["linkedin", "voggu-teja-v"],
                    ["location", "Chennai, India"],
                    ["status",   "Open to opportunities"],
                  ].map(([k,v]) => (
                    <div key={k} style={{ display:"flex", gap:12, padding:"10px 0", borderBottom:"1px solid #1a2240", fontFamily:"'DM Mono',monospace", fontSize:12.5 }}>
                      <span style={{ color:"#ff6b6b", minWidth:80 }}>{k}</span>
                      <span style={{ color:"#5a6478" }}>:</span>
                      <span style={{ color:"#a8e063", flex:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding:"120px 0", background:"#050810", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:"60%", background:"radial-gradient(ellipse 70% 50% at 50% 0%,#4ecdc408 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px", position:"relative" }}>
          <RevealSection>
            <div className="section-label">Skills & Tech</div>
            <h2 className="big-title" style={{ fontSize:"clamp(36px,5vw,60px)", marginBottom:64 }}>The <span style={{ color:"#4ecdc4" }}>Stack</span></h2>
          </RevealSection>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:24 }}>
            {Object.entries(data.skills).map(([cat,{items,color,icon}],i) => (
              <RevealSection key={cat} delay={i*.07}>
                <div style={{ border:"1px solid #1a2240", padding:"28px 24px", background:"#070b16", position:"relative", overflow:"hidden" }}>
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:color, opacity:.6 }} />
                  <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:28, letterSpacing:2, color, marginBottom:4 }}>{icon}</div>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:3, textTransform:"uppercase", color:"#5a6478", marginBottom:20 }}>{cat}</div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                    {items.map(item => <span key={item} className="skill-tag" style={{ "--col":color }}>{item}</span>)}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding:"120px 0", background:"#070b16" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px" }}>
          <RevealSection>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:64, flexWrap:"wrap", gap:20 }}>
              <div>
                <div className="section-label">Featured Work</div>
                <h2 className="big-title" style={{ fontSize:"clamp(36px,5vw,60px)" }}><span style={{ color:"#4ecdc4" }}>Projects</span></h2>
              </div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"#5a6478", letterSpacing:1 }}>{data.projects.length} projects</div>
            </div>
          </RevealSection>
          <div className="proj-grid" style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:1, background:"#1a2240" }}>
            {data.projects.map((proj,i) => (
              <RevealSection key={proj.title} delay={i*.08}>
                <div className="proj-card" style={{ "--accent":proj.accent, "--accent-bg":proj.accent+"15", height:"100%", minHeight:280 }}>
                  <div style={{ padding:"36px" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20 }}>
                      <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:52, letterSpacing:2, color:proj.accent+"30", lineHeight:1 }}>{proj.num}</span>
                      <span style={{ fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:2, color:"#5a6478" }}>{proj.year}</span>
                    </div>
                    <h3 style={{ fontSize:19, fontWeight:700, color:"#e8eaf0", marginBottom:12, lineHeight:1.3 }}>{proj.title}</h3>
                    <p style={{ fontSize:13, color:"#8892a4", lineHeight:1.85, marginBottom:24 }}>{proj.description}</p>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                      {proj.tools.map(t => <span key={t} className="tool-tag" style={{ "--accent":proj.accent, "--accent-bg":proj.accent+"15" }}>{t}</span>)}
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE + EDUCATION */}
      <section id="experience" style={{ padding:"120px 0", background:"#050810" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80 }} className="grid-2">
            <RevealSection>
              <div className="section-label">Career</div>
              <h2 className="big-title" style={{ fontSize:"clamp(30px,4vw,50px)", marginBottom:48 }}><span style={{ color:"#4ecdc4" }}>Experience</span></h2>
              {data.experience.map(exp => (
                <div key={exp.company} style={{ border:"1px solid #1a2240", padding:"28px", background:"#070b16", position:"relative" }}>
                  <div style={{ position:"absolute", top:0, left:0, width:3, height:"100%", background:"#4ecdc4" }} />
                  <div style={{ paddingLeft:4 }}>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:3, color:"#4ecdc4", marginBottom:10, textTransform:"uppercase" }}>{exp.period}</div>
                    <h3 style={{ fontSize:20, fontWeight:700, color:"#e8eaf0", marginBottom:4 }}>{exp.role}</h3>
                    <p style={{ fontFamily:"'DM Mono',monospace", fontSize:12, color:"#f7971e", marginBottom:16, letterSpacing:.5 }}>{exp.company} · {exp.location}</p>
                    <p style={{ fontSize:13.5, color:"#8892a4", lineHeight:1.8 }}>{exp.description}</p>
                  </div>
                </div>
              ))}
              <div style={{ marginTop:48 }}>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:3, color:"#8892a4", textTransform:"uppercase", marginBottom:20 }}>Highlights</div>
                {data.achievements.map(a => (
                  <div key={a.title} style={{ display:"flex", gap:16, padding:"20px 0", borderBottom:"1px solid #1a2240" }}>
                    <div style={{ fontSize:28, lineHeight:1, flexShrink:0 }}>🏆</div>
                    <div>
                      <div style={{ fontWeight:600, color:"#e8eaf0", marginBottom:4 }}>{a.title}</div>
                      <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"#f7971e", marginBottom:8, letterSpacing:.5 }}>{a.rank}</div>
                      <p style={{ fontSize:12.5, color:"#5a6478", lineHeight:1.7 }}>{a.desc}</p>
                    </div>
                  </div>
                ))}
                {data.publications.map(p => (
                  <div key={p.title} style={{ display:"flex", gap:16, padding:"20px 0" }}>
                    <div style={{ fontSize:28, lineHeight:1, flexShrink:0 }}>📝</div>
                    <div>
                      <div style={{ fontWeight:600, color:"#e8eaf0", marginBottom:6, lineHeight:1.4 }}>{p.title}</div>
                      <p style={{ fontSize:12, color:"#5a6478" }}>Published · {p.venue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>
            <RevealSection delay={0.15}>
              <div className="section-label">Academic</div>
              <h2 className="big-title" style={{ fontSize:"clamp(30px,4vw,50px)", marginBottom:48 }}><span style={{ color:"#c471ed" }}>Education</span></h2>
              {data.education.map(edu => (
                <div key={edu.institution+edu.degree} className="edu-row">
                  <div style={{ flexShrink:0, width:48, height:48, background:"#0d1220", border:"1px solid #1a2240", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Bebas Neue',sans-serif", fontSize:13, color:"#c471ed", letterSpacing:1 }}>
                    {edu.short}
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, letterSpacing:2, color:"#5a6478", marginBottom:6, textTransform:"uppercase" }}>{edu.year}</div>
                    <h4 style={{ fontSize:15, fontWeight:600, color:"#e8eaf0", marginBottom:4, lineHeight:1.3 }}>{edu.institution}</h4>
                    <p style={{ fontSize:12.5, color:"#8892a4", marginBottom:10 }}>{edu.degree}</p>
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:12, color:"#c471ed", background:"#c471ed12", border:"1px solid #c471ed30", padding:"3px 12px" }}>{edu.grade}</span>
                  </div>
                </div>
              ))}
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding:"120px 0", background:"#070b16", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)", width:600, height:300, background:"radial-gradient(ellipse,#4ecdc410 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px", position:"relative" }}>
          <RevealSection>
            <div style={{ textAlign:"center", marginBottom:80 }}>
              <div className="section-label" style={{ justifyContent:"center" }}>
                <span style={{ height:1, background:"#4ecdc430", width:60, display:"block" }} />
                Contact
                <span style={{ height:1, background:"#4ecdc430", width:60, display:"block" }} />
              </div>
              <h2 className="big-title" style={{ fontSize:"clamp(42px,7vw,90px)", marginBottom:20 }}>Let's <span style={{ color:"#4ecdc4" }}>Connect</span></h2>
              <p style={{ fontSize:15, color:"#8892a4", maxWidth:500, margin:"0 auto" }}>
                Open to internships, collaborations, and full-time opportunities. Say hello!
              </p>
            </div>
          </RevealSection>
          <RevealSection delay={0.15}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:1, background:"#1a2240", maxWidth:900, margin:"0 auto" }}>
              {[
                { label:"Email",    value:data.email,    href:`mailto:${data.email}`, icon:"✉" },
                { label:"Phone",    value:data.phone,    href:`tel:${data.phone}`,    icon:"◉" },
                { label:"GitHub",   value:"tejav2005",   href:data.github,            icon:"◈" },
                { label:"LinkedIn", value:"voggu-teja-v",href:data.linkedin,          icon:"▣" },
              ].map(({ label, value, href, icon }) => (
                <a key={label} href={href} target={href.startsWith("http")?"_blank":undefined} rel="noreferrer"
                  className="contact-link" style={{ textDecoration:"none", background:"#070b16" }}>
                  <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:28, color:"#4ecdc4", flexShrink:0, lineHeight:1 }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:9, letterSpacing:2, color:"#5a6478", textTransform:"uppercase", marginBottom:4 }}>{label}</div>
                    <div style={{ fontSize:13.5, color:"#e8eaf0", fontWeight:500 }}>{value}</div>
                  </div>
                  <span style={{ marginLeft:"auto", color:"#4ecdc440", fontSize:18 }}>→</span>
                </a>
              ))}
            </div>
            <div style={{ textAlign:"center", marginTop:60 }}>
              <a href={`mailto:${data.email}`} style={{ display:"inline-block", padding:"16px 56px", background:"#4ecdc4", color:"#050810", fontFamily:"'DM Mono',monospace", fontSize:13, letterSpacing:2, textTransform:"uppercase", textDecoration:"none", fontWeight:500, transition:"all .2s" }}
                onMouseEnter={e=>{e.currentTarget.style.background="#38b2ac";e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 12px 40px #4ecdc440";}}
                onMouseLeave={e=>{e.currentTarget.style.background="#4ecdc4";e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
                Send a Message →
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:"#050810", borderTop:"1px solid #1a2240", padding:"40px 32px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:20 }}>
          <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:24, letterSpacing:3, color:"#e8eaf0" }}>
            <span style={{ color:"#4ecdc4" }}>TV</span> <span style={{ color:"#1a2240" }}>/</span>
          </div>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"#5a6478", letterSpacing:1.5, textAlign:"center" }}>
            © 2026 Voggu Teja V · Full-Stack Developer · Chennai
          </div>
          <div style={{ display:"flex", gap:24 }}>
            {[["GH",data.github],["LI",data.linkedin],["ML",`mailto:${data.email}`]].map(([l,h]) => (
              <a key={l} href={h} target={h.startsWith("http")?"_blank":undefined} rel="noreferrer"
                style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"#5a6478", textDecoration:"none", letterSpacing:1.5, transition:"color .2s" }}
                onMouseEnter={e=>{e.target.style.color="#4ecdc4";}} onMouseLeave={e=>{e.target.style.color="#5a6478";}}>
                {l} ↗
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
