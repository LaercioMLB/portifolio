import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Logo from "./img/logo.png";

import "./styles/components/app.sass";

function App() {
  return (
    <div>
        <img src={Logo} alt="Laercio Bubiak" 
        style={{
          height: "70px",
          marginLeft: "120px",
          marginTop: "50px",
          marginBottom: "20px"
          }}/> 
        <div id="portfolio">
          <Sidebar />
          <MainContent />
        </div>
    </div>
  );
}

export default App;
