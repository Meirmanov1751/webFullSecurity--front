import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <div className="executor-card container">
            <div className="executor-card__info">
                <p className="executor-card__phone">{product.name}</p>
                <p className="executor-card__phone">{product.description}</p>
                <p className="executor-card__phone">{product.price}</p>
                <p className="executor-card__phone">{product.executor}</p>
            </div>
        </div>
    );
};

export default ProductItem;