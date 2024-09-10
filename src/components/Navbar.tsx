import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <Link to ="/admin/dashboard">Dashboard</Link>
    <Link to="admin/products">Products</Link>
    <Link to="/admin/transaction">Transaction</Link>
    <Link to="/admin/customers">Customers</Link>
    </>
    
  )
}

export default Navbar