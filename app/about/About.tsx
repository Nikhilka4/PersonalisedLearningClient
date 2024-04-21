import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="h-screen text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        A Few things{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
         About the Project...!
        </span>
      </h1>

      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          The goal of our <span className="font-extrabold text-[22px]">Personalized Learning Platform</span> is to create a learning environment that is both engaging and effective. We want to provide users with a proper guided roadmap and resources they need to succeed, while also ensuring that the platform is accessible to everyone.
          <br />
          <br />
          We believe that money should never be a barrier to achieving dreams. That&apos;s why all our courses are free so that anyone, regardless of their situation, can access the tools and knowledge they need to succeed.
        </p>
        <br />
        <h1 className={`${styles.title} 800px:!text-[45px]`}>
        Meet the{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
         Wizards  
        </span> Behind the Curtain...!
      </h1>
        <span className="text-[22px] font-extrabold">Nikhil,</span>
        <span className="text-[18px] font-Poppins">the Team Lead Titan, orchestrating our digital symphony with a maestro&apos;s precision!</span><br />
        <span className="text-[22px] font-extrabold">Charan,</span>
        <span className="text-[18px] font-Poppins">the Code Whisperer, who speaks fluent JavaScript and breathes life into our pixels!</span><br />
        <span className="text-[22px] font-extrabold">Sarada,</span>
        <span className="text-[18px] font-Poppins">the Bug Banisher, wielding her debugger like a sword to keep our codebase pristine!</span><br />
        <span className="text-[22px] font-extrabold">Narasimha,</span>
        <span className="text-[18px] font-Poppins">the Architect of Algorithms, crafting the logic that powers our learning odyssey!</span><br />
        <span className="text-[22px] font-extrabold">Durga Prasad,</span>
        <span className="text-[18px] font-Poppins">the Interface Innovator, designing experiences that make learning a visual feast!</span>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;


// Nikhil, the Team Lead Titan, orchestrating our digital symphony with a maestro’s precision!
// Charan, the Code Whisperer, who speaks fluent JavaScript and breathes life into our pixels!
// Sarada, the Bug Banisher, wielding her debugger like a sword to keep our codebase pristine!
// Narasimha, the Architect of Algorithms, crafting the logic that powers our learning odyssey!
// Durga Prasad, the Interface Innovator, designing experiences that make learning a visual feast!