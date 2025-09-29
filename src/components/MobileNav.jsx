import logo from "/images/logo.svg";
import hamburger from "/images/icon-hamburger.svg";
import close from "/images/icon-close.svg";

const MobileNav = ({navOpened, toggleNav}) => {

  if (!navOpened) {
    return (
      <div className="px-4 pt-8 flex justify-between">
        <div>
          <img
            onClick={toggleNav}
            src={hamburger}
            alt="hamburger icon"
          />
        </div>
        <div className="">
          <img src={logo} alt="logo" />
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
            src={close}
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
