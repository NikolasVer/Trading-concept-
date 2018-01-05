import React from "react";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

class HeaderTickerChart extends React.Component {
  constructor(props) {
    super(props);
  }

  formatData(data) {
    data.length = 50;
    return data.map(item => ({
      time: new Date(item.time).toLocaleTimeString().toString(),
      price: Number(parseFloat(item.price).toFixed(2))
    }));
  }

  formatDate(date) {
    return;
  }

  render() {
    const data = this.formatData(this.props.data);

    return (
      <div className={"header-chart-wrapper"}>
        <LineChart width={270} height={150} data={data} margin={{ left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={["dataMin", "dataMax"]} />
          <Tooltip />
          <Line type="monotone" dot={false} dataKey="price" stroke="#8884d8" />
        </LineChart>
      </div>
    );
  }
}

export default HeaderTickerChart;
