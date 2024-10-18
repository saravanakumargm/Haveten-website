import { useEffect } from "react";
import "./About.css";
import AboutImg from "../assets/AboutImg.png";
import Aos from "aos";
// import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1700 });
  });
  return (
    <div
      id="About"
      className="h-[500px] max-sm:mt-20 max-sm:h-[auto] max-sm:mb-20"
    >
      <p
        className="text-white text-center text-[30px] font-bold abt curser-pointer"
        data-aos="fade-top"
      >
        About us
      </p>
      {/* content and Image div Here */}
      <div className="abt-divs flex justify-evenly  items-center mt-16  mob-abt-main-div">
        {/* image div */}
        <div className="abt-img" data-aos="fade-right">
          <img
            src={AboutImg}
            alt="About-Img"
            className="w-[500px] rounded-[8px] h-[370px] mob-img"
          />
        </div>
        {/* content div */}
        <div
          className="abt-cont md:w-[600px] max-sm:w-[330px]"
          data-aos="fade-left"
        >
          <p className="text-white text-[18px]  text-justify abt-p  ">
            Haveten is an investment company specializing in identifying and
            capitalizing on high-potential opportunities within the stock
            market. We employ a value-investing philosophy,meticulously
            analyzing and investing in companies with strong fundamentals and
            long-term growth prospects. Our team of experienced professionals is
            dedicated to building a diverified portfolio that delivers
            consistent and sustainable returns for our stakeholders, At
            haveten,We are committed to stratgetic, informed investments that
            create enduring value.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
