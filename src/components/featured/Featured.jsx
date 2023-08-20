import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "https://vnbooking-server.onrender.com/api/hotels/countByCity?cities=berlin,madrid,london"
  );
  console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://q-xx.bstatic.com/xdata/images/xphoto/max1200/144484610.jpg?k=bb512a28a97bcc1f657d0f08d4b300b845c790354cb83c2320ab9872145a4a78&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/153577940.jpg?k=02cdb5103cc1cb12ea32ee223dbc9d806456887d5119a3862fc8d9addaf5bd28&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/153725980.jpg?k=1f86fc40cf6f4ec262c192e3943b5e532d164a9ab7cbf11692f8b9bd2a9177e7&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
