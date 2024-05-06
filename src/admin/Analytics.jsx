import React, { useCallback, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

function Analytics() {
  const boxStyle = {
    border: "2px solid lightblue",
    borderRadius: "10px",
    width: "30%",
    padding: "20px",
    textAlign: "center",
  };

  useEffect(() => {
    document.title = "Analytics";
  }, []);

  const downloadInTransitProductsExcel = useCallback(async () => {
    const res = await axios.get(`http://localhost:9000/api/v1/excel/intransit`);
    window.location.href = res.config.url; //It fetch the URL directly
  });

  const downloadDeliveredProductsExcel = useCallback(async () => {
    const res = await axios.get(`http://localhost:9000/api/v1/excel/delivered`);
    window.location.href = res.config.url;
  });

  const downloadRejectedProductsExcel = useCallback(async () => {
    const res = await axios.get(
      `http://localhost:9000/api/v1/excel/rejectedrequests`
    );
    window.location.href = res.config.url;
  });

  return (
    <>
      <Header />
      <div className="container" style={{ minHeight: "60vh" }}>
        <div className="orderStatus my-5">
          <h3 className="text-center my-3">Analytics</h3>
          <div className="my-5 d-flex justify-content-between">
            <div className="allInTransitProducts" style={boxStyle}>
              <p>All In-Transit Products</p>
              <button
                type="button"
                className="btn btn-info mx-1"
                onClick={downloadInTransitProductsExcel}
              >
                Download
              </button>
            </div>

            <div className="allDeliveredProducts" style={boxStyle}>
              <p>All Delivered Products</p>
              <button
                type="button"
                className="btn btn-info mx-1"
                onClick={downloadDeliveredProductsExcel}
              >
                Download
              </button>
            </div>

            <div className="allRejectedProducts" style={boxStyle}>
              <p>All Rejected Products</p>
              <button
                type="button"
                className="btn btn-info mx-1"
                onClick={downloadRejectedProductsExcel}
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Analytics;
