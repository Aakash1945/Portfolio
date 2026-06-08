import { useState } from "react";
import Reveal from "../ui/reveal"

function Skills(){
    const skills = [
  { name: "React",      icon: "⚛️", tag: "Frontend"  },
  { name: "Next.js",    icon: "▲",  tag: "Frontend"  },
  { name: "JavaScript", icon: "JS", tag: "Language"  },
  { name: "Tailwind",   icon: "🎨", tag: "Styling"   },
  { name: "django",    icon: "🟢", tag: "Backend"   },
  { name: "REST APIS",    icon: "🚂", tag: "Backend"   },
  { name: "PostgreSQL", icon: "🐘", tag: "Database"  },
//   { name: "Docker",     icon: "🐳", tag: "DevOps"    },
//   { name: "AWS",        icon: "☁️", tag: "Cloud"     },
  { name: "GraphQL",    icon: "◈",  tag: "API"       },
  { name: "Git",        icon: "🔀", tag: "Tools"     },
  { name: "GitHub",        icon: "🔀", tag: "Tools"     },
];
    const [activeTag, setActiveTag] = useState("All");
    const filtered = activeTag === "All" ? skills : skills.filter(s => s.tag === activeTag);
    const allTags = ["All", "Frontend", "Backend", "Database", "DevOps", "Cloud", "API", "Language", "Styling", "Tools"];
    return(
        <>
            <section id="skills" className="skills-bg" style={{ padding:"112px 24px", position:"relative", overflow:"hidden" }}>
        <div className="orb" style={{ width:400, height:400, background:"rgba(99,102,241,0.10)", left:0, bottom:0, transform:"translate(-30%,30%)" }}/>
        <div style={{ maxWidth:1152, margin:"0 auto", position:"relative" }}>
          <Reveal>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
              <span className="mono" style={{ color:"#818cf8", fontSize:11, letterSpacing:"0.2em" }}>// 02</span>
              <div className="divider"/>
              <h2 style={{ fontWeight:700, fontSize:"clamp(1.8rem,4vw,2.5rem)", color:"#e0e7ff", letterSpacing:"-1px", margin:0 }}>Tech Stack</h2>
            </div>
            <p style={{ color:"#4338ca", marginBottom:36, maxWidth:420, fontSize:14 }}>Tools and technologies I use to bring ideas to life.</p>
          </Reveal>

          {/* Filter tabs */}
          <Reveal delay={80}>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:36 }}>
              {allTags.map(t=>(
                <button key={t} className={`tag-btn ${activeTag===t?"tag-active":"tag-inactive"} mono`} onClick={()=>setActiveTag(t)}>
                  {t}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Skill cards */}
          <div className="skills-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(120px,1fr))", gap:12 }}>
            {filtered.map((s,i)=>(
              <Reveal key={s.name} delay={i*45}>
                <div className="skill-card skill-inner">
                  <span style={{ fontSize:28 }}>{s.icon}</span>
                  <p style={{ fontWeight:600, fontSize:13, color:"#c7d2fe", margin:0 }}>{s.name}</p>
                  <span className="mono" style={{ fontSize:9, padding:"3px 8px", borderRadius:999, background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", color:"#4338ca" }}>{s.tag}</span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Extra tools */}
          <Reveal delay={400}>
            <div style={{ marginTop:40 }}>
              <p className="mono" style={{ color:"#3730a3", fontSize:11, marginBottom:14, letterSpacing:"0.15em" }}>// also comfortable with</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {["Git & GitHub","Linux","Figma","Redux","REST APIs","Jest","Vitest","CI/CD","Nginx","Vercel"].map(t=>(
                  <span key={t} style={{ fontSize:12, fontWeight:500, padding:"6px 14px", borderRadius:10, background:"#0c0820", border:"1px solid rgba(99,102,241,0.2)", color:"#6366f1" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
        </>
    )
}
export default Skills