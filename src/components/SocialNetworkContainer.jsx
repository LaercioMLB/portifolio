import { FaLinkedinIn, FaGithub,FaInstagram } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

import "../styles/components/socialnetworkcontainer.sass";
import TechnologiesContainer from "./TechnologiesContainer";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link:"https://www.linkedin.com/in/laercio-bubiak/" },
  { name: "github", icon: <FaGithub />, link: "https://github.com/LaercioMLB"},
  { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/laercio_mlb" },
  { name: "medium", icon: <BsMedium/>, link:"https://labub.medium.com/"}
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
