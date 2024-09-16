import { Link, Outlet } from "react-router-dom"

export const Layout = ()=> {
    return <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add</Link>
        </nav>
        <div style={{padding:"10px", background:"yellow", height:"400px", width:"600px"}}>
            <Outlet />
        </div>
    </>
}