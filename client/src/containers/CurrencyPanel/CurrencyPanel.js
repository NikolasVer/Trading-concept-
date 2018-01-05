import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Futeres from "../../components/Futeres/index";
import Debt from '../../components/Debt/index';
import Equities from '../../components/Equities/index';
import Options from '../../components/Options/index';

class CurrencyPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tabs-wrapper">
        <Tabs>
          <TabList>
            <Tab>Futeres</Tab>
            <Tab>Debt</Tab>
            <Tab>Equities</Tab>
            <Tab>Options</Tab>
          </TabList>

          <TabPanel>
            <Futeres />
          </TabPanel>

          <TabPanel>
            <Debt />
          </TabPanel>

          <TabPanel>
            <Equities />
          </TabPanel>

          <TabPanel>
            <Options />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default CurrencyPanel;
