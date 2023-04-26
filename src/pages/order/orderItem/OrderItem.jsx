import React from 'react';

const OrderItem = ({ order }) => {
    return (
        <div className="executor-card container">
            <div className="executor-card__info">
                <p className="executor-card__position">{order.customer}</p>
                <p className="executor-card__position">{order.total_amount}</p>
                <p className="executor-card__position">{order.products}</p>
                <p className="executor-card__phone">{order.created_at} </p>
            </div>
        </div>
    );
};

export default OrderItem;