import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import config from '../../config'
import ProductTitle from '../../components/ProductTitle';
import ProductBox from '../../components/ProductBox';
import ProductImage from '../../components/ProductImage';
import ProductInfo from '../../components/ProductInfo';
import ProductPrice from '../../components/ProductPrice';
import ProductInfoWrapper from '../../components/ProductInfoWrapper';
import Col from '../../components/Grid/Col';
import Card from '../../components/Card';
import Button from '../../components/Button';
import NotificationSystem from 'react-notification-system';
import { GlobalStyle } from '../../globalStyles';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Content from '../../components/Grid/Content';
import ProductBody from '../../components/ProductBody';
import BasketContainer from '../../containers/Basket';


class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.addNotification = this.addNotification.bind(this);
    this.notificationSystem = React.createRef();
  }

  state = {
    product: {},
    counter: 0
  };

  async componentDidMount() {
    await this.getProduct()
  }

  addNotification = event => {
    event.preventDefault();
    const notification = this.notificationSystem.current;
    notification.addNotification({
      message: 'Sepete Eklendi',
      level: 'success',
      position: 'br'
    });
    this.setState({
      counter: this.state.counter + 1
    })
  };

  async getProduct() {
    console.log(`${config.API_URL}/api/v1/products/${this.props.match.params.item_id}`);
    const response = await axios.get(`${config.API_URL}/api/v1/products/${this.props.match.params.item_id}`);
    await this.setState({
      product: response.data
    })
  }

  renderProduct() {
    const { price, image_url, name } = this.state.product;;
    if (this.state.product) {
      return (
        <div>
          <Col d12>
            <Card>
              <ProductTitle left large>
                {name}
              </ProductTitle>
              <ProductBox>
                <ProductImage src={image_url} />
                <ProductInfoWrapper>
                  <ProductInfo>
                    <ProductPrice>
                      {price ? price.TRY : ""}₺
                   </ProductPrice>
                    <Button onClick={this.addNotification.bind(this)}>
                      Sepete Ekle
                    </Button>
                    <NotificationSystem ref={this.notificationSystem} />
                  </ProductInfo>
                </ProductInfoWrapper>
              </ProductBox>
            </Card>
          </Col>
        </div>
      )
    } return <div />
  }

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header>
          <Link to={`/`}>
            <Logo src={config.SITE_LOGO} />
          </Link>
          <BasketContainer basketCounter={this.state.counter} />
        </Header>
        <Content>
          <ProductBody>
            {this.renderProduct()}
          </ProductBody>
        </Content>
      </div>
    );
  }
}

export default ProductDetail;
