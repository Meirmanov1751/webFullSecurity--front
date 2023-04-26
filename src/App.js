import './App.css';
import LoginForm from "./pages/auth/login/LoginForm";
import {Route, Routes} from "react-router";
import HeaderContainer from "./components/layout/header/header.container";
import SingInForm from "./pages/auth/singIn/SingInForm";
import ExecutorList from "./pages/executor/executorlist";
import CustomerList from "./pages/customer/customerList";
import OrderList from "./pages/order/orderList";
import ProductList from "./pages/product/productList";
import CreateOrderPage from "./pages/order/CreateOrder/CreateOrder";
import CreateProductPage from "./pages/product/CreateProduct/CreateProduct";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import PostsList from "./pages/posts/postsList";
import HomePage from "./pages/home/home";

function App() {
    const {Store1} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            Store1.checkAuth()
        }
    }, [])

    return (
        <div className="App">
            <HeaderContainer/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}></Route>
                <Route path={'/login'} element={<LoginForm/>}></Route>
                <Route path={'/singin'} element={<SingInForm/>}></Route>
                <Route path={'/executors'} element={<ExecutorList/>}></Route>
                <Route path={'/customers'} element={<CustomerList/>}></Route>
                <Route path={'/orders'} element={<OrderList/>}></Route>
                <Route path={'/products'} element={<ProductList/>}></Route>
                <Route path={'/orders_create'} element={<CreateOrderPage/>}></Route>
                <Route path={'/products_create'} element={<CreateProductPage/>}></Route>
                <Route path={'/posts'} element={<PostsList/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
