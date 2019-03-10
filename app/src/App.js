import React, { Component } from 'react';
import { GlobalStyle } from './globalStyles';
import config from './config';
import Header from './components/Header';
import Logo from './components/Logo';
import Content from './components/Grid/Content';
import ProductBody from './components/ProductBody';
import BasketContainer from './containers/Basket'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header>
          <Logo src={config.SITE_LOGO} />
          <BasketContainer/>            
        </Header>
        <Content>
        <ProductBody>
          {this.props.children}
          </ProductBody>
        </Content>
      </div>
    );
  }
}

export default App;
