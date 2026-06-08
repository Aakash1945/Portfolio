import { useEffect, useState } from "react";

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
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
            <nav style={{
        position:"fixed",top:0,left:0,right:0,zIndex:50,
        transition:"all 0.3s",
        ...(scrolled ? {} : { background:"transparent" })
      }} className={scrolled ? "nav-scrolled" : ""}>
        <div style={{ maxWidth:1152, margin:"0 auto", padding:"16px 24px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>

          {/* Logo */}
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <div style={{ width:28, height:28, borderRadius:8, background:"#f59e0b", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ color:"#000", fontWeight:800, fontSize:11 }}>P</span>
            </div>
            <span style={{ fontWeight:700, color:"#fff", fontSize:15 }}>Portfolio</span>
          </div>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ alignItems:"center", gap:4 }}>
            {[["About","#about"],["Skills","#skills"],["Projects","#projects"]].map(([l,h])=>(
              <a key={l} href={h} className="nav-link">{l}</a>
            ))}
            <a href="#contact"><button onClick={scrollToContact} className="btn-amber mono" style={{ marginLeft:8, padding:"10px 20px", fontSize:13, borderRadius:12 }}>
              Contact
            </button></a>
          </div>

          {/* Burger */}
          <button className="nav-mobile-btn" onClick={()=>setMenuOpen(!menuOpen)}
            style={{ background:"none", border:"none", cursor:"pointer", display:"flex", flexDirection:"column", gap:5, padding:8 }}>
            {[0,1,2].map(i=>(
              <span key={i} style={{
                display:"block", width:22, height:2, background:"#fff", borderRadius:2,
                transition:"all 0.3s",
                transform: menuOpen ? (i===0?"rotate(45deg) translate(5px,5px)":i===2?"rotate(-45deg) translate(5px,-5px)":"none") : "none",
                opacity: menuOpen && i===1 ? 0 : 1
              }}/>
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background:"#050820", borderTop:"1px solid rgba(255,255,255,0.05)", padding:"12px 16px 20px" }}>
            {[["About","#about"],["Skills","#skills"],["Projects","#projects"]].map(([l,h])=>(
              <a key={l} href={h} onClick={()=>setMenuOpen(false)}
                style={{ display:"block", color:"#9ca3af", fontWeight:500, padding:"10px 12px", borderRadius:10, textDecoration:"none" }}>
                {l}
              </a>
            ))}
            <button onClick={scrollToContact}
              style={{ width:"100%", textAlign:"left", background:"rgba(245,158,11,0.1)", border:"1px solid rgba(245,158,11,0.25)", color:"#f59e0b", fontWeight:700, padding:"10px 12px", borderRadius:10, cursor:"pointer", marginTop:8 }}>
              Contact ↓
            </button>
          </div>
        )}
      </nav>
        </>
    )
}
export default Navbar