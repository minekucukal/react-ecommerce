import React, { Component } from 'react';
import { GlobalStyle } from './globalStyles';
import config from './config';
import Header from './components/Header';
import Logo from './components/Logo';
import Content from './components/Grid/Content';
import ProductBody from './components/ProductBody';
import BasketContainer from './containers/Basket';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header>
          <Link to={`/`}>
          <Logo src={config.SITE_LOGO} />
          </Link>
          <BasketContainer basketCounter='0'/>         
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
