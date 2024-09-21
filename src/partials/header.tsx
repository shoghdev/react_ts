import { Link, Outlet } from "react-router-dom"

export const Header = () => {
    return <>
        <nav>
            <li id="add_btn">
                <Link to="/">Home</Link>
            </li>
            <li id="add_btn">
                <Link to="users/add">Add User</Link>
            </li>
        </nav>
        <div className="main">
            <Outlet />
        </div>
    </>
}