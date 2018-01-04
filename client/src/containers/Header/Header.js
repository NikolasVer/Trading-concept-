import React from 'react';
import Loader from '../../components/Loader';
import _ from 'lodash';
import './Header.css';

import HeaderTickerItem from '../../components/HeaderTickerItem';
import SocketMain from '../../api/socket';
import Currencies$ from '../../api/rates/currecncies';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: []
        };

        this.currencies$ = Currencies$;
    }

    componentWillMount() {
        this.currencies$
            .distinctUntilChanged()
            .subscribe(data => {
                console.log(data);
                this.setState(() => ({currency: data}));
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
                    this.state.currency.map((data, index) => {
                        let lastItem = _.last(data);
                        return <HeaderTickerItem
                                    key={index}
                                    name={lastItem.fullName}
                                    price={Number(lastItem.price)}
                                    previous={Number(data[data.length - 2].price)}
                                />
                    })
                }
            </header>
        );
    }
}

export default Header;