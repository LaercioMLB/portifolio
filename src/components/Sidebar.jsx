import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import Logo from "../img/logo.png"

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
      <aside id="sidebar">
        <img src={Avatar} alt="Laercio Bubiak" />
        <p className="title">Laercio Bubiak - Devops</p>
        <SocialNetworkContainer />
        <InformationContainer />
        <a href="https://drive.google.com/file/d/1Bf-Wr3CfGerGDeIaEX6bpni8meCcj88d/view?usp=sharing" target="blank" className="btn">
          Download currículo
        </a>
      </aside>
  );
};

export default Sidebar;




