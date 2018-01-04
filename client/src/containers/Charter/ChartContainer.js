import React from 'react';
import { TypeChooser } from 'react-stockcharts/lib/helper';
import { getData } from '../../utils'
import ChartWithBollinger from "../../components/ChartWithBollinger";

class ChartContainer extends React.Component {
    componentDidMount() {
        getData().then(data => {
           this.setState({data});
        });
    }

    render() {
        if(this.state === null) {
            return 'Loading...'
        }

        return (
            <TypeChooser>
                {type => <ChartWithBollinger data={this.state.data} type={type} />}
            </TypeChooser>
        )
    }
}

export default ChartContainer;