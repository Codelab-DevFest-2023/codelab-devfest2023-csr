import popcornLogo from '../../assets/popcorn.jpg';

const Header = () => {
  return (
    <nav className="w-full bg-primary z-50 fixed top-0 left-0 right-0">
      <div className="flex items-center bg-primary lg:mx-44 lg:justify-between lg:py-5  lg:gap-0 gap-6 mx-4 py-2">
        <a href="/" className="flex gap-4 items-center -m-1.5 p-1.5">
          <img src={popcornLogo} alt="Logo popcorn" width={40} height={40} />
          <span className="hidden sm:block text-white font-semibold leading-6 xl:text-lg text-base">
            Rendu front, action !
          </span>
        </a>

        <ul className="text-white grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <li>
            <a
              href="/movies"
              className="flex items-center gap-2 font-semibold leading-6 xl:text-lg text-base"
            >
              Liste des films
            </a>
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
