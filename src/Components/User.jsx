import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const User = () => {
  const param = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div className="user">
        <div>ID : {param.id}</div>
        <button
          className="btn"
          onClick={() => {
            navigate("/about");
          }}
        >
          to about
        </button>
      </div>
    </>
  );
};

export default User;
