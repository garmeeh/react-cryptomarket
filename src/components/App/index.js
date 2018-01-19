import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Wrapper, BodyWrapper } from './style';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';
import ListPage from '../../container/ListPage';
import MyWalletPage from '../../container/MyWalletPage';
import DetailPage from '../../container/DetailPage';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <Header />
          <Menu />
        </div>
        <BodyWrapper>
          <Switch>
            <Route exact path="/wallet" component={MyWalletPage} />
            <Route exact path="/:view?" component={ListPage} />
            <Route exact path="/info/:id" component={DetailPage} />
          </Switch>
        </BodyWrapper>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
