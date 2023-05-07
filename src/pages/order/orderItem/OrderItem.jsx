import React from 'react';

const OrderItem = ({ order }) => {
    var createdAt = new Date(order.created_at)
    var date = `${createdAt.getDate()}:${createdAt.getMonth()}:${createdAt.getFullYear()}`

    return (
        <div className="executor-card container">
            <div className="executor-card__info">
                <p className="executor-card__position">{order.customer}</p>
                <p className="executor-card__position">{order.total_amount}</p>
                <p className="executor-card__position">{order.products}</p>
                <p className="executor-card__position">{order.description}</p>
                <p className="executor-card__position">{order.count}</p>
                <p className="executor-card__phone">{date}</p>
            </div>
        </div>
    );
};

export default OrderItem;