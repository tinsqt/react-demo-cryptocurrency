import React, { Component } from "react";
import { connect } from "react-redux";
import ItemList from "./coinList.js";
import { fetchCoins } from "../actions/fetchData";

class Main extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCoins());
    }

    render() {
        return (
            <div>
                <ItemList />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.coins.item,
    loading: state.coins.loading,
    error: state.coins.error
});

export default connect(mapStateToProps)(Main);
