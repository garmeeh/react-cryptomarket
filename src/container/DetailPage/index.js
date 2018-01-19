import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCoinOverviewRequest } from '../../actions/';

export class DetailPage extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.loadCoinOverviewRequest(id);
  }

  render() {
    return (
      <div>
        <h1>{this.props.coin.TotalCoinsMined} 💰</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    coin: state.coinState.coinInfo
  };
};

const mapDispatchToProps = dispatch => ({
  loadCoinOverviewRequest: symbol => dispatch(loadCoinOverviewRequest(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
