import React, { Component } from "react";
import { connect } from "react-redux";
import ItemList from "./coinList.js";
import { fetchCoins } from "../actions/fetchData";
import { bindActionCreators } from 'redux';

class Main extends Component {

    componentDidMount() {
        const {fetchData} = this.props;
        fetchData();
    }

    render() {
        return (
            <div>
                <ItemList />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchData: fetchCoins
}, dispatch)

const mapStateToProps = state => ({
    item: state.coins.item,
    loading: state.coins.loading,
    error: state.coins.error
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
