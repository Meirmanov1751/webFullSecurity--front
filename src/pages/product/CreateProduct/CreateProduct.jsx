import React, { useState } from 'react';
import axios from 'axios';
import instance from "../../../store/api";
import {useSelector} from "react-redux";

const CreateProductPage = () => {
    var user = useSelector(state => state.auth.user)
    const [executor, setExecutor] = useState(user?.id);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [isAvailable, setIsAvailable] = useState(true);

    const handleSubmit = () => {
        const payload = {
            executor: executor,
            name: name,
            description: description,
            price: price,
            is_available: true
        };
        instance.post('/api/product/product/', payload)
            .then(response => {
                debugger
                console.log(response.data);
                // здесь можно выполнить перенаправление на страницу продукта или другую страницу
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="container mt-5">
            <h1>Создать продукт</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Аты:</label>
                    <input type="text" id="name" name="name" className="form-control" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Сипаттама:</label>
                    <textarea id="description" name="description" className="form-control" onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Бағасы:</label>
                    <input type="number" id="price" name="price" min="0" step="0.01" className="form-control" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" id="isAvailable" name="isAvailable" className="form-check-input" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
                    <label htmlFor="isAvailable" className="form-check-label">Қол жетімді</label>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn mt-4 btn-primary">Өнім жасау</button>
            </form>
        </div>
    );
};

export default CreateProductPage;