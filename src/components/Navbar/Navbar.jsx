import React from "react";
import "../../styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div id="header">
        <div id="header_logo">
          <svg
            width="29"
            height="36"
            viewBox="0 0 29 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="header_logo_image"
          >
            <path
              d="M14.886 27.5384V35.4653L28.7916 27.4357V19.5097L14.886 27.5384Z"
              fill="#2947A9"
            />
            <path
              d="M21.1108 12.2289L27.972 8.26536L14.886 0.707733V8.63446L21.1108 12.2289Z"
              fill="#0B267D"
            />
            <path
              d="M9.48157 14.5956V22.5249L14.8857 25.6448V17.7191L9.48157 14.5956Z"
              fill="#91A1D4"
            />
            <path
              d="M28.7916 9.68616L14.886 17.7191V25.6448L28.7916 17.6152V9.68616Z"
              fill="#2947A9"
            />
            <path
              d="M1.80591 8.26074L8.62603 12.2474L14.8858 8.63446V0.707733L1.80591 8.26074Z"
              fill="#2947A9"
            />
            <path
              d="M7.84138 23.4722V13.6448L0.977783 9.68256V27.4354L14.8858 35.465V27.5381L7.84138 23.4722Z"
              fill="#91A1D4"
            />
          </svg>
          <p id="header_logo_name">The Box</p>
        </div>
        <ul id="header_list">
          <li className="header_list_li zoom">
            <a href="/">Home</a>
          </li>
          <li className="header_list_li zoom">
            <a href="/">About Us</a>
          </li>
          <li className="header_list_li zoom">
            <a href="/">Projects</a>
          </li>
          <li className="header_list_li zoom">
            <a href="/">Services</a>
          </li>
          <li className="header_list_li zoom">
            <a href="/" id="orange">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
