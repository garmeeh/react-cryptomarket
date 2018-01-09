import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCoinListRequest } from "../../actions/";
import MyWallet from "../../components/MyWallet";

class MyWalletPage extends Component {
  componentWillMount() {
    this.props.loadCoinListRequest();
  }

  state = {
    quantity: "",
    pricePaid: ""
  };

  handleChangeQtd = event => {
    this.setState({ quantity: event.target.value });
  };

  handleChangePricePaid = event => {
    this.setState({ pricePaid: event.target.value });
  };

  render() {
    return <MyWallet list={this.props.list} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.coinState.coinList
  };
};

const mapDispatchToProps = dispatch => ({
  loadCoinListRequest: () => dispatch(loadCoinListRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyWalletPage);