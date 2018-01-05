import React from "react";
import InfoItem from "./item";
import _ from "lodash";
import HeaderTickerChart from './chart';
import './headerTicker.css'

class HeaderTicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChart: true,
      data: null
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentWillMount() {
    const data = this.props.data;
    this.setState(() => ({data}));
  }


  componentWillReceiveProps(nextProps) {
    const data = this.props.data;
    this.setState(() => ({data}));
  }

  clickHandler() {
    // this.setState(state => ({ showChart: !state.showChart }));
  }

  render() {
    const { data } = this.state;
    const name = data[0].fullName;
    const currentPrice = data[0].price;
    const previuosPrice = data[1].price;

    return (
      <div className={'header-ticker-wrapper'}>
        <InfoItem
          name={name}
          price={currentPrice}
          previous={previuosPrice}
          onClick={this.clickHandler}
        />
       { this.state.showChart ? <HeaderTickerChart data={data}/> : false}
      </div>
    );
  }
}

export default HeaderTicker;
