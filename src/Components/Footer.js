import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "../assets/avatar6.jpg";

const Footer = () => {
  const forHomeHref = {
    gitHub: "https://instagram.com/_abdurakhmon._27",
    instagram: "https://github.com/abdurahmon27",
    linkedIn: "https://www.linkedin.com/in/abdurahmon-mamadiyorov-23607525b/",
  };
  let blank = "_blank";
  return (
    <section
      id="footer"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center bg-transparent"
    >
      <div className="container mx-auto bg-transparent">
        <div className="flex items-center justify-center my-5">
          <a href={forHomeHref.gitHub} target={blank} className="mx-5">
            <FaInstagram />
          </a>
          <a href={forHomeHref.instagram} target={blank} className="mx-5">
            <FaGithub />
          </a>
          <a href={forHomeHref.linkedIn} target={blank} className="mx-5">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <footer className="font-primary">
          Privacy Policy |
            © {new Date().getFullYear()}{" "}
            <a href={"https://bekzotovich.uz"} className="font-bold">
              bekzotovich.uz.
            </a>{" "}
            All rights reserved.
          </footer>
        </div>
        <div className="flex items-center justify-center mt-10">
          <img
            src={Image}
            alt="blabla"
            className=" w-32 rounded-full mix-blend-lighten"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;

//absolute bottom-2 right-3
