import React from 'react';
import Loader from '../../components/Loader';
// import currencies from '../../api';
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
                    this.state.currency.map(item => {
                        return <HeaderTickerItem
                                    name={item[0].fullName}
                                    price={Number(item[item.length - 1].price)}
                                />
                    })
                }
            </header>
        );
    }
}

export default Header;