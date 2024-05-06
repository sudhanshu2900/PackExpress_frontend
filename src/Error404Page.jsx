import React from "react";
import { useNavigate } from "react-router-dom";

function Error404Page() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="text-center"
        style={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "50px",
          fontWeight: "600",
        }}
      >
        🚧 Error 404 🚧
        <br /> 🛠️ ⚙️ 🛠️
        <br /> Page Not Found
      </div>

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-light"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </>
  );
}

export default Error404Page;
