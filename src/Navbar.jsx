import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
        <NavLink to="/" className={({isActive})=>{return isActive?'link-red':'link-gray'}} id="link">Home</NavLink>
        <NavLink to="/products" className={({isActive})=>{return isActive?'link-red':'link-gray'}} id="link">Products</NavLink>
        <NavLink to="/about" className={({isActive})=>{return isActive?'link-red':'link-gray'}} id="link">About us</NavLink>


    </div>
  );
}

export default Navbar