import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";

// 🆕  import your data object
import { personalInfo } from "../constants/Constant";

const About = () => {
  return (
    <section
      id="about"
      className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-12 flex max-sm:flex-col gap-5">
        {/* LEFT – Intro text */}
        <div className="INTRO text-[70px] leading-[80px] font-semibold max-sm:text-[50px] max-sm:leading-[70px]">
          <h3 className="text-[#00040f] dark:text-white">
            Hi, there! <br />I am
          </h3>

          {/* Name */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
            {personalInfo.name}
          </span>

          {/* Title */}
          <p className="text-xl max-sm:text-[15px] mt-2 text-cyan-600 dark:text-cyan-400">
            {personalInfo.title}
          </p>

          {/* About sentence */}
          <p className="ABOUT text-lg max-sm:text-[14px] bg-clip-text text-transparent bg-gradient-to-r from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-[470px] mt-5 pl-1">
            {personalInfo.about}
          </p>

          {/* Location */}
          <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
            {personalInfo.location}
          </p>
        </div>

        {/* RIGHT – Lottie animation */}
        <Lottie
          animationData={computer}
          loop
          className="max-w-[650px] shadow-xl rounded-xl border border-[#00040f]"
        />
      </div>
    </section>
  );
};

export default About;
