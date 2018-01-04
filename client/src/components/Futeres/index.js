import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Header from '../../containers/Header/Header';
import Futures$ from '../../api/contracts/futeres';

export default class Futeres extends React.Component {
    constructor() {
        super();
        this.state = { data: null };
        this.futures$ = Futures$;
    }

    componentWillMount() {
      this.futures$
          .distinctUntilChanged()
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
                  Header: "Options",
                  columns: [
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
                  ]
                },
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