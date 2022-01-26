import React from "react";

function SaveButton({ handleSave }: { handleSave: () => void }) {
  return (
    <div className="actions">
      <button className="btn btn-blue btn-large" onClick={handleSave}>
        <i className="fas fa-save"></i>
        Save
      </button>
    </div>
  );
}

export default SaveButton;