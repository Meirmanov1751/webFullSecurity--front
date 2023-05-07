import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import OrderItem from './orderItem/OrderItem';
import './order.css'
import {fetchOrder} from "../../store/action.creators/order";

const OrderList = ({ companyId }) => {
    const dispatch = useDispatch();
    const order = useSelector((state) => state.orders.items);
    console.log(order)

    useEffect(() => {
        dispatch(fetchOrder());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchOrder(companyId));
    }, [dispatch, companyId]);

    return (
        <div>
            <h2>Тапсырыстар тізімі</h2>
            {order.map(order => (
                <OrderItem key={order.id} order={order} />
            ))}
        </div>
    );
};

export default OrderList;