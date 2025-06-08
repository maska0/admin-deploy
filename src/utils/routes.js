import CreateProduct from "../pages/Products/CreateProduct";
import DetailProduct from "../pages/Products/DetailProduct";
import EditProduct from "../pages/Products/EditProduct";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products/Products";
import DeleteProduct from "../pages/Products/DeleteProduct";
import Orders from "../pages/Orders/Orders";
import DeleteOrder from "../pages/Orders/DeleteOrder";
import DetailOrder from "../pages/Orders/DetailOrder";


import {
    DASHBOARD,
    PRODUCTS,
    PRODUCT_DETAIL,
    PRODUCT_UPDATE,
    PRODUCT_DELETE,
    PRODUCT_CREATE,
    ORDERS ,
    ORDER_DELETE,
    ORDER_DETAIL
} from "./consts";





export const routes = [
    {
        path: DASHBOARD,
        element: Dashboard
    },
    {
        path: PRODUCTS,
        element: Products
    },
    {
        path: PRODUCT_CREATE,
        element: CreateProduct
    },
    {
        path: PRODUCT_DETAIL,
        element: DetailProduct
    },
    {
        path: PRODUCT_DELETE,
        element: DeleteProduct
    },
    {
        path: PRODUCT_UPDATE,
        element: EditProduct
    },
    {
        path: ORDERS,
        element: Orders
    },
    {
        path: "/orders/delete/:id",
        element: DeleteOrder
    },
    {
        path: "/orders/:id",
        element: DetailOrder
    }

];