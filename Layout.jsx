import img from "../assets/kl-campus.jpg";

export default function Layout({ children }) {
  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        KL UNIVERSITY ADMISSIONS 2026
      </div>

      {/* MAIN CONTENT */}
      <div className="main">

        {/* LEFT IMAGE SECTION */}
        <div className="hero">
          <img src={img} className="hero-img" />

          <div className="overlay">
            <h1>ADMISSIONS OPEN 2026</h1>
            <p>Engineering | Management | Sciences</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="form-card">
          {children}
        </div>

      </div>

      {/* FOOTER */}
      <div className="footer">
        © 2026 KL University | All Rights Reserved
      </div>
    </>
  );
}