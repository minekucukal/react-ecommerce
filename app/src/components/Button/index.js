import styled from 'styled-components';

const Button = styled.button`
background: #14b351;
    color: white;
    border: 2px solid #009688;
    height: 30px;
    border-radius: 15px;
    font-weight: 600;
    font-size: 12px;
    float:right;
    &:focus{
        outline: none;
        border: none;
    }
`;

export default Button;