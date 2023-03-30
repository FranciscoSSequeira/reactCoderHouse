import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import logo from "./images/logo.png";

const NavBar = () => {
    return (

        <div className="container">
            <div className="row"> 
                <div className="col">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src={logo} alt="logo" /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" 
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" activeclassname={"active"} to={"/category/juegos ps4"}>Juegos ps4</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname={"active"} to={"/category/productos ps4"}>Productos PS4</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname={"active"} to={"/category/juegos xbox"}>Juegos xbox</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>

                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;