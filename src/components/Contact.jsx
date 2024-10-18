import { useEffect } from "react";
import ContactImg from "../assets/Contact.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";
import Aos from "aos";
// import "aos/dist/aos.css";
function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1700 });
  });
  return (
    <div id="Contact" className="mb-4 max-sm:w-[350px]">
      <main className="flex justify-around items-center max-sm:flex-col max-sm:gap-12">
        <div className="cont-div md:w-[400px] text-white" data-aos="fade-left">
          <h1 className="text-white md:text-[32px]  relative font-bold pb-8 md:after:content-[''] md:after:inline-block md:after:w-[50%] md:after:h-[1.4px]  after:bg-[#02babb] md:after:ml-2 md:after:align-middle max-sm:text-[25px] max-sm:text-center  ">
            Contact-us
          </h1>
          {/* email div */}
          <div className="div-1 flex  items-center gap-4 max-sm:justify-center">
            {/* icon  */}
            <p>
              <MdEmail size={35} style={{ color: "#02babb" }} />
              {/* <MdMarkEmailRead size={35} style={{ color: "#02babb" }} /> */}
            </p>
            <p className="text-[18px] font-bold email">
              info.haveten@gmail.com
            </p>
          </div>
          {/* phone div */}
          <div className="div-2 flex  items-center max-sm:justify-center gap-4 md:pr-[100px] mt-7 mb-7">
            {/* icon  */}
            <p>
              <FaPhoneAlt size={35} style={{ color: "#02babb" }} />
              {/* <MdMarkEmailRead size={35} style={{ color: "#02babb" }} /> */}
            </p>
            <p className="text-[18px] font-bold email">+91 987654323</p>
          </div>

          {/* quries content */}
          <p className="text-[18px] font-[500] email max-sm:text-[16px] max-sm:text-center">
            if you have any queries Please reach us
          </p>
          <div className="qu-div  mt-6 rounded-[6px] h-[80px] max-sm:h-[60px] flex items-center bg-white">
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="Write your Queries"
              className="text-[17px] font-[500] border-none outline-none h-[50px]
            pl-3    text-black block w-[240px] max-sm:w-[170px] max-sm:text-[16px]"
            ></input>
            com
            <a href="mailto:info.haveten@gmail.com" className="block">
              <button className="text-[18px] font-bold bg-[#02babb] w-[100px] h-[50px] rounded-[6px] max-sm:text-[16px] max-sm:h-[40px]">
                Queries
              </button>
            </a>
          </div>
        </div>
        <div className="img-div mob-img" data-aos="fade-right">
          <img
            src={ContactImg}
            alt="Contact-Img"
            className="rounded-[8px] cursor-pointer h-[400px] md:w-[400px]"
          />
        </div>
      </main>
    </div>
  );
}

export default Contact;
