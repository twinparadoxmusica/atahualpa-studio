"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const NavBar = () => {
  const pathname = usePathname();

  const links = [
    // { path: '/apropos', label: 'À propos' },
    { path: "/lecons-musique", label: "LEÇONS DE MUSIQUE" },
    { path: "/prise-son-video", label: "PRISE DE SON ET VIDÉO" },
    { path: "/apropos", label: "À PROPOS" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <Link href="/">
            <img
              height="40px"
              src="/assets/atahualpa-music-studio-logo.png"
              alt="Atahualpa Music Studio"
            />
          </Link>
        </div>
        <ul className="nav-links">
          {links.map(({ path, label }) => {
            const isActive = pathname === path;
            return (
              <li key={label}>
                <Link
                  href={path}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
