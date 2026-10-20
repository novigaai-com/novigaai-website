import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const navigation = [
  { label: "Home", href: "/", id: "home", children: [] },
  {
    label: "Products",
    href: "/products/",
    id: "products",
    children: [
      { label: "Pharmacovigilance", href: "/products/#pharmacovigilance" },
      { label: "Literature Intelligence", href: "/products/#literature" },
      { label: "Social Media Intelligence", href: "/products/#social" },
      { label: "Clinical Trials", href: "/products/#clinical" },
      { label: "Compliance", href: "/products/#compliance" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions/",
    id: "solutions",
    children: [
      { label: "AI Agents", href: "/solutions/" },
      { label: "Services", href: "/services/" },
    ],
  },
  {
    label: "Resources",
    href: "/resources/",
    id: "resources",
    children: [{ label: "Resources overview", href: "/resources/" }],
  },
  {
    label: "About Us",
    href: "/about-us/",
    id: "about",
    children: [
      { label: "Our company", href: "/about-us/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  function closeMenus() {
    setMenuOpen(false);
    setActiveDropdown(null);
  }

  useEffect(() => {
    function onOutsideClick(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        closeMenus();
      }
    }
    const desktop = window.matchMedia("(min-width: 1201px)");
    function onBreakpointChange() {
      closeMenus();
    }
    document.addEventListener("pointerdown", onOutsideClick);
    desktop.addEventListener("change", onBreakpointChange);
    return () => {
      document.removeEventListener("pointerdown", onOutsideClick);
      desktop.removeEventListener("change", onBreakpointChange);
    };
  }, []);

  function onEscape(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== "Escape") return;
    event.preventDefault();
    if (activeDropdown) {
      setActiveDropdown(null);
      if (event.target instanceof HTMLElement) {
        event.target
          .closest(".nav-drop")
          ?.querySelector<HTMLButtonElement>(".nav-drop-toggle")
          ?.focus();
      }
    } else if (menuOpen) {
      setMenuOpen(false);
      menuToggleRef.current?.focus();
    }
  }

  function renderNavigation(surface: "desktop" | "mobile") {
    return navigation.map((item) => {
      if (!item.children.length) {
        return (
          <NavLink key={item.id} to={item.href} end onClick={closeMenus}>
            {item.label}
          </NavLink>
        );
      }
      const id = `${surface}-${item.id}`;
      const open = activeDropdown === id;
      return (
        <div
          className={`nav-drop${open ? " is-open" : ""}`}
          key={item.id}
          onPointerEnter={(event) => {
            if (surface === "desktop" && event.pointerType === "mouse")
              setActiveDropdown(id);
          }}
          onPointerLeave={(event) => {
            if (
              surface === "desktop" &&
              !event.currentTarget.contains(document.activeElement)
            ) {
              setActiveDropdown((current) => (current === id ? null : current));
            }
          }}
          onBlur={(event) => {
            if (
              surface === "desktop" &&
              !event.currentTarget.contains(event.relatedTarget)
            ) {
              setActiveDropdown((current) => (current === id ? null : current));
            }
          }}
        >
          <div className="nav-drop-heading">
            <NavLink to={item.href} onClick={closeMenus}>
              {item.label}
            </NavLink>
            <button
              className="nav-drop-toggle"
              type="button"
              aria-label={`${item.label} submenu`}
              aria-expanded={open}
              aria-controls={`${id}-panel`}
              onClick={() => setActiveDropdown(open ? null : id)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setActiveDropdown(id);
                  requestAnimationFrame(() =>
                    document
                      .getElementById(`${id}-panel`)
                      ?.querySelector("a")
                      ?.focus()
                  );
                }
              }}
            >
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="m4 6 4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="drop-panel" id={`${id}-panel`} hidden={!open}>
            {item.children.map((child) => (
              <Link key={child.href} to={child.href} onClick={closeMenus}>
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      );
    });
  }

  return (
    <header className="site-header" ref={headerRef} onKeyDown={onEscape}>
      <div className="wrap nav-wrap">
        <Link
          to="/"
          className="logo"
          aria-label="NovigaAI home"
          onClick={closeMenus}
        >
          <img
            src={"/assets/logo.png"}
            alt="NovigaAI - Intelligent. Connected. Safer."
            className="brand-logo"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {renderNavigation("desktop")}
        </nav>
        <div className="nav-actions">
          <Link className="login-link" to="/contact/" onClick={closeMenus}>
            Log In
          </Link>
          <Link
            className="button button-primary button-small"
            to="/contact/#demo"
            onClick={closeMenus}
          >
            Request a Demo
          </Link>
        </div>
        <button
          className="menu-toggle"
          type="button"
          ref={menuToggleRef}
          onClick={() => {
            setMenuOpen(!menuOpen);
            setActiveDropdown(null);
          }}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav
        className="mobile-nav"
        id="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        {renderNavigation("mobile")}
        <Link to="/services/" onClick={closeMenus}>
          Services
        </Link>
        <Link to="/contact/" onClick={closeMenus}>
          Contact
        </Link>
        <Link
          className="button button-primary"
          to="/contact/#demo"
          onClick={closeMenus}
        >
          Request a Demo <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </header>
  );
}
