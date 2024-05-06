import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Products() {
  useEffect(() => {
    document.title = "Product Details";
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/v1/product/allproducts`)
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const navigate = useNavigate();

  const updateStatus = (id) => {
    navigate(`/admin/updatestatus/${id}`);
  };

  const downloadProductExcel = useCallback(async () => {
    const res = await axios.get(`http://localhost:9000/api/v1/excel/products`);
    window.location.href = res.config.url; //It fetch the URL directly
  });

  // Pagination

  const [currPage, setCurrPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const getPrevPage = () => {
    if (currPage !== 1) {
      setCurrPage(currPage - 1);
    }
  };

  const changeCurrPage = (id) => {
    setCurrPage(id);
  };

  const getNextPage = () => {
    if (currPage !== nPage) {
      setCurrPage(currPage + 1);
    }
  };

  return (
    <>
      <Header />

      <div className="container my-5" style={{ minHeight: "60vh" }}>
        <div className="listDiv">
          <div className="mb-3">
            <button type="button" style={{ visibility: "hidden" }}>
              Download
            </button>
            <h2 className="text-center">Product Details</h2>
            <button
              type="button"
              class="btn btn-outline-info"
              data-bs-toggle="tooltip"
              title="Product list Excel file"
              onClick={downloadProductExcel}
            >
              Download
            </button>
          </div>

          <div className="row" style={{ margin: "0 5px" }}>
            <table className="table table-striped">
              <thead className="thead-light text-center">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Status</th>
                  <th>Est. Delivery Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {records.map((product) => (
                  <tr key={product.id}>
                    <td>{product.productId}</td>
                    <td>{product.productName}</td>
                    <td>{product.productDescription}</td>
                    <td>{product.productOrigin}</td>
                    <td>{product.productDestination}</td>
                    <td>{product.productStatus}</td>
                    <td>{product.productEstimatedDeliveryDate}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success mx-1"
                        onClick={() => updateStatus(product.productId)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="pagination mt-3"
          style={{ width: "150px", margin: "auto" }}
        >
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={getPrevPage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currPage === n ? "active" : ""}`}
                key={i}
              >
                <a href="#" className="page-link" onClick={changeCurrPage}>
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={getNextPage}>
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;
