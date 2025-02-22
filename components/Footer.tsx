import { FaLocationArrow } from "react-icons/fa6";
//import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 bg-[#F0EFEB]" id="contact">
      {/* Background Grid */}
      

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-[#2A3335]">
          If you want to{" "}
          <span className="text-[#F59E0B]">sponsor us or partner</span> with us
          for fundraising, please contact us using the details below.
        </h1>
        <p className="md:mt-10 my-5 text-center text-[#2A3335]">
          Also, feel free to contact us for other inquiries.
        </p>
        <a href="mailto:chapterone2725@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-[#2A3335]">
          
        </p>

        {/** Uncomment this if you want to display social media icons */}
        {/** 
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-[#F0EFEB] rounded-lg border border-[#2A3335]"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;
