function Footer(){
    return(
        <>
            <footer className="footer-bg" style={{ padding:"28px 24px", borderTop:"1px solid rgba(255,255,255,0.03)" }}>
        <div style={{ maxWidth:1152, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <div style={{ width:20, height:20, borderRadius:6, background:"#f59e0b", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ color:"#000", fontWeight:800, fontSize:9 }}>P</span>
            </div>
            <span style={{ color:"#374151", fontSize:12, fontWeight:500 }}>Aakash · {new Date().getFullYear()}</span>
          </div>
          <p className="mono" style={{ color:"#1f2937", fontSize:11 }}>built with React + Tailwind</p>
        </div>
      </footer>
        </>
    )
}
export default Footer