import React from "react";

function CustomerMenuCard(props) {
  const cardStyle = {
    width: "400px",
    height: "200px",
    border: "2px solid lightblue",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  return (
    <>
      <div style={cardStyle}>
        <div style={{ fontSize: "50px" }}>{props.icon}</div>
        <div>
          <h5>{props.msg}</h5>
        </div>
      </div>
    </>
  );
}

export default CustomerMenuCard;
