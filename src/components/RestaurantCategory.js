import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/** Header */}
      <div
        className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-6 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {/** Accordion Body */}
        {showItems && <ItemList items={data?.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
