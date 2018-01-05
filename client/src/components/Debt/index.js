import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Header from "../../containers/Header/Header";
import SocketMain from "../../api/socket";

export default class Debt extends React.Component {
  constructor() {
    super();
    this.socket = SocketMain.socket;
    this.state = { data: null };
  }

  componentWillMount() {
    this.socket.on("_debt", data => {
      this.setState(() => ({data}))
    });

    this.socket.emit("debt");
  }
  render() {
    const { data } = this.state;

    if (!data) return "Loading...";

    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Ts Exchange",
              accessor: "tsexchange"
            },
            {
              Header: "Product Type",
              accessor: "producttype"
            },
            {
              Header: "Bond Type",
              accessor: "bondtype"
            },
            {
              Header: "Listings",
              accessor: "listings"
            },
            {
              Header: "Region",
              accessor: "region"
            },
            {
              Header: "Country",
              accessor: "country"
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
