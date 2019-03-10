import styled from 'styled-components';

const ProductTitle = styled.div`
    text-align: ${props => props.left ? "left" : "center"};
    font-size: ${props => props.large ? "28px" : "22px"};
    line-height: 34px;
    height: 68px;
    white-space: normal;
    overflow: hidden;    
    color:#505061;
`;

export default ProductTitle;