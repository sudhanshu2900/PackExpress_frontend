import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navStyle = {
    background: "#fff",
    padding: "20px",
    boxShadow: "3px 3px 3px lightgray",
  };

  const logoutBtn = {
    border: "none",
    background: "#fff",
    color: "red",
    fontWeight: "600",
  };

  const add = {
    border: "none",
    background: "#fff",
    color: "blue",
    fontWeight: "600",
  };

  const findRole = sessionStorage.getItem("Role");

  const navigate = useNavigate();

  const prodDetails = () => {
    navigate("/admin/products");
  };

  const addCustomer = () => {
    navigate("/admin/adduser");
  };

  const pendingRequest = () => {
    navigate("/admin/pendingrequest");
  };

  const analytics = () => {
    navigate("/admin/analytics");
  };

  const returnToHome = () => {
    navigate("/user/customer");
  };

  const logoutSystem = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <>
      <div className="header" style={navStyle}>
        <div className="container d-flex justify-content-between">
          <div
            className="logo"
            style={{ fontWeight: "900", fontSize: "25px", color: "#0dcaf0" }}
          >
            {findRole === "ADMIN" ? (
              <Link to="/admin/products">Pack Express</Link>
            ) : (
              <Link to="/user/customer">Pack Express</Link>
            )}
          </div>

          {findRole === "ADMIN" && (
            <div
              className="headerBtn d-flex flex-row-reverse align-items-center"
              id="hideList"
              style={{ width: "70%" }}
            >
              <div className="analyticsBtn">
                <button
                  style={add}
                  onClick={() => {
                    analytics();
                  }}
                >
                  Analytics
                </button>
              </div>
              <div className="pendingRequestBtn mx-5">
                <button
                  style={add}
                  onClick={() => {
                    pendingRequest();
                  }}
                >
                  Pending Request
                </button>
              </div>
              <div className="addCustomerBtn">
                <button
                  style={add}
                  onClick={() => {
                    addCustomer();
                  }}
                >
                  Add Customer
                </button>
              </div>
              <div className="prodDetailsBtn mx-5">
                <button
                  style={add}
                  onClick={() => {
                    prodDetails();
                  }}
                >
                  Product Details
                </button>
              </div>
            </div>
          )}

          {findRole === "USER" && (
            <div
              className="headerBtn d-flex flex-row-reverse align-items-center"
              id="hideList"
              style={{ width: "70%" }}
            >
              <div className="pendingRequestBtn">
                <button
                  style={add}
                  onClick={() => {
                    returnToHome();
                  }}
                >
                  Home
                </button>
              </div>
            </div>
          )}

          <div className="logout">
            <button
              style={logoutBtn}
              onClick={() => {
                logoutSystem();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
