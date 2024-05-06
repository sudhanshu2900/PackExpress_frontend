import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomerMenuCard from "../components/CustomerMenuCard";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function CustomerHome() {
  useEffect(() => {
    document.title = "User Dashboard";
  }, []);

  var custName = sessionStorage.getItem("Customer Name");

  return (
    <>
      <Header />
      <ToastContainer />
      <div style={{ height: "60vh" }}>
        <div className="container">
          <h4 className="my-5">Hi, {custName} 👋</h4>

          <div
            className="menuCardDiv mt-5"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Link to="/user/allproducts">
              <CustomerMenuCard icon="🛒" msg="Product Details" />
            </Link>
            <Link to="/user/addproduct">
              <CustomerMenuCard icon="📦" msg="Add Product" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CustomerHome;
