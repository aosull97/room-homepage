const MobileNav = ({navOpened, toggleNav}) => {

  if (!navOpened) {
    return (
      <div className="px-4 pt-8 flex justify-between">
        <div>
          <img
            onClick={toggleNav}
            src="/images/icon-hamburger.svg"
            alt="hamburger icon"
          />
        </div>
        <div className="">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div></div>
      </div>
    );
  } else if (navOpened) {
    return (
      <div className="bg-white flex px-6 py-10 justify-between ">
        <div className="block">
          <img
            onClick={toggleNav}
            src="/images/icon-close.svg"
            alt="Close icon"
            id="close-icon"
            width={20}
          />
        </div>
        <div>
          <ul className="flex gap-6 font-semibold  text-lg">
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    );
  }
};

export default MobileNav;
