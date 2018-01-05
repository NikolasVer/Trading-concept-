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

  clickHandler() {
    // this.setState(state => ({ showChart: !state.showChart }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className={'header-ticker-wrapper'}>
        <InfoItem
          name={data[0].fullName}
          price={_.last(data).price}
          previous={data[data.length - 2].price}
          onClick={this.clickHandler}
        />
       { this.state.showChart ? <HeaderTickerChart data={data}/> : false}
      </div>
    );
  }
}

export default HeaderTicker;
