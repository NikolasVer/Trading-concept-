export function _parseItem(_data) {
    let data = _data.ticker;
    let time = _data.timestamp;

    return {
        base: data.base,
        fullName: _getFullName(data.base),
        price: data.price,
        time
    }
}

export function _getFullName(base) {
    const nameCollection = {
        'BTC': 'Bitcoin',
        'ETH': 'Ethereum',
        'XMR': 'Monero',
        'BCH': 'Bitcoin Cash',
        'XRP': 'Ripple',
        'LTC': 'Litecoin',
        'XEM': 'NEM',
    }

    if(!nameCollection[base]) {
        throw new Error('Invalid currency name');
        return false;
    }

    return nameCollection[base];
}