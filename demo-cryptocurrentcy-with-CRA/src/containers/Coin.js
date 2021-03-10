import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCoin} from "../actions/CoinActions";
import _ from "lodash";

const Coin = (props) => {
    const coinId = props.match.params.id;
    const dispatch = useDispatch();
    const coinState = useSelector(state => state.Coin);
    React.useEffect(() => {
        dispatch(getCoin(coinId))
    }, []);


    const ShowData = () => {
        if (!_.isEmpty(coinState.data[coinId])) {
            const coinData = coinState.data[coinId].data[coinId];
            console.log(coinData)
            return(
                <div className={"coin-wrapper"}>
                    <div className="item">
                        <img src={coinData.logo} alt={coinData.name}/>
                        <h2>{coinData.name}</h2>
                        <p>{coinData.description}</p>
                    </div>
                </div>
            )
        }

        if (coinState.loading) {
            return <p>Loading...</p>
        }

        if (coinState.errorMsg !== "") {
            return <p>{coinState.errorMsg}</p>
        }

        return <p>error getting coin</p>
    }

    return(
        <div className={"coin-detail"}>
            {ShowData()}
            <a href={'/'}> Back </a>
        </div>
    )
};

export default Coin