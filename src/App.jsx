import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ProductManagement,
  OrderManagement,
  Crm,
  Settings,
} from "./pages/index";
import Crudhome from "./pages/Crud/CrudHome";
import Create from "./pages/Crud/Create";
import Update from "./pages/Crud/Update";
import Read from "./pages/Crud/Read";
import NewProduct from "./pages/Products/NewProduct";
import EditProduct from "./pages/Products/edit";
// import { productInputs } from "./formSource";
import ProductList from "./pages/Products/ProductList";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productManagement" element={<ProductManagement />} />
          <Route path="/orderManagement" element={<OrderManagement />} />
          <Route path="/crm" element={<Crm />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/crudhome" element={<Crudhome />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/edit" element={<EditProduct />} />
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
