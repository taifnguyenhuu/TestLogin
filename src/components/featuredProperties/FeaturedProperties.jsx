import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "https://vnbooking-server.onrender.com/api/hotels?featured=true&limit=4"
  );
  // const images = [
  //   "https://cf.bstatic.com/xdata/images/hotel/square600/255854447.webp?k=f9c9d47f18b3156fdcc5596749d137f35e3cf4962a8d3d37d69be0066ec9bfc3&o=",
  //   "https://cf.bstatic.com/xdata/images/hotel/square600/154543781.webp?k=847c6d1ffe92003d2d7c9cf7043c6acda1c550e6f0c7c981370a6303f12a10cf&o=",
  //   "https://cf.bstatic.com/xdata/images/hotel/square600/105762573.webp?k=2d60f1bc92863378df6d230f19d726197363e101ca22090bf88810eb89dea86b&o=",
  //   "https://cf.bstatic.com/xdata/images/hotel/square600/178421496.webp?k=94836d8c61053e484c5ef0110211d6eacf89d8e58f8dfa3e58d14833287cc3a1&o="
  // ];
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
