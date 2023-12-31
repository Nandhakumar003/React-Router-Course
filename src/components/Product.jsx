import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  const fetchproductData = async () => {
    const productData = await axios.get("https://fakestoreapi.com/products");
    console.log(productData.data);
    setData(productData.data);
  };

  useEffect(() => {
    fetchproductData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data.length > 0 ? (
          data.map((product) => (
            <div className="card" style={{ width: "18rem" }} key={product.id}>
              <img
                src={product.image}
                className="card-img-top rounded"
                style={{ width: "10rem" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <Link to={`${product.id}`} className="btn btn-primary">
                  Buy Now
                </Link>
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
