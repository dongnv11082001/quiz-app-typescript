import React from 'react';
import { Link } from 'react-router-dom';

function EditButton({ id } : { id?: number }) {
  return (
    <Link to={`/edit/${id}`} className="btn btn-blue">
      <i className="far fa-edit"></i>
      Edit
    </Link>
  );
}

export default EditButton;