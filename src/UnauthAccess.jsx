import React from "react";
import { useNavigate } from "react-router-dom";

function UnauthAccess() {
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
        🚫 Unauthorised 🚫
        <br /> <br />
        You are unauthorized person
        <br /> <br />
        Trying to access authorised URL
      </div>

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-light"
          onClick={() => {
            sessionStorage.clear();
            navigate("/");
          }}
        >
          Back to Home
        </button>
      </div>
    </>
  );
}

export default UnauthAccess;
