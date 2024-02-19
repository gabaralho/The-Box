import React from "react";
import "../../styles/Section.css";

class Section extends React.Component {
  render() {
    return (
      <div id="first_section">
        <svg
          id="first_section_arrow"
          className="zoom"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11.3 19.5v-15h2.4v15H17L12.5 24L8 19.5zM12.5 0L17 4.5H8z"
          />
        </svg>
        <h2 id="first_section_title">Nossa reputação</h2>
        <div id="first_section_reputation">
          <div className="reputation_square">
            <svg
              className="square_icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4.285 8.344A2.751 2.751 0 0 0 2.25 11v3A2.75 2.75 0 0 0 5 16.75h2.5a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H5.815c.429-2.47 2.944-4.5 6.185-4.5c3.241 0 5.756 2.03 6.185 4.5H16.5a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h1.663A3.251 3.251 0 0 1 15 19.25h-1.145a2 2 0 1 0 0 1.5H15c2.4 0 4.384-1.78 4.705-4.091A2.751 2.751 0 0 0 21.75 14v-3a2.751 2.751 0 0 0-2.035-2.656C19.333 4.84 15.926 2.25 12 2.25c-3.926 0-7.333 2.59-7.715 6.094"
              />
            </svg>
            <h3 className="square_title">Melhores serviços</h3>
            <p className="square_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, maxime!
            </p>
          </div>
          <div className="reputation_square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5m-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6z"
              />
            </svg>
            <h3 className="square_title">Melhores times</h3>
            <p className="square_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, maxime!
            </p>
          </div>
          <div className="reputation_square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"
              />
            </svg>
            <h3 className="square_title">Melhores designs</h3>
            <p className="square_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, maxime!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
