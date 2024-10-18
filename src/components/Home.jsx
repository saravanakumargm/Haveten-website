import HomeLogo from "../assets/hLogo1.png";
import Aos from "aos";
// import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  // #02babb greenish color
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []); // Ensure Aos.init runs only once

  const [text, setText] = useState("");
  const [subtext, setSubtext] = useState("");
  const [typingCompleted, setTypingCompleted] = useState(false); // Added state to track typing completion

  const mainText = "Welcome To";
  const companyText = "Haveten Securities";

  useEffect(() => {
    let i = 0;
    let j = 0;
    let mainTextTimeout, subTextTimeout;

    const typeMainText = () => {
      if (i < mainText.length) {
        setText(mainText.slice(0, i + 1)); // Updated to use slice correctly
        i++;
        mainTextTimeout = setTimeout(typeMainText, 100); // Adjust speed by changing 100ms
      } else {
        setTimeout(() => typeSubText(), 500);
      }
    };

    const typeSubText = () => {
      if (j < companyText.length) {
        setSubtext(companyText.slice(0, j + 1)); // Updated to use slice correctly
        j++;
        subTextTimeout = setTimeout(typeSubText, 100); // Adjust speed by changing 100ms
      } else {
        setTypingCompleted(true); // Mark typing as complete
        setTimeout(() => Aos.refresh(), 400); // Refresh AOS after typing completes
      }
    };

    typeMainText();
    return () => {
      clearTimeout(mainTextTimeout);
      clearTimeout(subTextTimeout);
    };
  }, []);

  return (
    <div
      id="Home"
      className="md:flex justify-evenly items-center gap-[20px] md:max-h-[550px] max-sm:mt-20"
    >
      <div className="content-div w-[600px] mob-cont-div  max-sm:w-[340px]">
        <div className="animate-div h-[100px]">
          <h1 className="text-white md:text-[30px] font-bold max-sm:text-[26px] mob-h">
            {text}
            <span className="text-[#02babb] block md:text-[36px] max-sm:text-[29px]mob-h">
              {subtext}
            </span>
          </h1>
        </div>

        {/* Conditionally render sub-content after typing is complete */}
        {typingCompleted && (
          <div className="small-content w-[600px] mt-8 text-white md:text-[18px] md:h-[200px] mob-p max-sm:w-[350px]">
            <p className="pb-5" data-aos="fade-right">
              The best time to plant a tree was 20 years ago. The second best
              time is now
            </p>
            <p className="pb-5" data-aos="fade-right">
              We believe in long-term growth and sustainable strategies
            </p>
            <p className="" data-aos="fade-right">
              Integrity, Accountability are our core values.
            </p>
          </div>
        )}
      </div>
      <div className="img-div">
        <img
          src={HomeLogo}
          alt="Finance-Image"
          className="w-[500px] h-[500px] md:animate-float mob-img"
          // data-aos="fade-left"
        />
      </div>
    </div>
  );
}

export default Home;
