import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products"
import Customers from "./pages/Customers";
import Transaction from "./pages/Transaction";
import { Suspense } from "react";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <BrowserRouter >
    <Navbar />
    <Suspense fallback={"Loading...."}>
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard /> } />
      <Route path="/admin/products" element={ <Products / > } />
      <Route path="/admin/transaction" element={<Transaction />} />
      <Route path="/admin/customers" element={<Customers /> } />
    </Routes>
    </Suspense>
     
    </BrowserRouter>
  )
}

export default App