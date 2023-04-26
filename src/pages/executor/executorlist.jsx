import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExecutors } from './actions';
import ExecutorItem from './ExecutorItem';

const ExecutorList = ({ companyId }) => {
    const dispatch = useDispatch();
    const executors = useSelector(state => state.executors.items);

    useEffect(() => {
        dispatch(fetchExecutors(companyId));
    }, [dispatch, companyId]);

    return (
        <div>
            <h2>Список исполнителей</h2>
            {executors.map(executor => (
                <ExecutorItem key={executor.id} executor={executor} />
            ))}
        </div>
    );
};

export default ExecutorList;