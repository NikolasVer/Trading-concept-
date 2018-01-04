import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Header from '../../containers/Header/Header';
import Debt$ from '../../api/contracts/debt';

export default class Debt extends React.Component {
    constructor() {
        super();
        this.state = { data: null };
        this.debt$ = Debt$.data;
    }

    componentWillMount() {
      console.log(this.debt$);
      this.debt$
          .subscribe(data => {
              this.setState(() => ({data}))
          });

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
                  Header: "Bond Type",
                  accessor: "bondtype"
                },
                {
                  Header: 'Listings',
                  accessor: "listings"
                },
                {
                  Header: "Region",
                  accessor: "region"
                },
                {
                  Header: "Country",
                  accessor: "country"
                },
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
          </div>
        );
    }

}