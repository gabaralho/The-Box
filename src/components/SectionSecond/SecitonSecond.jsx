import React from "react";
import "../../styles/SectionSecond.css";

class SectionSecond extends React.Component {
  render() {
    return (
      <div id="second_section">
        <img
          id="second_section_image"
          src="https://images.ctfassets.net/7rldri896b2a/4BPRFvvgspEZJ1VSH38xkH/b79caa38646dddf33a907d91ba82f71c/KI-HERO-DreamKitchenDSKsat.jpg"
        ></img>
        <div id="second_section_contact">
          <div id="second_section_inner">
            <h4 id="second_section_title">
              Consultoria com qualidade excepcional.
            </h4>
            <p id="second_section_text">
              Entre em contato: <strong>+11 99569-3631</strong>
            </p>
          </div>
          <div className="consultation_button">
            <a href="/">Consulte-nos</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionSecond;
