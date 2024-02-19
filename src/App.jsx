import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Section from "./components/Section/Section";
import SectionSecond from "./components/SectionSecond/SecitonSecond";
import SectionThird from "./components/SectionThird/SectionThird";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <div id="first_section">
          <Section />
        </div>
        <div id="section">
          <SectionSecond />
        </div>
        <SectionThird />
        <Footer />
      </div>
    );
  }
}

export default App;
