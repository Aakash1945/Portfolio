import { useState } from 'react'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Project from './components/project'
import Contact from './components/contact'
import Navbar from './ui/navbar'
import Footer from './ui/footer'
function App() {
  

  return (
    <div  style={{ minHeight: "100vh", background: "#080808", color: "#fff", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');
        *, body { font-family: 'Plus Jakarta Sans', sans-serif; margin:0; padding:0; box-sizing:border-box; }
        .mono { font-family: 'Fira Code', monospace; }
        .cursor { display:inline-block; width:2px; height:1em; background:#f59e0b; margin-left:2px; vertical-align:middle; animation:blink 0.85s step-end infinite; }
        @keyframes blink { 50%{ opacity:0; } }
        html { scroll-behavior:smooth; }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-track { background:#080808; }
        ::-webkit-scrollbar-thumb { background:#333; border-radius:4px; }

        /* Section backgrounds */
        .hero-bg    { background: linear-gradient(135deg, #03050f 0%, #080318 50%, #0a0410 100%); }
        .about-bg   { background: linear-gradient(135deg, #100800 0%, #1a0e00 50%, #0f0600 100%); }
        .skills-bg  { background: linear-gradient(135deg, #04051a 0%, #060320 50%, #080420 100%); }
        .projects-bg{ background: linear-gradient(135deg, #0a0310 0%, #100218 50%, #080212 100%); }
        .contact-bg { background: linear-gradient(135deg, #021008 0%, #041a0c 50%, #031008 100%); }
        .footer-bg  { background: #020602; }

        /* Navbar */
        .nav-scrolled { background: rgba(3,5,15,0.96); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255,255,255,0.05); box-shadow: 0 4px 30px rgba(0,0,0,0.8); }

        /* Glow orbs */
        .orb { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; }

        /* Skill card hover */
        .skill-card { transition: transform 0.25s, border-color 0.25s, background 0.25s; cursor:default; }
        .skill-card:hover { transform: translateY(-4px); }

        /* Project card */
        .proj-card { transition: transform 0.3s ease, box-shadow 0.3s ease; cursor:pointer; }
        .proj-card:hover { transform: translateY(-6px); }

        /* Nav links */
        .nav-link { color: #6b7280; text-decoration:none; font-size:14px; font-weight:500; padding:8px 16px; border-radius:10px; transition: color 0.2s, background 0.2s; }
        .nav-link:hover { color:#fff; background:rgba(255,255,255,0.06); }

        /* Divider line */
        .divider { height:1px; flex:1; max-width:160px; background:rgba(255,255,255,0.05); }

        /* About card */
        .about-card { background:#1a1000; border:1px solid #3d2800; border-radius:20px; }
        .about-stat  { background:#120b00; border:1px solid rgba(217,119,6,0.2); border-radius:14px; }

        /* Skills inner card */
        .skill-inner { background:#0c0820; border:1px solid rgba(99,102,241,0.15); border-radius:16px; padding:20px; display:flex; flex-direction:column; align-items:center; gap:10px; text-align:center; }
        .skill-inner:hover { border-color:rgba(129,140,248,0.4); background:#100d28; }

        /* Tag filter */
        .tag-btn { font-size:11px; font-weight:600; padding:6px 14px; border-radius:999px; border:1px solid; cursor:pointer; transition:all 0.2s; }
        .tag-active { background:#4f46e5; border-color:#4f46e5; color:#fff; }
        .tag-inactive { background:transparent; border-color:rgba(255,255,255,0.1); color:#6b7280; }
        .tag-inactive:hover { border-color:rgba(255,255,255,0.25); color:#d1d5db; }

        /* Contact info block */
        .contact-info-block { background:#051a0d; border:1px solid rgba(16,185,129,0.2); border-radius:14px; padding:14px; display:flex; align-items:center; gap:12px; }
        .contact-social { font-size:12px; font-weight:600; padding:8px 14px; border-radius:10px; background:#041510; border:1px solid rgba(16,185,129,0.25); color:#059669; text-decoration:none; transition:all 0.2s; }
        .contact-social:hover { border-color:rgba(52,211,153,0.5); color:#34d399; }
        .contact-form-bg { background:#041510; border:1px solid rgba(16,185,129,0.2); border-radius:20px; padding:28px; }
        .contact-input { width:100%; background:#030e09; border:1px solid rgba(16,185,129,0.2); border-radius:12px; padding:12px 16px; color:#fff; font-size:14px; outline:none; transition:border-color 0.2s; box-sizing:border-box; }
        .contact-input:focus { border-color:rgba(16,185,129,0.5); }
        .contact-input::placeholder { color:#374151; }

        /* Buttons */
        .btn-amber { background:#f59e0b; color:#000; border:none; font-weight:700; padding:14px 28px; border-radius:14px; cursor:pointer; transition:all 0.2s; box-shadow:0 8px 30px rgba(245,158,11,0.25); }
        .btn-amber:hover { background:#fbbf24; transform:translateY(-2px); }
        .btn-outline { background:transparent; color:#9ca3af; border:1px solid rgba(255,255,255,0.1); font-weight:600; padding:14px 28px; border-radius:14px; cursor:pointer; transition:all 0.2s; text-decoration:none; display:inline-block; }
        .btn-outline:hover { border-color:rgba(255,255,255,0.25); color:#fff; background:rgba(255,255,255,0.05); }
        .btn-emerald { background:#059669; color:#fff; border:none; font-weight:600; padding:14px; border-radius:14px; cursor:pointer; transition:all 0.2s; width:100%; font-size:15px; }
        .btn-emerald:hover { background:#10b981; transform:translateY(-2px); }

        /* Terminal card */
        .terminal { background:#080e28; border:1px solid rgba(99,102,241,0.25); border-radius:20px; padding:28px; }

        /* Responsive grid */
        @media(min-width:1024px){ .lg-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;} .lg-grid-3{display:grid;grid-template-columns:1fr 2fr;gap:32px;} .lg-grid-5{display:grid;grid-template-columns:2fr 3fr;gap:40px;} }
        @media(max-width:1023px){ .hero-right{display:none!important;} }
        @media(min-width:640px){ .sm-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:20px;} }
        @media(min-width:640px){ .proj-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;} }
        @media(min-width:640px){ .skills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;} }
        @media(min-width:1024px){ .skills-grid{grid-template-columns:repeat(6,1fr);} }
        @media(min-width:768px){ .nav-desktop{display:flex;} .nav-mobile-btn{display:none!important;} }
        @media(max-width:767px){ .nav-desktop{display:none;} }
      `}</style>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  )}

export default App
