import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {getCoinList} from "../actions/CoinActions";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";

const CoinList = (props) => {
  const dispatch = useDispatch();
  const coinList = useSelector(state => state.CoinList);
  React.useEffect(() => {
    FetchData(1)
  }, []);


  const FetchData = (page = 1) => {
    dispatch(getCoinList(page))
  }

  const red = {
    color: 'red',
  };
  const green = {
    color: 'green',
  };

  const checkValue = val => {
    if (val > 0) {
      return true;
    }
  }

  const changeValueToPercent = val => {
    var priceVal = val.toFixed(2);
    return priceVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const convertToPrice = val => {
    var priceVal = val.toFixed(0);
    return priceVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const ShowData = () => {
    if (coinList.loading) {
      return <p>Loading...</p>
    }

    if (!_.isEmpty(coinList.data)) {
      return(
        <div>
          <h2>Today's Cryptocurrency Prices by Market Cap</h2>
          <p>Top 10 coin</p>
          <table className={"Table"}>
            <thead>
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
            <tbody>

          {coinList.data.map(coin => {
            return(
                <tr key={coin.id} className="Tbody-tr">
                  <td>{coin.id}</td>
                  <td><Link to={`/coin/${coin.id}`}><p>{coin.name} {coin.symbol}</p></Link></td>
                  <td>${changeValueToPercent(coin.quote.USD.price)}</td>
                  {checkValue(coin.quote.USD.percent_change_24h)
                      ? <td style={green}>{changeValueToPercent(coin.quote.USD.percent_change_24h)}</td>
                      : <td style={red}>{changeValueToPercent(coin.quote.USD.percent_change_24h *-1)}</td>
                  }
                  {checkValue(coin.quote.USD.percent_change_7d)
                      ? <td style={green}>{changeValueToPercent(coin.quote.USD.percent_change_7d)}</td>
                      : <td style={red}>{changeValueToPercent(coin.quote.USD.percent_change_7d *-1)}</td>
                  }
                  <td>${convertToPrice(coin.quote.USD.market_cap)}</td>
                  <td>${convertToPrice(coin.quote.USD.volume_24h)}</td>
                  <td>{coin.circulating_supply} {coin.symbol}</td>
                </tr>
            )
          })}
            </tbody>
          </table>
        </div>
      )
    }

    if (coinList.errorMsg !== "") {
      return <p>{coinList.errorMsg}</p>
    }

    return <p>unable to get data</p>
  };

  return(
    <div>
      {ShowData()}
      {!_.isEmpty(coinList.data) && (
        <ReactPaginate
          pageCount={coinList.count}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )}
    </div>
  )
};

export default CoinList