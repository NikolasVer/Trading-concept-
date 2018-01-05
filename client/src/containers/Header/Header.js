import React from "react";
import Loader from "../../components/Loader";
import Currencies$ from "../../api/rates/currecncies";
import HeaderTicker from "../../components/HeaderTicker/index";
import _ from "lodash";
import "./Header.css";
import SocketMain from '../../api/socket';
import { setInterval } from 'timers';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.socket = SocketMain.socket;
    this.state = { currency: [] };
  }

  componentWillMount() {
    this.socket.on("_currencies", data => {
      this.setState(() => ({ currency: data }));
    });

    this.socket.emit("currencies");

    setInterval(() => {
      this.socket.emit("currencies");
    }, 60000)
  }

  render() {
    if (_.isEmpty(this.state.currency)) {
      return (
        <div className="loader-wrapper">
          <Loader />
        </div>
      );
    }

    return (
      <header className={"main-header"}>
        {this.state.currency.map((data, index) => {
          return <HeaderTicker data={data} key={index} />;
        })}
      </header>
    );
  }
}

export default Header;
