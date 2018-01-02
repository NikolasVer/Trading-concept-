import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Futeres from '../../components/Futeres/index';

class CurrencyPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='tabs-wrapper'>
               <Tabs>
                    <TabList>
                        <Tab>Futeres</Tab>
                        <Tab disabled>Luigi</Tab>
                        <Tab>Peach</Tab>
                    </TabList>

                    <TabPanel>
                        <Futeres />
                    </TabPanel>

                    <TabPanel>
                        <p>
                            <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
                            Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
                            released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
                            as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
                            appears in many games throughout the Mario franchise, often as a sidekick to his brother.
                        </p>
                        <p>
                            Source:{' '}
                            <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
                                Wikipedia
                            </a>
                        </p>
                    </TabPanel>


               <TabPanel>
                   <p>
                       <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
                       is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
                       Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
                       attack by Bowser. She often plays the damsel in distress role within the series and
                       is the lead female. She is often portrayed as Mario's love interest and has appeared
                       in Super Princess Peach, where she is the main playable character.
                   </p>
                   <p>
                       Source:{' '}
                       <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
                           Wikipedia
                       </a>
                   </p>
               </TabPanel>
           </Tabs>
            </div>
        )
    }
}

export default CurrencyPanel;