import React from 'react';

function RemoveButton({ handleRemove } : { handleRemove: () => void }) {
  return (
    <button type="button" className="btn btn-orange" onClick={handleRemove}>
      <i className="fas fa-times"></i>
      Remove
    </button>
  );
}

export default RemoveButton;