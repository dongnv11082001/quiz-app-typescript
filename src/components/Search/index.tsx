import React from "react";

function Search({ handleChange } : { handleChange: (e: React.FormEvent<HTMLInputElement>) => void }) {

  return (
    <div id="search">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;