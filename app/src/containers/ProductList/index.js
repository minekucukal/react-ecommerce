import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import App from '../../App';
import ProductTitle from '../../components/ProductTitle';
import ProductBox from '../../components/ProductBox';
import ProductImage from '../../components/ProductImage';
import ProductInfo from '../../components/ProductInfo';
import ProductPrice from '../../components/ProductPrice';
import ProductInfoWrapper from '../../components/ProductInfoWrapper';
import Col from '../../components/Grid/Col';
import Card from '../../components/Card';
import Button from '../../components/Button';
import ProductBody from '../../components/ProductBody';

class ProductList extends React.Component {

  state = {
    products: []
  };

  async componentDidMount() {
    await this.getProducts()
  }

  async getProducts() {
    const response = await axios.get(`${config.API_URL}/api/v1/products`);
    await this.setState({
      products: response.data.data
    })
  }

  renderProducts() {
    if (this.state.products) {
      return this.state.products.map((product, index) => {
        return (
          <div key={index}>
            <ProductBody>
              <Col d3 t6 m6>
                <Card>
                  <ProductBox>
                    <Link to={`/product-detail/${product.item_id}`}>
                      <ProductImage src={product.image_url} />
                    </Link>
                    <ProductInfoWrapper>
                      <ProductTitle>
                        {product.name}
                      </ProductTitle>
                      <ProductInfo>
                      <Col m12 t6 d6>
                        <ProductPrice>
                          {product.price.TRY} ₺
                      </ProductPrice>
                      </Col>
                      <Col m12 t6 d6>
                        <Link to={`/product-detail/${product.item_id}`}>
                          <Button>
                            Sipariş Ver
                        </Button>
                        </Link>
                        </Col>
                      </ProductInfo>
                    </ProductInfoWrapper>
                  </ProductBox>
                </Card>
              </Col>
            </ProductBody>
          </div>
        )
      })
    }
    return <div />
  }

  render() {
    return (
      <div>
        <App>
          {this.renderProducts()}
        </App>
      </div>
    );
  }
}

export default ProductList;
