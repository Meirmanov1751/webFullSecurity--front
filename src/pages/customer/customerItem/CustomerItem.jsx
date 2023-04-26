import React from 'react';

const CustomerItem = ({ customer }) => {
    return (
        <div className="executor-card container">
            <div className="executor-card__info">
                <h3 className="executor-card__name">{customer.first_name} {customer.last_name}</h3>
                <p className="executor-card__position">{customer.position}</p>
                <p className="executor-card__phone">{customer.phone_number}</p>
            </div>
        </div>
    );
};

export default CustomerItem;