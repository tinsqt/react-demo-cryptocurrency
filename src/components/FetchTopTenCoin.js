import React from "react";

export default class FetchTopTenCoin extends React.Component {
  state = {
    loading: true,
    coin: null
  };

  async componentDidMount() {
    const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD&CMC_PRO_API_KEY=6a4c40f3-0921-4b74-8dda-c322bf61e1f2";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ coin: data.data, loading: false });
  }

  checkValue(val) {
    if (val > 0) {
      return true;
    }
  }

  changeValueToPercent(val) {
    return val.toFixed(2);
  }

  convertToPrice(val) {
    var priceVal = val.toFixed(0);
    return priceVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.coin) {
      return <div>didn't get a coin</div>;
    }

    const coins = this.state.coin;
    const red = {
      color: 'red',
    };
    const green = {
      color: 'green',
    };

    return (
        <div>
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

          {coins.map(coin => (
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
          ))}

            </tbody>
          </table>
        </div>
    );
  }
}
