import { useEffect } from "react";
import "./Blog.css";
import Aos from "aos";
// import "aos/dist/aos.css";
import { MdArrowOutward } from "react-icons/md";

function Blog() {
  useEffect(() => {
    Aos.init({ duration: 1700 });
  });
  return (
    <div id="Blog" className="h-[600px] md:mt-12 ">
      <p
        className="text-white text-center text-[35px] font-bold abt curser-pointer"
        data-aos="fade-top"
      >
        Our Blog
      </p>
      {/* blog main div */}
      <div className="blog-main-div mt-16">
        <div className="blog-1 text-center w-[900px] mx-auto flex flex-col items-center justify-center gap-4  max-sm:w-[90%]">
          {/* heading div  */}
          <p className="text-white  text-[25px] font-bold mb-4">
            Haveten Blog One
          </p>
          {/* content */}
          <p className="text-white para-1 max-sm:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            tempore eveniet et delectus illo laudantium expedita quam
            voluptatibus! Culpa eius debitis, rerum laborum eligendi ex corporis
            sed adipisci consequuntur
          </p>
          {/* read more icon */}
          <div className="read-more-div flex items-center gap-2">
            <a
              href="/fullBlog.html"
              className="text-[#02babb] block text-[18px] cursor-pointer"
              target="_blank"
            >
              Read More
            </a>
            <MdArrowOutward
              size={25}
              style={{
                color: "#02babb",
                display: "block",
                cursor: "pointer",
              }}
            />
          </div>
          {/* div-1 end  */}
        </div>
        {/* blog-main div end */}
      </div>
      {/* #Blog div end  */}
    </div>
  );
}

export default Blog;
