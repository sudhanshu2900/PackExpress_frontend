import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Error404Page from "./Error404Page";
import MainPage from "./MainPage";
import Products from "./admin/Products";
import AddProduct from "./client/AddProduct";
import AdminLogin from "./authentication/AdminLogin";
import UserLogin from "./authentication/UserLogin";
import AddUser from "./authentication/AddUser";
import UpdateStatus from "./admin/UpdateStatusOfProduct";
import CustomerHome from "./client/CustomerHome";
import PendingRequests from "./admin/PendingRequests";
import UpdateProductInfo from "./client/UpdateProductInfo";
import UserAccessRoutes from "./UserAccessRoutes";
import AdminAccessRoutes from "./AdminAccessRoutes";
import UnauthAccess from "./UnauthAccess";
import AllProducts from "./client/AllProducts";
import Analytics from "./admin/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>

        <Route path="/adminlogin" element={<AdminLogin />}></Route>

        <Route path="/userlogin" element={<UserLogin />}></Route>

        <Route path="/admin" element={<AdminAccessRoutes />}>
          <Route path="products" element={<Products />}></Route>
          <Route path="adduser" element={<AddUser />}></Route>
          <Route path="pendingrequest" element={<PendingRequests />}></Route>
          <Route path="analytics" element={<Analytics />}></Route>
          <Route path="updatestatus/:id" element={<UpdateStatus />}></Route>
        </Route>

        <Route path="/user" element={<UserAccessRoutes />}>
          <Route path="allproducts" element={<AllProducts />}></Route>
          <Route path="addproduct" element={<AddProduct />}></Route>
          <Route
            path="updateproduct/:id"
            element={<UpdateProductInfo />}
          ></Route>
          <Route path="customer" element={<CustomerHome />}></Route>
        </Route>

        <Route path="/*" element={<Error404Page />}></Route>

        <Route path="/unauth" element={<UnauthAccess />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
