import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductItem from './productItem/ProductItem';
import './product.css'
import {fetchProduct} from "../../store/action.creators/product";

const ProductList = ({ companyId }) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.items);

    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchProduct(companyId));
    }, [dispatch, companyId]);

    return (
        <div>
            <h2>Список исполнителей</h2>
            {product.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;