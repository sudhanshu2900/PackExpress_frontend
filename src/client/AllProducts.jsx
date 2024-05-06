import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AllProducts() {
  useEffect(() => {
    document.title = "Product Details";
  }, []);

  var custId = sessionStorage.getItem("Customer ID");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/v1/product/allcustproducts/${custId}`)
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const navigate = useNavigate();

  const updateProductInfo = (id) => {
    navigate(`/user/updateproduct/${id}`);
  };

  const downloadExcel = useCallback(async () => {
    const res = await axios.get(
      `http://localhost:9000/api/v1/excel/custproducts/${custId}`
    );
    window.location.href = res.config.url; //It fetch the URL directly
  });

  return (
    <>
      <Header />

      <div className="container my-5" style={{ minHeight: "70vh" }}>
        <div className="mb-5 d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-outline-info"
            data-bs-toggle="tooltip"
            style={{ visibility: "hidden" }}
          >
            Download
          </button>
          <h2 className="text-center">Product Details</h2>
          <button
            type="button"
            class="btn btn-outline-info"
            data-bs-toggle="tooltip"
            title="Product list Excel file"
            onClick={downloadExcel}
          >
            Download
          </button>
        </div>

        <div className="row" style={{ margin: "0 5px" }}>
          <table className="table table-striped">
            <thead className="thead-light text-center">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Status</th>
                <th>Delay</th>
                <th>Est. Delivery Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {products.length ? (
                products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>{product.productName}</td>
                      <td>{product.productDescription}</td>
                      <td>{product.productOrigin}</td>
                      <td>{product.productDestination}</td>
                      <td>{product.productStatus}</td>
                      <td>{product.productDelay}</td>
                      <td>{product.productEstimatedDeliveryDate}</td>
                      <td>
                        {product.reqStatus === "Approve" ? (
                          <button
                            type="button"
                            className="btn btn-success mx-1"
                            onClick={() => updateProductInfo(product.productId)}
                          >
                            Update
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-success mx-1"
                            disabled
                          >
                            Update
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <h4 className="mt-3" style={{ color: "red" }}>
                  No Data found
                </h4>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AllProducts;
