import React from 'react';
import { Basket, BasketItem } from '../../components/Basket';

class BasketContainer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Basket>
                    <BasketItem>
                        {this.props.basketCounter}
                    </BasketItem>
                </Basket>
            </React.Fragment>
        );
    }
}

export default BasketContainer;
