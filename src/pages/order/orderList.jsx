import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import CustomerItem from './customerItem/CustomerItem';
import './customer.css'
import {fetchCustomer} from "../../store/action.creators/customer";

const CustomerList = ({ companyId }) => {
    const dispatch = useDispatch();
    const customer = useSelector((state) => state.customers.items);

    useEffect(() => {
        dispatch(fetchCustomer());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCustomer(companyId));
    }, [dispatch, companyId]);

    return (
        <div>
            <h2>Список исполнителей</h2>
            {customer.map(customer => (
                <CustomerItem key={customer.id} customer={customer} />
            ))}
        </div>
    );
};

export default CustomerList;