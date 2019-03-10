import styled from 'styled-components';


const ProductImage = styled.img.attrs({
    src: props => props.src
  })`
    min-height: 200px;
    display: block;
    margin: 0 auto;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  `;

export default ProductImage;