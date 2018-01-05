import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Header from '../../containers/Header/Header';
import SocketMain from "../../api/socket";

export default class Futeres extends React.Component {
    constructor() {
        super();
        this.socket = SocketMain.socket;
        this.state = { data: null };
    }

    componentWillMount() {
      this.socket.on("_futures", data => {
        this.setState(() => ({data}))
      });

      this.socket.emit("futures");
    }
    render() {
        const { data } = this.state;

        if(!data) return 'Loading...';

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
                  Header: "Underlying Type",
                  accessor: "underlyingtype"
                },
                {
                  Header: "Strategy Types",
                  accessor: "strategytypes"
                },
                {
                  Header: "Series",
                  accessor: "series"
                },
                {
                  Header: "Contracts",
                  accessor: "contracts"
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