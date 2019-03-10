import styled from 'styled-components';

export const Basket = styled.div`
    float:right;
    margin-top: 10px;
    margin-right: 40px;
`;

export const BasketItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: rgb(20, 179, 81);
    color: #fff;
    border: none;
    border-radius: 50%;
`;