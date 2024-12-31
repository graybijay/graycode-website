import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* Bootstrap Spinner */}
      <div
        className="spinner-border"
        role="status"
        style={{
          width: "5rem",
          height: "5rem",
          borderWidth: "0.5rem",
          borderTopColor: "#28a745",
        }}
      ></div>
    </div>
  );
};

export default Loader;