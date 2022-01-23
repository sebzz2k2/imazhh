import React from "react";

function ViewImage(props) {
  const handleClick = () => {
    props.handleClickView(props.value.id);
  };
  return (
    <main className="pb-4 hover:scale-105">
      <div>
        <img
          src={props.value.src.original}
          alt={props.value.alt}
          onClick={handleClick}
        />
      </div>
    </main>
  );
}

export default ViewImage;
