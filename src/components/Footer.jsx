import "./Footer.css";
import Logo1 from "../assets/Logo.png";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div id="footer" className="mt-12 pb-12">
      <section className="flex justify-evenly items-center max-sm:flex-col max-sm:gap-9">
        {/* div-1 */}
        <div className="div-1 text-white flex flex-col w-[340px]">
          <div className="img-div">
            <img src={Logo1} alt="Haveten-Logo" className="h-[80px]" />
          </div>
          <p className="font-[600] pl-6 text-[#02abba] pb-2">
            "Risk comes from not knowing what you're doing"
          </p>
          <p className="pl-8 font-[700]">- Warren Buffet</p>
        </div>
        {/* div-2 */}
        <div className="div-2 text-white flex flex-col gap-4 max-sm:self-start max-sm:ml-9">
          <a href="#About" className="block">
            <p className="text-[#02abba]">About us</p>
          </a>
          <a href="#Blog" className="block">
            <p className="text-[#02abba]">Blog</p>
          </a>
          <a href="#Contact" className="block">
            <p className="text-[#02abba]">Contact us</p>
          </a>
        </div>
        {/* div-3 */}
        <div className="div-3 text-white flex flex-col gap-4 max-sm:self-start max-sm:ml-9">
          <a href="#Home" className="block">
            <p className="text-[#02abba]">Privacy Policy</p>
          </a>
          <a
            href="https://forms.gle/t1xQKXVRGii9chEd8"
            target="_blank"
            className="block"
          >
            <p className="text-[#02abba]">Invest with us</p>
          </a>
        </div>
        {/* div-4 */}
        <div className="div-4 max-sm:mr-36">
          <h1 className="text-white text-[32px]  relative font-bold ">
            Follow us
          </h1>
          <div className="social-icon flex justify-center items-center gap-6 mt-4">
            <a
              href="https://www.linkedin.com/company/haveten-investments/"
              target="_blank"
              className="block"
            >
              <FaLinkedinIn size={30} style={{ color: "#02abba" }} />
            </a>
            <a href="" className="block">
              <FaInstagram size={30} style={{ color: "#02abba" }} />
            </a>
            <a href="" className="block">
              <FaLinkedinIn size={30} style={{ color: "#02abba" }} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
