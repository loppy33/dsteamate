import { Outlet, NavLink } from "react-router-dom";
import './layout.sass'

export function Layout() {
    return (
        <>
            <header className="container">
                <ul>
                    <li>
                        <NavLink to="/"><img src="/logo.png" alt="" /> Поиск тиммейта | MVP</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/faq">Как получить награды?</NavLink>
                    </li> */}
                </ul>
            </header>

            <Outlet />
        </>
    );
};