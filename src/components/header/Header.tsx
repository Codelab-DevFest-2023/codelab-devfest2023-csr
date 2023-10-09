import { Link } from 'react-router-dom';
import popcornLogo from '../../assets/logo/popcorn.svg';

const Header = () => {
  return (
    <nav className="w-full bg-primary z-50 fixed top-0 left-0 right-0">
      <div className="flex items-center bg-primary lg:mx-44 lg:justify-between lg:py-5  lg:gap-0 gap-6 mx-4 py-2">
        <a href="/" className="flex gap-4 items-center -m-1.5">
          <img src={popcornLogo} alt="Logo popcorn" width={40} height={40} />
          <span className="header-title">Rendu front, action !</span>
        </a>

        <ul className="header-item">
          <li>
            <Link to="/movies" className="header-link">
              Liste des films
            </Link>
          </li>
        </ul>

        <img
          className="lg:block hidden"
          src={popcornLogo}
          alt="Logo popcorn"
          width={40}
          height={40}
        />
      </div>
    </nav>
  );
};

export default Header;
