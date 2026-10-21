export default function Footer() {
  return (
    <footer className={"footer"}>
      <div className={"wrap"}>
        <div className={"footer-top"}>
          <a href={"/"} className={"logo"}>
            {/* <span className={"brand-glyph"} aria-hidden="true">
              N
            </span> */}
            <b>NovigaAi</b>
          </a>
          <nav aria-label={"Footer navigation"}>
            <a href={"/"}>Home</a>
            <a href={"/products/"}>Products</a>
            <a href={"/solutions/"}>Solutions</a>
            <a href={"/resources/"}>Resources</a>
            <a href={"/about-us/"}>About Us</a>
            <a href={"/contact/"}>Contact</a>
          </nav>
          <div className={"social-links"}>
            <a href={"/contact/"} aria-label={"LinkedIn information"}>
              in
            </a>
            <a href={"/contact/"} aria-label={"X information"}>
              𝕏
            </a>
            <a href={"/contact/"} aria-label={"Video information"}>
              ▶
            </a>
          </div>
        </div>
        <div className={"footer-bottom"}>
          <span>
            © <span id={"year"}>2026</span> NovigaAI Technologies Pvt Ltd. All rights reserved.   |  
            <a href={"/contact/"}>Privacy Policy</a>   |  {" "}
            <a href={"/contact/"}>Terms of Service</a>
          </span>
          <span>Smarter Safety. Healthier Tomorrow.</span>
        </div>
      </div>
    </footer>
  );
}
