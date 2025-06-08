import {Link} from "react-router-dom";

import {
    DASHBOARD,
    PRODUCTS,
    ORDERS
} from "../utils/consts";

function Sidebar(){
    return(
        <div class="sidebar">
            <div class="sqrt"></div>
            <div class="logo">
                <Link to={DASHBOARD} class="logo-text">Admin</Link>
            </div>

            <nav class="sidebar-nav">
                <Link to={DASHBOARD} class="sidebar-nav__link">Главная</Link >
                <Link to={ORDERS} class="sidebar-nav__link">Заказы</Link>
                <Link to={PRODUCTS} class="sidebar-nav__link">Товары</Link>
            </nav>

            <div class="bottom-info">
                <div class="line1"></div>
                <p class="sm-text">information on products <span class="square"></span></p>
            </div>
        </div>
    );
}

export default Sidebar;