import styled from 'styled-components';

const Content = styled.div`
    padding: 0px 15px;
    margin: 0px auto;

    @media (min-width: 768px) {
        width: 750px;
    }

    @media (min-width: 992px) {
        width: 970px;   
    }
    
    @media (min-width: 1200px){
        width: 1170px;
    }
`;

export default Content;