import React from "react";
import { Link } from "react-router-dom";

function DeleteButton({handleDelete} : { handleDelete: () => void}) {
  return (
    <Link to="/" className="btn btn-orange" onClick={handleDelete}>
      <i className="far fa-trash-alt"></i>
      Delete
    </Link>
  );
}

export default DeleteButton;