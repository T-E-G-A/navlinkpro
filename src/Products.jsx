import { Link, Outlet } from "react-router-dom"

function Products() {
  return (
    <div className="products">
      <h1>Welcome to your online shopping extravaganza</h1>
      
      <ul>
            <Link to="cardone" className="link">Card one</Link>
            <Link to="cardtwo" className="link">Card two</Link>
            <Link to="cardthree" className="link">Card three</Link>
      </ul>
    <div className="mainarea">
        <Outlet />

    </div>

    </div>

  );
}

export default Products