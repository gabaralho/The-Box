import React from "react";
import "../../styles/SectionThird.css";

class SectionThird extends React.Component {
  render() {
    return (
      <div id="third_section">
        <h5 id="projects_title">Projetos</h5>
        <div id="all_projects">
          <div id="projects_preview">
            <div className="project zoom">
              <img
                className="project_photo"
                src="https://media.architecturaldigest.com/photos/579120ea46eb3e65136a5222/16:9/w_3487,h_1961,c_limit/buzzworthy-buildings-brooklyn-18.jpg"
              ></img>
              <p className="photo_description">Wildstone Infra Hotel</p>
            </div>
            <div className="project zoom">
              <img
                className="project_photo"
                src="https://media.architecturaldigest.com/photos/579120ea46eb3e65136a5222/16:9/w_3487,h_1961,c_limit/buzzworthy-buildings-brooklyn-18.jpg"
              ></img>
              <p className="photo_description">Norman Foster’s first</p>
            </div>
            <div className="project zoom">
              <img
                className="project_photo"
                src="https://media.architecturaldigest.com/photos/579120ea46eb3e65136a5222/16:9/w_3487,h_1961,c_limit/buzzworthy-buildings-brooklyn-18.jpg"
              ></img>
              <p className="photo_description">Studio Gang drew</p>
            </div>
            <div className="project zoom">
              <img
                className="project_photo"
                src="https://media.architecturaldigest.com/photos/579120ea46eb3e65136a5222/16:9/w_3487,h_1961,c_limit/buzzworthy-buildings-brooklyn-18.jpg"
              ></img>
              <p className="photo_description">10 Jay Street</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionThird;
