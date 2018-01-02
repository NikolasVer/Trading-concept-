import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Logo, Tips} from "./Utils";
import currencies from '../../api';
import Header from '../../containers/Header/Header';

export default class Futeres extends React.Component {
    constructor() {
        super();
        this.state = { data: null };
        this.Equities$ = currencies.Equities;
    }

    componentWillMount() {
      this.Equities$
          .distinctUntilChanged()
          .subscribe(data => {
              console.log(data);
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
            <br />
            <Tips />
            <Logo />
          </div>
        );
    }

}