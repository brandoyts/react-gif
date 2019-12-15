import React from "react";
import { NavLink } from "react-router-dom";
import SearchInput from "./SearchInput";

const navStyle = {
    boxShadow: "3px 0 15px rgba(0, 0, 0, 0.5)",
    background: "linear-gradient(90deg, #642b73 0%,#c6426e 100% )"
};

function Nav(props) {
    return (
        <nav
            className="navbar justify-content-between mb-5 py-3 d-flex flex-wrap align-items-center"
            style={navStyle}
        >
            <div className="container">
                <NavLink to="/" className="navbar-brand text-light">
                    REACT-GIF
                </NavLink>
                <ul className="nav justify-content-end text-secondary">
                    <li className="nav-item">
                        <SearchInput />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
