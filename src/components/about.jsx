import Reveal from "../ui/reveal"

function About(){
    return(
        <>
            <section id="about" className="about-bg" style={{ padding:"112px 24px", position:"relative", overflow:"hidden" }}>
        <div className="orb" style={{ width:400, height:400, background:"rgba(217,119,6,0.10)", right:0, top:"50%", transform:"translateY(-50%)" }}/>
        <div style={{ maxWidth:1152, margin:"0 auto", position:"relative" }}>
          <Reveal>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:48 }}>
              <span className="mono" style={{ color:"#d97706", fontSize:11, letterSpacing:"0.2em" }}>// 01</span>
              <div className="divider"/>
              <h2 style={{ fontWeight:700, fontSize:"clamp(1.8rem,4vw,2.5rem)", color:"#fef3c7", letterSpacing:"-1px", margin:0 }}>About Me</h2>
            </div>
          </Reveal>

          <div className="lg-grid-3">
            {/* Profile card */}
            <Reveal delay={80}>
              <div className="about-card" style={{ padding:28, display:"flex", flexDirection:"column", alignItems:"center", gap:20, textAlign:"center" }}>
                <div style={{ width:96, height:96, borderRadius:18, background:"linear-gradient(135deg,#d97706,#ea580c)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 8px 30px rgba(217,119,6,0.35)" }}>
                  <span style={{ fontWeight:800, fontSize:24, color:"#000" }}>Me</span>
                </div>
                <div>
                  <p style={{ fontWeight:700, fontSize:17, color:"#fef3c7", margin:0 }}>Aakash</p>
                  <p className="mono" style={{ color:"#d97706", fontSize:11, marginTop:4 }}>Full Stack Developer | Machine Learning</p>
                </div>
                <div style={{ width:"100%", background:"#120b00", borderRadius:12, padding:12, display:"flex", alignItems:"center", justifyContent:"center", gap:8, border:"1px solid rgba(217,119,6,0.2)" }}>
                  <span style={{ width:8,height:8,borderRadius:"50%",background:"#22c55e" }}/>
                  <span className="mono" style={{ color:"#22c55e", fontSize:11 }}>Available now</span>
                </div>
                {/* Stats */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, width:"100%" }}>
                  {[["5+","Projects"],["2+","Years"],["4+","Clients"],["∞","Curiosity"]].map(([n,l])=>(
                    <div key={l} className="about-stat" style={{ padding:"12px 8px", textAlign:"center" }}>
                      <p style={{ fontWeight:800, fontSize:20, color:"#f59e0b", margin:0 }}>{n}</p>
                      <p style={{ color:"#78350f", fontSize:11, marginTop:3 }}>{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Bio */}
            <Reveal delay={150} className="lg-grid-1" style={{ display:"flex", flexDirection:"column", gap:20 }}>
              <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                <div style={{ background:"#1a1000", border:"1px solid #3d2800", borderRadius:18, padding:28 }}>
                  <h3 style={{ fontWeight:600, fontSize:17, color:"#fef3c7", marginBottom:14 }}>Who I am</h3>
                  <p style={{ color:"#b45309", lineHeight:1.8, marginBottom:14, fontSize:15 }}>
                    My name is Aakash, and I am currently pursuing a B.Tech in Computer Science and Engineering (CSE–Data Science). 
                    I am passionate about technology and problem-solving, with a strong interest in web development. 
                     I have hands-on experience in both frontend and backend development, where I design responsive 
                     user interfaces and build efficient server-side logic. I enjoy writing clean,
                      optimized code and continuously improving my skills by working on real-world projects.
                  </p>
                  <p style={{ color:"#78350f", lineHeight:1.8, fontSize:14 }}>
                    I am always eager to learn new technologies, explore modern frameworks, and enhance my development expertise to build impactful and scalable applications.
                  </p>
                </div>

                {/* <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                  {[
                    { icon:"📍", label:"Location",  val:", Country" },
                    { icon:"🎓", label:"Education",  val:"BSc Computer Science" },
                    { icon:"💼", label:"Available",  val:"Full-time & Freelance" },
                    { icon:"🌐", label:"Languages",  val:"English, Hindi" },
                  ].map(({icon,label,val})=>(
                    <div key={label} style={{ background:"#1a1000", border:"1px solid #3d2800", borderRadius:14, padding:16, display:"flex", alignItems:"center", gap:10 }}>
                      <span style={{ fontSize:18 }}>{icon}</span>
                      <div>
                        <p style={{ color:"#78350f", fontSize:10, margin:0 }}>{label}</p>
                        <p style={{ color:"#fbbf24", fontSize:13, fontWeight:500, marginTop:2 }}>{val}</p>
                      </div>
                    </div>
                  ))}
                </div> */}

                <div>
                  <a href="#" style={{ display:"inline-flex", alignItems:"center", gap:8, fontWeight:600, fontSize:13, padding:"10px 20px", borderRadius:12, background:"rgba(245,158,11,0.1)", border:"1px solid rgba(245,158,11,0.25)", color:"#f59e0b", textDecoration:"none" }}>
                    Download CV ↓
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
        </>
    )
}
export default About