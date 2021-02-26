import React, { Component } from "react";
import { connect } from "react-redux";

class CoinList extends Component {

    checkValue(val) {
        if (val > 0) {
            return true;
        }
    }

    changeValueToPercent(val) {
        var priceVal = val.toFixed(2);
        return priceVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    convertToPrice(val) {
        var priceVal = val.toFixed(0);
        return priceVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        const { item } = this.props;
        const red = {
            color: 'red',
        };
        const green = {
            color: 'green',
        };
        const itemList = item.map((coin) => {
            return (
                <tr key={coin.id} className="Tbody-tr">
                    <td>{coin.id}</td>
                    <td><p>{coin.name} {coin.symbol}</p></td>
                    <td>${this.changeValueToPercent(coin.quote.USD.price)}</td>
                    {this.checkValue(coin.quote.USD.percent_change_24h)
                        ? <td style={green}>{this.changeValueToPercent(coin.quote.USD.percent_change_24h)}</td>
                        : <td style={red}>{this.changeValueToPercent(coin.quote.USD.percent_change_24h *-1)}</td>
                    }
                    {this.checkValue(coin.quote.USD.percent_change_7d)
                        ? <td style={green}>{this.changeValueToPercent(coin.quote.USD.percent_change_7d)}</td>
                        : <td style={red}>{this.changeValueToPercent(coin.quote.USD.percent_change_7d *-1)}</td>
                    }
                    <td>${this.convertToPrice(coin.quote.USD.market_cap)}</td>
                    <td>${this.convertToPrice(coin.quote.USD.volume_24h)}</td>
                    <td>{coin.circulating_supply} {coin.symbol}</td>
                </tr>
            );
        });

        return <div>
            <h2>Today's Cryptocurrency Prices by Market Cap</h2>
            <p>Top 10 coin</p>
            <table className="Table">
                <thead className="Thead">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>7d</th>
                    <th>Market Cap</th>
                    <th>Volume</th>
                    <th>Circulating Supply</th>
                </tr>
                </thead>
                <tbody className="Tbody">
                {itemList}
                </tbody>
            </table>

        </div>;
    }
}

const mapStateToProps = state => ({
    item: state.coins.item
});

export default connect(mapStateToProps)(CoinList);
