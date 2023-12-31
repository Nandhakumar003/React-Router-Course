import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  const fetchproductData = async () => {
    const productData = await axios.get("https://fakestoreapi.com/products");
    localStorage.setItem(
      "local_product_data",
      JSON.stringify(productData.data)
    );
    setData(productData.data);
  };

  useEffect(() => {
    const local_data = JSON.parse(localStorage.getItem("local_product_data"));
    if (local_data != null) {
      console.log("Data from Local");
      setData(local_data);
    } else {
      console.log("Data from API");
      fetchproductData();
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data.length > 0 ? (
          data.map((product) => (
            <div className="col-3" key={product.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={product.image}
                  className="card-img-top rounded"
                  style={{ width: "10rem" }}
                  alt="Image"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.category}</p>
                  <h4 className="card-title">{`${product.price}$`}</h4>
                  <div className="d-flex justify-content-around">
                    <Link to="." className="btn btn-danger">
                      Buy Now
                    </Link>
                    <Link
                      to={`${product.id}`}
                      className="btn btn-outline-primary"
                    >
                      Get More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </div>
  );
};

export default Product;
