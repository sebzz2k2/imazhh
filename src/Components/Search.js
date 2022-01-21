import React from "react";

function Search(props) {
  return (
    <form
      className="px-4 lg:px-16 md:px-12 py-5 md:py-16 lg:py-24 flex justify-center"
      onSubmit={props.handleSearch}
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-full md:w-8/12 lg:w-4/6 p-2 md:p-3 lg:p-4 border-Very-Dark-Grayish-Blue dark:border-0 border-2 rounded focus:outline-none text-Very-Dark-Grayish-Blue "
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </form>
  );
}

export default Search;
