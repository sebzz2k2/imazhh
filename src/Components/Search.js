import React from "react";

function Search(props) {
  return (
    <form
      className="px-4 lg:px-16 md:px-12 py-5 flex justify-center"
      onSubmit={props.handleSearch}
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 md:p-3 lg:p-4 border-Very-Dark-Grayish-Blue dark:border-0 focus:outline-none bg-Very-Dark-Blue dark:bg-Very-Dark-Grayish-Blue rounded text-Very-Light-Gray "
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </form>
  );
}

export default Search;
