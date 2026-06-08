import { useRef, useState } from "react";
import Reveal from "../ui/reveal"

function Contact(){
      const contactRef = useRef(null);
      const [sent, setSent] = useState(false);
      const [form, setForm] = useState({ name: "", email: "", message: "" });
       const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
         };
    return(
        <>
            <section ref={contactRef} id="contact" className="contact-bg" style={{ padding:"112px 24px", position:"relative", overflow:"hidden" }}>
        <div className="orb" style={{ width:600, height:200, background:"rgba(16,185,129,0.08)", bottom:0, left:"50%", transform:"translateX(-50%)" }}/>
        <div style={{ maxWidth:1152*5/6, margin:"0 auto", position:"relative" }}>
          <Reveal>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
              <span className="mono" style={{ color:"#10b981", fontSize:11, letterSpacing:"0.2em" }}>// 04</span>
              <div className="divider"/>
              <h2 style={{ fontWeight:700, fontSize:"clamp(1.8rem,4vw,2.5rem)", color:"#d1fae5", letterSpacing:"-1px", margin:0 }}>Contact</h2>
            </div>
          </Reveal>

          <div className="lg-grid-5" style={{ marginTop:48 }}>

            {/* Info panel */}
            <Reveal delay={80}>
              <div style={{ display:"flex", flexDirection:"column", gap:24 }}>
                <div>
                  <h3 style={{ fontWeight:700, fontSize:19, color:"#d1fae5", marginBottom:12 }}>Let's work together</h3>
                  <p style={{ color:"#065f46", lineHeight:1.8, fontSize:14 }}>
                    Have a project in mind or just want to connect? I'm always open to new opportunities and interesting conversations.
                  </p>
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                  {[
                    { icon:"✉️", label:"Email",    val:"you@example.com" },
                    { icon:"📍", label:"Location",  val:"Delhi, India" },
                    { icon:"🕐", label:"Response",  val:"Within 24 hours" },
                  ].map(({icon,label,val})=>(
                    <div key={label} className="contact-info-block">
                      <span style={{ fontSize:18 }}>{icon}</span>
                      <div>
                        <p style={{ color:"#065f46", fontSize:10, margin:0 }}>{label}</p>
                        <p style={{ color:"#6ee7b7", fontSize:13, fontWeight:500, marginTop:3 }}>{val}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="mono" style={{ color:"#064e3b", fontSize:11, marginBottom:12, letterSpacing:"0.15em" }}>// find me online</p>
                  <div style={{ display:"flex", gap:10 }}>
                    <a  href="https://github.com/Aakash1945" className="contact-social">GitHub</a>
                    <a  href="https://www.linkedin.com/in/aakash-9a281730a" className="contact-social">Linkdin</a>
                    <a  href="#" className="contact-social">Twitter</a>
                      
                    
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={150}>
              {sent ? (
                <div style={{ minHeight:300, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"#041510", border:"1px solid rgba(16,185,129,0.2)", borderRadius:20, padding:40, textAlign:"center" }}>
                  <div style={{ width:64, height:64, borderRadius:"50%", background:"rgba(6,95,70,0.5)", border:"1px solid rgba(52,211,153,0.4)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16 }}>
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#34d399"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <p style={{ fontWeight:700, color:"#34d399", fontSize:20, margin:0 }}>Message sent!</p>
                  <p style={{ color:"#065f46", fontSize:13, marginTop:8 }}>Thanks for reaching out. I'll reply soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-bg">
                  <div className="sm-grid-2" style={{ marginBottom:20 }}>
                    {[
                      {label:"Name",  key:"name",  type:"text",  ph:"John Doe"},
                      {label:"Email", key:"email", type:"email", ph:"john@example.com"},
                    ].map(({label,key,type,ph})=>(
                      <div key={key}>
                        <label className="mono" style={{ display:"block", fontSize:10, color:"#065f46", textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:8 }}>{label}</label>
                        <input type={type} required value={form[key]}
                          onChange={e=>setForm({...form,[key]:e.target.value})}
                          placeholder={ph}
                          className="contact-input"
                        />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom:20 }}>
                    <label className="mono" style={{ display:"block", fontSize:10, color:"#065f46", textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:8 }}>Message</label>
                    <textarea required rows={5} value={form.message}
                      onChange={e=>setForm({...form,message:e.target.value})}
                      placeholder="Tell me about your project..."
                      className="contact-input" style={{ resize:"none" }}
                    />
                  </div>
                  <button type="submit" className="btn-emerald" onClick={()=>setSent(true)}>Send message →</button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
        </>
    )
}
export default Contact