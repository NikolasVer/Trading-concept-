import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Header from "../../containers/Header/Header";
import SocketMain from "../../api/socket";

export default class Equities extends React.Component {
  constructor() {
    super();
    this.socket = SocketMain.socket;
    this.state = { data: null };
  }

  componentWillMount() {
    this.socket.on("_equities", data => {
      this.setState(() => ({ data }));
    });

    this.socket.emit("equities");
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
              Header: "Issue Class",
              accessor: "issueclass"
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
          defaultSorted={[
            {
              id: "age",
              desc: true
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
