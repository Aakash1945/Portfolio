import { useState } from "react";
import Reveal from "../ui/reveal"

function Project(){
    const [hoveredProject, setHoveredProject] = useState(null);
    const projects = [
  {
    num: "01", title: "ShopNest", category: "E-Commerce",
    desc: "Full-stack shopping platform with real-time cart, JWT auth, Stripe checkout and an admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    cardBg: "#1c1100", border: "#4a3200",
    numColor: "#d97706", catColor: "#f59e0b",
    tagBg: "#2a1a00", tagText: "#fbbf24", tagBorder: "#78350f",
    arrowColor: "#d97706", arrowHover: "#fbbf24",
  },
  {
    num: "02", title: "TaskFlow", category: "Productivity",
    desc: "Kanban board with drag-and-drop columns, WebSocket sync and multi-workspace support.",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    cardBg: "#050d1f", border: "#0a2050",
    numColor: "#2563eb", catColor: "#60a5fa",
    tagBg: "#071530", tagText: "#93c5fd", tagBorder: "#1e3a8a",
    arrowColor: "#3b82f6", arrowHover: "#93c5fd",
  },
  {
    num: "03", title: "DevBlog CMS", category: "Content Platform",
    desc: "Headless CMS with Markdown editor, REST API, CDN uploads and role-based access control.",
    tags: ["Express", "PostgreSQL", "React", "JWT"],
    cardBg: "#041410", border: "#065f46",
    numColor: "#059669", catColor: "#34d399",
    tagBg: "#052e1c", tagText: "#6ee7b7", tagBorder: "#065f46",
    arrowColor: "#10b981", arrowHover: "#6ee7b7",
  },
  {
    num: "04", title: "WeatherMap", category: "Dashboard",
    desc: "Geo-based weather app with Leaflet maps, animated forecast cards and hourly Chart.js graphs.",
    tags: ["React", "OpenWeather API", "Leaflet", "Chart.js"],
    cardBg: "#0d0520", border: "#2e1065",
    numColor: "#7c3aed", catColor: "#a78bfa",
    tagBg: "#1a0838", tagText: "#c4b5fd", tagBorder: "#4c1d95",
    arrowColor: "#8b5cf6", arrowHover: "#c4b5fd",
  },
];
    return(
        <>
            <section id="projects" className="projects-bg" style={{ padding:"112px 24px", position:"relative", overflow:"hidden" }}>
        <div className="orb" style={{ width:500, height:300, background:"rgba(139,92,246,0.08)", top:0, right:0, transform:"translateY(-30%)" }}/>
        <div style={{ maxWidth:1152, margin:"0 auto", position:"relative" }}>
          <Reveal>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
              <span className="mono" style={{ color:"#a78bfa", fontSize:11, letterSpacing:"0.2em" }}>// 03</span>
              <div className="divider"/>
              <h2 style={{ fontWeight:700, fontSize:"clamp(1.8rem,4vw,2.5rem)", color:"#ede9fe", letterSpacing:"-1px", margin:0 }}>Projects</h2>
            </div>
            <p style={{ color:"#4c1d95", marginBottom:56, maxWidth:420, fontSize:14 }}>A selection of things I've built.</p>
          </Reveal>

          <div className="proj-grid" style={{ display:"grid", gap:20 }}>
            {projects.map((p,i)=>(
              <Reveal key={p.title} delay={i*90}>
                <div
                  className="proj-card"
                  onMouseEnter={()=>setHoveredProject(p.title)}
                  onMouseLeave={()=>setHoveredProject(null)}
                  style={{
                    background: p.cardBg,
                    border: `1px solid ${hoveredProject===p.title ? p.arrowHover+"55" : p.border}`,
                    borderRadius:20, padding:28,
                    boxShadow: hoveredProject===p.title ? `0 20px 60px rgba(0,0,0,0.6)` : "0 4px 30px rgba(0,0,0,0.5)",
                    position:"relative", overflow:"hidden"
                  }}
                >
                  <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:8 }}>
                    <div>
                      <span className="mono" style={{ fontSize:11, fontWeight:500, color:p.numColor }}>{p.num}</span>
                      <span className="mono" style={{ fontSize:11, fontWeight:500, color:p.catColor, marginLeft:12 }}>{p.category}</span>
                    </div>
                    <span style={{ fontSize:20, color:hoveredProject===p.title ? p.arrowHover : p.arrowColor, transition:"color 0.3s, transform 0.3s", transform:hoveredProject===p.title?"translate(2px,-2px)":"none", display:"block" }}>↗</span>
                  </div>
                  <h3 style={{ fontWeight:700, fontSize:20, color:"#fff", marginBottom:12, marginTop:12, letterSpacing:"-0.5px" }}>{p.title}</h3>
                  <p style={{ color:"#4b5563", fontSize:13, lineHeight:1.75, marginBottom:24 }}>{p.desc}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                    {p.tags.map(t=>(
                      <span key={t} className="mono" style={{ fontSize:11, fontWeight:500, padding:"4px 10px", borderRadius:8, background:p.tagBg, color:p.tagText, border:`1px solid ${p.tagBorder}` }}>{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={250}>
            <div style={{ marginTop:48, textAlign:"center" }}>
              <a href="#" style={{ fontSize:13, color:"#6b21a8", fontWeight:500, textDecoration:"none", borderBottom:"1px solid #3b0764", paddingBottom:2 }}>
                View all on GitHub →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
        </>
    )
}
export default Project