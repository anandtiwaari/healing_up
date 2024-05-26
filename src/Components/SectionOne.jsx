import React from "react";

const SectionOne = () => {
  return (
    <div className="border" style={{ borderBottom: "1px solid grey" }}>
      <div className="wrapper flex justify-between items-center w-[90%] m-auto mt-[45px] flex-wrap">
        <div className="leftSide_sectOne">
          <h4>Your story matters...</h4>
        </div>
        <div className="rightSide_sectOne">
          <div className="image-wrappe rounded-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcyISpu8CnDjO09FlqzatW3dye3dS5iJUdqLAzb-yXrQ&s"
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
