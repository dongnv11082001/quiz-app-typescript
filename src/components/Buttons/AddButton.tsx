import React from "react";

function AddButton({ handleAdd } : { handleAdd: () => void }) {
  return (
    <div className="text-right">
      <button type="button" className="btn btn-blue" onClick={handleAdd}>
        <i className="fas fa-plus"></i>
        Add
      </button>
    </div>
  );
}

export default AddButton;