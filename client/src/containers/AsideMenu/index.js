import React from "react";

//SVG
import icon from "../../images/icon.svg";

// Style
import "./AsideMenu.css";

export default class AsideMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className="Aside-menu">
        <img src={icon} className="icon" alt="icon" />
      </aside>
    );
  }
}
