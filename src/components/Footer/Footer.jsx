import React from "react";
import "../../styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div id="infos">
          <p className="infos_text">
            <strong>Endereço: </strong>6391 Elgin St. Celina, Delaware 10299
          </p>
          <p className="infos_text">
            <strong>Telefone: </strong>+11 99569-3631
          </p>
          <p className="infos_text">
            <strong>E-mail: </strong>thebox@hello.com
          </p>
        </div>
        <div id="news_social">
          <form id="newsletter_form">
            <label>Newsletter: </label>
            <input id="email_input"></input>
            <div>
              <button className="subscribe_button zoom">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Footer;
