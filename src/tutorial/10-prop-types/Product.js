import React from "react";
import PropTypes from 'prop-types';
import DefaultImage from '../../assets/default-image.jpg';

const Product = ({ image, name, price }) => {
    const url = image && image.url;
    return <React.Fragment>
        <div style={{ backgroundColor: 'whitesmoke', width: '90%', marginLeft: '50px' }}>
            <img style={{ width: '1000px', marginLeft: '180px' }} src={url || DefaultImage} alt={name || 'Undefined Image'} />
            <h3 style={{ textAlign: 'center' }}>{name || 'Undefined Name'}</h3>
            <h5 style={{ textAlign: 'center' }}>${price || 'Not for Sale'}</h5>
        </div>
    </React.Fragment>
}

Product.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

// We can do like this or use Shortcircuiting or && and ||
// Product.defaultProps = {
//     name: 'Undefined',
//     price: 'Price not mentioned',
//     image: {
//         url: 'https://media.istockphoto.com/vectors/error-404-vector-id538038858',
//     }
// }

export default Product;