import { useRef } from "react";
import Logo1 from "../assets/Logo.png";
import "./Header.css";
// import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";
function Header() {
  const navRef = useRef();

  // className="md:flex justify-around items-center gap-12 sticky top-0 bg-black z-[105]"

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    console.log("icon Clicked");
  };

  return (
    <div id="Header" className="flex justify-between items-center">
      <img
        src={Logo1}
        alt="Haveten-logo"
        className="object-cover w-[260px] cursor-pointer max-sm:w-[200px]"
      />

      <nav className="text-white navbars " ref={navRef}>
        <a
          href="#About"
          className="relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-[#02babb] after:transform after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100"
        >
          About
        </a>
        <a
          href="#About"
          className="relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-[#02babb] after:transform after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100"
        >
          About
        </a>
        <a
          href="#About"
          className="relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-[#02babb] after:transform after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100"
        >
          About
        </a>
        <button
          onClick={showNavbar}
          className="nav-btn nav-close-btn"
          style={{ color: "#02bbab" }}
        >
          <FaTimes size={30}></FaTimes>
        </button>
      </nav>

      {/* <div className="nav-div">
        <nav>
          <ul className="text-white flex justify-center items-center gap-8 text-[20px]">
            <li>
              <a
                href="#About"
                className="relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-[#02babb] after:transform after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Blog"
                className="relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-[#02babb] after:transform after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:bg-[#02babb] after:transform after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100"
              >
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div> */}

      <button
        className=" text-white nav-btn nav-open-btn"
        onClick={showNavbar}
        style={{ color: "#02bbab" }}
      >
        <FaBars size={30} />
      </button>
    </div>
  );
}

export default Header;
