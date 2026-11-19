import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import useRestaurantsCard from "../utils/useRestaurantsCard";
import { useContext } from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFillteredRestaurantList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const json = await data.json();
    setListOfRestaurant(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
    setFillteredRestaurantList(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
  };

  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex wrap">
        <div className="search-container p-5 my-5">
          <input
            type="text"
            className="m-2 p-2 border border-solid border-black"
            placeholder="Type to search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 cursor-pointer rounded-lg"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFillteredRestaurantList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-5 m-5">
          <button
            className="p-2 m-4 bg-gray-100 cursor-pointer rounded-lg"
            onClick={() => {
              // Filter logic here
              const filteredList = listOfRestaurants.filter(
                (res) => res.avgRating > 4.5,
              );
              console.log(filteredList);
              setFillteredRestaurantList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label>UserName :</label>
          <input
            type="text"
            className="m-2 p-2 border border-solid border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {
              /** if the restaurant is veg or non veg, show a label on it */
              restaurant?.info.veg ? (
                <RestaurantCardVeg resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
