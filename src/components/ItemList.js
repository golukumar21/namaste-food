import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
          key={item?.card?.info.id}
        >
          <div className="ml-2 w-9/12">
            <div className="py-2">
              <span>{item?.card?.info.name}</span>
              <span>- ₹ {item?.card?.info.price / 100}</span>
            </div>
            <p className="text-xs">{item?.card?.info.description}</p>
          </div>

          <div className="w-2/12 p-4">
            <div className="absolute">
              <button className="p-2 mx-18 mt-14 bg-black text-white cursor-pointer shadow-lg rounded-lg">
                {" "}
                Add +
              </button>
            </div>
            <img
              className="item-logo rounded-lg w-full"
              alt="item-logo"
              src={CDN_URL + item?.card?.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
