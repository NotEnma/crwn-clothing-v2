import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import './products-card.styles.scss';

import Button from '../button/button.component';

const ProductsCard = ({ product }) => {
    const { name, price, imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart= () => addItemToCart(product);

    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>S
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to card</Button>
        </div>
    )
}

export default ProductsCard;