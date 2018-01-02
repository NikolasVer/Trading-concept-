import React from 'react';
import Loader from '../../components/Loader';
import currencies from '../../api';
import _ from 'lodash';
import './Header.css';

import HeaderTickerItem from '../../components/HeaderTickerItem';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currency: []
        };

        this.GlobalRates$ = currencies.GlobalRates;
    }

    componentWillMount() {
        this.GlobalRates$
            .distinctUntilChanged()
            .subscribe(data => {
                let currency = data.map(item => item.ticker);
                this.setState(() => ({currency}));
            });
    }

    render() {
        if(_.isEmpty(this.state.currency)) {
            return (
                <div className='loader-wrapper'>
                    <Loader />
                </div>
            )
        };

        return (
            <header className={'main-header'}>
                {
                    this.state.currency.map(item => {
                        return <HeaderTickerItem name={item.base} price={Number(item.price)} />
                    })
                }
            </header>
        );
    }
}

export default Header;