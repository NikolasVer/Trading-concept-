import React from "react";
import Loader from "../../components/Loader";
import Currencies$ from "../../api/rates/currecncies";
import HeaderTicker from "../../components/HeaderTicker/index";
import _ from "lodash";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currency: [] };
    this.currencies$ = Currencies$;
  }

  componentWillMount() {
    this.currencies$.distinctUntilChanged().subscribe(data => {
      this.setState(() => ({ currency: data }));
    });
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
