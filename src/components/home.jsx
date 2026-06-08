import { useEffect, useState } from "react";
import Reveal from "../ui/reveal"

function Home(){
    const [scrolled, setScrolled] = useState(false);
    const scrollToContact = () => {
            setMenuOpen(false);
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
         };
    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    return(
        <>
            <section className="hero-bg" style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:"0 24px", position:"relative", overflow:"hidden" }}>
        {/* Orbs */}
        <div className="orb" style={{ width:500, height:500, background:"rgba(245,158,11,0.09)", bottom:-120, left:-120 }}/>
        <div className="orb" style={{ width:400, height:400, background:"rgba(99,102,241,0.10)", top:-80, right:0 }}/>
        {/* Dot grid */}
        <div style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize:"44px 44px", pointerEvents:"none" }}/>

        <div style={{ maxWidth:1152, margin:"0 auto", width:"100%", paddingTop:80, paddingBottom:60 }}>
          <div className="lg-grid-2">

            {/* Left text */}
            <div>
              <Reveal>
                <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"6px 14px", borderRadius:999, background:"rgba(245,158,11,0.08)", border:"1px solid rgba(245,158,11,0.2)", color:"#f59e0b", fontSize:11, marginBottom:32 }} className="mono">
                  <span style={{ width:6, height:6, borderRadius:"50%", background:"#f59e0b", animation:"blink 1s step-end infinite" }}/>
                  Available for work
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 style={{ fontWeight:800, fontSize:"clamp(2.8rem,7vw,5.5rem)", lineHeight:1.0, letterSpacing:"-2px", margin:"0 0 16px", color:"#fff" }}>
                  Hi, I'm<br/>
                  <span style={{ background:"linear-gradient(90deg,#f59e0b,#fb923c)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                    Aakash
                  </span>
                </h1>
              </Reveal>

              

              <Reveal delay={220}>
                <p style={{ color:"#6b7280", fontSize:16, lineHeight:1.75, maxWidth:420, marginBottom:40 }}>
                  I build fast, scalable web products from database to UI — combining clean engineering with thoughtful design.
                </p>
              </Reveal>

              <Reveal delay={280}>
                <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                  <a href="#contact"><button className="btn-amber" onClick={scrollToContact}>Get in touch →</button></a>
                  <a href="#projects" className="btn-outline">View projects</a>
                </div>
              </Reveal>
            </div>

            {/* Right — terminal card */}
            <Reveal delay={200} className="hero-right">
              <div style={{ position:"relative" }}>
                <div className="terminal">
                  {/* Traffic lights */}
                  <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:24 }}>
                    <span style={{ width:12,height:12,borderRadius:"50%",background:"rgba(239,68,68,0.7)" }}/>
                    <span style={{ width:12,height:12,borderRadius:"50%",background:"rgba(234,179,8,0.7)" }}/>
                    <span style={{ width:12,height:12,borderRadius:"50%",background:"rgba(34,197,94,0.7)" }}/>
                    <span className="mono" style={{ fontSize:11,color:"#4b5563",marginLeft:8 }}>portfolio.js</span>
                  </div>
                  <div className="mono" style={{ fontSize:13, lineHeight:2, color:"#9ca3af" }}>
                    <p><span style={{color:"#818cf8"}}>const</span> <span style={{color:"#93c5fd"}}>developer</span> <span style={{color:"#fff"}}>=</span> <span style={{color:"#fff"}}>{"{"}</span></p>
                    <p style={{paddingLeft:20}}><span style={{color:"#86efac"}}>name</span><span style={{color:"#fff"}}>:</span> <span style={{color:"#fcd34d"}}>"Aakash"</span><span style={{color:"#fff"}}>,</span></p>
                    <p style={{paddingLeft:20}}><span style={{color:"#86efac"}}>role</span><span style={{color:"#fff"}}>:</span> <span style={{color:"#fcd34d"}}>"Full Stack Devloper"</span><span style={{color:"#fff"}}>,</span></p>
                    <p style={{paddingLeft:20}}><span style={{color:"#86efac"}}>exp</span><span style={{color:"#fff"}}>:</span> <span style={{color:"#fb923c"}}>"2+ years"</span><span style={{color:"#fff"}}>,</span></p>
                    <p style={{paddingLeft:20}}><span style={{color:"#86efac"}}>stack</span><span style={{color:"#fff"}}>: [</span></p>
                    <p style={{paddingLeft:40}}><span style={{color:"#fcd34d"}}>"React"</span><span style={{color:"#fff"}}>, </span><span style={{color:"#fcd34d"}}>"Node"</span><span style={{color:"#fff"}}>, </span><span style={{color:"#fcd34d"}}>"MongoDB"</span></p>
                    <p style={{paddingLeft:20}}><span style={{color:"#fff"}}>],</span></p>
                    <p style={{paddingLeft:20}}><span style={{color:"#86efac"}}>open</span><span style={{color:"#fff"}}>:</span> <span style={{color:"#60a5fa"}}>true</span></p>
                    <p><span style={{color:"#fff"}}>{"}"}</span></p>
                  </div>
                </div>
                <div style={{ position:"absolute", top:-14, right:-14, background:"#22c55e", color:"#000", fontSize:11, fontWeight:700, padding:"6px 12px", borderRadius:999, boxShadow:"0 4px 20px rgba(34,197,94,0.4)" }}>✓ Open to work</div>
                <div style={{ position:"absolute", bottom:-14, left:-14, background:"#0a0d25", border:"1px solid rgba(99,102,241,0.3)", color:"#fff", fontSize:11, fontWeight:500, padding:"8px 14px", borderRadius:14, display:"flex", alignItems:"center", gap:6 }}>
                  <span style={{color:"#f59e0b"}}>⚡</span> 15+ projects shipped
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
        </>
    )
}
export default Home