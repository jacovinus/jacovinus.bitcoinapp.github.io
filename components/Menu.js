import Link from "next/link";

const TopMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <Link href="/"><a className="navbar-brand">BitcoinApp</a></Link>
        
        <div className="collapsable navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/nosotros">
                <a className="nav-link">Nosotros</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contacto">
                <a className="nav-link">Contacto</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link">Blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default TopMenu;
