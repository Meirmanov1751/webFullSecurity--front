import React, { useState } from 'react';
import axios from 'axios';
import instance from "../../../store/api";

const CreateProductPage = () => {
    const [executor, setExecutor] = useState(1);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [isAvailable, setIsAvailable] = useState(true);

    const handleSubmit = (e) => {
        const payload = {
            executor,
            name,
            description,
            price,
            is_available: isAvailable
        };
        instance.post('/api/product/product/', payload)
            .then(response => {
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
                    <label htmlFor="name">Название:</label>
                    <input type="text" id="name" name="name" className="form-control" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Описание:</label>
                    <textarea id="description" name="description" className="form-control" onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Цена:</label>
                    <input type="number" id="price" name="price" min="0" step="0.01" className="form-control" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" id="isAvailable" name="isAvailable" className="form-check-input" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
                    <label htmlFor="isAvailable" className="form-check-label">Доступен</label>
                </div>
                <button type="submit" className="btn mt-4 btn-primary">Создать продукт</button>
            </form>
        </div>
    );
};

export default CreateProductPage;