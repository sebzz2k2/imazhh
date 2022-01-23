import React from "react";
import { MdCloseFullscreen } from "react-icons/md";

function DisplayImage(props) {
  const handleClick = () => {
    props.handleClickDisplay();
  };

  return (
    <div className="flex justify-center flex-col items-center md:h-[80vh] lg:h-[73vh] ">
      <div className="mx-4 lg:mx-16 md:mx-12 my-5 flex flex-col  rounded text-Very-Dark-Blue dark:text-Very-Dark-Blue bg-Light-Grayish-Blue font-bold md:w-[50vh] md:h-[60vh] relative ">
        <div className="absolute top-4 right-4">
          <button
            className="text-2xl text-Very-Dark-Blue animate-pulse"
            onClick={handleClick}
          >
            <MdCloseFullscreen />
          </button>
        </div>
        <img
          src={props.value.src.org}
          alt={props.value.alt}
          className="rounded-t md:w-[50vh] md:h-[50vh] lg:h-full lg:w-full object-cover "
        />
        <div className="p-4">
          <p>Photographer : {props.value.pc}</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayImage;
