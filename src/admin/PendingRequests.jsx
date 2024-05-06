import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

function PendingRequests() {
  useEffect(() => {
    document.title = "Pending Request";
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/v1/product/allrequestedproducts`)
      .then((res) => {
        setProducts(res?.data);
      });
  }, []);

  const approveRequest = (id, action) => {
    axios
      .put(`http://localhost:9000/api/v1/product/update/${id}/${action}`)
      .then((res) => {
        setProducts(res?.data);
      });
    window.location.reload();
  };

  const rejectRequest = (id, action) => {
    axios
      .put(`http://localhost:9000/api/v1/product/update/${id}/${action}`)
      .then((res) => {
        setProducts(res?.data);
      });
    window.location.reload();
  };

  return (
    <>
      <Header />

      <div className="container" style={{ height: "100vh" }}>
        <div className="listDiv">
          <h2 className="text-center my-5">Product Pending Request</h2>

          <div className="row" style={{ margin: "0 5px" }}>
            <table className="table table-striped">
              <thead className="thead-light text-center">
                {products.length && (
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Actions</th>
                  </tr>
                )}
              </thead>

              <tbody className="text-center">
                {products.length ? (
                  products.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td>{product.productId}</td>
                        <td>{product.productName}</td>
                        <td>{product.productDescription}</td>
                        <td>{product.productOrigin}</td>
                        <td>{product.productDestination}</td>
                        <td>
                          <div class="btn-group">
                            <button
                              type="button"
                              class="btn btn-info dropdown-toggle"
                              data-bs-toggle="dropdown"
                            >
                              Request
                            </button>
                            <ul class="dropdown-menu">
                              <li>
                                <button
                                  style={{
                                    border: "none",
                                    background: "#fff",
                                    width: "100%",
                                  }}
                                  onClick={() =>
                                    approveRequest(product.productId, "Approve")
                                  }
                                >
                                  Approve
                                </button>
                              </li>
                              <li>
                                <button
                                  style={{
                                    border: "none",
                                    background: "#fff",
                                    width: "100%",
                                  }}
                                  onClick={() =>
                                    rejectRequest(product.productId, "Reject")
                                  }
                                >
                                  Reject
                                </button>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <h4 className="mt-3" style={{ color: "red" }}>
                    No more pending request
                  </h4>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PendingRequests;
