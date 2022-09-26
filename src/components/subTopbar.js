
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const SubTopBar = () => {
return (
<div className="sub-topbar w-100">
    <Navbar className="mx-5" expand="md">
        <div className="d-md-flex row justify-content-between  text-center w-100">
            <Link className="mx-2 col-md-auto sub-topbar-link" to="/">Home</Link>
            <Link className="mx-2 col-md-auto sub-topbar-link" to="/pages/academia">Academia</Link>
            <Link className="mx-2 col-md-auto sub-topbar-link" to="/">recursos</Link>
            <Link className="mx-2 col-md-auto sub-topbar-link" to="/">Contacto</Link>
        </div>
</Navbar>
</div>
)
}

export default SubTopBar;