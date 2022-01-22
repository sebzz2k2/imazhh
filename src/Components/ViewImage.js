import React from "react";

function ViewImage({ value }) {
  return (
    <main className="pb-4 ">
      <div className="">
        <img src={value.src.original} alt={value.alt} className=" " />
      </div>
    </main>
  );
}

export default ViewImage;
